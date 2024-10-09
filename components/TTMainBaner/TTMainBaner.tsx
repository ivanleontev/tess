/* eslint-disable @next/next/no-img-element */
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
    <div className={style.wrapperbaner}>
      <TTBreadcrumb routes={routes} />
      <Row className={`${style.TTMainBanerWrapper}`}>
        <Col span={2} />
        <Col span={10} className={`${style.TTMainBanerWrapper__leftBlock}`}>
          <Space direction="vertical">
            <Space direction="vertical" size={16} className={style.TTMainBanerWrapper__leftBlockText}>
              <span className={style.heading1}>полевые работы</span>
              <span className={style.heading2}>{search.name}</span>
              <span className={style.heading3}>Подготовим расчет стоимости по ТЗ в течение 1 рабочего дня</span>
            </Space>
            <Space style={{ marginTop: 16 }}>
              <TTButton isColorBorder="orangeFull" text={'Отправить ТЗ'} />
              <TTButton isColorBorder="orangeBorder" text={'Скачать перезентацию'} />
            </Space>
          </Space>
        </Col>
        <Col span={10}>
          <img
            src={search.illistrationUrl}
            alt="Picture of the author"
            // style={{ width: '100%' }}
            // style={{ position: 'absolute', height: '350px', position: 'absolute', top: '-50px' }}
          />
        </Col>
        <Col span={2} />
      </Row>
    </div>
  );
};
