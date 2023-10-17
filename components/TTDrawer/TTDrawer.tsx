import { Drawer } from 'antd';
import React from 'react';

import style from './TTDrawer.module.scss';

interface TTDrawerProps {
  title?: string;
  children?: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
}

export const TTDrawer = ({ title, children, visible, onClose }: TTDrawerProps) => {
  return (
      <Drawer className={style.TTDrawer} placement="top" open={true} width={100}>
      {/* {children} */}
    </Drawer>
  );
};
