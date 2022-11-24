import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NAV_ITEMS } from "../../../utils/constant";
import SubMenuDirectory from "./SubMenuDirectory";

const PopoverDirectory: React.FC = () => {
  const color = useColorModeValue("purple.600", "purple.200");
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Stack
      direction="row"
      spacing={4}
      w={"100%"}
      justify={"center"}
      display={{ base: "none", md: "flex" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            isLazy={true}
            flip={true}
            size="xl">
            <PopoverTrigger>
              <Link href={navItem.href ? navItem.href : "#"} passHref>
                <Text
                  p={2}
                  fontSize={"lg"}
                  fontWeight={700}
                  _hover={{
                    textDecoration: "none",
                    color: color,
                  }}>
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                w={"100vw"}
                border={0}
                boxShadow={"xl"}
                bg={bg}
                p={4}
                rounded={"xl"}
                minW={"sm"}>
                <Stack
                  direction={"row"}
                  align={"center"}
                  justify={"center"}
                  spacing={20}>
                  {navItem.children.map((child) => (
                    <SubMenuDirectory key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default PopoverDirectory;
