import React, { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Layout from '../components/layout';
import { ROUTES } from './router';

const Routes: FC = () => {
  return (
    <Switch>
      {ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<Layout>{route.component}</Layout>}
        />
      ))}
    </Switch>
  );
};

export default Routes;
