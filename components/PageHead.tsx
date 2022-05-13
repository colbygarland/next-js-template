import Head from 'next/head';
import { PAGE_DESCRIPTION, PAGE_TITLE } from '../strings';

interface PageHeadProps {
  title?: string;
  description?: string;
}

export const PageHead = ({ title = PAGE_TITLE, description = PAGE_DESCRIPTION }: PageHeadProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
    </>
  );
};
