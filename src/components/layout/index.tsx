import React, { FC, PropsWithChildren } from 'react';
import { Layout as LayoutWrapper } from 'antd';

import CustomSider from './sider';
import CustomHeader from './header';
import CustomContent from './content';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutWrapper style={{ minHeight: '100vh', position: 'relative' }}>
      <CustomHeader />
      <LayoutWrapper>
        <CustomSider breakpoint='md' />
        <CustomContent>{children}</CustomContent>
      </LayoutWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
