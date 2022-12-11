import { Container, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../Carousel";

type CarouselImagesProps = {
  product: any;
};

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CarouselImages: React.FC<CarouselImagesProps> = ({ product }) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      _hover={{ transform: "scale(1.05)" }}
      transition="all 0.2s"
      cursor="pointer"
      alignItems="center">
      <Carousel
        settings={settings}
        carouselProps={{
          mt: "3rem",
          mb: "3rem",
          w: "100%",
          position: "relative",
        }}>
        {product?.images.map((image: string, index: number) => {
          return (
            <Image
              key={index}
              src={image}
              alt={product?.name}
              width={{ base: "100%", md: "50%" }}
              height={"100%"}
              objectFit={"scale-down"}
            />
          );
        })}
      </Carousel>
    </Container>
  );
};
export default CarouselImages;
