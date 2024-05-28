import { Dropdown, Layout, Space } from 'antd';
import { menuItems } from 'common/Constants';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import style from './TTHeader.module.scss';
import { useState } from 'react';
import { TTMainMenu } from '../TTMainMenu/TTMainMenu';
import { IconMenuDropDown } from '../Icons';

const { Header } = Layout;

export default function TTFooter() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const search = HandleSearchAssets(router.pathname);

  return (
    <Header className={style.Header}>
      <div className={`${style.logo}`}>
        <Link href="/">
          <img src={`${search?.logoUrl}`} alt="Picture of the author" />
        </Link>
      </div>

      <div className={style.menuItemWrapper}>
        {menuItems.map((menuItem, key) => {
          if (menuItem.label === 'Направления проектирования') {
            return (
              <>
                <Dropdown
                  key={key}
                  overlay={
                    <Space direction="vertical" size={16} className={style.dropDownWrapper}>
                      <a className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`} href={'/research'}>
                        Инженерные изыскания
                      </a>
                      <a className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`} href={'/water'}>
                        Водоснабжение и канализация
                      </a>
                      <a className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`} href={'/light'}>
                        Электроснабжение и автоматика
                      </a>
                      <a className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`} href={'/heating'}>
                        Отопление, вентиляция и кондиционирование
                      </a>
                      <a
                        className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`}
                        href={'/construction'}
                      >
                        Конструктивные и архитектурные проекты
                      </a>
                      <a
                        className={`${search.path === menuItem.link ? style.itemMenuActive : ''}`}
                        href={'/authorcontrol'}
                      >
                        Авторский надзор
                      </a>
                    </Space>
                  }
                  placement="bottomLeft"
                >
                  <a
                    className={`${style.itemMenu} ${style.IconMenuDropDown} ${
                      search.path === menuItem.link ? style.itemMenuActive : ''
                    }`}
                  >
                    <span>Направления проектирования</span>
                    <IconMenuDropDown />
                  </a>
                </Dropdown>
              </>
            );
          }

          return (
            <a
              key={key}
              href={menuItem.link}
              className={`${style.itemMenu} ${search.path === menuItem.link ? style.itemMenuActive : ''}`}
            >
              {menuItem.label}
            </a>
          );
        })}
      </div>
      <div className={style.wrapperRightIcon}>
        <a className={style.headerPhone} href="tel:+79850600661">
          + 7 985 060 06 61
        </a>
        {/* TODO: реализовать поиск по статьям */}
        {/* <Image
              className={style.headerSearch}
              src="/assets/MenuSearchIcon.svg"
              height={27}
              width={25}
              alt="Picture of the author"
            /> */}
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
