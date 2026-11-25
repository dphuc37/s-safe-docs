'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type ExportItem = { label: string; href: string };
export type ExportGroup = { title: string; items: ExportItem[] };
export type ExportStrings = {
  pageTitle: string;
  heading: string;
  intro: string;
  selectAll: string;
  clearAll: string;
  selectGroup: string;
  selected: string;
  generate: string;
  generating: string;
  empty: string;
  fetchError: string;
  coverTitle: string;
  coverSubtitle: string;
  coverListLabel: string;
  coverDate: string;
};

async function extractDocHtml(href: string): Promise<string> {
  const res = await fetch(href, { credentials: 'same-origin' });
  if (!res.ok) throw new Error(`Failed to fetch ${href}`);
  const parsed = new DOMParser().parseFromString(await res.text(), 'text/html');
  const html = parsed.querySelector('[data-doc-content]')?.innerHTML ?? '';
  return html.replace(/ loading="lazy"/g, ' loading="eager"');
}

function waitForImages(root: HTMLElement, timeoutMs = 5000): Promise<void> {
  const images = Array.from(root.querySelectorAll('img'));
  if (images.length === 0) return Promise.resolve();
  const loaded = Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) return resolve();
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  ).then(() => undefined);
  return Promise.race([loaded, new Promise<void>((resolve) => setTimeout(resolve, timeoutMs))]);
}

const buttonBase =
  'inline-flex items-center justify-center rounded-lg border text-sm font-medium transition-colors';

function GroupSection({
  group,
  selected,
  onToggle,
  onToggleGroup,
  t,
}: {
  group: ExportGroup;
  selected: Set<string>;
  onToggle: (href: string) => void;
  onToggleGroup: (group: ExportGroup) => void;
  t: ExportStrings;
}) {
  const allSelected = group.items.length > 0 && group.items.every((i) => selected.has(i.href));
  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-t border-fd-border bg-fd-muted px-4 py-2.5 first:border-t-0">
        <strong className="text-sm">{group.title}</strong>
        <button
          type="button"
          onClick={() => onToggleGroup(group)}
          className={`${buttonBase} border-fd-primary px-3 py-1 text-xs text-fd-primary hover:bg-fd-primary hover:text-fd-primary-foreground`}
        >
          {allSelected ? t.clearAll : t.selectGroup}
        </button>
      </div>
      <ul className="m-0 grid list-none grid-cols-2 gap-x-6 gap-y-1 p-4">
        {group.items.map((item) => (
          <li key={item.href}>
            <label className="flex cursor-pointer items-start gap-2 py-1 text-sm">
              <input
                type="checkbox"
                className="mt-1 shrink-0 accent-[#0060f0]"
                checked={selected.has(item.href)}
                onChange={() => onToggle(item.href)}
              />
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ExportClient({
  groups,
  metaGroupCount,
  strings: t,
  logoSrc,
}: {
  groups: ExportGroup[];
  metaGroupCount: number;
  strings: ExportStrings;
  logoSrc: string;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [sections, setSections] = useState<{ label: string; html: string }[] | null>(null);

  const totalCount = useMemo(() => groups.reduce((sum, g) => sum + g.items.length, 0), [groups]);

  const toggle = useCallback((href: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  }, []);

  const toggleGroup = useCallback((group: ExportGroup) => {
    setSelected((prev) => {
      const next = new Set(prev);
      const all = group.items.every((i) => next.has(i.href));
      for (const item of group.items) {
        if (all) next.delete(item.href);
        else next.add(item.href);
      }
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    setSelected((prev) =>
      prev.size === totalCount ? new Set() : new Set(groups.flatMap((g) => g.items.map((i) => i.href))),
    );
  }, [groups, totalCount]);

  const generate = useCallback(async () => {
    const ordered = groups.flatMap((g) => g.items).filter((item) => selected.has(item.href));
    if (ordered.length === 0) return;
    setStatus('loading');
    try {
      const loaded = await Promise.all(
        ordered.map(async (item) => ({ label: item.label, html: await extractDocHtml(item.href) })),
      );
      setSections(loaded);
      setStatus('idle');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }, [groups, selected]);

  const metaGroups = groups.slice(0, metaGroupCount);
  const otherGroups = groups.slice(metaGroupCount);
  const card = 'flex flex-col overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-sm';

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="mb-3 text-3xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
        {t.heading}
      </h1>
      <p className="mb-5 text-fd-muted-foreground">{t.intro}</p>

      <div className="mb-4 flex items-center gap-4">
        <button
          type="button"
          onClick={toggleAll}
          className={`${buttonBase} border-fd-border bg-fd-muted px-4 py-2 hover:bg-fd-accent`}
        >
          {selected.size === totalCount ? t.clearAll : t.selectAll}
        </button>
        <span className="text-sm text-fd-muted-foreground">
          {t.selected.replace('{n}', String(selected.size)).replace('{total}', String(totalCount))}
        </span>
      </div>

      {status === 'error' && (
        <div className="mb-4 rounded-lg border border-fd-error/40 bg-fd-error/10 p-3 text-sm">{t.fetchError}</div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className={card}>
          {metaGroups.map((g) => (
            <GroupSection key={g.title} group={g} selected={selected} onToggle={toggle} onToggleGroup={toggleGroup} t={t} />
          ))}
        </div>
        {otherGroups.map((g) => (
          <div key={g.title} className={card}>
            <GroupSection group={g} selected={selected} onToggle={toggle} onToggleGroup={toggleGroup} t={t} />
          </div>
        ))}
      </div>

      <div className="my-6 flex flex-col items-start gap-2">
        <button
          type="button"
          disabled={selected.size === 0 || status === 'loading'}
          onClick={generate}
          className={`${buttonBase} border-transparent bg-fd-primary px-6 py-3 text-base text-fd-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {status === 'loading' ? t.generating : t.generate}
        </button>
        {selected.size === 0 && <p className="text-sm text-fd-muted-foreground">{t.empty}</p>}
      </div>

      {sections && <PrintView sections={sections} strings={t} logoSrc={logoSrc} onDone={() => setSections(null)} />}
    </main>
  );
}

function PrintView({
  sections,
  strings,
  logoSrc,
  onDone,
}: {
  sections: { label: string; html: string }[];
  strings: ExportStrings;
  logoSrc: string;
  onDone: () => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (rootRef.current) await waitForImages(rootRef.current);
      if (!cancelled) window.print();
    })();
    const handleAfterPrint = () => onDone();
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      cancelled = true;
      window.removeEventListener('afterprint', handleAfterPrint);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div id="pdf-export-print-root" ref={rootRef}>
      <div className="pdf-cover">
        <img className="pdf-cover-logo" src={logoSrc} alt="S-Safe" />
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
          {strings.coverDate}: {new Date().toLocaleDateString()}
        </p>
      </div>
      {sections.map((s, idx) => (
        <section className="pdf-doc-section" key={idx} dangerouslySetInnerHTML={{ __html: s.html }} />
      ))}
    </div>,
    document.body,
  );
}
