import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { isLoggedState } from "../../atoms/IsLoggedAtom";
import { auth } from "../../firebase/clientApp";
import useUserData from "../../hooks/useUserData";
import { itemMenuTitle } from "../../utils/constant";
import BaseComponent from "./Components";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct/index";
import EditProfile from "./EditProfile";
import Base from "./lateralMenu/Base";
import AdmOrders from "./Orders/admin";
import Orders from "./Orders/user";
import Products from "./Products";
import Users from "./Users";

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

          {type === itemMenuTitle["Admorders"] ? <AdmOrders /> : null}
          {type === itemMenuTitle["orders"] ? <Orders /> : null}
        </BaseComponent>
      </Flex>
    </Container>
  );
};

export default Index;
