import React from "react";
import useProductsData from "../../../hooks/useProductsData";
import Carousel from "../../Carousel";
import ProductCard from "../../Products";
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
      <Carousel
        settings={settings}
        carouselProps={{
          mt: "2rem",
          mb: "5rem",
          h: "80%",
        }}>
        {productsActive.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </>
  );
};

export default Products;
