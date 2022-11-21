import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import logoDark from "../../../public/assets/logo/logoDark.png";
import logoLight from "../../../public/assets/logo/logoLight.png";
import Image from "next/image";
import Link from "next/link";

const LogoCompany: React.FC = () => {
  return (
    <Flex>
      <Link href="/">
        <Image
          src={useColorModeValue(logoLight, logoDark)}
          alt="Logo"
          width="50"
          priority
        />
      </Link>
    </Flex>
  );
};
export default LogoCompany;
