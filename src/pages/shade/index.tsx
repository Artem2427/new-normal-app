import React, { useState, useCallback, useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/card';
import CustomSpin from '../../components/spin';
import { shadesMock } from '../../mock/shades';
import { shadeService } from '../../service/shade-service';
import { IShade } from '../../types/shade';

import useStyles from './style';

const Shade = () => {
  const classes = useStyles();
  const { shadeId } = useParams<string>();
  const navigate = useNavigate();
  const [selectedShade, setSelectedShade] = useState<IShade | null>({
    id: '43565654',
    hex: '#b88d8d',
    colorId: '54521',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [shades, setShades] = useState(shadesMock.slice(0, 4));

  const handleBack = () => {
    navigate('/');
  };

  const fetchShade = useCallback(async () => {
    if (shadeId) {
      try {
        const response = await shadeService.getOneShade(shadeId);
      } catch (error) {
        console.log(error);
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
          <div className='wrapper'>
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
