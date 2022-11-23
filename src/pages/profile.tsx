import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import React from "react";
import Base from "../components/Profile";

type profileProps = {};

const Profile: React.FC<profileProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Base user={user} />
      </Flex>
    </Container>
  );
};

export default Profile;
