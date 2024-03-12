import { Center ,Box,Text,Flex, Spacer} from "@chakra-ui/react";
import ProductLeft from "../Components/ProductLeft";
import ProductRight from "../Components/ProductRight";
import { useEffect, useState } from "react";


export default function Product(){
    
    return (<>
        <Center>
            <Box w='80%'>
                    <Text fontSize='2.6rem' my='1em'><h1>Products For You</h1></Text>
                    <Flex w='100%'gap='5'>
                        <Box w='280px'>
                            <ProductLeft/>
                        </Box>
                        
                        <Box >
                            <ProductRight/>
                        </Box>
                    </Flex>
            </Box>
        </Center>
    </>)
}