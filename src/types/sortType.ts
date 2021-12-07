import { SortEnum } from "./sortEnum";

export interface SortType {
  id: SortEnum;
  name: string;
}

export const sortData: SortType[] = [
  { id: SortEnum.DateAsc, name: "Old to new" },
  { id: SortEnum.DateDesc, name: "New to old" },
  { id: SortEnum.PriceAsc, name: "Price low to high" },
  { id: SortEnum.PriceDesc, name: "Price high to low" },
];
