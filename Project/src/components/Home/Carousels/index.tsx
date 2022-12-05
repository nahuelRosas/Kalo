import { Heading, Image, Link } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React from "react";
import useProductsData from "../../../hooks/useProductsData";
import { Brands } from "../../../utils/constant";
import Carousel from "../../Carousel";
import ProductCard from "../../Products";

const Carousels: React.FC = () => {
  const { productsActive } = useProductsData();

  return (
    <>
      <Heading mt={8}>Recomended for you</Heading>
      <Carousel
        carouselProps={{
          mt: "1rem",
          mb: "5rem",
          h: "80%",
        }}>
        {productsActive.map((product: DocumentData, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </Carousel>

      <Heading>Find your Brand</Heading>
      <Carousel
        carouselProps={{
          mt: "4rem",
          mb: "5rem",
          h: "80%",
        }}>
        {Brands.map((object: { src: string }, index: number) => (
          <Link key={index}>
            <Image ml={10} src={object.src} alt={"brand"} w="191px" h="101px" />
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
