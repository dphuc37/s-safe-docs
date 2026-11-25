import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  const { nav, ...base } = baseOptions(lang);

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tree={source.getPageTree(lang)}
      sidebar={{ defaultOpenLevel: 1 }}
    >
      {children}
    </DocsLayout>
  );
}
