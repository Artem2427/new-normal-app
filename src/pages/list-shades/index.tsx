import React, { useContext, useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import { Pagination } from 'antd';
import Card from '../../components/card';
import CustomSpin from '../../components/spin';

import { AppContext } from '../../context';

import { shadeService } from '../../service/shade-service';
import { IPaginateOption } from '../../types/common';
import { IShadesPaginate } from '../../types/shade';

import useStyles from './style';

const ListShades = () => {
  const classes = useStyles();
  const [shadesPaginate, setShadesPaginate] = useState<IShadesPaginate>({
    shades: [],
    total: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { appContext } = useContext(AppContext);

  const [paginateOption, setPaginateOption] = useState<IPaginateOption>({
    page: 1,
    pageSize: 12,
  });

  const fetchShadesWithPaginate = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await shadeService.shadePaginate({
        ...paginateOption,
        searchTerm: appContext.searchTerm,
        colorIds: appContext.colorIds,
      });
      setShadesPaginate(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [appContext.colorIds, appContext.searchTerm, paginateOption]);

  const handleChangePaginationOption = (page: number, pageSize: number) => {
    setPaginateOption({ page, pageSize });
  };

  useEffect(() => {
    if (paginateOption.page !== 1) {
      setPaginateOption((prev: IPaginateOption) => {
        return {
          ...prev,
          page: 1,
        };
      });
    }
  }, [appContext.searchTerm]);

  useEffect(() => {
    fetchShadesWithPaginate();
  }, [appContext.colorIds, appContext.searchTerm, paginateOption]);

  return (
    <div className={classes.root}>
      {isLoading && <CustomSpin />}
      {!isLoading &&
        (shadesPaginate.shades.length ? (
          <>
            <div
              className={cn('wrapper', { open: appContext.isBurgerMenuOpen })}
            >
              {shadesPaginate.shades.map((shade) => {
                return <Card shade={shade} key={shade.id} />;
              })}
            </div>
            <Pagination
              className='pagination'
              showSizeChanger
              hideOnSinglePage
              pageSizeOptions={[12]}
              onChange={handleChangePaginationOption}
              current={paginateOption.page}
              pageSize={paginateOption.pageSize}
              total={shadesPaginate.total}
              responsive
            />
          </>
        ) : (
          <div>Not found shades</div>
        ))}
    </div>
  );
};

export default ListShades;
