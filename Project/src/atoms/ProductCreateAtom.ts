import { atom } from "recoil";
import { persistAtomEffect } from "./SSRCompleted";

export interface ProductCreateAtom {
  active: boolean;
  name: string;
  description: string;
  brand: string;
  images: string[];
  unitofmeasurement: {
    label: "ARG" | "UK" | "US" | "EUR";
    value: "ARG" | "UK" | "US" | "EUR";
  };
  subType: { size: { label: string; value: string }; stock: number }[];
  color: string;
  discount: number;
  price: number;
  style: string;
  recommendedsport: string;
  // size: {
  //   label: string;
  //   value: string;
  // }[];
  // stock: number;
  exteriormaterials: string;
  solematerials: string;
  fittype: string;
  genres: {
    label: "Men" | "Women" | "Kids" | "Unisex";
    value: "Men" | "Women" | "Kids" | "Unisex";
  };
  agegroup: {
    label: "Adult" | "Kids" | "Baby";
    value: "Adult" | "Kids" | "Baby";
  };
  rating: number;
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
  numReviews: number;
}

export const defaultProductCreateAtom: ProductCreateAtom = {
  name: "",
  description: "",
  brand: "",
  active: false,
  images: [],
  // size: [],
  // stock: 0,
  unitofmeasurement: {
    label: "ARG",
    value: "ARG",
  },
  color: "",
  discount: 0,
  price: 0,
  style: "",
  subType: [],
  recommendedsport: "",
  exteriormaterials: "",
  solematerials: "",
  fittype: "",
  genres: { label: "Men", value: "Men" },
  agegroup: { label: "Adult", value: "Adult" },
  rating: 0,
  reviews: [],
  numReviews: 0,
};

export const ProductCreateAtom = atom<ProductCreateAtom>({
  key: "productCreateAtom",
  default: defaultProductCreateAtom,
  effects_UNSTABLE: [persistAtomEffect],
});
