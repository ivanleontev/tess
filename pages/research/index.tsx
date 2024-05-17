import React from 'react';
import { TTDirectionsInfo } from '@/components/TTDirectionsInfo/TTDirectionsInfo';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';
import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { Row, Col, Space } from 'antd';
import { DirectionStaticHelpersWater } from 'common/DirectionStaticHelpers/DirectionStaticHelpersWater';

const Research = () => {
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
              items={DirectionStaticHelpersWater.tabsName.map((item, index) => {
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
      </div>
    </>
  );
};

export default Research;
