import { Tabs } from 'antd';

type itemsType = {
  label: string;
  key: string;
  children: string;
};

interface TTTabsProps {
  defaultActiveKey?: string;
  items: itemsType[];
  onChange?: (key: string) => void;
}

export const TTTabs = ({ defaultActiveKey, items, onChange }: TTTabsProps) => {
  return <Tabs defaultActiveKey={defaultActiveKey} onChange={onChange} items={items} />;
};
