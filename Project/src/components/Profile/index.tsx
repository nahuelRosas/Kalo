import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useUserData from "../../hooks/useUserData";
import { itemMenuTitle } from "../../utils/constant";
import BaseComponent from "./Components";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct/index";
import EditProfile from "./EditProfile";
import Base from "./lateralMenu/Base";
import Products from "./Products";
import Users from "./Users";
import { isLoggedState } from "../../atoms/IsLoggedAtom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

type indexProps = {
  type: string;
};
const Index: React.FC<indexProps> = ({ type }) => {
  const [user] = useAuthState(auth);
  const { isAdmin } = useUserData();

  const isLogged = useRecoilValue(isLoggedState);

  const router = useRouter();

  useEffect(() => {
    if (isLogged.value === false) {
      router.push("/");
    }
  }, [isLogged, router]);

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
          {type === itemMenuTitle["AdmcreateProduct"] && isAdmin() ? (
            <CreateProduct />
          ) : null}
          {type === itemMenuTitle["AdmeditProduct"] && isAdmin() ? (
            <EditProduct />
          ) : null}
          {type === itemMenuTitle["Admusers"] && isAdmin() ? <Users /> : null}
          {type === itemMenuTitle["Admproducts"] && isAdmin() ? (
            <Products />
          ) : null}
          {type === itemMenuTitle["profile"] ? <EditProfile /> : null}
        </BaseComponent>
      </Flex>
    </Container>
  );
};

export default Index;
