import React from 'react';
import { Layout } from 'antd';
import useStyles from './style';
import Search from '../../search';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const CustomHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Header className={classes.root}>
      <div className='container'>
        <span className='logo' onClick={() => navigate('/')}>
          Logo
        </span>
        <Search />
      </div>
    </Header>
  );
};

export default CustomHeader;
