import React from "react";
import { Image, Link } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/react";

// type indexProps = {

// };

const Publicity: React.FC = () => {
  return (
    <Stack direction="row">
      <Link href={"/Allproducts"}>
        <Image
           h={{base: "lg", md: "xl"}}
           w= {{base: "xl", sm: "2xl", md: "3xl", lg: "4xl"}}
          cursor="pointer"
          objectFit="cover"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zapatillas-adidas-sl20-running-1582288581.jpg"
          alt="AdidasBanner"
        />
      </Link>
      <Link href={"/Allproducts"}>
        <Image
          display={{ base: "none", md: "flex" }}
          h={{base: "lg", md: "xl"}}
          w= {{base: "xl", sm: "2xl", md: "3xl", lg: "4xl"}}
          cursor="pointer"
          objectFit="cover"
          src="https://scontent.fbaq8-1.fna.fbcdn.net/v/t39.30808-6/317075694_3395307664124440_2557210224789011956_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=UzwFEd5TCU4AX820VZW&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfAHWYOA1HBEujJIsQjfB4Z4NMQsghmRPTNVzvmNeO0QzA&oe=638B4FD8"
          alt="RunningBanner"
        />
      </Link>
    </Stack>
  );
};
export default Publicity;
