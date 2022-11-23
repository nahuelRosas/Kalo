import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LateralMenu: React.FC = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      py={4}
      px={6}
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}>
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color={useColorModeValue("gray.600", "gray.400")}>
        Account
      </Text>

      <Flex
        mt={2}
        justify="space-between"
        align="center"
        color={useColorModeValue("gray.600", "gray.400")}
        cursor="pointer"
        as={Link}
        to="/profile"
        borderRadius="md"
        _hover={{
          bg: useColorModeValue("gray.100", "gray.700"),
        }}>
        <Flex align="center">
          <Icon as={FiUser} w={5} h={5} />
          <Text ml={4} fontSize="sm">
            Profile
          </Text>
        </Flex>
        <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
      </Flex>
    </Box>
  );
};
export default LateralMenu;
