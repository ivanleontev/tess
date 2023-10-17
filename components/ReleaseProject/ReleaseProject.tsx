import React from 'react';
import { Image, Row, Space, Typography } from 'antd';

const { Title, Text } = Typography;

export const ReleaseProject = () => {
  return (
    <Row>
      <Title level={2}>Реализованные проекты</Title>
      {/* нужно придумать как обновлять проекты в зависимости от страницы МБ БЕК?  */}
      <Text>Электроснабжение и автоматика</Text>

      <Space>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
    </Row>
  );
};
