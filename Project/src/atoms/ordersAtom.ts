import { atom } from "recoil";
import { DocumentData } from "@firebase/firestore-types";

export interface OrdersAtom {
  orders: DocumentData[];
}

export const ordersAtom = atom<OrdersAtom>({
  key: "ordersAtom",
  default: {
    orders: [],
  },
});
