import { Flex, Grid, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type gridProps = {
  children: React.ReactNode | null;
  columns?: number;
  spacing?: number;
  typeGrid?: "grid" | "simpleGrid" | "gridRows" | "gridColumns";
  templateColumns?: string;
  noFormat?: boolean;
  templateRows?: string;
};

const GridComponent: React.FC<gridProps> = ({
  children,
  columns = 2,
  spacing = 4,
  typeGrid = "simpleGrid",
  templateColumns = "repeat(2, 1fr)",
  noFormat = false,
  templateRows = undefined,
}) => {
  const bg = useColorModeValue("gray.50", "gray.700");

  let propsFlex = {};
  if (!noFormat) {
    propsFlex = {
      justify: "space-between",
      align: "center",
      alignItems: "center",
      px: 6,
      py: 4,
      bg,
      borderBottomWidth: "1px",
    };
  }

  return (
    <Flex {...propsFlex}>
      {typeGrid === "simpleGrid" && (
        <SimpleGrid columns={columns} spacing={spacing} width="100%">
          {children}
        </SimpleGrid>
      )}
      {typeGrid === "grid" && (
        <Grid
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap={spacing}
          width="100%">
          {children}
        </Grid>
      )}
      {typeGrid === "gridRows" && (
        <Grid
          templateColumns="1fr"
          templateRows={templateRows}
          gap={spacing}
          width="100%">
          {children}
        </Grid>
      )}
    </Flex>
  );
};
export default GridComponent;
