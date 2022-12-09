import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";
import { persistAtomEffect } from "./SSRCompleted";

export interface ProductsAtom {
  products: DocumentData[];
  productsActive: DocumentData[];
  isLoadead: boolean;
}

const defaultProductsState: ProductsAtom = {
  products: [],
  productsActive: [],
  isLoadead: false,
};

export const ProductsAtom = atom<ProductsAtom>({
  key: "productsState",
  default: defaultProductsState,
  effects_UNSTABLE: [persistAtomEffect],
});
