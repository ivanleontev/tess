import { Row, Col } from 'antd';
import React from 'react';

interface TTDirectionsInfo {
  title: string;
  description: string;
}

export const TTDirectionsInfo = ({ data }: TTDirectionsInfo[]) => {
  return (
    <Row>
      {data.map((item) => {
        const { title, description } = item;
        return (
          <Col key={title} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Col>
        );
      })}
    </Row>
  );
};
