import { useColorModeValue, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NavItem } from "../../../utils/constant";

const SubMenuDirectory: React.FC<NavItem> = ({ label, href }: NavItem) => {
  return (
    <Link href={href ?? "#"}>
      <Stack
        direction={"row"}
        align={"center"}
        justify={"center"}
        cursor={"pointer"}
        _hover={{
          textDecoration: "none",
          color: useColorModeValue("purple.600", "purple.200"),
        }}>
        <Text fontWeight={600}>{label}</Text>
      </Stack>
    </Link>
  );
};

export default SubMenuDirectory;
