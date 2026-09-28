import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useDocGroups } from '@site/src/utils/useDocGroups';
import ModuleIcon from '@site/src/components/ModuleIcon';
import styles from './index.module.css';

const STRINGS = {
  vi: {
    tagline: 'Tài liệu hướng dẫn sử dụng hệ thống kiểm soát an ninh S-Safe',
    ctaGuide: 'Xem hướng dẫn sử dụng',
    ctaPdf: 'Tải tài liệu PDF',
    searchHint: 'Bạn cũng có thể nhấn Ctrl + K để tìm nhanh mọi trang tài liệu.',
  },
  en: {
    tagline: 'User guide for the S-Safe access control & security system',
    ctaGuide: 'Browse the user guide',
    ctaPdf: 'Download as PDF',
    searchHint: 'You can also press Ctrl + K to quickly search the whole guide.',
  },
} as const;

function Hero({
  t,
  firstGuideHref,
  metaItems,
}: {
  t: (typeof STRINGS)[keyof typeof STRINGS];
  firstGuideHref?: string;
  metaItems: { label: string; href: string }[];
}) {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <img src="/img/S-Safe_logo.png" alt="S-Safe" className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>S-Safe Documentation</h1>
        <p className={styles.heroTagline}>{t.tagline}</p>
        <div className={styles.heroButtons}>
          {firstGuideHref && (
            <Link className="button button--lg button--secondary" to={firstGuideHref}>
              {t.ctaGuide}
            </Link>
          )}
          <Link className={clsx('button button--lg', styles.ctaOutline)} to="/export">
            {t.ctaPdf}
          </Link>
        </div>
        <p className={styles.searchHint}>{t.searchHint}</p>
        {metaItems.length > 0 && (
          <nav className={styles.metaLinks}>
            {metaItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                {idx > 0 && <span className={styles.metaDivider}>·</span>}
                <Link to={item.href} className={styles.metaLink}>
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const t = STRINGS[i18n.currentLocale === 'en' ? 'en' : 'vi'];
  const groups = useDocGroups();
  const metaItems = groups.filter((g) => g.kind === 'meta').flatMap((g) => g.items);
  const productGroups = groups.filter((g) => g.kind === 'product');
  const firstGuideHref = productGroups.flatMap((g) => g.items)[0]?.href;

  return (
    <Layout title="S-Safe Documentation" description={t.tagline}>
      <Hero t={t} firstGuideHref={firstGuideHref} metaItems={metaItems} />
      <div className={styles.dashboardPanel}>
        <div className="container">
          {productGroups.map((group) => (
            <section key={group.title} className={styles.section}>
              {group.title && <h2 className={styles.sectionTitle}>{group.title}</h2>}
              <div className={styles.cardGrid}>
                {group.items.map((item) => (
                  <Link key={item.href} to={item.href} className={styles.card}>
                    <ModuleIcon className={item.className} src={item.icon} size={32} />
                    <span className={styles.cardLabel}>{item.label}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
