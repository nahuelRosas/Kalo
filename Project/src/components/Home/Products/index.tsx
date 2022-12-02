import { Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import useProductsData from "../../../hooks/useProductsData";
import Carousel from "../../Carousel";
import ProductCard from "../../Products";
import { images } from "../images";
const Products: React.FC = () => {
  const { productsActive } = useProductsData();

  const settings = {
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

  return (
    <>
      <Heading mt={8}>Recomended for you</Heading>
      <Carousel
        settings={settings}
        carouselProps={{
          mt: "1rem",
          mb: "5rem",
          h: "80%",
        }}>
        {productsActive.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Carousel>

      <Heading>Search your Brand!</Heading>
      <Carousel
        settings={settings}
        carouselProps={{
          mt: "4rem",
          mb: "5rem",
          h: "80%",
        }}>
        {images.map((data, i) => (
          <Link key={i}>
            <Image ml={10} src={data.value} alt={""} w="191px" h="101px" />
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default Products;
