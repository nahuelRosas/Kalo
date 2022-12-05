import { atom } from "recoil";

export interface CartDrawerAtom {
  isOpen: boolean;
  type: "cart" | "checkout" | "preCheckout";
}

const defaultCartDrawerState: CartDrawerAtom = {
  isOpen: false,
  type: "cart",
};

export const CartDrawerAtom = atom<CartDrawerAtom>({
  key: "cartDrawerState",
  default: defaultCartDrawerState,
});
