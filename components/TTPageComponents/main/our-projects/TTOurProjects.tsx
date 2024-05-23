import { TTButton } from '@/components/TTButton/TTButton';
import { Heading1, Heading2, TextHeading } from '@/components/TTHeadings/TTHeadings';
import { Col, Row, Space, Typography } from 'antd';
import { OurProjects } from 'common/MainPage/OurProjects';
import Image from 'next/image';

import style from './TTOurProjects.module.scss';

const { Text } = Typography;

export const TTOurProjects = () => {
  const ourProjects = OurProjects();
  return (
    <div style={{ padding: '0px 64px' }}>
      <div style={{ marginBottom: 64 }}>
        <Heading2 label="Наши проекты" size={32} color="#232247" />
      </div>
      {ourProjects.map((item, key) => {
        if (key === 1) {
          return (
            <Row key={key + item.tag} style={{ marginBottom: 104 }}>
              <Col span={2} />
              <Col span={10}>
                <Space direction="vertical" size={32}>
                  <Space direction="vertical">
                    <TextHeading label={item.tag} />
                    <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                  </Space>
                  <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                  <TTButton isColorBorder="blueFull" text="Получить консультацию" />
                </Space>
              </Col>
              <Col span={10}>
                <Image
                  src={item.imageUrl}
                  alt="Picture of the author"
                  // TODO: fix image size
                  width={700}
                  height={600}
                  objectFit="contain"
                  // style={{ marginLeft: 22 }}
                />
              </Col>
              <Col span={2} />
            </Row>
          );
        }
        return (
          <Row key={key + item.tag}>
            <Col span={2} />
            <Col span={10} style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 14, marginBottom: 104 }}>
              <Image
                src={item.imageUrl}
                alt="Picture of the author"
                // TODO: fix image size
                width={700}
                height={600}
                objectFit="contain"
                // style={{ marginRight: 32 }}
              />
            </Col>
            <Col span={10}>
              <Space direction="vertical" size={32}>
                <Space direction="vertical">
                  <TextHeading label={item.tag} />
                  <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                </Space>
                <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                <TTButton isColorBorder="blueFull" text="Получить консультацию" />
              </Space>
            </Col>
            <Col span={2} />
          </Row>
        );
      })}
    </div>
  );
};
