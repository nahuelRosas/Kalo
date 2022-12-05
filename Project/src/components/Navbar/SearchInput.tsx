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
import Link from "next/link";
import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { searchAtom, SearchState } from "../../atoms/SearchAtom";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useRecoilState(searchAtom);
  return (
    <Flex flexGrow={1} maxWidth={"7xl"} align="center" mr={4} ml={4}>
      <InputGroup
        display={useBreakpointValue({
          base: "none",
          md: "flex",
        })}>
        <Input
          borderRadius={"999px"}
          placeholder="Search"
          value={search.search}
          bg={useColorModeValue("gray.100", "gray.700")}
          _focus={{
            bg: useColorModeValue("white", "gray.800"),
          }}
          onChange={(e) => setSearch(e.target.value as unknown as SearchState)}
        />
        <InputRightElement>
        <Link href={`/allproducts/${search}`}>
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            variant="ghost"
            isRound={true}
            colorScheme="purple"></IconButton>
            </Link>
        </InputRightElement>
      </InputGroup>

      <Flex
        display={useBreakpointValue({
          base: "flex",
          md: "none",
        })}
        flexGrow={1}
        align="center"
        justify="right">
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          variant="ghost"
          isRound={true}
          colorScheme="purple"
          onClick={onOpen}></IconButton>

        <Drawer
          placement={"top"}
          blockScrollOnMount={true}
          isOpen={isOpen}
          onClose={onClose}>
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
                  borderRadius={"999px"}
                  placeholder="Search"
                  value={search.search}
                  onChange={(e) =>
                    setSearch(e.target.value as unknown as SearchState)
                  }
                />
                <InputRightElement>
                <Link href={`/allproducts/${search}`}>
                  <IconButton
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    variant="ghost"
                    isRound={true}
                    colorScheme="purple"></IconButton>
                    </Link>
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
