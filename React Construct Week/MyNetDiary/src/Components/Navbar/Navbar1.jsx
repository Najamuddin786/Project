import { Box, Button, Container, Flex,Image, Spacer} from "@chakra-ui/react";



export default function Navbar1(){
    


        return (
            <>
            
            <Box bg='#0a9905' position='sticky' top='0px'  >
            <Flex p='3em 1.5em' gap={3} h='15vh'  align="center">
                <Box mt='-0.2em' w='200px'h='70px' bgSize="cover"  bgImage="url('https://assets.mynetdiary.com/images/logo-main.svg')" bgRepeat="no-repeat"></Box>
                <Box color='white' fontFamily='700' ml='-0.2em' fontSize='3em'>Diary</Box>
                <Spacer/>
                <Button p='1.5em 2em' _hover={{bg:"#fcbd56"}} bg='#ffb845' color='white' borderRadius='10em' border='2px solid #3a6b06'>SIGN UP</Button>
                <Button p='1.5em 2em' _hover='none' bg='none' color='white' borderRadius='10em' border='2px solid #7cbf34'>SIGN IN</Button>

            </Flex>
            <Flex mt='-2px' p='2em 1em' gap={4} h='15vh'  align="center" justifyContent='center'>
                
                    <Box fontSize='20px' fontWeight='600' color='white' display='flex'><Box>Features  </Box><Box mx='0.5em'>$</Box></Box>
                    <Box fontSize='20px' fontWeight='600' color='white' display='flex'><Box>Diets</Box><Box mx='0.5em'>$</Box></Box>
                    <Box fontSize='20px' fontWeight='600' color='white' display='flex'><Box>Library</Box><Box  mx='0.5em'>$</Box></Box>
                    <Box fontSize='20px' fontWeight='600' color='white' display='flex'><Box>Food</Box><Box  mx='0.5em'>$</Box></Box>
                    <Box fontSize='20px' fontWeight='600' color='white'><Box>Features</Box></Box>
                
            </Flex>
            </Box>

            </>
        )
}