import { atom } from "recoil";

export interface WishlistDrawerAtom {
  isOpen: boolean;
  type: "wishList" | "checkout";
}

const defaultWishlistDrawerState: WishlistDrawerAtom = {
  isOpen: false,
  type: "wishList",
};

export const WishlistDrawerAtom = atom<WishlistDrawerAtom>({
  key: "wishListDrawerState",
  default: defaultWishlistDrawerState,
});
