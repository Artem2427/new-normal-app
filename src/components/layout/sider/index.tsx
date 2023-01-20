import React, { FC, useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Layout, Modal } from 'antd';
import cn from 'classnames';

import useStyles from './style';
import { IColor } from '../../../types/color';
import { colorService } from '../../../service/color-service';
import { AppContext } from '../../../context';
import { AppContextInitialState } from '../../../types/context';

const { Sider } = Layout;

interface Props {
  breakpoint?: 'md';
  className?: string;
}

const CustomSider: FC<Props> = ({ breakpoint, className }) => {
  const classes = useStyles();

  const { appContext, setAppContext } = useContext(AppContext);

  const [colors, setColors] = useState<IColor[]>([]);
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

  const handleClickOnBurger = (collapsed: boolean) => {
    setAppContext((prev: AppContextInitialState) => {
      return {
        ...prev,
        isBurgerMenuOpen: !collapsed,
      };
    });
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
    <Sider
      className={cn(classes.root, className)}
      breakpoint={breakpoint}
      collapsedWidth={!!breakpoint ? '0' : undefined}
      onCollapse={handleClickOnBurger}
    >
      <Button onClick={handleChooseRandomColor} className='button'>
        Random Color
      </Button>
      {colors.length && (
        <h3 style={{ marginTop: '10px', fontWeight: 600, fontSize: '24px' }}>
          Colors
        </h3>
      )}

      <div className='menu'>
        {colors.map((color) => (
          <Checkbox
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
