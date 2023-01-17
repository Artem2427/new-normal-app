import { ReactNode } from 'react';
import ListShades from '../pages/list-shades';
import Shade from '../pages/shade';
import { Routes } from '../utils/constants';
import { RouteKeys } from '../utils/enums';

export interface RouterItem {
  key: RouteKeys;
  path: string;
  requiresAuth: boolean;
  component: ReactNode;
}

export const ROUTES = [
  {
    key: RouteKeys.ListShades,
    path: Routes.List,
    requireAuth: false,
    component: <ListShades />,
  },
  {
    key: RouteKeys.Shade,
    path: Routes.Shade,
    requireAuth: false,
    component: <Shade />,
  },
];
