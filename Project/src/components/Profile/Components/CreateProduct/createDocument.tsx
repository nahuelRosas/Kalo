import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase/clientApp";
import { Button, useToast } from "@chakra-ui/react";
import { RecoilState, useRecoilState } from "recoil";
import { nanoid } from "nanoid";
import { defaultProductCreateAtom } from "../../../../atoms/productCreateAtom";

type createDocumentProps = {
  stateAtom: RecoilState<any>;
};

const CreateDocument: React.FC<createDocumentProps> = ({ stateAtom }) => {
  const [value, setValue] = useRecoilState(stateAtom);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const createDocument = async () => {
    setLoading(true);
    const docRef = doc(firestore, "products", `prod_M${nanoid()}`);
    await setDoc(docRef, value)
      .then(() => {
        toast({
          title: "Product created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setValue(defaultProductCreateAtom);
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button
      type="button"
      colorScheme="purple"
      isLoading={loading}
      onClick={createDocument}>
      Create
    </Button>
  );
};
export default CreateDocument;
