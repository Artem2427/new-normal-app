import React, { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import useStyles from './style';

const { Content } = Layout;

const CustomContent: FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return <Content className={classes.root}>{children}</Content>;
};

export default CustomContent;
