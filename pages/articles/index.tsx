import { Button, Card, Col, Form, Input, Pagination, Row, Space, Typography } from 'antd';
import Image from 'next/image';
import { TTDoneProjectFilters } from '@/components/TTDoneProjectFilters/TTDoneProjectFilters';

import style from './style.module.scss';
import { TTButton } from '@/components/TTButton/TTButton';

const { Text } = Typography;

const articles = () => {
  return (
    <div style={{ padding: '53px 64px 0px' }}>
      <Row style={{ marginBottom: 112 }}>
        <Col span={2} />
        <Col span={7}>
          <Space
            direction="vertical"
            style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Space direction="vertical" size={27}>
              <Text className={style.articlBanerHeader}>Статьи</Text>
              <Text className={style.articleBanerDescription}>
                В статьях мы делимся собственным опытом, рассказываем о новых технологиях отрасли, как выбрать
                правильного пректировщика В статьях мы делимся собственным опытом, рассказываем о новых технологиях
                отрасли, как выбрать правильного пректировщика
              </Text>
            </Space>
            <TTButton isColorBorder='blueFull' text={'Получить консультацию'} />
          </Space>
        </Col>
        <Col span={2} />
        <Col span={12}>
          <Image height={401} width={640} src="/assets/articles.png" alt="Picture of the author" />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ marginBlock: 50 }}>
          <TTDoneProjectFilters />
        </Col>
      </Row>
      <Row gutter={[32, 48]}>
        <Col span={12}>
          <Card
            title={
              <Space direction="vertical">
                <Text className={style.articlesTitle}>Кто такой генеральный проектировщик и что он делает</Text>
                <Text className={style.articlesDesc}>
                  Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование
                  Водоснабжения и канализации
                </Text>
              </Space>
            }
            bordered={false}
            headStyle={{ borderBottom: 0, padding: 0 }}
            bodyStyle={{ padding: 0 }}
          >
            <Image height={401} width={640} src="/assets/imagearticles.png" alt="Picture of the author" />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <Space direction="vertical">
                <Text className={style.articlesTitle}>Кто такой генеральный проектировщик и что он делает</Text>
                <Text className={style.articlesDesc}>
                  Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование
                  Водоснабжения и канализации
                </Text>
              </Space>
            }
            bordered={false}
            headStyle={{ borderBottom: 0, padding: 0 }}
            bodyStyle={{ padding: 0 }}
          >
            <Image height={401} width={640} src="/assets/imagearticles.png" alt="Picture of the author" />
          </Card>
        </Col>
      </Row>
      <Pagination defaultCurrent={1} total={50} style={{marginTop: 40}}/>
      <Row>
          <Col span={24} style={{display: 'flex', justifyContent: 'center', margin: '64px 0px 76px'}}>
            <TTButton isColorBorder='blueFull' text={'Получить консультацию'} />
          </Col>
        </Row>
    </div>
  );
};
export default articles;
