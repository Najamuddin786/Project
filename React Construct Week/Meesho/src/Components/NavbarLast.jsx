import { Button, Center,Flex,Box,Image, Input, Textarea,Text } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon,Search2Icon } from '@chakra-ui/icons'


export default function NavbarLast(){
    return (<>
        
        <Center zIndex={999} bg="white" style={{position:"sticky",top:"6rem"}} h='4.2rem'>
        <Flex w='80%' fontSize='1.3rem' gap={5} justifyContent='space-around'>
            <Box cursor='pointer'>Women Ethnic</Box>
            <Box cursor='pointer'>Women Western</Box>
            <Box cursor='pointer'>Men</Box>
            <Box cursor='pointer'>Kids</Box>
            <Box cursor='pointer'>Home & Kitchen</Box>
            <Box cursor='pointer'>Beauty & Health</Box>
            <Box cursor='pointer'>Jewellery & Accessories</Box>
            <Box cursor='pointer'>Bags & Footwear</Box>
            <Box cursor='pointer'>Electronics</Box>
        </Flex>
        </Center>
        <Box zIndex={999} bg="white" style={{position:"sticky",top:"10.2rem"}} opacity='0.2' borderBottom='1px solid black'></Box>

        


    </>)
}