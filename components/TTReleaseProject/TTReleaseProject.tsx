import React, { useEffect, useState } from 'react';
import { Col, Image, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { TTCard } from '../TTCard/TTCard';

import style from './TTReleaseProject.module.scss';
import Link from 'next/link';

const { Title, Text } = Typography;

export const ReleaseProject = () => {
  const [widthState, setWidthState] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = (window.innerWidth - 64 * 2 - 32 * 2) / 3;
      setWidthState(newHeight);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const search = HandleSearchAssets(router.pathname);

  return (
    // <Link href={''}>
    <Row
      className={`${style.wrapper}`}
      style={{
        backgroundImage: 'url(./assets/Left24.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
      }}
    >
      <Space direction="vertical">
        <Title level={2}>Реализованные проекты</Title>
        {/* нужно придумать как обновлять проекты в зависимости от страницы МБ БЕК?  */}
        <Text>{search.name}</Text>

        <Space direction="horizontal">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <TTCard
                title={'Торгово-развлкательный центр “Океания”, г. Санкт-Петербург'}
                description={
                  'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
                }
                cover={
                  <Image
                    alt="123"
                    width={widthState}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                }
              />
            </Col>
            <Col span={8}>
              <TTCard
                title={'Новоивановская набережная, г. Москва'}
                description={
                  'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
                }
                cover={
                  <Image
                    alt="123"
                    width={widthState}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                }
              />
            </Col>
            <Col span={8}>
              <TTCard
                title={'Новоивановская набережная , г. Москва'}
                description={
                  'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'
                }
                cover={
                  <Image
                    alt="123"
                    width={widthState}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                }
              />
            </Col>
          </Row>
        </Space>
      </Space>
    </Row>
    // </Link>
  );
};
