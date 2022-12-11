import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import useProductsData from "../../hooks/useProductsData";
import ItemMenu from "./itemMenu";

const Directory = () => {
  const { setOrderBy, setFilterBy } = useProductsData();

  return (
    <Box maxW={"100vw"}>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Grid
          templateColumns="repeat(5, 3fr)"
          gap={5}
          w={"100vw"}
          maxW={"100vw"}>
          <ItemMenu
            title="All"
            filterByAction="All"
            orderByAction="date-asc"
            setFilterBy={setFilterBy}
            setOrderBy={setOrderBy}
          />
          <ItemMenu
            title="Women"
            filterByAction="Women"
            setFilterBy={setFilterBy}
            setOrderBy={setOrderBy}
          />
          <ItemMenu
            title="Men"
            filterByAction="Men"
            setFilterBy={setFilterBy}
            setOrderBy={setOrderBy}
          />
          <ItemMenu
            title="Kids"
            filterByAction="Kids"
            setFilterBy={setFilterBy}
            setOrderBy={setOrderBy}
          />
          <ItemMenu
            title="Unisex"
            filterByAction="Unisex"
            setFilterBy={setFilterBy}
            setOrderBy={setOrderBy}
          />
        </Grid>
      </Flex>
    </Box>
  );
};

export default Directory;
