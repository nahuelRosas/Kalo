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
  size: { label: string; value: string }[];
  stock: number;
  color: string;
  discount: number;
  price: number;
  style: string;
  recommendedsport: string;

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
  unitofmeasurement: {
    label: "ARG",
    value: "ARG",
  },
  size: [],
  color: "",
  stock: 0,
  discount: 0,
  price: 0,
  style: "",
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
