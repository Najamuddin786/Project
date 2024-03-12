import { Center,Flex,Text,Box } from "@chakra-ui/react";
import { useState } from "react";


export default function  ProductLeft(){
    let [value,setValue]=useState("Relevance")
    let [display,setDisplay]=useState("none")
    // function values(b){
    //     console.log(b)
    // }

    return(<>
            <Center>
                <Flex w='full'  fontSize='1.6rem' flexDirection='column'  >
                    <Center my='1em' border='1px solid black' borderRadius='5px' onClick={()=>{
                        let a=document.getElementById('visiable')
                            setDisplay("block")
                    }}>
                        <Text>Sort by :</Text>
                        <Text fontWeight={600}>{value} &nbsp;&nbsp;&nbsp;&nbsp;</Text>
                    </Center>
                    <Center>
                    <Box position='relative' w='100%'>
                    <Box     id="visiable" boxShadow='2xl' p='6' rounded='md' bg='white' h='400px' style={{overflowY:'scroll',display:`${display}`,position:'absolute', top:'0px'}}>
                    <Flex flexDirection='column' gap='5'  >
                            <Text _hover={{background:'yellow'}} cursor='pointer' onClick={()=>{setValue("Relevance");setDisplay("none")}}>Relevance</Text>
                            <Text cursor='pointer' onClick={()=>{setValue("New Arrivals");setDisplay("none")}}>New Arrivals</Text>
                            <Text cursor='pointer' onClick={()=>{setValue("Price ( High to Low)");setDisplay("none")}}>Price ( High to Low)</Text>
                            <Text cursor='pointer' onClick={()=>{setValue("Price ( Low to High)");setDisplay("none")}}>Price ( Low to High)</Text>
                            <Text cursor='pointer' onClick={()=>{setValue("Rating"),setDisplay('none')}}>Ratings</Text>
                            <Text cursor='pointer' onClick={()=>{setValue("Discount");setDisplay("none")}}>Discount</Text>
                        </Flex>
                    </Box>
                    </Box>
                    
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem est ex temporibus id enim quae omnis sit quam m. Neque animi repellendus molestiae inventore sint dolores laudantium id earum minima alias.</h1>
                </Flex>
            </Center>
    </>)
}