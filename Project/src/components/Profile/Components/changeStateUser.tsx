import { Switch, useToast } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { firestore } from "../../../firebase/clientApp";
import useUserData from "../../../hooks/useUserData";

type ChangeState = {
  defaultChecked: boolean;
};

const ChangeStateUsers: React.FC<ChangeState> = ({
  defaultChecked = false,
}) => {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const { UID, Reload } = useUserData();
  const updateDocument = async () => {
    setIsDisabled(true);
    const docRef = doc(firestore, "customers", UID);
    try {
      await updateDoc(docRef, {
        userType: {
          admin: !defaultChecked,
        },
      }).then(() => {
        toast({
          title: "User type updated.",
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

export default ChangeStateUsers;
