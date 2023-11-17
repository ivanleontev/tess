import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { TTDirectionsInfo } from '@/components/TTDirectionsInfo/TTDirectionsInfo';
import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { Row, Col, Space } from 'antd';
import { HelperReserch } from 'common/DirectionStaticHelpers';
import React from 'react';

const light = () => {
  return (
    <div>
      
      <TTMainBaner />
      <Row>
        <Col span={24}>
          <Space direction="horizontal" align='center' style={{padding: '0 150px'}}>
            <TTDirectionsInfo
              data={[
                {
                  title: HelperReserch.static.descriptionLeft.title,
                  description: HelperReserch.static.descriptionLeft.description,
                },
              ]}
            />
            <TTDirectionsInfo
              data={[
                {
                  title: HelperReserch.static.descriptionCenter.title,
                  description: HelperReserch.static.descriptionCenter.description,
                },
              ]}
            />
                <TTDirectionsInfo
              data={[
                {
                  title: HelperReserch.static.descriptionRight.title,
                  description: HelperReserch.static.descriptionRight.description,
                },
              ]}
            />
            </Space>
        </Col>
      </Row>
      {/* <TTTabs items={tabItem} /> */}
      <Row>
        <Col span={24} style={{padding: '0 64px'}}>
          <TTTabs defaultActiveKey="1" items={HelperReserch.tabsName.map((item, index) => {
            return {
              ...item,               
              children: <TTCollapse 
              defaultActiveKey={0} 
              data={item.collapse} 
              dataArticleTitle={HelperReserch.tabsName[0].tabsArticle?.tabsArticleTitle} 
              dataArticleDescription={HelperReserch.tabsName[0].tabsArticle?.tabsArticleDescription}
              />
            }
          })} />
        </Col>
      </Row>
      <ReleaseProject />
    </div>
  );
};
export default light;
