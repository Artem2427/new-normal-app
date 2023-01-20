import React, { useContext, useEffect, useState } from 'react';
import { Input } from 'antd';

import useStyles from './style';
import { AppContext } from '../../context';
import { AppContextInitialState } from '../../types/context';
import { useParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { SEARCH_DEBOUNCE_DELAY } from '../../utils/constants';

const Search = () => {
  const classes = useStyles();
  const { shadeId } = useParams<string>();
  const { setAppContext } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const searchTermValue = useDebounce(searchQuery, SEARCH_DEBOUNCE_DELAY);

  const handleChange = (event: React.BaseSyntheticEvent) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setAppContext((prev: AppContextInitialState) => ({
      ...prev,
      searchTerm: searchTermValue,
    }));
  }, [searchTermValue]);

  return (
    <Input
      className={classes.root}
      placeholder='Search by color'
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default Search;
