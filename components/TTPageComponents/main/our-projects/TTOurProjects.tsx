/* eslint-disable @next/next/no-img-element */
import { TTButton } from '@/components/TTButton/TTButton';
import { Heading1, Heading2, TextHeading } from '@/components/TTHeadings/TTHeadings';
import { Col, Row, Space, Typography } from 'antd';
import { OurProjects } from 'common/MainPage/OurProjects';
import Image from 'next/image';

import style from './TTOurProjects.module.scss';
import Link from 'next/link';
import { SidebarContext } from 'pages/_app';
import { useContext } from 'react';

const { Text } = Typography;

export const TTOurProjects = () => {
  const { isOpen, onClick } = useContext<any>(SidebarContext);

  const ourProjects = OurProjects();
  return (
    <div className={`${style.wrapperOurProject}`} style={{ padding: '0px 64px' }}>
      <div style={{ marginBottom: 64 }}>
        <Heading2 label="Наши проекты" size={32} color="#232247" />
      </div>
      {ourProjects.map((item, key) => {
        if (key === 1) {
          return (
            <Row key={key + item.tag} style={{ marginBottom: 104 }}>
              <Col span={2} />
              <Col span={8}>
                <Space direction="vertical" size={32}>
                  <Space direction="vertical">
                    <TextHeading label={item.tag} />
                    <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                  </Space>
                  <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                  <TTButton onClick={() => onClick(true)} isColorBorder="blueFull" text="Получить консультацию" />
                </Space>
              </Col>
              <Col span={2} />
              <Col span={8} style={{ minHeight: 430 }}>
                <img
                  src={item.imageUrl}
                  alt="Picture of the author"
                  // TODO: fix image size
                  // layout="fill"
                  // objectFit="contain"
                  width={'100%'}
                />
              </Col>
              <Col span={2} />
            </Row>
          );
        }
        return (
          <Row key={key + item.tag}>
            <Col span={2} />
            <Col
              span={8}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: 14,
                marginBottom: 104,
                minHeight: 430,
              }}
            >
              <img
                width={'100%'}
                src={item.imageUrl}
                alt="Picture of the author"
                //  layout="fill" objectFit="contain"
              />
            </Col>
            <Col span={2} />
            <Col span={8}>
              <Space direction="vertical" size={32}>
                <Space direction="vertical">
                  <TextHeading label={item.tag} />
                  <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                </Space>
                <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                <TTButton onClick={() => onClick(true)} isColorBorder="blueFull" text="Получить консультацию" />
              </Space>
            </Col>
            <Col span={2} />
          </Row>
        );
      })}
      <Row>
        <Col span={24} className={style.LinkAllProject}>
          <Link href={'/doneproject'}>Все проекты</Link>
        </Col>
      </Row>
    </div>
  );
};
