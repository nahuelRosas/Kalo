import React from "react";
import Carousel from "../../Carousel";
import { cellImages, pcImages } from "../../../utils/constant";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const Banner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Carousel settings={settings}>
      {pcImages.map((url, index) => (
        <Flex
          key={index}
          w={"full"}
          h={"100%"}
          overflow={"hidden"}
          position={"relative"}>
          <Image
            src={url}
            alt="banner"
            priority
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Flex>
      ))}
    </Carousel>
  );
};

export default Banner;
