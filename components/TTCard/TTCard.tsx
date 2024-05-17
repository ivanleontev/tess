import { Card } from 'antd';
import React, { CSSProperties } from 'react';

const { Meta } = Card;

interface CardProps {
  style?: CSSProperties;
  cover: React.ReactNode;
  title: string;
  description: string;
}

export const TTCard = ({ style, cover, title, description, ...props }: CardProps) => (
  <Card
    bordered={false}
    style={style}
    cover={cover}
    // bodyStyle={{ margin: 0, padding: '26px 0px 0px 0px', maxWidth: 370 }}
  >
    <Meta title={title} description={description} style={{ margin: 0, padding: 0 }} />
  </Card>
);
