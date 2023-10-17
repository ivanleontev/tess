import { Layout } from 'antd';
import { ReactNode } from 'react';
import TTHeader from '@/components/TTHeader/TTHeader';
import TTFooter from '@/components/TTFooter/TTFooter';

const { Content } = Layout;

export default function TTLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <TTHeader />
      <Content>{children}</Content>
      <TTFooter />
    </>
  );
}