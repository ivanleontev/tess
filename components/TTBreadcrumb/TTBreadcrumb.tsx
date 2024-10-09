import { Breadcrumb, BreadcrumbProps as AntdBredcrumbProps } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import Link from 'next/link';

import style from './styles.module.scss';

type BredcurmbProps = AntdBredcrumbProps;

const itemRender = (route: Route, params: any, routes: Route[], paths: string[]) => {
  const last = routes.indexOf(route) === routes.length - 1;
  const { path } = route;
  return last || !path ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link href={paths.join('/')}>{route.breadcrumbName}</Link>
  );
};

export const TTBreadcrumb = (props: BredcurmbProps) => {
  return (
    <Breadcrumb
      separator={
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33301 1.66797L4.66634 5.0013L1.33301 8.33464"
            stroke="#65657E"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      }
      {...props}
      itemRender={itemRender}
      className={style.Breadcrumb}
    />
  );
};
