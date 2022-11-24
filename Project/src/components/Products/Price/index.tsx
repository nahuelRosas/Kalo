import { HStack, StackProps, TextProps } from "@chakra-ui/react";
import React from "react";
import formatPrice from "./formatPrice";
import Price from "./price";
import SalePrice from "./salePrice";

type priceTagProps = {
  currency: string;
  price: number;
  salePrice?: number;
  rootProps?: StackProps;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
};

const PriceTag: React.FC<priceTagProps> = ({
  currency,
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
          currency,
        })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice({ value: salePrice, currency })}
        </SalePrice>
      )}
    </HStack>
  );
};
export default PriceTag;
