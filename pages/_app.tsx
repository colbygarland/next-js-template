import type { AppProps } from 'next/app';
import { StoreProvider, rootStore } from '../stores/rootStore';
import 'tailwindcss/tailwind.css';
import { PageHead } from '../components/PageHead';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <PageHead />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
