import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

type itemMenuProps = {
  title: string;
  filterByAction: string;
  orderByAction?: string;
  state?: boolean;
  setFilterBy: Function;
  setOrderBy: Function;
};

const ItemMenu: React.FC<itemMenuProps> = ({
  title,
  filterByAction,
  state,
  setFilterBy,
}) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const bg = useColorModeValue("purple.100", "purple.700");
  const bgActive = useColorModeValue("purple.200", "purple.600");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/`);
  };

  return (
    <Flex
      mt={2}
      onClick={() => {
        setFilterBy(filterByAction.toLowerCase(), true);
        if (router.pathname !== "/products") handleClick();
      }}
      justify="space-between"
      align="center"
      w={"100%"}
      padding={2}
      color={state ? { base: "white", md: "black" } : color}
      bg={state ? bgActive : "transparent"}
      cursor="pointer"
      textAlign={"center"}
      borderRadius="md"
      alignContent={"center"}
      alignItems={"center"}
      _hover={{
        bg: bg,
        color: { base: "white", md: "black" },
      }}>
      <Text fontSize="lg" w={"100%"} fontWeight={700}>
        {title}
      </Text>
    </Flex>
  );
};
export default ItemMenu;
