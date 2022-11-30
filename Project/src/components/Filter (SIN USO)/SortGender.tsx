import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

type SortGenderProps = {
  // type: string;
};

const SortGender: React.FC<SortGenderProps> = () => {
  return (
    <Box borderBottom={"1px solid #E2E8F0"}>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        my={"3rem"}
        mx={"30%"}
        w={"100%"}
      >
        <Text fontSize={"1.2rem"} fontWeight={"bold"} mb={"1rem"}>
            Gender
        </Text>
        <CheckboxGroup colorScheme="purple" size={"lg"}>
          <Checkbox value="men">Men</Checkbox>
          <Checkbox value="women">Women</Checkbox>
          <Checkbox value="unisex">Unisex</Checkbox>
        </CheckboxGroup>
      </Flex>
    </Box>
  );
};
export default SortGender;
