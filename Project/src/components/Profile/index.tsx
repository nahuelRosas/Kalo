import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { itemMenuTitle } from "../../utils/constant";
import BaseComponent from "./Components";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct/index";
import EditProfile from "./EditProfile";
import Base from "./lateralMenu/Base";
import Products from "./Products";

type indexProps = {
  type: string;
};
const Index: React.FC<indexProps> = ({ type }) => {
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
        <Base user={user} currentComponent={type} />

        <BaseComponent title={type}>
          {type === itemMenuTitle["AdmcreateProduct"] ? (
            <CreateProduct />
          ) : null}
          {type === itemMenuTitle["AdmeditProduct"] ? <EditProduct /> : null}
          {type === itemMenuTitle["Admproducts"] ? <Products /> : null}
          {type === itemMenuTitle["profile"] ? <EditProfile /> : null}
        </BaseComponent>
      </Flex>
    </Container>
  );
};

export default Index;
