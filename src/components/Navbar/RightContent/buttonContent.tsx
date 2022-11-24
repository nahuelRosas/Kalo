import {
  Box,
  Icon,
  IconButton,
  As,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { RecoilState, useSetRecoilState } from "recoil";

type buttonContentProps = {
  state: RecoilState<any>;
  children: React.ReactNode;
  icon: As<any> | undefined;
  type: string;
};

const ButtonContent: React.FC<buttonContentProps> = ({
  state,
  children,
  icon,
  type,
}) => {
  const setState = useSetRecoilState(state);

  return (
    <>
      {children}
      <Box
        mr={4}
        display={
          useBreakpointValue({
            base: "none",
            md: "flex",
          }) as string
        }>
        <IconButton
          aria-label={type}
          onClick={() => setState({ isOpen: true, type: type })}
          isRound={true}
          colorScheme="purple"
          variant="ghost"
          size="md">
          <Icon as={icon} />
        </IconButton>
      </Box>
    </>
  );
};
export default ButtonContent;
