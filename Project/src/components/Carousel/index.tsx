import { Box, Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselButton from "./CarouselButtons";

type CarouselProps = {
  children: React.ReactNode;
  settings?: object;
  carouselProps?: FlexProps;
};

export const configDefault = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.02,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  settings = configDefault,
  carouselProps,
}) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <Flex
      mt={"4em"}
      w={{ base: "100%", md: "95%" }}
      h={"auto"}
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
