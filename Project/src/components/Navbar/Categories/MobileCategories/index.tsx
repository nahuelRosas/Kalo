import {
  Flex,
  useDisclosure,
  Drawer,
  Button,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  useColorModeValue,
  Text,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  List,
  ListItem,
  DrawerFooter,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../../../../utils/constant";


const MobileCategories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("purple.600", "purple.200");
  return (
    <>
      <Flex display={{ base: "flex", md: "none" }} pr="5px">
        <Button
          variant={"ghost"}
          colorScheme="purple"
          onClick={onOpen}
          fontSize="1.5rem"
        >
          <HamburgerIcon />
        </Button>

        {/* TITLE */}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          colorScheme="purple"
        >
          <HamburgerIcon />
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={"white"} fontSize={"md"} />
            <DrawerHeader
              bg={"primary"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"xl"}
              py={8}
            >
              Categories
            </DrawerHeader>

            {/* Drawer Content */}

            <DrawerBody p={0}>
              <Accordion allowMultiple>
                {NAV_ITEMS.map((navItem, index) => (
                  <AccordionItem key={index} py={4} bg={bg}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          
                            <Text fontSize={"md"} fontWeight={700}>
                              {navItem.label}
                            </Text>
                       
                          <ArrowForwardIcon
                            transition={"all .25s ease-in-out"}
                            transform={isExpanded ? "rotate(90deg)" : ""}
                          />
                        </AccordionButton>

                        <AccordionPanel p={1}>
                          <List>
                            {navItem?.children?.map((child) => (
                              <ListItem key={child.label}>
                                <Link href={`/AllProducts/${child.label}`}>
                                  <Text
                                    p={2}
                                    fontSize={"md"}
                                    fontWeight={300}
                                    _hover={{
                                      textDecoration: "none",
                                      color: color,
                                    }}
                                  >
                                    {child.label}
                                  </Text>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </DrawerBody>
            <DrawerFooter
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderTopWidth={"1px"}
              fontWeight={"bold"}
              fontSize={"md"}
            >
              <Text fontSize={"md"} fontWeight={700}>
                Contact Us: 123-456-7890
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default MobileCategories;
