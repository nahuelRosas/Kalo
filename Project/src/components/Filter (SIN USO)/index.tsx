import React from "react";
import { Flex, useColorModeValue, Icon, Box, Button } from "@chakra-ui/react";
import SortGender from "./SortGender";
import SortOptionMenu from "./SortOptionMenu";
import SortByPrice from "./SortByPrice";
import { ColorIcon } from "../../chakra/ColorIcon";
import Size from "../../pages/size";
import SortColors from "./SortColors";

type indexProps = {
  // type: string;
};

const Filters: React.FC<indexProps> = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex
      borderRadius={"md"}
      display={{ base: "none", md: "flex" }}
      h={"100vh"}
      minW={"20%"}
      bg={bg}
      flexDirection={"column"}
    >
      <SortOptionMenu />
      <SortGender />
      {/* <SortBySize/> */}
      <SortByPrice />
      {/* <SortColors /> */}
    </Flex>
  );
};
export default Filters;
