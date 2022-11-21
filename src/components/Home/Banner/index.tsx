import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import BannerButtons from "./BannerButtons";
import Image from "next/image";
import { cellImages, pcImages } from "../../../utils/constant";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};
function Banner() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Flex w={{ base: "100%", md: "95%" }} mb="10rem" mt={"0rem"}>
      <Box position={"relative"} width={"full"}>
        {useBreakpointValue({ base: false, md: true }) ? (
          <>
            <BannerButtons slider={slider} type={"slickPrev"} />
            <BannerButtons slider={slider} type={"slickNext"} />
          </>
        ) : null}
        <Slider ref={(c) => setSlider(c)} {...settings}>
          {useBreakpointValue({ base: cellImages, md: pcImages })?.map(
            (url, index) => (
              <Image key={index} alt="Banner" src={url} priority />
            )
          )}
        </Slider>
      </Box>
    </Flex>
  );
}

export default Banner;
