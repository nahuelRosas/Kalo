import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import BaseComponent from "./Components";
import CreateProduct from "./Components/CreateProduct";
import Profile from "./Components/Profile/index";
import Base from "./lateralMenu/Base";

type indexProps = {
  type: string;
};
const Index: React.FC<indexProps> = ({ type }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);
  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Base user={user} currentComponent={type} />

        <BaseComponent title={type}>
          {type === "Create Product" ? <CreateProduct /> : null}
          {type === "Profile" ? <Profile /> : null}
        </BaseComponent>
      </Flex>
    </Container>
  );
};

export default Index;
