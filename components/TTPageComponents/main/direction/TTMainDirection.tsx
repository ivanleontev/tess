import { Space, Typography } from 'antd';
import React from 'react';

import style from './TTMainDirection.module.scss';

interface TTMainDirectionType {
  icon: React.ReactNode;
  title: string;
  text: string;
}
const { Text } = Typography;

export const TTMainDirection = ({ icon, title, text, ...props }: TTMainDirectionType) => {
  return (
    <Space className={`${style.direction_card}`} {...props}>
      {icon}
      <Space direction="vertical">
        <Text className={`${style.direction_title}`}>{title}</Text>
        <Text className={`${style.direction_text}`}>{text}</Text>
      </Space>
    </Space>
  );
};
