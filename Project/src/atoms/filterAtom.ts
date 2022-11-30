import { atom } from "recoil";
import type { ProductsAtom } from "./productsAtom";

export interface FilterState {
  filteredProducts: ProductsAtom;
  type: "empty" | "filled";
}

const defaultFilterState: FilterState = {
  filteredProducts: [],
  type: "empty",
};

export const FilterState = atom<FilterState>({
  key: "filterState",
  default: defaultFilterState,
});
