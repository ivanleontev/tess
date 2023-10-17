import { TTButton } from '@/components/TTButton/TTButton';
import { Heading1, TextHeading } from '@/components/TTHeadings/TTHeadings';
import { Col, Row, Space, Typography } from 'antd';
import { OurProjects } from 'common/MainPage/OurProjects';
import React from 'react';

import style from './TTOurProjects.module.scss';

const { Text } = Typography;

export const TTOurProjects = () => {
  const ourProjects = OurProjects();
  return (
    <>
      <Row>
        <Heading1 label="Наши проекты" />
      </Row>
      {ourProjects.map((item, key) => {
        if (key === 1) {
          return (
            <Row key={key + item.tag}>
              <Col span={2} />

              <Col span={10}>
                <Space direction="vertical">
                  <TextHeading label={item.tag} />
                  <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                  <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                  <TTButton text="Получить консультацию" />
                </Space>
              </Col>
              <Col span={10}>image</Col>
              <Col span={2} />
            </Row>
          );
        }
        return (
          <Row key={key + item.tag}>
            <Col span={2} />
            <Col span={10}>image</Col>
            <Col span={10}>
              <Space direction="vertical">
                <TextHeading label={item.tag} />
                <Text className={`${style.TTOurProjectsTitle}`}>{item.title}</Text>
                <Text className={`${style.TTOurProjectsText}`}>{item.text}</Text>
                <TTButton text="Получить консультацию" />
              </Space>
            </Col>
            <Col span={2} />
          </Row>
        );
      })}
    </>
  );
};
