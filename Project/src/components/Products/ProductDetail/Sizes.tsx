import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

interface Props {
    sizesNumber: number;
    size: number;
    setSize: (size: number) => void;
}


const Sizes:React.FC<Props> = ({ sizesNumber }) => {
    
    return (
        <Flex
        flexDirection={"row"}
        >
            <Button
            borderRadius="full"
            p={2}
            colorScheme="purple"
            size="sm"
            >
             {sizesNumber}
            </Button>


        </Flex>
    )
}
export default Sizes;