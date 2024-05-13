import React, { useEffect, useState } from 'react';
import { Col, Image, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { TTCard } from '../TTCard/TTCard';

import style from './TTReleaseProject.module.scss'

const { Title, Text } = Typography;

export const ReleaseProject = () => {
  const [widthState, setWidthState] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setWidthState(416)
  },[widthState])


  const search = HandleSearchAssets(router.pathname);

  return (
    <Row className={`${style.wrapper}`}>
      <Space direction="vertical">
        <Title level={2}>Реализованные проекты</Title>
        {/* нужно придумать как обновлять проекты в зависимости от страницы МБ БЕК?  */}
        <Text>{search.name}</Text>

        <Space direction="horizontal">
          <Row gutter={[16, 16]}>
          <Col span={8}>
            <TTCard
              title={'Торгово-развлкательный центр “Океания”, г. Санкт-Петербург'}
              description={'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'}
              cover={
                <Image
                  alt="123"
                  width={416}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              }
            />
          </Col>
          <Col span={8}>
            <TTCard
              title={'Новоивановская набережная, г. Москва'}
              description={'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'}
              cover={
                <Image
                  alt="123"
                  width={416}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              }
            />
          </Col>
          <Col span={8}>
            <TTCard
              title={'Новоивановская набережная , г. Москва'}
              description={'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'}
              cover={
                <Image
                  alt="123"
                  width={416}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              }
            />
          </Col>
          </Row>
        </Space>
      </Space>
    </Row>
  );
};
