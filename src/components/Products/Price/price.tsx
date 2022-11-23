import { TextProps, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";

type priceProps = {
  children?: React.ReactNode;
  isOnSale?: boolean;
  textProps?: TextProps;
};

const Price: React.FC<priceProps> = ({ children, isOnSale, textProps }) => {
  const defaultColor = useColorModeValue("gray.700", "gray.400");
  const onSaleColor = useColorModeValue("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      fontSize="sm"
      fontWeight="bold"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}>
      {children}
    </Text>
  );
};
export default Price;
