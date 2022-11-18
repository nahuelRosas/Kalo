import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthInputs: React.FC = () => {
  const modalState = useRecoilValue(AuthModalState);
  return (
    <Flex direction="column" align="center" width={"100%"} mt={4}>
      {modalState.type === "login" && <Login />}
      {modalState.type === "SignUp" && <SignUp />}
    </Flex>
  );
};
export default AuthInputs;
