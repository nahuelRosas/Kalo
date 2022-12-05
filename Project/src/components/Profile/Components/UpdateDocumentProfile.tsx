import { Button, useToast } from "@chakra-ui/react";
import { doc, DocumentData, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { UserAtom } from "../../../atoms/userDataAtom";
import { firestore } from "../../../firebase/clientApp";
import useUserData from "../../../hooks/useUserData";

const UpdateDocumentProfile: React.FC = () => {
  const { getUserData, userData } = useUserData();
  const [value] = useRecoilState<DocumentData>(UserAtom);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const updateDocument = async () => {
    setLoading(true);
    if (
      value.displayName !== "" &&
      value.email !== "" &&
      value.phoneNumber !== ""
    ) {
      const userRef = doc(firestore, "customers", userData.uid);
      try {
        await setDoc(userRef, {
          ...value,
        });
        toast({
          title: "Profile updated.",
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
      }
      setLoading(false);
    } else {
      toast({
        title: "Please fill in all required fields.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
    getUserData();
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
export default UpdateDocumentProfile;
