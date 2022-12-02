import { Flex, Grid, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type gridProps = {
  children: React.ReactNode | null;
  columns?: number;
  spacing?: number;
  typeGrid?: "grid" | "simpleGrid";
  templateColumns?: string;
};

const GridComponent: React.FC<gridProps> = ({
  children,
  columns = 2,
  spacing = 4,
  typeGrid = "simpleGrid",
  templateColumns = "repeat(2, 1fr)",
}) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      alignItems={"center"}
      px={6}
      py={4}
      bg={useColorModeValue("gray.50", "gray.700")}
      borderBottomWidth="1px">
      {typeGrid === "simpleGrid" && (
        <SimpleGrid columns={columns} spacing={spacing} width="100%">
          {children}
        </SimpleGrid>
      )}
      {typeGrid === "grid" && (
        <Grid templateColumns={templateColumns} gap={spacing} width="100%">
          {children}
        </Grid>
      )}
    </Flex>
  );
};
export default GridComponent;
