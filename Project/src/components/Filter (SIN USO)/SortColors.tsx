import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorIcon } from '../../chakra/ColorIcon';

type SortColorsProps = {
    // type: string;
};

const SortColors:React.FC<SortColorsProps> = () => {
    
    return (
        <Flex 
        align={"center"}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        flexDirection={"column"}
        >
            <Text fontSize={"1.2rem"} fontWeight={"bold"} mb={"1rem"}>
                Colors
            </Text>

            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={3}
                w={"70%"}
                mx={"auto"}
                my={"2rem"}               
            >
                <GridItem>
                    <ColorIcon boxSize={10} color="red" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="blue" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="green" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="yellow" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="orange" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="purple" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="pink" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="teal" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="cyan" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="gray" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="black" />
                </GridItem>
                <GridItem>
                    <ColorIcon boxSize={10} color="white" />
                </GridItem>
            </Grid>
        </Flex>
    )
}
export default SortColors;