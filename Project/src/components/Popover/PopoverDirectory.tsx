import {
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { NAV_ITEMS } from "../../utils/constant";
import React from "react";
import SubMenuDirectory from "./SubMenuDirectory";

const PopoverDirectory: React.FC = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("purple.600", "purple.200");
  return (
    <Stack
      direction="row"
      spacing={4}
      w={"100%"}
      justify={"center"}
      display={{ base: "none", md: "flex" }}>
      {NAV_ITEMS.map((navItem, index) => (
        <Popover
          trigger={"hover"}
          placement={"bottom-start"}
          key={index}
          isLazy={true}
          size="xl">
          <PopoverTrigger>
            <Link href={navItem.href ?? "#"}>
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
            <>
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
            </>
          )}
        </Popover>
      ))}
    </Stack>
  );
};

export default PopoverDirectory;
