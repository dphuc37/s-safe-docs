import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    vi: {
      displayName: 'Tiếng Việt',
      'Search(search trigger)': 'Tìm kiếm...',
      'Search(search dialog)': 'Tìm kiếm',
      'No results found(search dialog)': 'Không tìm thấy kết quả',
      'On this page(table of contents)': 'Trên trang này',
      'No Headings(table of contents)': 'Không có mục lục',
      'Next Page(pagination)': 'Bài tiếp',
      'Previous Page(pagination)': 'Bài trước',
      'Language(language switcher)': 'Ngôn ngữ',
      'Choose a language(language switcher)': 'Chọn ngôn ngữ',
      'Theme(site menu)': 'Giao diện',
      'Light(theme switcher)(aria-label)': 'Sáng',
      'Dark(theme switcher)(aria-label)': 'Tối',
      'System(theme switcher)(aria-label)': 'Theo hệ thống',
      'Page Not Found(404 not found page)': 'Không tìm thấy trang',
      'Back to Home(404 not found page)': 'Về trang chủ',
      'Skip to Content(skip link)': 'Chuyển đến nội dung',
    },
    en: {
      displayName: 'English',
    },
  });

export function baseOptions(locale: string): BaseLayoutProps {
  const prefix = locale === i18n.defaultLanguage ? '' : `/${locale}`;
  return {
    nav: {
      url: prefix || '/',
      title: (
        <>
          <img src="/img/brand/logo-s-safe.png" alt="S-Safe" className="h-7 w-auto dark:hidden" />
          <img
            src="/img/brand/logo-s-safe-white.png"
            alt="S-Safe"
            className="hidden h-7 w-auto dark:block"
          />
          <span className="ssafe-nav-label">Documentation</span>
        </>
      ),
    },
    links: [
      {
        text: locale === 'en' ? 'Download PDF' : 'Tải PDF',
        url: `${prefix}/export`,
        on: 'all',
      },
    ],
  };
}
