import {
  Button,
  DrawerBody,
  DrawerFooter,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import useWishlistData from "../../hooks/useWishlistData";
import CardWishlist from "./CardWishlist";

const WishList = () => {
  const { Length, Wishlist, clearWishlist, toggleDrawer } = useWishlistData();

  return (
    <>
      <DrawerBody>
        {Length === 0 ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
            color="gray.500">
            Your wishlist is empty
          </Text>
        ) : (
          <Grid>
            {Wishlist?.map((item, index) => (
              <CardWishlist key={index} itemState={item} />
            ))}
          </Grid>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Flex>
          <Button
            colorScheme="purple"
            variant="outline"
            size="md"
            mr={2}
            onClick={() => {
              toggleDrawer();
            }}>
            Cancel
          </Button>

          {Length > 0 ? (
            <Button
              colorScheme="purple"
              variant="outline"
              size="md"
              mr={2}
              onClick={() => {
                clearWishlist();
              }}>
              Delete all
            </Button>
          ) : (
            false
          )}
        </Flex>
      </DrawerFooter>
    </>
  );
};
export default WishList;
