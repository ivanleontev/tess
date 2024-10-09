import { Space, Typography } from 'antd';
import React, { useState } from 'react';

import style from './TTMainDirection.module.scss';
import Link from 'next/link';

interface TTMainDirectionType {
  icon: React.ReactNode;
  iconHover: React.ReactNode;
  title: string;
  text: string;
  link: string;
}
const { Text } = Typography;

export const TTMainDirection = ({ icon, iconHover, title, text, link, ...props }: TTMainDirectionType) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Link href={link}>
      <Space
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        className={`${style.direction_card}`}
        {...props}
      >
        {mouseOver ? iconHover : icon}
        <Space direction="vertical" align="start" size={6} style={{ marginLeft: 24 }}>
          <Text className={`${style.direction_title}`}>{title}</Text>
          <Text className={`${style.direction_text}`}>{text}</Text>
        </Space>
      </Space>
    </Link>
  );
};
