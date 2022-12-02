import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";
import type { ProductsAtom } from "./productsAtom";

export interface ItemCart {
  Item: ProductsAtom;
  id: string;
  quantity: number;
  getItemQuantity: (id: string) => number;
  addItem: (item: ProductsAtom) => void;
  removeItem: (id: string) => void;
  clearItem: (id: string) => void;
  

  //type: "cart";
}

// const defaultCartState: ItemCart = {
//   Item: [],
//   //cartItems: [],
// };

// export const CartState = atom<ItemCart>({
//   key: "cartState",
//   default: defaultCartState,
// });
//const result: string[] = [];
export const cartState = atom({
  key: "cartState",
  default: [] as ItemCart[],
});
