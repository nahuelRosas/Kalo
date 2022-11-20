import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Slider from "react-slick";

type BannerButtonsProps = {
  slider: Slider | null;
  type: string;
};

const BannerButtons: React.FC<BannerButtonsProps> = ({ slider, type }) => {
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <IconButton
      aria-label="left-arrow"
      colorScheme="purple"
      isRound={true}
      position="absolute"
      left={type === "slickPrev" ? side : "auto"}
      right={type === "slickNext" ? side : "auto"}
      top={top}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={() =>
        type === "slickPrev" ? slider?.slickPrev() : slider?.slickNext()
      }>
      {type === "slickPrev" ? <BiLeftArrow /> : <BiRightArrow />}
    </IconButton>
  );
};
export default BannerButtons;
