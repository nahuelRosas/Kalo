import { Flex, Grid, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type gridProps = {
  children: React.ReactNode | null;
  columns?: number;
  spacing?: number;
  typeGrid?: "grid" | "simpleGrid";
  templateColumns?: string;
  noFormat?: boolean;
};

const GridComponent: React.FC<gridProps> = ({
  children,
  columns = 2,
  spacing = 4,
  typeGrid = "simpleGrid",
  templateColumns = "repeat(2, 1fr)",
  noFormat = false,
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
        <Grid templateColumns={templateColumns} gap={spacing} width="100%">
          {children}
        </Grid>
      )}
    </Flex>
  );
};
export default GridComponent;
