import { Collapse } from 'antd';
import { DownCollapseArrow, UpCollapseArrow } from '../Icons';

import style from './styles.module.scss'

const { Panel } = Collapse;

type PanelType = {
  title: string;
  text: string;
};

interface TTCollapseProps {
  defaultActiveKey: number;
  data: PanelType[];
}

export const TTCollapse = ({ defaultActiveKey, data }: TTCollapseProps) => {
  return (
    <Collapse 
      style={{marginLeft: 40}}
      defaultActiveKey={defaultActiveKey}   
      expandIcon={({ isActive }) => isActive ? <DownCollapseArrow /> : <UpCollapseArrow />}
      expandIconPosition="right"
      ghost
    >
      {data.map((item, index) => {
        return (
          <Panel className={`${style.panelHeader}`} header={item.title.toUpperCase()} key={index}>
            <p className={`${style.panelText}`}>{item.text}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};
