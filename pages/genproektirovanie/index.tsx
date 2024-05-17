import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
import { Heading2 } from '@/components/TTHeadings/TTHeadings';
import { Row, Col, Typography, Space } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import { GenAutorControl, GenPD, GenProgect, GenRD, GenTU, GenTZ } from '@/components/Icons';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { Genproektirovanie } from 'common/DirectionStaticHelpers/Genproektirovanie';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';

import style from './genproektirovanie.module.scss';

const { Text } = Typography;

const routes: Route[] = [
  {
    path: '',
    breadcrumbName: 'Главная',
  },
  {
    path: '',
    breadcrumbName: 'Генеральный проектировщик',
  },
];

const genproektirovanie = () => {
  return (
    <div className={style.wrapper}>
      <TTBreadcrumb routes={routes} />
      <Row>
        <Col span={12} className={style.genproektirovanieLeftContent}>
          <Space direction="vertical" style={{ maxWidth: 400, margin: 0, padding: 0 }}>
            <Heading2 label="полевые работы" size={32} />
            <Text className={style.genproektirovanieLeftContentText}>
              Проведение комплекных мероприятий может включать разные этапы и предполагает последовательное выплонедие
              следующих ШАГов
            </Text>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenTZ />
              <Space direction="vertical">
                <Text>ШАГ 1</Text>
                <Text>Получаем вводные данные, составляем техническое задание и эскизный проект</Text>
              </Space>
            </Space>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenTU />
              <Space direction="vertical">
                <Text>ШАГ 2</Text>
                <Text>Получаем от ресурсоснабжающих организаций технические условия</Text>
              </Space>
            </Space>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenPD />
              <Space direction="vertical">
                <Text>ШАГ 3</Text>
                <Text>Разрабатываем пректную документацию (ПД) и проходим экспертизу в надзорных органах </Text>
              </Space>
            </Space>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenRD />
              <Space direction="vertical">
                <Text>ШАГ 4</Text>
                <Text>Разрабатываем рабочую документацию (РД) по направлениям проектирования</Text>
              </Space>
            </Space>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenAutorControl />
              <Space direction="vertical">
                <Text>ШАГ 5</Text>
                <Text>Осуществляем авторский надзор на всех этапах строительства, находимся на объекте</Text>
              </Space>
            </Space>
            <Space className={style.genproektirovanieLeftContentItem}>
              <GenProgect />
              <Space direction="vertical">
                <Text>ШАГ 6</Text>
                <Text>Получаем заключение надзорных органов о соответствии и вводим объект в эксплуатацию</Text>
              </Space>
            </Space>
          </Space>
        </Col>
        <Col span={12}>
          <Image
            src="/assets/TTMainGenproekt.png" // Route of the image file
            height={584} // Desired size with correct aspect ratio
            width={528} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TTTabs
            defaultActiveKey="1"
            items={Genproektirovanie.tabsName.map((item, index) => {
              return {
                ...item,
                children: <TTCollapse defaultActiveKey={0} data={item.collapse} />,
              };
            })}
          />
        </Col>
      </Row>
      {/* <TTDrawer visible={true} /> */}
      <ReleaseProject />
    </div>
  );
};

export default genproektirovanie;
