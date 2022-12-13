import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isLoggedState } from "../../../atoms/IsLoggedAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

const OAuthButtons: React.FC = () => {
  const toast = useToast();

  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  useEffect(() => {
    if (googleUser?.operationType === "signIn") {
      toast({
        title: "Signed in with Google",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsLogged({ value: true });
    }

    if (googleUser?.operationType === "link") {
      toast({
        title: "Linked with Google",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setIsLogged({ value: true });
    }
  }, [googleUser, setIsLogged, toast]);

  return (
    <Flex direction="column" align="center" width={"100%"}>
      <Button
        width="100%"
        colorScheme="green"
        variant="outline"
        isLoading={googleLoading}
        onClick={() => signInWithGoogle()}
        mt={4}
        leftIcon={<FaGoogle />}>
        Continue with Google
      </Button>
      <Text
        fontSize="sm"
        color="red.500"
        fontWeight={700}
        mt={4}
        textAlign="center"
        display={googleError ? "block" : "none"}>
        {
          FIREBASE_ERRORS[
            googleError?.message as keyof typeof FIREBASE_ERRORS
          ] as string
        }
      </Text>
    </Flex>
  );
};
export default OAuthButtons;
