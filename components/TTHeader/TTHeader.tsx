import { Layout, Menu } from 'antd';
import { menuItems } from 'common/Constants';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import style from './TTHeader.module.scss';

const { Header } = Layout;

export default function TTFooter() {
  const router = useRouter();

  const search = HandleSearchAssets(router.pathname);

  return (
    <Header>
      <div className={`${style.logo}`}>
        <Link href="/">
          <Image src={`${search?.logoUrl}`} height={300} width={300} alt="Picture of the author" />
        </Link>
      </div>
      {
        router.pathname !== '/water' && 
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
      }
    </Header>
  );
}

