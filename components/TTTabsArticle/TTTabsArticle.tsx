import { Row, Col } from 'antd';
import React from 'react';

import style from './styles.module.scss'

type dataType = {
  tabsArticleTitle: string;
  tabsArticleDescription: string;
}
interface TTTabsArticle {
  data: {
    tabsArticleTitle: string;
    tabsArticleDescription: string;
  }
}

export const TTTabsArticle = ({ data }: TTTabsArticle[]) => {
  return (
    <Row className={`${style.wrapper}`}>
      <Col>
        {data.map((item: dataType) => {
          const { tabsArticleTitle, tabsArticleDescription } = item;
          return (
            // TODO MEDIA
            <Col key={tabsArticleTitle}>
              <h3 className={`${style.tabsArticleTitle}`}>{tabsArticleTitle}</h3>
              <p className={`${style.tabsArticleDescription}`}>{tabsArticleDescription}</p>
            </Col>
          );
        })}
      </Col>
    </Row>
  );
};
