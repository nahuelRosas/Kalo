import {
  Box,
  Grid,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ActionMeta, Select, SingleValue } from "chakra-react-select";
import React, { SetStateAction, useState } from "react";
import { FaChild } from "react-icons/fa";
import { ImMan, ImManWoman, ImWoman } from "react-icons/im";
import useProductsData from "../../../../hooks/useProductsData";
import ItemMenu from "./itemMenu";
import TitleMenu from "./titleMenu";

const LateralMenu: React.FC = () => {
  const { setOrderBy, setFilterBy, currentFilter } = useProductsData();
  return (
    <Box
      display={{ base: "none", md: "block" }}
      py={4}
      px={6}
      bg={useColorModeValue("white", "gray.700")}
      borderBottomWidth={1}
      borderColor={useColorModeValue("gray.200", "gray.700")}>
      <TitleMenu title="Order" />
      <Select
        options={[
          { value: "a-z", label: "A-Z" },
          { value: "z-a", label: "Z-A" },
          { value: "price-desc", label: "Low Price" },
          { value: "price-asc", label: "High Price" },
          { value: "date-asc", label: "Newest" },
          { value: "date-desc", label: "Oldest" },
          { value: "discount-desc", label: "Discount" },
          { value: "random", label: "Random" },
        ]}
        onChange={(e) => {
          setOrderBy(e?.value);
        }}
        defaultValue={{ value: "a-z", label: "A-Z" }}
        colorScheme="purple"
        aria-label="Select a order"
      />
      <TitleMenu title="Genres" />
      <ItemMenu
        title="All"
        icon={ImManWoman}
        action={setFilterBy}
        state={currentFilter("all")}
      />
      <ItemMenu
        title="Women"
        icon={ImWoman}
        action={setFilterBy}
        state={currentFilter("women")}
      />
      <ItemMenu
        title="Men"
        icon={ImMan}
        action={setFilterBy}
        state={currentFilter("men")}
      />
      <ItemMenu
        title="Kids"
        icon={FaChild}
        action={setFilterBy}
        state={currentFilter("kids")}
      />
      <ItemMenu
        title="Unisex"
        icon={ImManWoman}
        action={setFilterBy}
        state={currentFilter("unisex")}
      />
      <TitleMenu title="Price" />
      <Grid templateColumns={"repeat(1, 1fr)"} gap={6} m={6}>
        <RangeSlider min={0} max={50} step={5} colorScheme="purple">
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text align="center" mt={6} fontWeight="semibold">
          {/* €{selectedPrice[0]} - €{selectedPrice[1]} */}
        </Text>
      </Grid>
    </Box>
  );
};

export default LateralMenu;
