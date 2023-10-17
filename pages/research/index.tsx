import React from 'react';
import { HandleSearchAssets } from 'common/HandleSearchAssets';
import { useRouter } from 'next/router';
import { TTDirectionsInfo } from '@/components/TTDirectionsInfo/TTDirectionsInfo';
import { HelperReserch } from 'common/DirectionStaticHelpers';
import { TTTabs } from '@/components/TTTabs/TTTabs';
import { TTCollapse } from '@/components/TTCollapse/TTCollapse';
import { ReleaseProject } from '@/components/ReleaseProject/ReleaseProject';

const Research = () => {
  const router = useRouter();

  // console.log(router.pathname);

  const search = HandleSearchAssets(router.pathname);

  const tabItem = HelperReserch.tabsName.map((item) => {
    return {
      label: item,
      key: item,
      children: (
        <>
          {HelperReserch.tabsArticle.tabsArticleTitle}
          {HelperReserch.tabsArticle.tabsArticleDescription}
          <TTCollapse
            data={[
              {
                title: '123',
                text: '123',
              },
              {
                title: '321',
                text: '321',
              },
            ]}
          />
        </>
      ),
    };
  });

  return (
    <div>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png" alt="" /> */}
      {/* <Image src={search?.logoUrl} alt="Picture of the author" /> */}

      <TTDirectionsInfo
        data={[
          {
            title: HelperReserch.static.descriptionLeft.title,
            description: HelperReserch.static.descriptionLeft.description,
          },
          {
            title: HelperReserch.static.descriptionCenter.title,
            description: HelperReserch.static.descriptionCenter.description,
          },
          {
            title: HelperReserch.static.descriptionRight.title,
            description: HelperReserch.static.descriptionRight.description,
          },
        ]}
      />
      <TTTabs items={tabItem} />
      <ReleaseProject />
    </div>
  );
};

export default Research;
