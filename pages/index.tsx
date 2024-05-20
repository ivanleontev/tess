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

import style from './styles.module.scss';
import { TTFlipCard } from '@/components/TTFlipCard/TTFlipCard';

const Home: NextPage = (context) => {
  const direction = Directions();

  return (
    <>
      <Row className={`${style.baner}`}>
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Heading1 label={'Полный цикл работ по проектированию'} />
          <Heading2
            label={
              'Генеральное проектирование включает инженерные изыскания, конструктивное проектирование, проектирование инженерных коммуникаций и авторский надзор Скачать презентацию о компании '
            }
          />
          <br />
          <a download href="/assets/PresentTess.pptx">
            <Heading2 icon={<TTDowload />} label={'Скачать презентацию о компании '} />
          </a>
          <br />
          <Space>
            <TTButton isColorBorder="blueBorder" text={'Получить консультацию'}/>
          </Space>
        </Col>
        <Col span={12}>
          <Image
            src="/assets/illustration/MainIllustration.svg"
            alt="Picture of the author"
            width={700}
            height={644}
            objectFit="contain"
          />
        </Col>
      </Row>
      <div className={style.backgroundImg} style={{ paddingTop: 112 }}>
        <Row className={`${style.wrapperPadding}`}>
          {direction.map((item, key) => {
            return (
              <Col key={key} span={8}>
                {item.map((item) => {
                  return <TTMainDirection key={item.text} icon={item.icon} title={item.title} text={item.text} />;
                })}
              </Col>
            );
          })}
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', padding: '0px 64px', marginBottom: 112 }}>
          <TTFlipCard />
        </Row>
      </div>
      <TTOurProjects />
      <TTMaps />
      <TTSlider />
      <TTCommand />
      <Row>
        <Col span={24}>
          <Space align="center" style={{ marginBottom: 80, display: 'flex', justifyContent: 'center' }}>
            <TTButton isColorBorder="blueFull" text={'Получить консультацию'} />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Home;
