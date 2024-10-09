import { Col, Drawer, Row, Space, Typography } from 'antd';
import React from 'react';
import style from './TTDrawer.module.scss';
import { TTIconWhatsApp, TTIconTelegram } from '../Icons';

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
        <Col span={2} />
        <Col span={6}>
          <Space direction="vertical" className={style.MenuContactsWrapper} size={12}>
            <Text className={style.MenuHead}>Контакты</Text>
            <a className={style.MenuItemLeftBlock}>+ 7 985 060-06-61</a>
            <a className={style.MenuItemLeftBlock}>info@tesserakt.ru</a>
            <Space direction="vertical" size={0}>
              <Text className={style.MenuItemLeftBlock}>119071, г. Москва, </Text>
              <Text className={style.MenuItemLeftBlock}>Ленинский пр., д. 19, стр. 2</Text>
            </Space>
            <Space className={style.MenuItemLeftBlock} style={{ cursor: 'pointer' }}>
              <TTIconWhatsApp />
              <TTIconTelegram />
            </Space>
          </Space>
        </Col>
        <Col span={2} />
        <Col span={10}>
          <Text className={style.MenuHead}>Меню</Text>
          <div className={style.MenuItemsWrapper}>
            <Link
              href={'/genproektirovanie'}
              className={style.MenuItem}
              style={{ borderBottom: '1px solid #fff', maxWidth: 280, paddingBottom: 24 }}
            >
              Генеральный проектировщик
            </Link>
            <Link href={'research'} className={style.MenuItem}>
              Инженерные изыскания
            </Link>
            <Link href={'construction'} className={style.MenuItem}>
              Конструктив и архитектура
            </Link>
            <Link href={'water'} className={style.MenuItem}>
              Водоснабжение и канализация
            </Link>
            <Link href={'heating'} className={style.MenuItem}>
              Отопление, вентиляция и кондиционирование
            </Link>
            <Link href={'light'} className={style.MenuItem}>
              Электроснабжение и автоматика
            </Link>
            <Link
              href={'authorcontrol'}
              className={style.MenuItem}
              style={{ borderBottom: '1px solid #fff', paddingBottom: 24 }}
            >
              Авторский надзор
            </Link>
            <Link
              href={'doneproject'}
              className={style.MenuItem}
              style={{ borderBottom: '1px solid #fff', maxWidth: 240, paddingBottom: 24 }}
            >
              Реализованные проекты
            </Link>
            <Link
              href={'articles'}
              className={style.MenuItem}
              style={{ borderBottom: '1px solid #fff', maxWidth: 80, paddingBottom: 24 }}
            >
              Статьи
            </Link>
            <Link href={'contacts'} className={style.MenuItem}>
              Контакты
            </Link>
          </div>
        </Col>
        <Col span={4} />
      </Row>
    </Drawer>
  );
};
