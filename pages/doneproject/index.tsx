/* eslint-disable @next/next/no-img-element */
import { Typography, Col, Row, Space, Pagination } from 'antd';
import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { TTDoneProjectFilters } from '@/components/TTDoneProjectFilters/TTDoneProjectFilters';
import { TTCard } from '@/components/TTCard/TTCard';
import { TTButton } from '@/components/TTButton/TTButton';
import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';

const { Text, Title } = Typography;

const routes: Route[] = [
  {
    path: '',
    breadcrumbName: 'Главная',
  },
  {
    path: '',
    breadcrumbName: 'Реализованные проекты',
  },
];

const doneproject = () => {
  return (
    <>
      <TTBreadcrumb routes={routes} style={{ background: 'white', padding: '8px 64px' }} />
      <Row className={style.doneProjectBaner}>
        <Col span={2} />
        <Col span={8}>
          <Space
            direction="horizontal"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div>
              <Title className={style.doneProjectTitle}>Реализованные проекты</Title>
              <Text className={style.doneProjectDescription}>
                Пройдя на страницу проекта вы узнаете детали проекта: какое было ТЗ, как прорабатывали и принимали
                решения на какие международные и российские практики ориентировались, как реализовывали, с какими
                проблемами столкнулись и как их решали
              </Text>
            </div>
            <TTButton isColorBorder="blueFull" text={'Получить консультацию'} />
          </Space>
        </Col>
        <Col span={2} />
        <Col span={8}>
          <Space>
            <img src="/assets/doneProject.png" alt="Picture of the author" />
          </Space>
        </Col>
        <Col span={2} />
      </Row>
      <div className={style.doneProjectWrapper}>
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
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginTop: 64, marginBottom: 75 }}>
            <TTButton isColorBorder="blueFull" text={'Получить консультацию'} />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default doneproject;
