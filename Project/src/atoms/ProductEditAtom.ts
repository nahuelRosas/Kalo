import { atom } from "recoil";
import { persistAtomEffect } from "./SSRCompleted";

export interface ProductEditAtom {
  id: string;
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
  size: {
    label: string;
    value: string;
  }[];
  stock: number;
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
  dontRepet: boolean;
}

export const defaultProductEditAtom: ProductEditAtom = {
  id: "",
  name: "",
  description: "",
  brand: "",
  active: false,
  images: [],
  unitofmeasurement: {
    label: "ARG",
    value: "ARG",
  },
  color: "",
  discount: 0,
  stock: 0,
  size: [],
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
  dontRepet: false,
};

export const ProductEditAtom = atom<ProductEditAtom>({
  key: "productEditAtom",
  default: defaultProductEditAtom,
  effects_UNSTABLE: [persistAtomEffect],
});
