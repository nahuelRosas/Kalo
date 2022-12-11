import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
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
import ChangeStateUsers from "../Components/changeStateUser";
import Filter from "../Components/filterusers";
const UsersList: React.FC = () => {
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
            styles={{
              input: (provided) => ({
                ...provided,
                zIndex: 999,
              }),
            }}
            options={[
              { value: "all", label: "All" },
              { value: "displayName", label: "Name" },
              { value: "email", label: "Email" },
              { value: "phoneNumber", label: "Phone Number" },
              { value: "uid", label: "UID" },
              { value: "stripeId", label: "Stripe ID" },
              { value: "date", label: "Date" },
            ]}
            onChange={(e) => (e ? setContextSearch(e.value) : "all")}
          />
        </Grid>
        <TableContainer
          as={Box}
          maxW="full"
          minH="50vh"
          overflowX="auto"
          bg={results.length > 0 ? bg : bgBox}>
          <Table variant="striped" colorScheme="purple">
            <TableCaption>Users</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>UID</Th>
                <Th>Stripe ID</Th>
                <Th>Date</Th>
                <Th>Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.map((user) => {
                const date: Timestamp = user?.createdAt || Timestamp.now();
                return (
                  <Tr key={user.uid}>
                    <Td>{user.displayName}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phoneNumber || "No Phone"}</Td>
                    <Td>{user.uid}</Td>
                    <Td>{user.stripeId}</Td>
                    <Td>
                      {date?.toDate().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Td>
                    <Td>
                      <ChangeStateUsers defaultChecked={user.userType.admin} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>

            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>UID</Th>
                <Th>Stripe ID</Th>
                <Th>Date</Th>
                <Th>Active</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};

export default UsersList;
