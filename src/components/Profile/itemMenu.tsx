import { As, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type itemMenuProps = {
  title: string;
  icon: As<any> | undefined;
  href: string;
};

const ItemMenu: React.FC<itemMenuProps> = ({ title, icon, href }) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const bg = useColorModeValue("purple.100", "purple.700");
  return (
    <Link href={href} passHref>
      <Flex
        mt={2}
        justify="space-between"
        align="center"
        padding={2}
        color={color}
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
