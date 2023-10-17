import { Collapse } from 'antd';

const { Panel } = Collapse;

type PanelType = {
  title: string;
  text: string;
};

interface TTCollapseProps {
  defaultActiveKey: string[];
  data: PanelType[];
}

export const TTCollapse = ({ defaultActiveKey, data }: TTCollapseProps) => {
  return (
    <Collapse defaultActiveKey={defaultActiveKey} ghost>
      {data.map((item, index) => {
        return (
          <Panel header={item.title} key={index}>
            <p>{item.text}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};
