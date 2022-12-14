import { Button, useToast } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { firestore } from "../../../firebase/clientApp";
import useProductsData from "../../../hooks/useProductsData";
import { defaultProductEditAtom } from "../../../atoms/ProductEditAtom";

type createDocumentProps = {
  stateAtom: RecoilState<any>;
};

type value = {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  subType: { size: { label: string; value: string }; stock: number }[];
  images: string[];
};

const UpdateDocument: React.FC<createDocumentProps> = ({ stateAtom }) => {
  const [value, setValue] = useRecoilState<value>(stateAtom);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { Reload } = useProductsData();

  const updateDocument = async () => {
    setLoading(true);
    if (
      value.name !== "" &&
      value.description !== "" &&
      value.brand !== "" &&
      value.price > 0 &&
      value.images.length > 0 &&
      value.images.length < 10
    ) {
      const docRef = doc(firestore, "products", value.id);
      try {
        await updateDoc(docRef, {
          ...value,
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
        setValue(defaultProductEditAtom);
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
      onClick={updateDocument}
      w="100%">
      Update
    </Button>
  );
};
export default UpdateDocument;
