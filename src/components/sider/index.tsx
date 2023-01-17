import React, { useEffect, useState } from 'react';
import { Button, Layout } from 'antd';

import useStyles from './style';
import { IColor } from '../../types/color';
import { colorService } from '../../service/color-service';

const { Sider } = Layout;

const CustomSider = () => {
  const classes = useStyles();

  const [colors, setColors] = useState<IColor[]>([]);
  const [randomColor, setRandomColor] = useState<IColor | null>(null);

  const fetchColors = async () => {
    try {
      const response = await colorService.getAllColors();
      setColors(response.colors);
    } catch (error) {}
  };

  const handleChooseRandomColor = () => {
    const randomColorIndex = Math.round(Math.random() * (colors.length - 1));
    setRandomColor(colors[randomColorIndex]);
  };

  useEffect(() => {
    fetchColors();
  }, []);

  console.log(colors);

  return (
    <Sider className={classes.root}>
      <Button onClick={handleChooseRandomColor}>Random Color</Button>
    </Sider>
  );
};

export default CustomSider;
