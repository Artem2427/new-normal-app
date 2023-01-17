import { IColor } from '../types/color';
import { api } from './api';

class ColorService {
  async getAllColors(): Promise<{ colors: IColor[] }> {
    const response = await api.get<{ colors: IColor[] }>('/color/all');

    return response.data;
  }
}

export const colorService = new ColorService();
