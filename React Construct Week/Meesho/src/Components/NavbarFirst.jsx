import { Button, Center,Flex,Box,Image, Input, Textarea,Text } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon,Search2Icon } from '@chakra-ui/icons'


export default function NavbarFirst(){
    return (<>
        <Center bg='white' zIndex={1000} h='6rem' w='100%' style={{position:"sticky" ,top:"0px"}}>
        <Flex gap={3} h='3rem' w='80%' justifyContent='space-between' align='center'>
            <Box ><Image h='3rem' src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg'/></Box>
            <Box ml='1em' px='0.4em' opacity='0.5' fontSize='1.8rem'  w='38%' borderRadius='5px' h='3.5rem' border='1px solid black'>
                <Center h='full'><Box><Search2Icon/></Box><Input fontSize='1.5rem' h='full' border='none' _focus={{border:"none"}} _actived={{border:"none"}} placeholder="Try Saree,Kurti or Search by Product Code" _placeholder={{opacity:"2", color:"black",}}/></Center>
            </Box>
            
            <Box ml='5px' cursor='pointer'>
                
                <Flex fontSize='1.5rem' >
                
                    <Box lineHeight={1} textAlign='center'><span  className="material-symbols-outlined">phone_iphone</span>Download App</Box>
                </Flex>
                
            </Box>
           
            <Box  h='full' opacity='0.2' borderRight='2px solid black'></Box>
            <Box cursor='pointer' textAlign='center' fontSize='1.5rem'>Become a Supplier</Box>
            <Box h='full' opacity='0.2' borderRight='2px solid black'></Box>
            <Box cursor='pointer' fontSize='1.5rem'>Newsroom</Box>
            <Box h='full' opacity='0.2' borderRight='2px solid black'></Box>

            <Box fontSize='1.5rem'>
                <Flex gap={5}>
                <Flex cursor='pointer' flexDirection='column' align='center'>
                    <span style={{fontSize:"2.2rem",marginBottom:"-10px"}} className="material-symbols-outlined">person</span>
                    <Text>Profile</Text>
                </Flex>
                <Flex cursor='pointer' flexDirection='column' align='center'>
                    <span style={{fontSize:"2.2rem",marginBottom:"-10px"}} className="material-symbols-outlined">shopping_cart</span>
                   <Text>Cart</Text>
                </Flex>
                </Flex>
            </Box>
            
            
        </Flex>
        </Center>

        <Box bg="white" zIndex={999} style={{position:"sticky",top:"6.1rem"}} opacity='0.2' borderBottom='2px solid black'></Box>
        
    </>)
}