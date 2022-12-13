import { atom } from "recoil";
import { persistAtomEffect } from "./SSRCompleted";

export interface isLogged {
  value: boolean | undefined;
}

export const defaultIsLogged: isLogged = {
  value: undefined,
};

export const isLoggedState = atom<isLogged>({
  key: "isLoggedState",
  default: defaultIsLogged,
  effects_UNSTABLE: [persistAtomEffect],
});
