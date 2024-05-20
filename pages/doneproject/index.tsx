import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { Select, Form, Typography, Button, Col, Row, Space, Pagination } from 'antd';
import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { TTDoneProjectFilters } from '@/components/TTDoneProjectFilters/TTDoneProjectFilters';
import { TTCard } from '@/components/TTCard/TTCard';

const { Text, Title } = Typography;

const doneproject = () => {
  return (
    <div className={style.doneProjectWrapper}>
      <Row className={style.doneProjectBaner}>
        <Col span={24}>
          <Space direction="horizontal">
            <Space direction="vertical" style={{ maxWidth: 500, marginRight: 115 }}>
              <Title className={style.doneProjectTitle}>Реализованные проекты</Title>
              <Text className={style.doneProjectDescription}>
                Пройдя на страницу проекта вы узнаете детали проекта: какое было ТЗ, как прорабатывали и принимали
                решения на какие международные и российские практики ориентировались, как реализовывали, с какими
                проблемами столкнулись и как их решали
              </Text>
              <Button>Получить консультацию</Button>
            </Space>
            <Space>
              <Image height={401} width={640} src="/assets/doneProject.png" alt="Picture of the author" />
            </Space>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: 112 }}>
        <Col span={24}>
          <Title>Наши проекты</Title>
          <TTDoneProjectFilters />
        </Col>
      </Row>
      <Row style={{ marginTop: 40 }}>
        <Col span={24}>
          <Space direction="horizontal" style={{ display: 'flex' }}>
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
          </Space>
          <Space direction="horizontal" style={{ display: 'flex' }}>
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
            <TTCard
              title={'Торгово-развлкательный центр'}
              description={
                'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
              }
              cover={<Image alt="123" width={400} height={320} src="/assets/doneProject.png" />}
            />
          </Space>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </div>
  );
};
export default doneproject;
