import React from 'react';
import ProductList from '../components/ProductList (sin uso)/index';
import Filters from '../components/Filter (SIN USO)/index';
import { Flex } from '@chakra-ui/react';

type productsProps = {
    
};

const products:React.FC<productsProps> = () => {
    
    return (
        <Flex>

        <Filters/>
        <ProductList/>
        </Flex>

    )
}
export default products;