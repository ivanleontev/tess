import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import Image from 'next/image';

import style from './TTmaps.module.scss';

const { Text } = Typography;

export const TTMaps = () => {
  return (
    <Row className={style.wrapperMap}>
      <Col span={8} style={{ display: 'flex' }}>
        <Space
          direction="vertical"
          size={50}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        >
          <Text className={style.Title}>География проектов</Text>
          <Space direction="vertical" size={45} className="12321">
            <Space direction="vertical">
              <Text className={style.subTitle}>Во всех регионах России </Text>
              <Text className={style.subText}>
                Реализованы наши <br />
                проекты
              </Text>
            </Space>
            <Space direction="vertical">
              <Text className={style.subTitle}>В любую точку страны</Text>
              <Text className={style.subText}>
                Выезжают наши <br />
                специалисты
              </Text>
            </Space>
            <Space direction="vertical">
              <Text className={style.subTitle}>На следующий день</Text>
              <Text className={style.subText}>
                Специалист готов <br />
                выехать в регион
              </Text>
            </Space>
          </Space>
        </Space>
      </Col>
      <Col span={16}>
        <Image
          className={style.headerSearch}
          src="/assets/MainMap.svg"
          height={500}
          width={827}
          alt="Picture of the author"
        />
      </Col>
    </Row>
  );
};
