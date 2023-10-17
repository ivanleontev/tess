import { Col, Layout, Row, Space, Typography } from 'antd';
import { footerInfo } from 'common/Constants';
import { TTIconTelegram, TTIconWhatsApp } from '../Icons/Icons';

import style from './TTFooter.module.scss';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function TTFooter() {
  return (
    <Footer className={style.TTFooter}>
      <Row>
        <Col span={4} />
        <Col span={4}>
          <Space direction="vertical">
            <Text className={style.color_white}>{footerInfo.phone}</Text>
            <Link className={style.color_white}>{footerInfo.email}</Link>
            <Text className={style.color_white}>{footerInfo.address}</Text>
          </Space>
          <Space>
            <TTIconTelegram />
            <TTIconWhatsApp />
          </Space>
        </Col>
        <Col span={2} />
        <Col span={4}>
          Генеральный проектировщик Направления проектирования Реализованные проекты Статьи О нас
        </Col>
        <Col span={2} />
        <Col span={4}>© 2020 Пользовательское соглашение</Col>
        <Col span={4} />
      </Row>
    </Footer>
  );
}
