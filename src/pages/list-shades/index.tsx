import { Pagination } from 'antd';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import Card from '../../components/card';
import CustomSpin from '../../components/spin';

import { AppContext } from '../../context';
import { shadesMock, TOTAL } from '../../mock/shades';
import { shadeService } from '../../service/shade-service';
import { IPaginateOption } from '../../types/common';
import { IShade } from '../../types/shade';

import useStyles from './style';

const ListShades = () => {
  const classes = useStyles();
  const [shades, setShades] = useState<IShade[]>(shadesMock);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [paginateOption, setPaginateOption] = useState<IPaginateOption>({
    page: 1,
    pageSize: 12,
  });

  const { appContext } = useContext(AppContext);

  const fetchShadesWithPaginate = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await shadeService.shadePaginate({
        ...paginateOption,
        searchTerm: appContext.searchTerm,
        colorIds: appContext.colorIds,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [appContext, paginateOption]);

  const handleChangePaginationOption = (page: number, pageSize: number) => {
    setPaginateOption({ page, pageSize });
  };

  useEffect(() => {
    fetchShadesWithPaginate();
  }, [appContext, paginateOption]);

  return (
    <div className={classes.root}>
      {isLoading && <CustomSpin />}
      {!isLoading && (
        <>
          <div className='wrapper'>
            {shades.map((shade) => {
              return <Card shade={shade} key={shade.id} />;
            })}
          </div>
          <Pagination
            className='pagination'
            showSizeChanger
            pageSizeOptions={[12]}
            onChange={handleChangePaginationOption}
            current={paginateOption.page}
            pageSize={paginateOption.pageSize}
            total={TOTAL}
          />
        </>
      )}
    </div>
  );
};

export default ListShades;
