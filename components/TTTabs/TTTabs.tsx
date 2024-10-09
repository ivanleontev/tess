import { Tabs } from 'antd';

import style from './styles.module.scss';
import { CSSProperties } from 'react';

type itemsType = {
  label: string;
  key: string;
  children: React.ReactNode | string;
};

interface TTTabsProps {
  defaultActiveKey?: string;
  items: any; // TODO: типизировать
  onChange?: (key: string) => void;
  style?: CSSProperties;
}

export const TTTabs = ({ defaultActiveKey, items, onChange, ...props }: TTTabsProps) => {
  return (
    <Tabs
      className={`${style.customTab}`}
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      items={items}
      {...props}
    />
  );
};
