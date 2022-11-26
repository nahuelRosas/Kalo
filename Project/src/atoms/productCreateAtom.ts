import { atom } from "recoil";

type metaDataType = {
  color: string;
  size: string;
  stock: number;
  discount: number;
  price: number;
}[];

type featuresType = {
  Gender: string;
  Material: string;
  SuitableFor: string;
  Occasion: string;
  Pattern: string;
  Fit: string;
};

export interface ProductCreateAtom {
  name: string;
  description: string;
  brand: string;
  active: boolean;
  
  images: string[];
  metadata: metaDataType;
  features: featuresType;
  rating: number;
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
  numReviews: number;
}

const defaultProductCreateState: ProductCreateAtom = {
  active: false,
  name: "",
  images: [],
  description: "",
  brand: "",
  metadata: [],
  features: {
    Fit: "",
    Gender: "",
    Material: "",
    Occasion: "",
    Pattern: "",
    SuitableFor: "",
  },
  rating: 0,
  reviews: [],
  numReviews: 0,
};

export const ProductCreateAtom = atom<ProductCreateAtom>({
  key: "productCreateState",
  default: defaultProductCreateState,
});
