import React, { type ReactNode, useMemo, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { useDocGroups, type DocGroup } from '@site/src/utils/useDocGroups';
import styles from './export.module.css';

const STRINGS = {
  vi: {
    pageTitle: 'Tải tài liệu PDF',
    heading: 'Tải tài liệu dưới dạng PDF',
    intro:
      'Chọn các mục bạn muốn gộp lại thành 1 file PDF. Sau khi bấm "Tạo PDF", hộp thoại In của trình duyệt sẽ hiện ra — chọn "Save as PDF" (hoặc "Lưu dưới dạng PDF") để tải về máy.',
    selectAll: 'Chọn tất cả',
    clearAll: 'Bỏ chọn tất cả',
    selectGroup: 'Chọn cả nhóm',
    selected: (n: number, total: number) => `Đã chọn ${n}/${total} trang`,
    generate: 'Tạo PDF',
    generating: 'Đang chuẩn bị nội dung...',
    empty: 'Vui lòng chọn ít nhất 1 trang tài liệu.',
    fetchError: 'Không tải được nội dung một số trang, vui lòng thử lại.',
    coverTitle: 'S-Safe Documentation',
    coverSubtitle: 'Tài liệu hướng dẫn sử dụng',
    coverListLabel: 'Nội dung bao gồm:',
    coverDate: 'Ngày xuất',
  },
  en: {
    pageTitle: 'Download PDF',
    heading: 'Download documentation as PDF',
    intro:
      'Select the pages you want to combine into a single PDF file. After clicking "Generate PDF", your browser\'s print dialog will open — choose "Save as PDF" to download it.',
    selectAll: 'Select all',
    clearAll: 'Clear all',
    selectGroup: 'Select group',
    selected: (n: number, total: number) => `${n}/${total} pages selected`,
    generate: 'Generate PDF',
    generating: 'Preparing content...',
    empty: 'Please select at least one page.',
    fetchError: 'Failed to load some pages, please try again.',
    coverTitle: 'S-Safe Documentation',
    coverSubtitle: 'User guide',
    coverListLabel: 'Included pages:',
    coverDate: 'Generated on',
  },
} as const;

async function extractDocHtml(href: string): Promise<string> {
  const res = await fetch(href, { credentials: 'same-origin' });
  if (!res.ok) throw new Error(`Failed to fetch ${href}`);
  const html = await res.text();
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  const content = parsed.querySelector('.theme-doc-markdown');
  return content ? content.innerHTML : '';
}

function waitForImages(root: HTMLElement, timeoutMs = 4000): Promise<void> {
  const images = Array.from(root.querySelectorAll('img'));
  if (images.length === 0) return Promise.resolve();
  return Promise.race([
    Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) return resolve();
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => resolve(), { once: true });
          }),
      ),
    ).then(() => undefined),
    new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

