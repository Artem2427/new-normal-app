import { IColor } from './color';

export interface IShade {
  id: string;
  hex: string;
  colorId: string;
  color?: IColor;
}

export interface IShadesPaginate {
  shades: IShade[];
  total: number;
}
