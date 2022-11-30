import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");

  return (
    <Flex flexGrow={1} maxWidth={"6xl"} align="center" mr={4} ml={4}>
      <InputGroup
        display={useBreakpointValue({
          base: "none",
          md: "flex",
        })}
      >
        <Input
          borderRadius={"999px"}
          focusBorderColor={"primary"}
          placeholder="Search..."
          value={search}
          bg={useColorModeValue("gray.100", "gray.700")}
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
            boderColor: "teal.500",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            variant="ghost"
            isRound={true}
            colorScheme="purple"
          ></IconButton>
        </InputRightElement>
      </InputGroup>

      <Flex
        display={useBreakpointValue({
          base: "flex",
          md: "none",
        })}
        flexGrow={1}
        align="center"
        justify="right"
      >
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          variant="ghost"
          isRound={true}
          colorScheme="purple"
          onClick={onOpen}
        ></IconButton>
        <Drawer
          placement={"top"}
          blockScrollOnMount={true}
          isOpen={isOpen}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody className="searchBar">
              <InputGroup maxW="100%">
                <InputLeftElement>
                  <ArrowBackIcon
                    color={useColorModeValue("gray.600", "white")}
                    onClick={onClose}
                    _hover={{
                      color: useColorModeValue("gray.800", "white"),
                      cursor: "pointer",
                    }}
                    boxSize={6}
                  />
                </InputLeftElement>
                <Input
                  focusBorderColor={"primary"}
                  borderRadius={"999px"}
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    variant="ghost"
                    isRound={true}
                    colorScheme="purple"
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};
export default SearchInput;
