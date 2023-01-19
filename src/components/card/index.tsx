import React, { FC } from 'react';
import cn from 'classnames';

import useStyles from './style';
import { IShade } from '../../types/shade';
import { useNavigate } from 'react-router-dom';

interface Props {
  size?: 'small' | 'large';
  shade: IShade;
}

const Card: FC<Props> = ({ size = 'small', shade }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shade/${shade.id}`);
  };

  return (
    <div
      className={cn(classes.root, {
        small: size === 'small',
        large: size === 'large',
      })}
      onClick={handleClick}
    >
      <div className='color' style={{ backgroundColor: shade.hex }} />
      <p className='color-hex'>{shade.hex}</p>
    </div>
  );
};

export default Card;
