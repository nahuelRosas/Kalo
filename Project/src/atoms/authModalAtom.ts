import { atom } from "recoil";

export interface AuthModalState {
  isOpen: boolean;
  type: "login" | "SignUp" | "resetPassword";
}

const defaultModalState: AuthModalState = {
  isOpen: false,
  type: "login",
};

export const AuthModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
