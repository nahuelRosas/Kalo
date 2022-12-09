import { Image, Link, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AdvertisingImages, getImage } from "../../../utils/Advertising";
const Advertising: React.FC = () => {
  type advertisingImages = {
    image: string;
    title: string;
  };
  const [firstImage, setFirstImage] = useState<advertisingImages>();
  const [secondImage, setSecondImage] = useState<advertisingImages>();
  useEffect(() => {
    const { firstImage, secondImage } = getImage();
    setFirstImage(firstImage);
    setSecondImage(secondImage);
  }, []);
  return (
    <Stack direction="row">
      <Link href={"/allproducts"}>
        <Image
          h={{ base: "lg", md: "xl" }}
          w={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          cursor="pointer"
          objectFit="cover"
          src={firstImage?.image}
          alt={firstImage?.title}
        />
      </Link>
      <Link href={"/allproducts"}>
        <Image
          display={{ base: "none", md: "flex" }}
          h={{ base: "lg", md: "xl" }}
          w={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          cursor="pointer"
          objectFit="cover"
          src={secondImage?.image}
          alt={secondImage?.title}
        />
      </Link>
    </Stack>
  );
};
export default Advertising;
