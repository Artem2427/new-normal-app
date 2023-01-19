import React from 'react';
import { Spin } from 'antd';

import useStyles from './style';

const CustomSpin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Spin size='large' />
    </div>
  );
};

export default CustomSpin;
