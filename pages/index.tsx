import { TTDowload } from '@/components/Icons';
import { TTButton } from '@/components/TTButton/TTButton';
import { Heading1, Heading2 } from '@/components/TTHeadings/TTHeadings';
import { TTCommand } from '@/components/TTPageComponents/main/command/TTCommand';
import { TTMainDirection } from '@/components/TTPageComponents/main/direction/TTMainDirection';
import { TTMaps } from '@/components/TTPageComponents/main/maps/TTMaps';
import { TTOurProjects } from '@/components/TTPageComponents/main/our-projects/TTOurProjects';
import { TTSlider } from '@/components/TTPageComponents/main/slider/TTSlider';
import { Col, Row, Space } from 'antd';
import { Directions } from 'common/MainPage/Directions';
import type { NextPage } from 'next';

import Image from 'next/image';

import style from './styles.module.scss'

const Home: NextPage = (context) => {
  const direction = Directions();

  return (
    <>
      <Row className={`${style.baner}`}>
        <Col span={2} />
        {/* <Space direction="vertical" align="center"> */}
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
        {/* </Space> */}
        <Col span={12}>
          <Image
            src="/assets/illustration/MainIllustration.svg"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="contain"
          />
        </Col>
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
      <TTMaps />
      <TTSlider />
      <TTCommand />
      <Row>
        <Col span={24}>
          <Space direction="horizontal">
            <TTButton text={'Получить консультацию'} />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Home;
