import { TTBreadcrumb } from '@/components/TTBreadcrumb/TTBreadcrumb';
import { TTDrawer } from '@/components/TTDrawer/TTDrawer';
import { TTDrawerForm } from '@/components/TTDrawerForm/TTDrawerForm';
import { Row, Col } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';

const routes: Route[] = [
  {
    path: '',
    breadcrumbName: 'Справочники',
  },
  {
    path: '',
    breadcrumbName: 'Контрагенты',
  },
];

const genproektirovanie = () => {
  return (
    <>
      <TTBreadcrumb routes={routes} />
      {/* <TTDrawer visible={true} /> */}
    </>
  );
};

export default genproektirovanie;
