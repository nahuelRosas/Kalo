import React from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AuthModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiLogIn } from "react-icons/fi";
import { SiFirebase } from "react-icons/si";
const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);

  return (
    <>
      {useBreakpointValue({
        md: (
          <>
            <Button
              colorScheme="purple"
              variant="outline"
              size={"md"}
              onClick={() =>
                setAuthModalState({
                  isOpen: true,
                  type: "login",
                })
              }>
              Log In
            </Button>
            <Button
              colorScheme="purple"
              variant="solid"
              ml={4}
              size={"md"}
              onClick={() =>
                setAuthModalState({
                  isOpen: true,
                  type: "SignUp",
                })
              }>
              Sign Up
            </Button>
          </>
        ),
        base: (
          <Menu
            isLazy
            placement="bottom-end"
            closeOnBlur={true}
            closeOnSelect={true}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
              isRound={true}
              colorScheme="purple"></MenuButton>
            <MenuList>
              <MenuItem
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "login",
                  })
                }
                icon={<FiLogIn size={20} />}>
                Log In
              </MenuItem>
              <MenuItem
                onClick={() =>
                  setAuthModalState({
                    isOpen: true,
                    type: "SignUp",
                  })
                }
                icon={<SiFirebase size={20} />}>
                Sign Up
              </MenuItem>
            </MenuList>
          </Menu>
        ),
      })}
    </>
  );
};
export default AuthButtons;
