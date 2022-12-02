import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { RecoilState, useRecoilState } from "recoil";
type previewImageProps = {
  stateAtom: RecoilState<any>;
  onChange: (e: any) => void;
};

const PreviewImage: React.FC<previewImageProps> = ({ stateAtom, onChange }) => {
  const [value] = useRecoilState(stateAtom);

  console.log(value);
  return (
    <SimpleGrid columns={3} spacing={4} w="full">
      {value["images"].map(
        (image: { url: any }, index: React.Key | null | undefined) => {
          const src = image?.url ? image.url : image;

          return (
            <Box key={index} w="full" h="full" position="relative">
              <Image
                src={src}
                w="full"
                h="full"
                objectFit="cover"
                alt="preview"
              />
              <IconButton
                aria-label="Delete Image"
                icon={<DeleteIcon />}
                position="absolute"
                top={2}
                right={2}
                colorScheme="red"
                onClick={() => onChange (index)}
              />
            </Box>
          );
        }
      )}
    </SimpleGrid>
  );
};

export default PreviewImage;
