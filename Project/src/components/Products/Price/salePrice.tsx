import React from "react";
import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

type salePriceProps = {
  textProps?: TextProps;
};

const SalePrice: React.FC<salePriceProps> = ({ textProps }) => {
  return (
    <Text
      as="span"
      fontWeight="semibold"
      color={useColorModeValue("gray.800", "gray.100")}
      {...textProps}
    />
  );
};
export default SalePrice;
