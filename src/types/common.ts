export interface IPaginateShades {
  page: number;
  pageSize: number;
  searchTerm: string;
  colorIds: string[];
}

export interface IPaginateOption {
  page: number;
  pageSize: number;
}
