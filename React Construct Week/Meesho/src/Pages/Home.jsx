import { Center ,Box,Flex,Text,Image, Button} from "@chakra-ui/react";
import Product from "./Product";


export default function Home(){
    return (<>
            <Center>
                <Box w='65%' >
                    <Flex h='33rem' justifyContent='space-between'  p='3em' m='4em 0px' w='100%'bg='rgb(248, 248, 255)'>
                        <Box w='50%' >
                            <Text fontSize='3.5rem' fontWeight='600'>Lowest Prices Best Quality Shopping</Text>
                            <Flex  fontSize='1.2rem' my='2em' fontWeight='500' bg='white'p='1em' borderRadius='5px' gap={5}>
                              <Flex>
                                <Image  border='1px solid rgba(0, 0, 0, 0.075)' borderRadius='100px' h='50px' w='50px' src='https://images.meesho.com/images/pow/freeDelivery_jamun.svg'/>
                                <Text>Free Delivery</Text>
                              </Flex> 
                              <Flex>
                                <Image border='1px solid rgba(0, 0, 0, 0.075)' borderRadius='100px'h='50px' w='50px' src='https://images.meesho.com/images/pow/cod_jamun.svg'/>
                                <Text>Cash on Delivery</Text>
                              </Flex> 
                              <Flex>
                                <Image border='1px solid rgba(0, 0, 0, 0.075)' borderRadius='100px'h='50px' w='50px' src='https://images.meesho.com/images/pow/easyReturns_jamun.svg'/>
                                <Text>Easy Returns</Text>
                              </Flex> 

                            </Flex>
                            <Flex my='2em' borderRadius={5} gap={4} fontFamily={700} color='white'  p='1em 2em'  w='85%'bg='rgb(159, 32, 137)'>
                            <Image w='30px' h='30px' src='https://images.meesho.com/images/pow/playstoreSmallIcon.png'/>
                                <Text fontSize='1.6rem'>Download the Meesho App</Text>
                            </Flex>
                        </Box>
                        <Image m='-3em' h='33rem' w='45%' src="https://images.meesho.com/images/marketing/1709528579947_512.webp"/>
                    </Flex>
                </Box>
            </Center>

            {/* __________________________ 2 __________________________ */}
            <Center>
                <Box w='65%' >
                    <Flex  p='2em' m='1em' w='100%'>
                        <Center w='25%'><Box width='full' h='2px' background='rgb(159, 32, 137)'/></Center>
                        <Center><Text textAlign='center' fontWeight={600} fontSize='3rem'> Top Categories to choose from</Text></Center>
                        <Center w='25%'><Box width='full' h='2px' background='rgb(159, 32, 137)'/></Center>
                    </Flex>
                </Box>
            </Center>
            {/* __________________________ */}
            <Center>
                <Box mb='5em' w='65%' style={{backgroundImage:'url("https://images.meesho.com/images/marketing/1709528659905_1200.webp")'}}>

                    <Flex h='32rem' justifyContent='space-between'  p='1em' m='2em' w='100%'>
                        <Image src="https://images.meesho.com/images/marketing/1701835320853_400.webp"/>
                        <Image my='8.5em'mx='8em' h='70%' src="https://images.meesho.com/images/marketing/1692191045019_300.webp"/>
                        
                        
                        
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Box mb='5em' w='65%' style={{backgroundImage:'url("https://images.meesho.com/images/marketing/1709528659905_1200.webp")'}}>

                    <Flex h='32rem' justifyContent='space-between'  p='1em' m='2em' w='100%'>
                      
                        
                        
                        
                    </Flex>
                </Box>
            </Center>

            {/* __________________________ PRODUCT __________________________ */}
            <Product/>
    </>)
}