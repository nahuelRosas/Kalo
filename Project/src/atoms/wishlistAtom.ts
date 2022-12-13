import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { persistAtomEffect } from "./SSRCompleted";

export interface WishlistItem {
    id: string;
    product: DocumentData;
    quantity: number;
    price: number;
    size: { value: string; label: string };
}

export interface WishlistAtom {
    wishlist: WishlistItem[];
    //   cartAfterPay: WishlistItem[];
    //   urlCheckOut: string;
}

const defaultWishlistState: WishlistAtom = {
    wishlist: [],
    //   cartAfterPay: [],
    //   urlCheckOut: "",
};

export const WishlistAtom = atom<WishlistAtom>({
    key: "wishlistState",
    default: defaultWishlistState,
    effects_UNSTABLE: [persistAtomEffect],
});
