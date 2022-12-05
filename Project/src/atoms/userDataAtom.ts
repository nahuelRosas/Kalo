import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";

const defaultUserState: DocumentData = {
  createdAt: "",
  disabled: false,
  displayname: "",
  email: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  providerData: [
    {
      displayName: "",
      email: "",
      phoneURL: "",
      providerId: "",
      uid: "",
    },
  ],
  uid: "",
  stripeId: "",
  stripeLink: "",
  updatedAt: "",
  userType: {
    admin: false,
    editor: false,
    user: false,
  },
  isLoadead: false,
};

export const UserAtom = atom<DocumentData>({
  key: "userState",
  default: defaultUserState,
});
