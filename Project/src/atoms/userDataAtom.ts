import { DocumentData } from "@firebase/firestore-types";
import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

type UserState = {
  isLoadead: boolean;
  createdAt: Timestamp;
  disabled: boolean;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  photoURL: string;
  stripeId: string;
  stripeLink: string;
  updatedAt: Timestamp;
  isAdmin: boolean;
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  };
  lastReceipt: string;
  lastPurchase: any;
  wishlist: [];
};

const defaultUserState: UserState = {
  isLoadead: false,
  createdAt: Timestamp.now(),
  disabled: false,
  displayName: "",
  email: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  stripeId: "",
  stripeLink: "",
  updatedAt: Timestamp.now(),
  isAdmin: false,
  address: {
    city: "",
    country: "",
    line1: "",
    line2: "",
    postal_code: "",
    state: "",
  },
  lastReceipt: "",
  lastPurchase: {},
  wishlist: [],
};

export const UserAtom = atom<DocumentData>({
  key: "userState",
  default: defaultUserState,
  // effects_UNSTABLE: [persistAtomEffect],
});
