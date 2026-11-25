import type { Metadata } from 'next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18n } from '@/lib/i18n';
import { translations } from '@/lib/layout.shared';
import '../global.css';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Google+Sans+Flex:wght@400&family=Google+Sans:wght@400;500;700&display=swap';

export const metadata: Metadata = {
  metadataBase: new URL('https://doc.s-safe.com'),
  title: { default: 'S-Safe Documentation', template: '%s | S-Safe Documentation' },
  icons: { icon: '/img/brand/favicon.png', apple: '/img/brand/apple-touch-icon.png' },
  openGraph: { images: '/img/brand/social-card.jpg' },
};

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider i18n={i18nProvider(translations, lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
