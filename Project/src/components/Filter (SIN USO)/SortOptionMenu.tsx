import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";
import { atom, useRecoilState } from 'recoil';


type SortOptionMenuProps = {
  // type: string;
};

const SortOptionMenu: React.FC<SortOptionMenuProps> = () => {

  return (
    <Flex mb={"1rem"} w={"100%"} borderBottom={"1px solid #E2E8F0"}>
      <Select my={"3rem"} w={"100%"} mx={"20%"}>
        <option value="relevant">More Relevant</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </Flex>
  );
};
export default SortOptionMenu;
