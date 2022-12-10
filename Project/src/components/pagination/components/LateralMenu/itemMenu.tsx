import { As, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type itemMenuProps = {
  title: string;
  icon: As<any> | undefined;
  action: Function;
  state: boolean;
};

const ItemMenu: React.FC<itemMenuProps> = ({ title, icon, action, state }) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const bg = useColorModeValue("purple.100", "purple.700");
  const bgActive = useColorModeValue("purple.200", "purple.600");
  return (
    <Flex
      mt={2}
      onClick={() => {
        action(title.toLowerCase());
      }}
      justify="space-between"
      align="center"
      padding={2}
      color={state ? { base: "white", md: "black" } : color}
      bg={state ? bgActive : "transparent"}
      cursor="pointer"
      borderRadius="md"
      _hover={{
        bg: bg,
        color: { base: "white", md: "black" },
      }}>
      <Text fontSize="md">{title}</Text>
      <Icon as={icon} w={5} h={5} />
    </Flex>
  );
};
export default ItemMenu;
