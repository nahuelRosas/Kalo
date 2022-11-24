import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { emailRegex } from "../../../utils/regex";

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async () => {
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <Flex
      as="form"
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100%">
      {success ? (
        <Text
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          color="purple.500">
          {" We've sent you an email with a link to reset your password."}
        </Text>
      ) : (
        <>
          <Text fontSize="md" textAlign="center" mb={4}>
            {
              "Enter your email address and we'll send you a link to reset your password."
            }
          </Text>
          <Input
            type="email"
            placeholder="Email"
            isInvalid={!emailRegex.test(email) && email.length > 0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={6}
          />
          <Text
            fontSize="sm"
            fontWeight={700}
            color="red.500"
            mb={4}
            display={
              !emailRegex.test(email) && email.length > 0 ? "block" : "none"
            }>
            {!emailRegex.test(email) && email.length > 0 && "Invalid email"}
          </Text>
          <Text
            fontSize="sm"
            fontWeight={700}
            color="red.500"
            mb={4}
            display={error?.message ? "block" : "none"}>
            {error?.message &&
              FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
          </Text>

          <Button
            type="submit"
            colorScheme="purple"
            w="100%"
            isDisabled={!emailRegex.test(email)}
            mb={3}
            onClick={() => {
              handleSubmit();
            }}
            isLoading={sending}>
            Send Reset Link
          </Button>
          <Button
            variant="ghost"
            colorScheme="purple"
            w="100%"
            onClick={() =>
              setAuthModalState((prevState) => ({
                ...prevState,
                type: "login",
              }))
            }>
            Back to Sign In
          </Button>
        </>
      )}
    </Flex>
  );
};

export default ResetPassword;
