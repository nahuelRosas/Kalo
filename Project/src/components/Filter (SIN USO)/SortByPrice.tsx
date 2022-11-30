import {
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";

type SortByPriceProps = {
  // type: string;
};

const SortByPrice: React.FC<SortByPriceProps> = () => {
  const [value, setValue] = React.useState([0, 50]);
  return (
    <Box mb={"1rem"} borderBottom={"1px solid #E2E8F0"}>
      <Flex w={"70%"} mx={"auto"} flexDirection={"column"} alignItems={"center"} my={"4rem"} h={"100%"}>
        <Text fontSize={"1.2rem"} fontWeight={"bold"} mb={"1rem"}>
            Price
        </Text>
        <RangeSlider
          min={0}
          max={50}
          step={1}
          value={value}
          onChange={setValue}
          colorScheme="purple"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>

        <Text fontSize="sm" fontWeight="semibold" w={"full"} textAlign="center">
          {value[0]} - {value[1]}$
        </Text>
      </Flex>
    </Box>
  );
};
export default SortByPrice;
