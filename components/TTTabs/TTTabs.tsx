import { Tabs } from 'antd';

import style from './styles.module.scss'

type itemsType = {
  label: string;
  key: string;
  children: React.ReactNode | string;
};

interface TTTabsProps {
  defaultActiveKey?: string;
  items: itemsType[];
  onChange?: (key: string) => void;
}

export const TTTabs = ({ defaultActiveKey, items, onChange }: TTTabsProps) => {
  return <Tabs className={`${style.customTab}`} defaultActiveKey={defaultActiveKey} onChange={onChange} items={items} />;
};
