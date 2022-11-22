import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";

export interface ProductsAtom {
  products: DocumentData[];
  isLoadead: boolean;
}

const defaultProductsState: ProductsAtom = {
  products: [],
  isLoadead: false,
};

export const ProductsAtom = atom<ProductsAtom>({
  key: "productsState",
  default: defaultProductsState,
});
