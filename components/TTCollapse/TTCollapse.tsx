import { Collapse } from 'antd';
import { DownCollapseArrow, UpCollapseArrow } from '../Icons';
import _ from 'lodash';

import style from './styles.module.scss';
import Link from 'next/link';
import { CSSProperties } from 'react';

const { Panel } = Collapse;

type PanelType = {
  title: string;
  text: string;
  link?: string | undefined | null;
  list?: Array<string>;
};

interface TTCollapseProps {
  defaultActiveKey: number;
  heading?: string;
  description?: string;
  data: PanelType[];
  isList?: boolean;
  styleCustom?: CSSProperties;
  title?: string;
  desc?: string;
}

export const TTCollapse = ({
  defaultActiveKey,
  data,
  heading,
  description,
  isList = false,
  styleCustom,
}: TTCollapseProps) => {
  return (
    <>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        expandIcon={({ isActive }) => (isActive ? <DownCollapseArrow /> : <UpCollapseArrow />)}
        expandIconPosition="end"
        ghost
        style={styleCustom}
      >
        <p className={style.heading}>{heading}</p>
        <p className={style.description}>{description}</p>
        {isList
          ? data.map((item, index) => {
              return (
                <Panel className={`${style.panelHeader}`} header={item.title.toUpperCase()} key={_.uniqueId()}>
                  <ul className={style.itemList}>
                    {item.list?.map((elem, idx) => {
                      return (
                        <li className={style.itemLi} key={index}>
                          {elem}
                        </li>
                      );
                    })}
                  </ul>
                </Panel>
              );
            })
          : data.map((item, index) => {
              return (
                <Panel className={`${style.panelHeader}`} header={item.title.toUpperCase()} key={index}>
                  <p className={`${style.panelText}`}>
                    {item.text}
                    {item.link && <Link href={item.link}> Узнать больше </Link>}
                  </p>
                </Panel>
              );
            })}
      </Collapse>
    </>
  );
};
