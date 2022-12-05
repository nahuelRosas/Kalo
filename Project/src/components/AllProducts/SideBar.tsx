import {
  Box,
  BoxProps,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Grid,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import { useRecoilState, useSetRecoilState } from "recoil";
import { FilterState } from "../../atoms/filterAtom";
import { searchAtom } from "../../atoms/SearchAtom";
import useProductsData from "../../hooks/useProductsData";
import category from "../../pages/allproducts/[category]";

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"></Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { getProducts, productsActive }: any = useProductsData();
  const setFilteredProducts: any = useSetRecoilState(FilterState);
  const [selectedGenre, setSelectedGenre]: any = useState("women");
  const [selectedPrice, setSelectedPrice]: any = useState([0, 50]);
  const [search, setSearch]: any = useRecoilState(searchAtom);

  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): any => {
    const { name } = event.currentTarget;
    if (search) {
      setSearch("");
    }
    setSelectedGenre(event.target); //Esto da men || women || unisex

    if ((name as unknown) === "unisex") {
      setFilteredProducts(
        productsActive?.filter((el: any) => el.metadata.Gender === name)
      );
    }
    if ((event.currentTarget.name as unknown) !== "unisex") {
      setFilteredProducts(
        productsActive?.filter((el: any) => el.metadata.Gender === name)
      );
    }
  };

  const handleFilterPrice = (e: any) => {
    setSelectedPrice(e);
    setFilteredProducts(
      productsActive.filter((el: any): any => {
        return (
          el.prices[0].unit_amount / 100 > e[0] &&
          el.prices[0].unit_amount / 100 <= e[1]
        );
      })
    );
  };

  useEffect(() => {
    const category = location.pathname.split("/")[2];

    if (category) {
      const filteredProducts = productsActive?.filter(
        (el: any) => el.metadata.Gender === category
      );
      setFilteredProducts(filteredProducts);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      // pos="fixed"
      h="full"
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"></Flex>
     {/*  <Select>
        <option value="bestSellers">Best Sellers</option>
        <option value="lowPrice">Low Price</option>
        <option value="highPrice">High Price</option>
      </Select> */}

      <Text align="center" mt={6} fontWeight="semibold">
        Gender
      </Text>
      <Stack align="center" justify="center">
        <Button
          size="sm"
          colorScheme="purple"
          name="Men"
          onClick={handleFilter}>
          Men
        </Button>
        <Button
          size="sm"
          colorScheme="purple"
          name="Women"
          onClick={handleFilter}>
          Women
        </Button>
        <Button
          size="sm"
          colorScheme="purple"
          name="unisex"
          onClick={handleFilter}>
          Unisex
        </Button>
      </Stack>

      <Text align="center" mt={6} fontWeight="semibold">
        Price
      </Text>
      <Grid templateColumns={"repeat(1, 1fr)"} gap={6} m={6}>
        <RangeSlider
          min={0}
          max={50}
          step={5}
          value={selectedPrice}
          colorScheme="purple"
          onChange={handleFilterPrice}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text align="center" mt={6} fontWeight="semibold">
          €{selectedPrice[0]} - €{selectedPrice[1]}
        </Text>
      </Grid>
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
