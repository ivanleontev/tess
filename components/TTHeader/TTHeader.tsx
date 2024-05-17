import { Layout, Menu, Space } from 'antd';
import { menuItems } from 'common/Constants';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import style from './TTHeader.module.scss';
import { useState } from 'react';
import { TTMainMenu } from '../TTMainMenu/TTMainMenu';

const { Header } = Layout;

export default function TTFooter() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const search = HandleSearchAssets(router.pathname);

  return (
    <Header className={style.Header}>
      <div className={style.HeaderWrapper}>
        <div className={`${style.logo}`}>
          <Link href="/">
            <Image src={`${search?.logoUrl}`} height={300} width={300} alt="Picture of the author" />
          </Link>
        </div>
        {router.pathname !== '/water' && (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
        )}
      </div>
      <div className={style.wrapperRightIcon}>
        <a className={style.headerPhone} href="tel:+79850600661">
          + 7 985 060-06-61
        </a>
        <Image
          className={style.headerSearch}
          src="/assets/MenuSearchIcon.svg"
          height={27}
          width={25}
          alt="Picture of the author"
        />
        <Image
          className={style.headerMenu}
          onClick={() => setOpenMenu(!openMenu)}
          src="/assets/MenuRightIcon.svg"
          height={27}
          width={25}
          alt="Picture of the author"
        />
      </div>
      <TTMainMenu open={openMenu} onClose={setOpenMenu} />
    </Header>
  );
}
