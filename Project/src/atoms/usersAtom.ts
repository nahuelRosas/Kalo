import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";

export interface UsersAtom {
  users: DocumentData[];
  isLoadead: boolean;
}

const defaultUsersState: UsersAtom = {
  users: [],
  isLoadead: false,
};

export const UsersAtom = atom<UsersAtom>({
  key: "usersState",
  default: defaultUsersState,
});
