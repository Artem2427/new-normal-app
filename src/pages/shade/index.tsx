import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import Card from '../../components/card';
import CustomSpin from '../../components/spin';
import { shadeService } from '../../service/shade-service';
import { IShade } from '../../types/shade';

import useStyles from './style';
import { AppContext } from '../../context';

const Shade = () => {
  const classes = useStyles();
  const { shadeId } = useParams<string>();
  const navigate = useNavigate();
  const { appContext } = useContext(AppContext);

  const [selectedShade, setSelectedShade] = useState<IShade | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shades, setShades] = useState<IShade[]>([]);

  const handleBack = () => {
    navigate('/');
  };

  const fetchShade = useCallback(async () => {
    if (shadeId) {
      try {
        setIsLoading(true);
        const response = await shadeService.getOneShade(shadeId);

        const res = await shadeService.getSimilarShades(
          shadeId,
          4,
          response.shade.colorId,
        );

        setShades(res);
        setSelectedShade(response.shade);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [shadeId]);

  useEffect(() => {
    fetchShade();
  }, [shadeId]);

  return (
    <div className={classes.root}>
      {isLoading && <CustomSpin />}
      {!isLoading && selectedShade && (
        <>
          <Card shade={selectedShade} size='large' />
          <div className={cn('wrapper', { open: appContext.isBurgerMenuOpen })}>
            {shades.map((shade) => (
              <Card shade={shade} key={shade.id} />
            ))}
          </div>
          <div className='button-block'>
            <Button onClick={handleBack}>Back</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Shade;
