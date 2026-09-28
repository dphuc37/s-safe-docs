import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DOC_GROUPS } from '@site/src/data/docModules';

export type DocEntry = {
  label: string;
  href: string;
  className: string;
  icon?: string;
  tabIcon?: string;
};
export type DocGroup = { title: string; kind: 'meta' | 'product'; items: DocEntry[] };

// href ở đây KHÔNG có tiền tố baseUrl/locale - dùng trực tiếp với <Link to>,
// Docusaurus tự thêm tiền tố đúng theo locale hiện tại.
// Nếu cần fetch() thực sự (như trang /export), phải tự đi qua useBaseUrl().
export function useDocGroups(): DocGroup[] {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return DOC_GROUPS.map((group) => ({
    title: isEn ? group.en : group.vi,
    kind: group.kind,
    items: group.items.map((item) => ({
      label: isEn ? item.en : item.vi,
      href: item.href,
      className: item.className,
      icon: item.icon,
      tabIcon: item.tabIcon,
    })),
  }));
}
