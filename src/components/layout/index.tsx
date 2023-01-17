import React, { FC, PropsWithChildren } from 'react';
import { Button, Layout as LayoutWrapper } from 'antd';
import CustomSider from '../sider';

const { Sider, Header, Content } = LayoutWrapper;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutWrapper style={{ minHeight: '100vh' }}>
      <Header style={{ width: '100%' }}>Logo</Header>
      <LayoutWrapper>
        <CustomSider />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </LayoutWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
