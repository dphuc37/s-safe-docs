import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DOC_GROUPS } from '@site/src/data/docModules';

export type DocEntry = { label: string; href: string };
export type DocGroup = { title: string; kind: 'meta' | 'product'; items: DocEntry[] };

// href không có tiền tố baseUrl/locale; khi fetch() phải đi qua useBaseUrl().
export function useDocGroups(): DocGroup[] {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return DOC_GROUPS.map((group) => ({
    title: isEn ? group.en : group.vi,
    kind: group.kind,
    items: group.items.map((item) => ({
      label: isEn ? item.en : item.vi,
      href: item.href,
    })),
  }));
}
