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
      <Row>
        <Col span={24}>
          <Space direction="horizontal" align='center' style={{padding: '0 150px'}}>
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
        <Col span={24} style={{padding: '0 64px'}}>
          <TTTabs defaultActiveKey="1" items={DirectionStaticHelpersWater.tabsName.map((item, index) => {
            return {
              ...item,
              children: <TTCollapse defaultActiveKey={0} data={item.collapse}/>
            }
          })} />
        </Col>
      </Row>
      <ReleaseProject />
    </>
  )
};
export default heating;
