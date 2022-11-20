import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import BannerButtons from "./BannerButtons";

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

  const cardsComputer = [
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899688/banner/1PC_oipw06.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899592/banner/3PC_vszyof.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899570/banner/2PC_syo8wi.png",
  ];
  const cardsCellPhone = [
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899630/banner/3Cell_nfvumr.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899583/banner/1Cell_sqaj4m.png",
    "https://res.cloudinary.com/dlcilp6vw/image/upload/v1668899547/banner/2Cell_y0zuc7.png",
  ];

  return (
    <Flex w={{ base: "100%", md: "95%" }} h={"35vh"} mb="10rem" mt={"0rem"}>
      <Box
        position={"relative"}
        height={"50vh"}
        width={"full"}
        overflow={"hidden"}>
        {useBreakpointValue({ base: false, md: true }) ? (
          <>
            <BannerButtons slider={slider} type={"slickPrev"} />
            <BannerButtons slider={slider} type={"slickNext"} />
          </>
        ) : null}
        <Slider ref={(c: any) => setSlider(c)} {...settings}>
          {useBreakpointValue({ base: cardsCellPhone, md: cardsComputer })?.map(
            (url, index) => (
              <Box
                key={index}
                height={"50vh"}
                width={"full"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${url})`}
              />
            )
          )}
        </Slider>
      </Box>
    </Flex>
  );
}

export default Banner;
