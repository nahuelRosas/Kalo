import { Avatar, Box, Flex, keyframes, Center } from "@chakra-ui/react";
import React from "react";
import useUserData from "../../../hooks/useUserData";

const AvatarComponent: React.FC = () => {
  const { userData } = useUserData();
  const size = "8rem";
  const src = userData?.photoURL || undefined;
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
  const pulseStatus = src ? "flex" : "none";
  return (
    <Center justifyContent="center" alignItems="center" w="full">
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
        <Avatar src={src} size="2xl" position="absolute" top={0} left={0} />
      </Box>
    </Center>
  );
};
export default AvatarComponent;
