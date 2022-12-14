import { Button, useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { defaultProductCreateAtom } from "../../../atoms/ProductCreateAtom";
import { firestore } from "../../../firebase/clientApp";
import useProductsData from "../../../hooks/useProductsData";

type createDocumentProps = {
  stateAtom: RecoilState<any>;
};

type value = {
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
};

const CreateDocument: React.FC<createDocumentProps> = ({ stateAtom }) => {
  const [value, setValue] = useRecoilState<value>(stateAtom);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { Reload } = useProductsData();

  const createDocument = async () => {
    setLoading(true);
    if (
      value.name !== "" &&
      value.description !== "" &&
      value.brand !== "" &&
      value.price > 0 &&
      value.images.length > 0 &&
      value.images.length < 10
    ) {
      const id = nanoid();
      const docRef = doc(firestore, "productsFirestore", `prod_M${id}`);
      try {
        await setDoc(docRef, {
          ...value,
          id,
        });
        toast({
          title: "Product created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (e: unknown | any) {
        toast({
          title: "An error occurred.",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
        Reload();
        setValue(defaultProductCreateAtom);
      }
    } else {
      toast({
        title: "Please fill in all required fields.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Button
      type="button"
      colorScheme="purple"
      isLoading={loading}
      onClick={createDocument}
      w="100%">
      Create
    </Button>
  );
};
export default CreateDocument;
