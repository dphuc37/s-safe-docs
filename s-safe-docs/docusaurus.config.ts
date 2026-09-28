import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'vi';

const config: Config = {
  title: 'S-Safe Documentation',
  tagline: 'Tài liệu hướng dẫn hệ thống S-Safe',
  favicon: 'img/S-Safe_logo.png', // Đã đổi sang favicon mới của công ty

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap',
      type: 'text/css',
    },
  ],

  url: 'https://your-docusaurus-site.example.com',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // TÍCH HỢP THANH TÌM KIẾM OFFLINE TẠI ĐÂY
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["vi", "en"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    // THANH MENU TRÊN CÙNG (NAVBAR)
    navbar: {
      title: 'S-Safe Documentation', // Tên hiển thị
      logo: {
        alt: 'S-Safe Logo',
        src: 'img/S-Safe_logo.png', // Tên file logo chính thức của bác
      },
      items: [
        {
          to: '/export',
          label: currentLocale === 'en' ? 'Download PDF' : 'Tải PDF',
          position: 'right',
        },
        {
          type: 'localeDropdown', // Nút chuyển Tiếng Việt / Tiếng Anh
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies
    Preset.ThemeConfig,
};

export default config;