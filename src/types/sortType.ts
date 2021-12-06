import { SortEnum } from "./sortEnum";

export interface SortType {
  id: SortEnum;
  name: string;
}

export const sortData: SortType[] = [
  { id: SortEnum.NameAsc, name: "Ada göre artan" },
  { id: SortEnum.NameDesc, name: "Ada göre azalan" },
  { id: SortEnum.PriceAsc, name: "Fiyata göre artan" },
  { id: SortEnum.PriceDesc, name: "Fiyata göre azalan" },
];
