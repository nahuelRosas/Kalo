import { Switch, useToast } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { UserAtom } from "../../../atoms/userDataAtom";
import { firestore } from "../../../firebase/clientApp";
import useProductsData from "../../../hooks/useProductsData";

type ChangeState = {
  id: string;
  defaultChecked?: boolean;
};

const ChangeStateProduct: React.FC<ChangeState> = ({
  id,
  defaultChecked = false,
}) => {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const { Reload } = useProductsData();
  const updateDocument = async () => {
    setIsDisabled(true);
    const docRef = doc(firestore, "products", id);
    try {
      await updateDoc(docRef, {
        active: !defaultChecked,
      }).then(() => {
        toast({
          title: "Product updated.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
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
      setIsDisabled(false);
      Reload();
    }
  };

  return (
    <Switch
      id={nanoid()}
      colorScheme="purple"
      defaultChecked={defaultChecked}
      onChange={updateDocument}
      isDisabled={isDisabled}
    />
  );
};

export default ChangeStateProduct;
