import { Col, Drawer, Row, Space, Typography } from 'antd';
import React from 'react';
import style from './TTDrawer.module.scss';

const { Text, Link } = Typography;

interface TTMainMenuProps {
  open: boolean;
  onClose: (open: boolean) => void;
}

export const TTMainMenu = ({ open, onClose }: TTMainMenuProps) => {
  return (
    <Drawer
      open={open}
      onClose={() => onClose(!open)}
      placement="top"
      height={839}
      className={style.TTMainMenu}
      headerStyle={{
        backgroundColor: '#232247',
        border: 0,
      }}
      bodyStyle={{
        backgroundColor: '#232247',
        backgroundImage: 'url(./assets/Left24.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left ',
      }}
      closeIcon={
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5366 6.15039L6.83984 18.1504" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M6.83984 6.15039L19.5366 18.1504" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      }
    >
      <Row>
        <Col span={24}>
          <Space direction="vertical" className={style.MenuContactsWrapper}>
            <Text className={style.MenuHead}>КОНТАКТЫ</Text>
            <Text className={style.MenuItem}>+ 7 985 060-06-61</Text>
            <Text className={style.MenuItem}>info@tesserakt.ru</Text>
            <Text className={style.MenuItem}>119071, г. Москва, </Text>
            <Text className={style.MenuItem}>Ленинский пр., д. 19, стр. 2</Text>
            <div className={style.MenuItem}>icons</div>
          </Space>
          <Space direction="vertical" className={style.MenuItemsWrapper} size={24}>
            <Text className={style.MenuHead}>МЕНЮ</Text>
            <Link href={'/genproektirovanie'} className={style.MenuItem} style={{ borderBottom: '1px solid white' }}>
              Генеральный проектировщик
            </Link>
            <Link href={''} className={style.MenuItem} style={{ paddingTop: 24 }}>
              Инженерные изыскания
            </Link>
            <Link href={''} className={style.MenuItem}>
              Конструктив и архитектура
            </Link>
            <Link href={''} className={style.MenuItem}>
              Водоснабжение и канализация
            </Link>
            <Link href={''} className={style.MenuItem}>
              Отопление, вентиляция и кондиционирование
            </Link>
            <Link href={''} className={style.MenuItem}>
              Электроснабжение и автоматика
            </Link>
            <Link href={''} className={style.MenuItem} style={{ borderBottom: '1px solid white', paddingBottom: 24 }}>
              Авторский надзор
            </Link>
            <Link href={''} className={style.MenuItem} style={{ borderBottom: '1px solid white', paddingBottom: 24 }}>
              Реализованные проекты
            </Link>
            <Link href={''} className={style.MenuItem} style={{ borderBottom: '1px solid white', paddingBottom: 24 }}>
              Статьи
            </Link>
            <Link href={''} className={style.MenuItem} style={{ borderBottom: '1px solid white', paddingBottom: 24 }}>
              Контакты
            </Link>
          </Space>
        </Col>
      </Row>
    </Drawer>
  );
};
