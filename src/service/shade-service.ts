import { IPaginateShades } from '../types/common';
import { IShade, IShadesPaginate } from '../types/shade';
import { api } from './api';

class ShadeService {
  async getOneShade(id: string): Promise<{ shade: IShade }> {
    const response = await api.get(`/shade/${id}`);

    return response.data;
  }

  async shadePaginate(paginate: IPaginateShades): Promise<IShadesPaginate> {
    const response = await api.post(
      `/shade/paginate?page=${paginate.page}&pageSize=${paginate.pageSize}&searchTerm=${paginate.searchTerm}`,
      { colorIds: paginate.colorIds },
    );

    return response.data;
  }

  async getSimilarShades(
    shadeId: string,
    count: number,
    colorId: string,
  ): Promise<IShade[]> {
    const response = await api.get(
      `/shade/similar/${shadeId}?count=${count}&colorId=${colorId}`,
    );

    return response.data;
  }
}

export const shadeService = new ShadeService();
