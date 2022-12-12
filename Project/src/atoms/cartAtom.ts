import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { persistAtomEffect } from "./SSRCompleted";

export interface CartItem {
  id: string;
  product: DocumentData;
  quantity: number;
  price: number;
  size: { value: string; label: string };
}

export interface CartAtom {
  cart: CartItem[];
  cartAfterPay: CartItem[];
  urlCheckOut: string;
}

const defaultCartState: CartAtom = {
  cart: [],
  cartAfterPay: [],
  urlCheckOut: "",
};

export const CartAtom = atom<CartAtom>({
  key: "cartState",
  default: defaultCartState,
  effects_UNSTABLE: [persistAtomEffect],
});
