import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Switch,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Timestamp } from "firebase/firestore";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import FormatPrice from "../../Products/Price/formatPrice";
import ChangeState from "../Components/changeState";
import Filter from "../Components/filter";
const ProductsList: React.FC = () => {
  const { results, handleChange, searchTerm, setContextSearch } = Filter();
  const bg = useColorModeValue("white", "gray.800");
  const bgBox = useColorModeValue("white", "gray.700");
  const bgInput = useColorModeValue("gray.50", "gray.700");
  if (results.length === 0 && searchTerm === "") {
    return (
      <Center h="100vh" bg={bg}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Box w="full" mt={8} maxW="full" mx="auto" bg={bgBox} overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Grid
          templateColumns="2fr 1fr"
          gap={6}
          px={6}
          py={4}
          bg={bg}
          borderBottomWidth="1px">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
              bg={bgInput}
            />
            <InputRightElement width="4.5rem">
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder="Select Filter"
            defaultValue={{ value: "all", label: "All" }}
            options={[
              { value: "all", label: "All" },
              { value: "name", label: "Name" },
              { value: "price", label: "Price" },
              { value: "stock", label: "Stock" },
              { value: "id", label: "ID" },
              { value: "date", label: "Date" },
            ]}
            onChange={(e) => (e ? setContextSearch(e.value) : "all")}
          />
        </Grid>
        <TableContainer
          as={Box}
          maxW="full"
          overflowX="auto"
          bg={results.length > 0 ? bg : bgBox}>
          <Table variant="striped" colorScheme="purple">
            <TableCaption>Products</TableCaption>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>ID</Th>
                <Th>Date Relased</Th>
                <Th>Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results &&
                results.map((product, index: number) => {
                  const date: Timestamp = product?.createdAt || Timestamp.now();
                  return (
                    <Tr key={index}>
                      <Td>
                        <Text overflow="hidden">
                          {product?.name?.length > 20
                            ? product.name.slice(0, 20) + "..."
                            : product.name}
                        </Text>
                      </Td>
                      <Td>
                        {FormatPrice({
                          value: product?.prices[0]?.unit_amount,
                          locale: "en-GB",
                          currency: "EUR",
                        })}
                      </Td>
                      <Td>{product.stock}</Td>
                      <Td>{product.id}</Td>
                      <Td>
                        {date?.toDate().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Td>
                      <Td>
                        <ChangeState
                          id={product.id}
                          defaultChecked={product.active}
                        />
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>

            <Tfoot>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>ID</Th>
                <Th>Date Relased</Th>
                <Th>Active</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};

export default ProductsList;
