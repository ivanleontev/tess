import { TTDowload } from '@/components/Icons/Icons';
import { TTButton } from '@/components/TTButton/TTButton';
import { Heading1, Heading2 } from '@/components/TTHeadings/TTHeadings';
import { TTMainDirection } from '@/components/TTPageComponents/main/direction/TTMainDirection';
import { TTOurProjects } from '@/components/TTPageComponents/main/our-projects/TTOurProjects';
import { Col, Row, Space } from 'antd';
import { Directions } from 'common/MainPage/Directions';
import type { NextPage } from 'next';

import styles from './index.module.css';

const Home: NextPage = (context) => {
  const direction = Directions();

  return (
    <>
      <Row style={{ height: 500, background: '#232247' }}>
        <Col span={2} />
        <Space direction="vertical" align="center">
          <Col span={10}>
            <Heading1 label={'Полный цикл работ по проектированию'} />
            <Heading2
              label={
                'Генеральное проектирование включает инженерные изыскания, конструктивное проектирование, проектирование инженерных коммуникаций и авторский надзор Скачать презентацию о компании '
              }
            />
            <Heading2 icon={<TTDowload />} label={'Скачать презентацию о компании '} />
            <TTButton text={'Получить консультацию'} />
          </Col>
        </Space>
        <Col span={12}></Col>
      </Row>
      <Row>
        {direction.map((item, key) => {
          return (
            <Col key={key} span={8}>
              {item.map((item) => {
                return (
                  <TTMainDirection
                    key={item.text}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </Col>
          );
        })}
      </Row>
      <TTOurProjects />
    </>
  );
};

export default Home;
