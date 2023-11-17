import React from 'react';
import { Col, Image, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { TTCard } from '../TTCard/TTCard';

import style from './TTReleaseProject.module.scss'
// import Link from 'next/link';

const { Title, Text, Link } = Typography;

export const ReleaseProject = () => {
  const router = useRouter();

  const search = HandleSearchAssets(router.pathname);

  return (
    
    <Row className={`${style.wrapper}`}>
      <Col span={24}>
      {/* <Space direction="vertical"> */}
        <Title className={`${style.mainTitle}`} level={2}>Реализованные проекты</Title>
        {/* нужно придумать как обновлять проекты в зависимости от страницы МБ БЕК?  */}
        <Text className={`${style.subTitle}`}>{search.name}</Text>

        {/* <Space direction="horizontal"> */}
        <Row gutter={[16, 16]} className={`${style.wrapperCard}`}>
          {[1, 2, 3].map((item) => {
           return(
              <Col key={item} span={8}>
              <TTCard
                title={'Торгово-развлкательный центр “Океания”, г. Санкт-Петербург'}
                description={'Инженерные изыскания, проектирование водоснабжения и канализации Инженерные изыскания, проектирование Водоснабжения и канализации'}
                cover={
                  <Image
                    alt="123"
                    // width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                }
              />
            </Col> 
          )})}   
        </Row>
        <Space>
          <Link href="/doneproject" className={`${style.doneProject}`}>Все проекты</Link>
        </Space>
      {/* </Space> */}
      {/* </Space> */}
      </Col>
    </Row>
  );
};
