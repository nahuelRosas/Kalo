import React from "react";
import useProductsData from "../hooks/useProductsData";
import { useRecoilState } from "recoil";
import { ProductsAtom } from "../atoms/productsAtom";
import { products } from "../utils/products";
import {
  Box,
  Container,
  Table,
  Thead,
  Input,
  InputRightElement,
  InputGroup,
  Flex,
  Tbody,
  Tfoot,
  useColorModeValue,
  VStack,
  Tr,
  Text,
  Heading,
  Th,
  Td,
  Switch,
  TableCaption,
  TableContainer,
  Grid,
} from "@chakra-ui/react";

const ProductsDashBoard = () => {
  const { products, loading, error } = useProductsData();
  const [productsState, setProductsState] = useRecoilState(ProductsAtom);
  const CurrentProducts = productsState.products;

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Heading>Products</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              {CurrentProducts &&
                CurrentProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td>${product.prices[0].unit_amount}</Td>
                    <Td>
                      {" "}
                      <Switch
                        colorScheme="purple"
                        defaultChecked={product.active}
                        onChange={() => {
                          const newProducts = productsState.products.map(
                            (p) => {
                              if (p.id === product.id) {
                                return {
                                  ...p,
                                  active: !p.active,
                                };
                              }
                              return p;
                            }
                          );
                          setProductsState({
                            products: newProducts,
                            isLoadead: true,
                          });
                        }}
                      />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  );
};

export default ProductsDashBoard;
