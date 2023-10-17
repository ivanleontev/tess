import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';
import { Heading1, Heading2 } from '../TTHeadings/TTHeadings';
import { TTBreadcrumb } from '../TTBreadcrumb/TTBreadcrumb';
import Image from 'next/image';

import style from './TTMainBaner.module.scss';

export const TTMainBaner = () => {
  const router = useRouter();
  const search = HandleSearchAssets(router.pathname);



  const routes = [
    {
      path: "",
      breadcrumbName: 'Составные направления',
    },
    {
      path: "/transit-settlement",
      breadcrumbName: 'Транзитные города',
    },
  ]
  

  return (
    <Row className={`${style.TTMainBanerWrapper}`}>
      <Col span={12} className={`${style.TTMainBanerWrapper__leftBlock}`}>
        <TTBreadcrumb routes={routes}/>
        <Heading2 label="полевые работы" size={32}/>
        <Heading1 label={search.name} size={12}/>
        <Heading2 label="Подготовим расчет стоимости по ТЗ в течение 1 рабочего дня" />
      </Col>
      <Col span={12}>
        <Image
          src={search.illistrationUrl}
          alt="Picture of the author"
          width={600}
          height={500}
          //   objectFit="contain"
        />
      </Col>
    </Row>
  );
};
