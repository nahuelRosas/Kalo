import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";
import { persistAtomEffect } from "./SSRCompleted";

export interface ProductsAtom {
  products: DocumentData[];
  productsActive: DocumentData[];
  productSelected: { value: string; label: string }[];
  isLoadead: boolean;
  search: string;
  orderBy: string | undefined;
  filterBy: string[];
  orderByPrice: number[];
}

const defaultProductsState: ProductsAtom = {
  products: [],
  productsActive: [],
  productSelected: [],
  isLoadead: false,
  search: "",
  orderBy: undefined,
  filterBy: [],
  orderByPrice: [],
};

export const ProductsAtom = atom<ProductsAtom>({
  key: "productsState",
  default: defaultProductsState,
  effects_UNSTABLE: [persistAtomEffect],
});
