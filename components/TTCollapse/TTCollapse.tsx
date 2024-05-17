import { Collapse } from 'antd';
import { DownCollapseArrow, UpCollapseArrow } from '../Icons';

import style from './styles.module.scss';
import Link from 'next/link';

const { Panel } = Collapse;

type PanelType = {
  title: string;
  text: string;
  link?: string | undefined | null;
};

interface TTCollapseProps {
  defaultActiveKey: number;
  title: string;
  desc: string;
  data: PanelType[];
}

export const TTCollapse = ({ defaultActiveKey, data, title, desc }: TTCollapseProps) => {
  return (
    <>
      <p className={`${style.panelTitle}`}>{title}</p>
      <p className={`${style.panelDesc}`}>{desc}</p>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        expandIcon={({ isActive }) => (isActive ? <DownCollapseArrow /> : <UpCollapseArrow />)}
        expandIconPosition="right"
        ghost
      >
        {data.map((item, index) => {
          return (
            <Panel className={`${style.panelHeader}`} header={item.title.toUpperCase()} key={index}>
              <p></p>
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
