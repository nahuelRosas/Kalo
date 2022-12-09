import { HStack, StackProps, TextProps } from "@chakra-ui/react";
import React from "react";
import formatPrice from "./formatPrice";
import Price from "./price";
import SalePrice from "./salePrice";

type priceTagProps = {
  
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
};

const PriceTag: React.FC<priceTagProps> = ({
  
  price,
  salePrice,
  rootProps,
  priceProps,
  salePriceProps,
}) => {
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice({
          value: price,
         
        })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice({ value: salePrice  })}
        </SalePrice>
      )}
    </HStack>
  );
};
export default PriceTag;
