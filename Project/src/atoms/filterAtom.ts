import { atom } from "recoil";
import type { ProductsAtom } from "./productsAtom";
import { DocumentData } from "@firebase/firestore-types";

export interface FilterState {
  metadata: any;
  filteredProducts: ProductsAtom;
  type: "empty" | "filled";
}

const defaultFilterState: FilterState = {
  filteredProducts: <any>[],
  type: "empty",
  metadata: {},
};

export const FilterState = atom<FilterState>({
  key: "filterState",
  default: defaultFilterState,
});
