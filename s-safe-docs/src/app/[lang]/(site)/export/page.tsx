import type { Metadata } from 'next';
import type { Folder, Item } from 'fumadocs-core/page-tree';
import { source } from '@/lib/source';
import { ExportClient, type ExportGroup, type ExportStrings } from './export-client';

const STRINGS: Record<'vi' | 'en', ExportStrings> = {
  vi: {
    pageTitle: 'Tải tài liệu PDF',
    heading: 'Tải tài liệu dưới dạng PDF',
    intro:
      'Chọn các mục bạn muốn gộp lại thành 1 file PDF. Sau khi bấm "Tạo PDF", hộp thoại In của trình duyệt sẽ hiện ra, chọn "Lưu dưới dạng PDF" (Save as PDF) để tải về máy.',
    selectAll: 'Chọn tất cả',
    clearAll: 'Bỏ chọn tất cả',
    selectGroup: 'Chọn cả nhóm',
    selected: 'Đã chọn {n}/{total} trang',
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
      'Select the pages you want to combine into a single PDF file. After clicking "Generate PDF", your browser\'s print dialog will open. Choose "Save as PDF" to download it.',
    selectAll: 'Select all',
    clearAll: 'Clear all',
    selectGroup: 'Select group',
    selected: '{n}/{total} pages selected',
    generate: 'Generate PDF',
    generating: 'Preparing content...',
    empty: 'Please select at least one page.',
    fetchError: 'Failed to load some pages, please try again.',
    coverTitle: 'S-Safe Documentation',
    coverSubtitle: 'User guide',
    coverListLabel: 'Included pages:',
    coverDate: 'Generated on',
  },
};

// Hai nhóm đầu (Cấu hình hệ thống, Hướng dẫn sử dụng) gộp thành một khối.
const META_GROUP_COUNT = 2;

export async function generateMetadata(props: PageProps<'/[lang]/export'>): Promise<Metadata> {
  const { lang } = await props.params;
  return { title: STRINGS[lang === 'en' ? 'en' : 'vi'].pageTitle };
}

export default async function Page(props: PageProps<'/[lang]/export'>) {
  const { lang } = await props.params;
  const t = STRINGS[lang === 'en' ? 'en' : 'vi'];

  const groups: ExportGroup[] = source
    .getPageTree(lang)
    .children.filter((node): node is Folder => node.type === 'folder')
    .map((folder) => ({
      title: String(folder.name),
      items: folder.children
        .filter((child): child is Item => child.type === 'page')
        .map((page) => ({ label: String(page.name), href: page.url })),
    }));

  return (
    <ExportClient
      groups={groups}
      metaGroupCount={META_GROUP_COUNT}
      strings={t}
      logoSrc="/img/brand/logo-s-safe.png"
    />
  );
}
