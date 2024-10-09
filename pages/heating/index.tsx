import { TTButton } from '@/components/TTButton/TTButton';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { TTDirectionsInfo } from '@/components/TTDirectionsInfo/TTDirectionsInfo';
import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { Row, Col, Space } from 'antd';
import { DirectionStaticHelpersWater } from 'common/DirectionStaticHelpers/DirectionStaticHelpersWater';
import React from 'react';

const heating = () => {
  return (
    <>
      <TTMainBaner />
      <div
        style={{
          padding: '0px 64px',
          backgroundImage: 'url(./assets/Right24.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 220px right ',
        }}
      >
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Space direction="horizontal" align="center" style={{ padding: '0 150px' }}>
              <TTDirectionsInfo
                data={[
                  {
                    title: DirectionStaticHelpersWater.static.descriptionLeft.title,
                    description: DirectionStaticHelpersWater.static.descriptionLeft.description,
                  },
                ]}
              />
              <TTDirectionsInfo
                data={[
                  {
                    title: DirectionStaticHelpersWater.static.descriptionCenter.title,
                    description: DirectionStaticHelpersWater.static.descriptionCenter.description,
                  },
                ]}
              />
              <TTDirectionsInfo
                data={[
                  {
                    title: DirectionStaticHelpersWater.static.descriptionRight.title,
                    description: DirectionStaticHelpersWater.static.descriptionRight.description,
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TTTabs
              defaultActiveKey="1"
              items={DirectionStaticHelpersWater.tabsName.map((item: any) => {
                return {
                  ...item,
                  children: (
                    <TTCollapse
                      defaultActiveKey={0}
                      title={item.heading}
                      desc={item.description}
                      data={item.collapse}
                    />
                  ),
                };
              })}
            />
          </Col>
        </Row>
        <ReleaseProject />
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 76 }}>
            <Space size={16}>
              <TTButton isColorBorder="orangeFullWhite" text={'Отправить тз'} />
              <TTButton isColorBorder="orangeBorderWhite" text={'Скачать перезентацию'} />
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default heating;
