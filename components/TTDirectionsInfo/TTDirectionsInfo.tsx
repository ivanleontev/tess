import { Row, Col } from 'antd';
import React from 'react';

import style from './styles.module.scss';

type dataType = {
  title: string;
  description: string;
};
interface TTDirectionsInfo {
  data: {
    title: string;
    description: string;
  };
}

// TODO: типизировать
export const TTDirectionsInfo = ({ data }: any) => {
  return (
    <Row className={`${style.wrapper}`}>
      <Col>
        {data.map((item: dataType) => {
          const { title, description } = item;
          return (
            // TODO MEDIA
            <Col key={title}>
              <h3 className={`${style.title}`}>{title}</h3>
              <p className={`${style.description}`}>{description}</p>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};
