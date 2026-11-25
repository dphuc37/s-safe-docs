import { loader } from 'fumadocs-core/source';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { defineDocs } from 'fumadocs-mdx/macro';
import { createElement } from 'react';
import { z } from 'zod';
import { NavIcon } from '@/components/nav-icon';
import { i18n } from './i18n';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({ sidebarTitle: z.string().optional() }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const source = loader({
  baseUrl: '/',
  i18n,
  source: docs.toFumadocsSource(),
  // Giữ URL cũ: /yeu-cau-he-thong, /installation, /huong-dan-su-dung/<trang>
  slugs(_file, next) {
    const slugs = next();
    const last = slugs[slugs.length - 1];
    return slugs[0] === 'cau-hinh-he-thong' ? [last] : ['huong-dan-su-dung', last];
  },
  icon: (name) => createElement(NavIcon, { name }),
  plugins: ({ typedPlugin }) => [
    typedPlugin({
      transformPageTree: {
        file(node, file) {
          if (!file) return node;
          const stored = this.storage.read(file);
          if (stored?.format === 'page' && stored.data.sidebarTitle) {
            node.name = stored.data.sidebarTitle;
          }
          return node;
        },
      },
    }),
  ],
});
