import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
import { Row, Col, Typography, Space, Collapse } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import { GenAutorControl, GenPD, GenProgect, GenRD, GenTU, GenTZ, Download } from '@/components/Icons';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { Genproektirovanie } from 'common/DirectionStaticHelpers/Genproektirovanie';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';

import style from './genproektirovanie.module.scss';
import _ from 'lodash';
import { TTButton } from '@/components/TTButton/TTButton';

const { Text } = Typography;
const { Panel } = Collapse;

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
      <TTBreadcrumb routes={routes} style={{ background: 'white', padding: '8px 0px', maxWidth: '300px' }} />

      <Row style={{ marginTop: 52 }}>
        <Col span={2} />
        <Col span={10} className={style.genproektirovanieLeftContent}>
          <Space
            direction="vertical"
            style={{
              maxWidth: 500,
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Space direction="vertical">
              <Text className={style.genproektirovanieLeftContentTitle}>Генеральный проектировщик</Text>
              <Text className={style.genproektirovanieLeftContentText}>
                Проведение комплекных мероприятий может включать разные этапы и предполагает последовательное <br />
                выплонедие следующих шагов
              </Text>
            </Space>
            <div style={{ maxWidth: 400 }}>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenTZ />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 1</Text>
                  <Text className={style.descriptionStep}>
                    Получаем вводные данные, составляем техническое задание и эскизный проект
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenTU />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 2</Text>
                  <Text className={style.descriptionStep}>
                    Получаем от ресурсоснабжающих организаций технические условия
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenPD />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 3</Text>
                  <Text className={style.descriptionStep}>
                    Разрабатываем пректную документацию (ПД) и проходим экспертизу в надзорных органах{' '}
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenRD />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 4</Text>
                  <Text className={style.descriptionStep}>
                    Разрабатываем рабочую документацию (РД) по направлениям проектирования
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenAutorControl />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 5</Text>
                  <Text className={style.descriptionStep}>
                    Осуществляем авторский надзор на всех этапах строительства, находимся на объекте
                  </Text>
                </Space>
              </Space>
              <Space className={style.genproektirovanieLeftContentItem} size={16}>
                <GenProgect />
                <Space direction="vertical" size={0}>
                  <Text className={style.TitleStep}>ШАГ 6</Text>
                  <Text className={style.descriptionStep}>
                    Получаем заключение надзорных органов о соответствии и вводим объект в эксплуатацию
                  </Text>
                </Space>
              </Space>
            </div>
            <TTButton isColorBorder="blueFull" text={'Получить консультацию'} />
          </Space>
        </Col>
        <Col span={10}>
          <Image src="/assets/TTMainGenproekt.png" layout="fill" objectFit="contain" alt="Your Name" />
        </Col>
        <Col span={2} />
      </Row>
      <Row>
        <Col span={24}>
          <TTTabs
            defaultActiveKey="1"
            items={Genproektirovanie.tabsName.map((item) => {
              if (item.key === 3) {
                return {
                  ...item,
                  children: (
                    <Panel
                      key={_.uniqueId()}
                      style={{ marginLeft: 60 }}
                      header={
                        <>
                          <Space direction="vertical" style={{ maxWidth: '640px' }}>
                            <Space direction="vertical" style={{ marginBottom: 11 }} size={24}>
                              <Text className={style.HeadingCustomPanel} style={{ marginTop: 40, marginBottom: 11 }}>
                                Стоимость
                              </Text>
                              <Text className={style.TextCustom}>
                                Предоставляем предварительный расчет стоимости в течение 1-2 рабочих дней. Окончательная
                                стоимость работ определяется после согласования технического задания и фиксируется
                                в договорной документации
                              </Text>
                            </Space>
                            <Space direction="vertical" style={{ marginTop: 40 }} size={24}>
                              <Text style={{ marginBottom: 11 }} className={style.HeadingCustomPanel}>
                                Порядок оплаты
                              </Text>
                              <Text className={style.TextCustom}>
                                Формируем и направляем счет на оплату
                                <br />
                                в соотвествии с условиями договорной документации.
                                <br />
                                Оплату принимаем на расчетный счет.
                              </Text>
                            </Space>
                            <Space direction="vertical" style={{ marginTop: 40 }} size={24}>
                              <Space direction="horizontal">
                                <Text className={style.HeadingCustomPanel}>Реквизиты</Text>
                                <a href="/assets/requisites.pdf" download>
                                  <Download />
                                </a>
                              </Space>
                              <Space direction="vertical" size={4}>
                                <Text className={style.HeadingCustomPanelItem}>ООО “Тессеракт”</Text>
                                <Text className={style.HeadingCustomPanelItem}>ИНН 7703450987</Text>
                                <Text className={style.HeadingCustomPanelItem}>КПП 770301001</Text>
                                <Text className={style.HeadingCustomPanelItem}>р/с 40702810608760001234</Text>
                                <Text className={style.HeadingCustomPanelItem}>В АО "АЛЬФА-БАНК" г.Москва</Text>
                                <Text className={style.HeadingCustomPanelItem}>БИК 044525593</Text>
                                <Text className={style.HeadingCustomPanelItem}>К/сч 30101810200000000593</Text>
                              </Space>
                            </Space>
                          </Space>
                        </>
                      }
                    />
                  ),
                };
              }

              return {
                ...item,
                children: (
                  <TTCollapse
                    isList={item.isList}
                    defaultActiveKey={0}
                    data={item.collapse}
                    heading={item.heading}
                    description={item.description}
                    styleCustom={{ marginLeft: 60 }}
                  />
                ),
              };
            })}
          />
        </Col>
      </Row>
      <ReleaseProject />
      <Row>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 76, marginTop: 64 }}>
          <TTButton isColorBorder="blueFull" text={'Получить консультацию'} />
        </Col>
      </Row>
    </div>
  );
};

export default genproektirovanie;
