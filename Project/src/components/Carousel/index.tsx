import { Box, Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselButton from "./CarouselButtons";

type CarouselProps = {
  children: React.ReactNode;
  settings: object;
  carouselProps?: FlexProps;
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  settings,
  carouselProps,
}) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <Flex
      w={{ base: "100%", md: "95%" }}
      h={"50vh"}
      overflow={"hidden"}
      mb={"0rem"}
      {...carouselProps}>
      <Box position={"relative"} width={"full"}>
        <CarouselButton
          slider={slider}
          type={"slickPrev"}
          display={{ base: "none", md: "flex" }}
        />
        <CarouselButton
          slider={slider}
          type={"slickNext"}
          display={{ base: "none", md: "flex" }}
        />
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {children}
        </Slider>
      </Box>
    </Flex>
  );
};

export default Carousel;
