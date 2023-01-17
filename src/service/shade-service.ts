import { IPaginateShades } from '../types/common';
import { api } from './api';

class ShadeService {
  async getOneShade(id: string) {
    const response = await api.get(`/shade/${id}`);

    return response.data;
  }

  async shadePaginate(paginate: IPaginateShades) {}
}

export const shadeService = new ShadeService();
