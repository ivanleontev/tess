import React from 'react';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import { TTDirectionsInfo } from '@/components/TTDirectionsInfo/TTDirectionsInfo';
import { HelperReserch } from 'common/DirectionStaticHelpers';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { ReleaseProject } from '@/components/TTReleaseProject/TTReleaseProject';
import { TTMainBaner } from '@/components/TTMainBaner/TTMainBaner';
import { Row, Col, Space } from 'antd';


const Research = () => {
  const router = useRouter();

  // console.log(router.pathname);

  const search = HandleSearchAssets(router.pathname);

  // const tabItem = HelperReserch.tabsName.map((item) => {
  //   return {
  //     label: item,
  //     key: item,
  //     children: (
  //       <>
  //         {HelperReserch.tabsArticle.tabsArticleTitle}
  //         {HelperReserch.tabsArticle.tabsArticleDescription}
  //         <TTCollapse
  //           data={[
  //             {
  //               title: '123',
  //               text: '123',
  //             },
  //             {
  //               title: '321',
  //               text: '321',
  //             },
  //           ]}
  //         />
  //       </>
  //     ),
  //   };
  // });

  return (
    <div>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png" alt="" /> */}
      {/* <Image src={search?.logoUrl} alt="Picture of the author" /> */}
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

export default Research;
