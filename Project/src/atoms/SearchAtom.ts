import { atom } from "recoil";

export interface SearchState {
  search: string;
}
export const searchAtom = atom<SearchState>({
  key: "searchAtom",
  default: {
    search: "",
  },
});
