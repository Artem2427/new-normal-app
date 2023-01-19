import React, { useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Layout, Menu, Modal } from 'antd';

import useStyles from './style';
import { IColor } from '../../../types/color';
import { colorService } from '../../../service/color-service';
import { AppContext } from '../../../context';
import { AppContextInitialState } from '../../../types/context';
import { useParams } from 'react-router-dom';

const { Sider } = Layout;

const CustomSider = () => {
  const classes = useStyles();
  const { shadeId } = useParams<string>();

  const { appContext, setAppContext } = useContext(AppContext);

  const [colors, setColors] = useState<IColor[]>([
    { id: '345465645', name: 'test' },
  ]);
  const [randomColor, setRandomColor] = useState<IColor | null>(null);

  const fetchColors = async () => {
    try {
      const response = await colorService.getAllColors();
      setColors(response.colors);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseRandomColor = () => {
    const randomColorIndex = Math.round(Math.random() * (colors.length - 1));
    setRandomColor(colors[randomColorIndex]);
  };

  const handleChooseColor = (colorId: string) => {
    const newColorIds = appContext.colorIds.includes(colorId)
      ? appContext.colorIds.filter((id) => id !== colorId)
      : [...appContext.colorIds, colorId];

    setAppContext((prev: AppContextInitialState) => ({
      ...prev,
      colorIds: newColorIds,
    }));
  };

  const handleCancel = () => {
    setRandomColor(null);
  };

  const handleAddColor = () => {
    if (randomColor) {
      handleChooseColor(randomColor.id);
      handleCancel();
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <Sider className={classes.root}>
      <Button
        onClick={handleChooseRandomColor}
        className='button'
        disabled={!!shadeId}
      >
        Random Color
      </Button>
      <div className='menu'>
        {colors.map((color) => (
          <Checkbox
            disabled={!!shadeId}
            className='menu-item'
            onChange={() => handleChooseColor(color.id)}
            key={color.id}
            checked={appContext.colorIds.includes(color.id)}
          >
            {color.name}
          </Checkbox>
        ))}
      </div>
      <Modal
        open={!!randomColor}
        onOk={handleAddColor}
        onCancel={handleCancel}
        centered
      >
        {`Do you want to ${
          randomColor && appContext.colorIds.includes(randomColor.id)
            ? 'remove'
            : 'add'
        } "${randomColor?.name}"`}
      </Modal>
    </Sider>
  );
};

export default CustomSider;
