import { atom } from "recoil";

export interface WishListDrawerAtom {
  isOpen: boolean;
  type: "wishList" | "checkout";
}

const defaultWishListDrawerState: WishListDrawerAtom = {
  isOpen: false,
  type: "wishList",
};

export const WishListDrawerAtom = atom<WishListDrawerAtom>({
  key: "wishListDrawerState",
  default: defaultWishListDrawerState,
});
