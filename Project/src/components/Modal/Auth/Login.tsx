import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { emailRegex } from "../../../utils/regex";

const Login: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (!emailRegex.test(loginForm.email) && loginForm.email.length > 0) {
      setErrors("Invalid email");
      return;
    }
    if (loginForm.password.length < 8 && loginForm.password.length > 0) {
      setErrors("Password must be at least 8 characters");
      return;
    }
    if (error?.message) {
      setErrors(
        FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]
      );
      toast({
        title: FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS],
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setErrors("");
      error.message = "";

      return;
    }
    if (user) {
      toast({
        title: "Logged in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    setErrors("");
  }, [loginForm, error, user, toast]);

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <InputGroup w="100%">
        <Input
          required
          type="text"
          autoComplete="email"
          name="email"
          w="100%"
          isInvalid={!!errors}
          placeholder="Email"
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          mb={4}
          value={loginForm.email}
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup>
        <InputRightElement>
          <IconButton
            aria-label="Show password"
            icon={!showPassword ? <ViewIcon /> : <ViewOffIcon />}
            variant="ghost"
            colorScheme="purple"
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputRightElement>
        <Input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          value={loginForm.password}
          isInvalid={!!errors}
          mb={4}
          onChange={onChange}
        />
      </InputGroup>
      <Text
        fontSize="sm"
        textAlign={"center"}
        color="red.500"
        fontWeight={700}
        mb={4}
        display={errors ? "block" : "none"}>
        {errors}
      </Text>

      <Button
        width="100%"
        type="submit"
        colorScheme="purple"
        variant="solid"
        isLoading={loading}
        isDisabled={
          loginForm.email === "" ||
          loginForm.password === "" ||
          !emailRegex.test(loginForm.email)
        }
        mb={4}>
        LOG IN
      </Button>
      <Flex
        align="center"
        justify="center"
        color={useColorModeValue("gray.600", "gray.400")}>
        <Text>Forgot your password?</Text>
        <Text
          ml={1}
          color={
            useColorModeValue("purple.500", "purple.300") as
              | "purple.500"
              | "purple.300"
          }
          cursor="pointer"
          fontWeight="bold"
          onClick={() =>
            setAuthModalState((prevState) => ({
              ...prevState,
              type: "resetPassword",
            }))
          }>
          Reset
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="center"
        color={useColorModeValue("gray.600", "gray.400")}>
        <Text>New here?</Text>
        <Text
          ml={1}
          color={
            useColorModeValue("purple.500", "purple.300") as
              | "purple.500"
              | "purple.300"
          }
          cursor="pointer"
          fontWeight="bold"
          onClick={() =>
            setAuthModalState((prevState) => ({ ...prevState, type: "SignUp" }))
          }>
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
