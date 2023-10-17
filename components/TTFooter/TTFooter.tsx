import { Col, Layout, Row, Space, Typography } from 'antd';
import { footerInfo } from 'common/Constants';
import { TTIconTelegram, TTIconWhatsApp } from '../Icons';

import style from './TTFooter.module.scss';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function TTFooter() {
  return (
    <Footer className={style.TTFooter}>
      <Row>
        <Col span={4} />
        <Col span={4}>
          <Space direction="vertical" size="middle">
            <Space direction="vertical" size="middle">
              <Text className={style.color_white}>{footerInfo.phone}</Text>
              <Link className={style.color_white}>{footerInfo.email}</Link>
              <Text className={style.color_white}>{footerInfo.address}</Text>
            </Space>
            <Space>
              <TTIconTelegram />
              <TTIconWhatsApp />
            </Space>
          </Space>
        </Col>
        <Col span={2} />
        <Col span={4}>
          {/* <Space direction="vertical"> */}
          <Text className={style.color_white}>Генеральный проектировщик</Text>
          <Text className={style.color_white}>Направления проектирования</Text>
          <Text className={style.color_white}>Реализованные проекты</Text>
          <Text className={style.color_white}>Статьи</Text>
          <Text className={style.color_white}>О нас</Text>
          {/* </Space> */}
        </Col>
        <Col span={2} />
        <Col span={4}>
          <Link href="/terms-of-use" className={style.color_white} style={{ cursor: 'pointer' }}>
            © 2020 <br /> Пользовательское соглашение
          </Link>
        </Col>
        <Col span={4} />
      </Row>
    </Footer>
  );
}
