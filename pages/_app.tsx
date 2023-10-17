import '../styles/globals.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import TTLayout from '../components/TTLayout/TTLayout';
import { useRouter } from 'next/router';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { TTBackTop } from '@/components/TTBackToTop/TTBackToTop';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = HandleSearchAssets(router.asPath);

  return (
    <TTLayout >
      <Component {...pageProps} />
      <TTBackTop />
    </TTLayout>
  );
}

export default MyApp;
