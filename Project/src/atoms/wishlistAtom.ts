import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";

export interface WishlistItem {
  id: string;
  product: DocumentData;
  size: { value: string; label: string };
}

export interface WishlistAtom {
  wishlist: WishlistItem[];
}

const defaultWishlistState: WishlistAtom = {
  wishlist: [],
};

export const WishlistAtom = atom<WishlistAtom>({
  key: "wishlistState",
  default: defaultWishlistState,
});
