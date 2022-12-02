import { FlexProps, useColorModeValue } from "@chakra-ui/react";

const FlexPropComponent = ({
  compound = false,
  typePrototype,
}: {
  compound: boolean;
  typePrototype: string;
}): FlexProps => {
  const bg = useColorModeValue("gray.50", "gray.700");
  let configFlex: FlexProps = {};

  if (!compound) {
    configFlex = {
      bg,
      justify: "space-between",
      px: 6,
      py: 4,
      align: "center",
      borderBottomWidth: "1px",
      width: "100%",
    };
  }
  if (typePrototype === "images" && !compound)
    configFlex = {
      width: "100%",
      bg,
    };
  if (typePrototype === "select" || typePrototype === "createSelect") {
    configFlex = {
      ...configFlex,
      zIndex: 1000,
      bg,
    };
  }
  return configFlex;
};

export default FlexPropComponent;
