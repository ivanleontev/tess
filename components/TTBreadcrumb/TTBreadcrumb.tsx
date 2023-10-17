import { Breadcrumb, BreadcrumbProps as AntdBredcrumbProps } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import Link from 'next/link';

import style from './styles.module.scss'

type BredcurmbProps = AntdBredcrumbProps;

const itemRender = (route: Route, params: any, routes: Route[], paths: string[]) => {
  const last = routes.indexOf(route) === routes.length - 1;
  const { path } = route;
  return last || !path ? (
    // <></>
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link href={paths.join('/')}>{route.breadcrumbName}</Link>
  );
};

export const TTBreadcrumb = (props: BredcurmbProps) => {
  return <Breadcrumb {...props} itemRender={itemRender} />;
};
