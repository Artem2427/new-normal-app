import React from 'react';
import { Layout } from 'antd';
import useStyles from './style';
import Search from '../../search';

const { Header } = Layout;

const CustomHeader = () => {
  const classes = useStyles();

  return (
    <Header className={classes.root}>
      <div className='container'>
        <span className='logo'>Logo</span>
        <Search />
      </div>
    </Header>
  );
};

export default CustomHeader;
