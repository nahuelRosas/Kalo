import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";
import { Timestamp } from "firebase/firestore";
import { persistAtomEffect } from "./SSRCompleted";

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
  userType: {
    admin: boolean;
    editor: boolean;
    user: boolean;
  };
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  };
  WishList: DocumentData[];
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
  userType: {
    admin: false,
    editor: false,
    user: true,
  },
  address: {
    city: "",
    country: "",
    line1: "",
    line2: "",
    postal_code: "",
    state: "",
  },
  WishList: [],
};

export const UserAtom = atom<DocumentData>({
  key: "userState",
  default: defaultUserState,
  // effects_UNSTABLE: [persistAtomEffect],
});
