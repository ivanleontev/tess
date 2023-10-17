import { Heading1, Heading2 } from '@/components/TTHeadings/TTHeadings';
import { Col, Row } from 'antd';
import React from 'react';

export const TTMaps = () => {
  return (
    <Row>
      <Col span={8}>
        <Heading2 label={'География проектов'} />
      </Col>
      <Col span={16}></Col>
    </Row>
  );
};
