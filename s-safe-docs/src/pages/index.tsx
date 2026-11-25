import React, { type ReactNode } from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): ReactNode {
  const target = useBaseUrl('/yeu-cau-he-thong');
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={`${siteConfig.url}${target}`} />
      </Head>
      <Redirect to="/yeu-cau-he-thong" />
    </>
  );
}
