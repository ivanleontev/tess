import { Card } from 'antd';
import React, { CSSProperties } from 'react';

import styles from './styles.module.scss';

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
    className={styles.card}
    bodyStyle={{
      padding: 0,
    }}
  >
    {cover}
    <Meta title={title} description={description} style={{ margin: 0, padding: 16 }} />
  </Card>
);