export default function ExportPage(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const { withBaseUrl } = useBaseUrlUtils();
  const t = STRINGS[i18n.currentLocale === 'en' ? 'en' : 'vi'];
  const groups = useDocGroups();
  const totalCount = useMemo(
    () => groups.reduce((sum, g) => sum + g.items.length, 0),
    [groups],
  );

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [printSections, setPrintSections] = useState<{ label: string; html: string }[] | null>(
    null,
  );

  const toggle = useCallback((href: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  }, []);

  const toggleGroup = useCallback((group: DocGroup) => {
    setSelected((prev) => {
      const next = new Set(prev);
      const allSelected = group.items.every((i) => next.has(i.href));
      for (const item of group.items) {
        if (allSelected) next.delete(item.href);
        else next.add(item.href);
      }
      return next;
    });
  }, []);

  const metaGroups = groups.filter((g) => g.kind === 'meta');
  const productGroups = groups.filter((g) => g.kind === 'product');

  const toggleAll = useCallback(() => {
    setSelected((prev) =>
      prev.size === totalCount
        ? new Set()
        : new Set(groups.flatMap((g) => g.items.map((i) => i.href))),
    );
  }, [groups, totalCount]);

  const handleGenerate = useCallback(async () => {
    const ordered = groups
      .flatMap((g) => g.items)
      .filter((item) => selected.has(item.href));
    if (ordered.length === 0) return;

    setStatus('loading');
    try {
      const sections = await Promise.all(
        ordered.map(async (item) => ({
          label: item.label,
          html: await extractDocHtml(withBaseUrl(item.href)),
        })),
      );
      setPrintSections(sections);
      setStatus('idle');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }, [groups, selected, withBaseUrl]);

  return (
    <Layout title={t.pageTitle}>
      <main className="container margin-vert--lg">
        <h1>{t.heading}</h1>
        <p>{t.intro}</p>

        <div className={styles.toolbar}>
          <button type="button" className="button button--secondary" onClick={toggleAll}>
            {selected.size === totalCount ? t.clearAll : t.selectAll}
          </button>
          <span className={styles.counter}>{t.selected(selected.size, totalCount)}</span>
        </div>

        {status === 'error' && <div className="alert alert--danger">{t.fetchError}</div>}

        <div className={styles.groups}>
          <div className={styles.card}>
            {metaGroups.map((group) => (
              <GroupSection
                key={group.title}
                group={group}
                selected={selected}
                toggle={toggle}
                toggleGroup={toggleGroup}
                t={t}
              />
            ))}
          </div>
          {productGroups.map((group) => (
            <div key={group.title} className={styles.card}>
              <GroupSection
                group={group}
                selected={selected}
                toggle={toggle}
                toggleGroup={toggleGroup}
                t={t}
              />
            </div>
          ))}
        </div>

        <div className={styles.generateBar}>
          <button
            type="button"
            className="button button--primary button--lg"
            disabled={selected.size === 0 || status === 'loading'}
            onClick={handleGenerate}
          >
            {status === 'loading' ? t.generating : t.generate}
          </button>
          {selected.size === 0 && <p className={styles.hint}>{t.empty}</p>}
        </div>
      </main>

      {printSections && (
        <PrintView
          sections={printSections}
          strings={t}
          onDone={() => setPrintSections(null)}
        />
      )}
    </Layout>
  );
}

function GroupSection({
  group,
  selected,
  toggle,
  toggleGroup,
  t,
}: {
  group: DocGroup;
  selected: Set<string>;
  toggle: (href: string) => void;
  toggleGroup: (group: DocGroup) => void;
  t: (typeof STRINGS)[keyof typeof STRINGS];
}) {
  const groupAllSelected =
    group.items.length > 0 && group.items.every((i) => selected.has(i.href));
  return (
    <>
      <div className={styles.groupHeader}>
        <strong>{group.title}</strong>
        <button
          type="button"
          className="button button--sm button--outline button--primary"
          onClick={() => toggleGroup(group)}
        >
          {groupAllSelected ? t.clearAll : t.selectGroup}
        </button>
      </div>
      <div className={styles.groupBody}>
        <ul className={styles.itemList}>
          {group.items.map((item) => (
            <li key={item.href}>
              <label className={styles.itemLabel}>
                <input
                  type="checkbox"
                  checked={selected.has(item.href)}
                  onChange={() => toggle(item.href)}
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function PrintView({
  sections,
  strings,
  onDone,
}: {
  sections: { label: string; html: string }[];
  strings: (typeof STRINGS)[keyof typeof STRINGS];
  onDone: () => void;
}) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (rootRef.current) {
        await waitForImages(rootRef.current);
      }
      if (cancelled) return;
      window.print();
    };
    run();

    const handleAfterPrint = () => onDone();
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      cancelled = true;
      window.removeEventListener('afterprint', handleAfterPrint);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const now = new Date().toLocaleDateString();

  return createPortal(
    <div id="pdf-export-print-root" ref={rootRef}>
      <div className="pdf-cover">
        <h1>{strings.coverTitle}</h1>
        <p>{strings.coverSubtitle}</p>
        <p>
          <strong>{strings.coverListLabel}</strong>
        </p>
        <ul>
          {sections.map((s) => (
            <li key={s.label}>{s.label}</li>
          ))}
        </ul>
        <p>
          {strings.coverDate}: {now}
        </p>
      </div>
      {sections.map((s, idx) => (
        <section
          className="pdf-doc-section"
          key={idx}
          dangerouslySetInnerHTML={{ __html: s.html }}
        />
      ))}
    </div>,
    document.body,
  );
}
