import { Card } from 'antd';
import React, { CSSProperties } from 'react';

const { Meta } = Card;

interface CardProps {
  style: CSSProperties;
  cover: React.ReactNode;
  title: string;
  description: string;
}

export const TTCard = ({ style, cover, title, description }: CardProps) => (
  <Card hoverable style={style} cover={cover}>
    <Meta title={title} description={description} />
  </Card>
);
