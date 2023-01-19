import React, { useContext } from 'react';
import { Input } from 'antd';

import useStyles from './style';
import { AppContext } from '../../context';
import { AppContextInitialState } from '../../types/context';

const Search = () => {
  const classes = useStyles();
  const {
    appContext: { searchTerm },
    setAppContext,
  } = useContext(AppContext);

  const handleChange = (event: React.BaseSyntheticEvent) => {
    setAppContext((prev: AppContextInitialState) => ({
      ...prev,
      searchTerm: event.target.value,
    }));
  };

  return (
    <Input
      className={classes.root}
      placeholder='Search'
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Search;
