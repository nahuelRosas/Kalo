import { Button, useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { defaultProductCreateAtom } from "../../../atoms/productCreateAtom";
import { firestore } from "../../../firebase/clientApp";
import useProductsData from "../../../hooks/useProductsData";

type createDocumentProps = {
  stateAtom: RecoilState<any>;
};

type value = {
  name: string;
  description: string;
  brand: string;
  price: number;
  subType: { size: { label: string; value: string }; stock: number }[];
  images: string[];
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
