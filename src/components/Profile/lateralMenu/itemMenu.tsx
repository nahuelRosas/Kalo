import { As, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type itemMenuProps = {
  title: string;
  icon: As<any> | undefined;
  href: string;
  state: boolean;
};

const ItemMenu: React.FC<itemMenuProps> = ({ title, icon, href, state }) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const bg = useColorModeValue("purple.100", "purple.700");
  const bgActive = useColorModeValue("purple.200", "purple.600");
  return (
    <Link href={href} passHref>
      <Flex
        mt={2}
        justify="space-between"
        align="center"
        padding={2}
        color={state ? "white" : color}
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
    </Link>
  );
};
export default ItemMenu;
