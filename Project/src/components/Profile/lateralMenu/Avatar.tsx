import { Flex, Box, keyframes, Avatar } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type AvatarProps = {
  photoURL?: string | null;
};

const AvatarComponent: React.FC<AvatarProps> = ({ photoURL }) => {
  const size = "8rem";
  const src = photoURL || undefined;
  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
    `;
  const pulseStatus = photoURL ? "block" : "none";
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="10rem"
      w="full"
      mt={3}
      mb={{ base: 0, md: 1 }}>
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "relative",
          display: pulseStatus,
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: "purple",
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar src={src} size="2xl" position="absolute" top={0} />
      </Box>
    </Flex>
  );
};
export default AvatarComponent;
