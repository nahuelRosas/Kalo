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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { isLoggedState } from "../../../atoms/IsLoggedAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { emailRegex } from "../../../utils/regex";

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const toast = useToast();
  const [SignUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isLogged = useSetRecoilState(isLoggedState);

  useEffect(() => {
    if (
      SignUpForm.password !== SignUpForm.confirmPassword &&
      SignUpForm.password &&
      SignUpForm.confirmPassword
    ) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (
      SignUpForm.password !== SignUpForm.confirmPassword &&
      SignUpForm.password &&
      !SignUpForm.confirmPassword
    ) {
      setPasswordError("Confirm your password");
      return;
    }
    if (
      (SignUpForm.password.length < 8 && SignUpForm.password.length > 0) ||
      (SignUpForm.confirmPassword.length < 8 &&
        SignUpForm.confirmPassword.length > 0)
    ) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    if (!RegExp(emailRegex).test(SignUpForm.email) && SignUpForm.email) {
      setEmailError("Invalid email");
      return;
    }
    if (userError?.message) {
      setEmailError(
        FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]
      );
      toast({
        title:
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS],
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        setEmailError("");
        userError.message = "";
      }, 3000);

      return;
    }
    if (user) {
      toast({
        title: "Account created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      isLogged({ value: true });
    }

    setPasswordError("");
    setEmailError("");
  }, [SignUpForm, userError, user, toast, isLogged]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createUserWithEmailAndPassword(SignUpForm.email, SignUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <InputGroup>
        <Input
          required
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Email"
          isInvalid={!!emailError}
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          mb={4}
          value={SignUpForm.email}
          onChange={onChange}
        />
      </InputGroup>

      <Text
        color="red.500"
        fontSize="sm"
        fontWeight={700}
        mb={4}
        textAlign="center"
        display={emailError ? "block" : "none"}>
        {emailError}
      </Text>

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
          autoComplete="new-password"
          isInvalid={!!passwordError}
          placeholder="Password"
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          value={SignUpForm.password}
          mb={4}
          onChange={onChange}
        />
      </InputGroup>

      <InputGroup>
        <InputRightElement>
          <IconButton
            aria-label="Show password"
            icon={!showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
            variant="ghost"
            colorScheme="purple"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </InputRightElement>
        <Input
          required
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Confirm Password"
          isInvalid={!!passwordError}
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          value={SignUpForm.confirmPassword}
          mb={4}
          onChange={onChange}
        />
      </InputGroup>

      <Text
        color="red.500"
        fontSize="sm"
        fontWeight={700}
        mb={4}
        textAlign="center"
        display={passwordError ? "block" : "none"}>
        {passwordError}
      </Text>

      <Button
        width="100%"
        type="submit"
        isLoading={loading}
        disabled={
          !SignUpForm.email ||
          !SignUpForm.password ||
          !SignUpForm.confirmPassword ||
          !!emailError ||
          !!passwordError
        }
        colorScheme="purple"
        variant="solid"
        mb={4}>
        SIGN UP
      </Button>

      <Flex
        align="center"
        justify="center"
        color={useColorModeValue("gray.600", "gray.400")}>
        <Text>Already have an account?</Text>
        <Text
          ml={1}
          color={useColorModeValue("purple.500", "purple.300") as string}
          cursor="pointer"
          fontWeight="bold"
          onClick={() =>
            setAuthModalState((prevState) => ({
              ...prevState,
              type: "login",
            }))
          }>
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
