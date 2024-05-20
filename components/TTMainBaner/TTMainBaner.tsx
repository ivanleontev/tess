import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import { Col, Row, Space } from 'antd';
import { Heading1, Heading2 } from '../TTHeadings/TTHeadings';
import { TTBreadcrumb } from '../TTBreadcrumb/TTBreadcrumb';
import Image from 'next/image';

import style from './TTMainBaner.module.scss';
import { TTButton } from '../TTButton/TTButton';

export const TTMainBaner = () => {
  const router = useRouter();
  const search = HandleSearchAssets(router.pathname);

  const routes = [
    {
      path: '',
      breadcrumbName: 'Главная',
    },
    {
      path: '/transit-settlement',
      breadcrumbName: search.name,
    },
  ];

  return (
    <>
      <TTBreadcrumb routes={routes} />
      <Row className={`${style.TTMainBanerWrapper}`}>
        <Col span={12} className={`${style.TTMainBanerWrapper__leftBlock}`}>
          <Space direction='vertical' className={style.TTMainBanerWrapper__leftBlockText}>
            <Heading2 label="полевые работы" size={32} />
            <Heading1 label={search.name} size={12} />
            <Heading2 label="Подготовим расчет стоимости по ТЗ в течение 1 рабочего дня" />
          </Space>
          <Space style={{ marginTop: 16 }}>
            <TTButton isColorBorder="orangeFull" text={'Отправить ТЗ'} />
            <TTButton isColorBorder="orangeBorder" text={'Скачать перезентацию'} />
          </Space>
        </Col>
        <Col span={12}>
          <Image
            src={search.illistrationUrl}
            alt="Picture of the author"
            width={750}
            height={500}
            //   objectFit="contain"
          />
        </Col>
      </Row>
    </>
  );
};
