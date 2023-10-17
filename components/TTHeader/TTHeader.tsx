import { Layout, Menu } from 'antd';
import { menuItems } from 'common/Constants';

const { Header } = Layout;

export default function TTFooter() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menuItems} />
    </Header>
  );
}
