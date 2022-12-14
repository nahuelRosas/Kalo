import { atom } from "recoil";

export interface SearchState {
  search: string;
}

export const defaultSearchState: SearchState = {
  search: "",
}

export const searchAtom = atom<SearchState>({
  key: "searchAtom",
  default: defaultSearchState,
});
