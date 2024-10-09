import { Col, Dropdown, Layout, Row, Space, Typography } from 'antd';
import { footerInfo } from 'common/Constants';
import { IconMenuDropDownRight, TTIconTelegram, TTIconWhatsApp } from '../Icons';

import style from './TTFooter.module.scss';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function TTFooter() {
  return (
    <Footer className={style.TTFooter}>
      <Row style={{ height: '100%' }}>
        <Col span={4} />
        <Col span={4} className={style.wrapperCol}>
          <Space direction="vertical" size="middle">
            <Space direction="vertical" size={16}>
              <Link href="tel:+79850600661" className={style.color_white}>
                {footerInfo.phone}
              </Link>
              <Link href="mailto:info@tesserakt.ru&body=Здравствуйте, " className={style.color_white}>
                {footerInfo.email}
              </Link>
              <Text className={style.color_white}>{footerInfo.address}</Text>
            </Space>
            <Space>
              <TTIconWhatsApp />
              <TTIconTelegram />
            </Space>
          </Space>
        </Col>
        <Col span={2} />
        <Col span={6} className={style.wrapperCol}>
          <Space direction="vertical" size={16}>
            <Link href="/genproektirovanie" className={style.color_white}>
              Генеральный проектировщик
            </Link>
            <Dropdown
              overlay={
                <Space direction="vertical" size={16} className={style.dropDownWrapper}>
                  <a href={'/research'}>Инженерные изыскания</a>
                  <a href={'/water'}>Водоснабжение и канализация</a>
                  <a href={'/light'}>Электроснабжение и автоматика</a>
                  <a href={'/heating'}>Отопление, вентиляция и кондиционирование</a>
                  <a href={'/construction'}>Конструктивные и архитектурные проекты</a>
                  <a href={'/authorcontrol'}>Авторский надзор</a>
                </Space>
              }
              placement="bottomRight"
              align={{
                offset: [270, 200],
                points: ['bottomRight', 'topRight'],
              }}
            >
              <a className={style.dropDownLink}>
                <span>Направления проектирования</span>
                <IconMenuDropDownRight />
              </a>
            </Dropdown>
            <Link href="doneproject" className={style.color_white}>
              Реализованные проекты
            </Link>
            <Link href="articles" className={style.color_white}>
              Статьи
            </Link>
            <Link href="/contacts" className={style.color_white}>
              О нас
            </Link>
          </Space>
        </Col>
        <Col span={2} />
        <Col span={4} className={style.wrapperCol}>
          <Link href="/terms-of-use" className={style.color_white} style={{ cursor: 'pointer' }}>
            © 2020 <br /> Пользовательское соглашение
          </Link>
        </Col>
        <Col span={2} />
      </Row>
    </Footer>
  );
}
