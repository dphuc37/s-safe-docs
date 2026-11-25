import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'vi';

const config: Config = {
  title: 'S-Safe Documentation',
  tagline: 'Tài liệu hướng dẫn hệ thống S-Safe',
  favicon: 'img/brand/favicon.png',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Google+Sans+Flex:wght@400&family=Google+Sans:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],

  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', href: '/img/brand/apple-touch-icon.png' } },
  ],

  url: 'https://doc.s-safe.com',
  baseUrl: '/',

  organizationName: 'SMT',
  projectName: 's-safe-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: { label: 'Tiếng Việt' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          beforeDefaultRemarkPlugins: [require('./src/plugins/remark-zoom-img')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['vi', 'en'],
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/brand/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'S-Safe',
        src: 'img/brand/logo-s-safe.png',
        srcDark: 'img/brand/logo-s-safe-white.png',
        height: 34,
      },
      items: [
        {
          to: '/export',
          label: currentLocale === 'en' ? 'Download PDF' : 'Tải PDF',
          position: 'right',
          className: 'navbar-pdf-link',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
