import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { auth } from "../../../firebase/clientApp";
import ResetPassword from "./ResetPassword";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(AuthModalState);
  const [user] = useAuthState(auth);

  const handleClose = useCallback(() => {
    return setModalState((prev) => ({ ...prev, isOpen: false }));
  }, [setModalState]);

  useEffect(() => {
    if (user !== null) {
      handleClose();
    }
  }, [handleClose, user]);

  return (
    <>
      <Modal isOpen={modalState.isOpen} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {modalState.type === "login" && "Log In"}
            {modalState.type === "SignUp" && "Sign Up"}
            {modalState.type === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            pb={1}>
            <Flex
              direction={"column"}
              align="center"
              justify="center"
              w={"100%"}
              borderRadius={8}>
              {modalState.type === "login" || modalState.type === "SignUp" ? (
                <>
                  <OAuthButtons />
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
