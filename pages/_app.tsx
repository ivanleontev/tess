import '../styles/globals.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import TTLayout from '../components/TTLayout/TTLayout';
import { useRouter } from 'next/router';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { TTBackTop } from '@/components/TTBackToTop/TTBackToTop';
import { TTDrawerSearchPartners } from '@/components/TTDrawerSearchPartners/TTDrawerSearchPartners';
import { createContext, useState } from 'react';

export const SidebarContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const route = HandleSearchAssets(router.asPath);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen: isOpen, onClick: setIsOpen }}>
      <TTLayout>
        <Component {...pageProps} />
        <TTBackTop />
        <TTDrawerSearchPartners open={isOpen} onClose={setIsOpen} />
      </TTLayout>
    </SidebarContext.Provider>
  );
}

export default MyApp;
