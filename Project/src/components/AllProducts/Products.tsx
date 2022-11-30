import React from "react";
import { products } from "../../utils/products";
import { Flex, Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../Products/index";
import SideBar from "./SideBar";
import useProductsData from "../../hooks/useProductsData";
import { useRecoilState } from "recoil";
import { FilterState } from "../../atoms/filterAtom";

// type productProps = {
//   products?: [] | undefined;
// };

const   ProductsC: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useRecoilState(FilterState);
  const { getProducts, productsActive } = useProductsData();
  
  return (
    <Flex>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
        {filteredProducts.length
          ? filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : <Text>No products found</Text>}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductsC;
