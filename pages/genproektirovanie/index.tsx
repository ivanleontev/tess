import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
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
      <TTBreadcrumb routes={routes} style={{ background: 'white', padding: '8px 0px' }} />
      <Row style={{ marginTop: 52 }}>
        <Col span={12} className={style.genproektirovanieLeftContent}>
          <Space direction="vertical" style={{ maxWidth: 500, margin: 0, padding: 0 }}>
            <Text className={style.genproektirovanieLeftContentTitle}>Генеральный проектировщик</Text>
            <Text className={style.genproektirovanieLeftContentText}>
              Проведение комплекных мероприятий может включать разные этапы и предполагает последовательное <br />
              выплонедие следующих шагов
            </Text>
            <div style={{ maxWidth: 400 }}>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenTZ />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 1</Text>
                  <Text className={style.descriptionStep}>
                    Получаем вводные данные, составляем техническое задание и эскизный проект
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenTU />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 2</Text>
                  <Text className={style.descriptionStep}>
                    Получаем от ресурсоснабжающих организаций технические условия
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenPD />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 3</Text>
                  <Text className={style.descriptionStep}>
                    Разрабатываем пректную документацию (ПД) и проходим экспертизу в надзорных органах{' '}
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenRD />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 4</Text>
                  <Text className={style.descriptionStep}>
                    Разрабатываем рабочую документацию (РД) по направлениям проектирования
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenAutorControl />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 5</Text>
                  <Text className={style.descriptionStep}>
                    Осуществляем авторский надзор на всех этапах строительства, находимся на объекте
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem}>
                <GenProgect />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 6</Text>
                  <Text className={style.descriptionStep}>
                    Получаем заключение надзорных органов о соответствии и вводим объект в эксплуатацию
                  </Text>
                </Space>
              </Space>
            </div>
          </Space>
        </Col>
        <Col span={12}>
          <Image src="/assets/TTMainGenproekt.png" height={584} width={528} alt="Your Name" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TTTabs
            defaultActiveKey="1"
            items={Genproektirovanie.tabsName.map((item, index) => {
              return {
                ...item,
                children: (
                  <TTCollapse
                    defaultActiveKey={0}
                    data={item.collapse}
                    heading={item.heading}
                    description={item.description}
                  />
                ),
              };
            })}
          />
        </Col>
      </Row>
      <ReleaseProject />
    </div>
  );
};

export default genproektirovanie;
