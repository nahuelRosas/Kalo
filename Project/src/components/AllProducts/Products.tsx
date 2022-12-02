import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProductCard from "../Products/index";

import { useRecoilState } from "recoil";
import { FilterState } from "../../atoms/filterAtom";
import { searchAtom } from "../../atoms/SearchAtom";
import useProductsData from "../../hooks/useProductsData";

const ProductsC: React.FC = () => {
  const [filteredProducts, setFilteredProducts]: any =
    useRecoilState(FilterState);
  const { /* getProducts, */ productsActive }: any = useProductsData();
  const [search /* setSearch */]: any = useRecoilState(searchAtom);

  useEffect(() => {
    search.length &&
      setFilteredProducts(
        productsActive?.filter((product: any) =>
          product.name.toLowerCase().includes(search?.toLowerCase())
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Flex>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
        {filteredProducts.length ? (
          filteredProducts?.map((product: any, index: number) => (
            <ProductCard product={product} key={index} />
          ))
        ) : (
          <Text>No products found</Text>
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductsC;
