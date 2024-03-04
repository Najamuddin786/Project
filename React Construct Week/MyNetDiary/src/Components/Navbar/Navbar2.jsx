import { Container,Box,Image,Flex, Spacer, Link} from "@chakra-ui/react";

export default function Navbar2(){
    return (
        <>
        <Box w='100%' h='75vh' bg='#0a9905' mt='-1px' borderRadius='0px 0px 6em 6em'>
            <Box p='0.2em 3em 0.2em 4em' w='40%' h='100%'  style={{float:'left'}}>
                <Box fontSize='4rem' fontWeight='700' color='#f5f5f5' lineHeight='1'>Be Healthy <br/> for Life!</Box>
                <Box  my='0.5em' fontSize='1.8rem' fontWeight='500' color='#fcf8b3'>Your weight loss, diet, and nutrition assistant.</Box>
                <Flex gap='3' my='3em' w='80%'>
                    <Link to='#'><Image src='https://assets.mynetdiary.com/images/app-store-badge.svg'/></Link>
                    <Spacer/>
                    <Link to='#'><Image src='https://assets.mynetdiary.com/images/google-play-badge.svg'/></Link>
                </Flex>

            </Box>
            <Flex w='60%' h="100%"  style={{float:'left'}}>
                <Image h='130%' ml='-4em' src="https://assets.mynetdiary.com/images/iphonex@2x.png"/>
                <Image h='80%' mt='27%' ml='-1em' src="https://assets.mynetdiary.com/images/iwatch@2x.png"/>

            </Flex>
            

        </Box>
        <Box >
                <Box m='1em 4em' color='#46618a' fontSize='20px' fontWeight='700'>Top Rated: <span style={{fontWeight:"500"}}>184,041 reviews & counting</span></Box>
        </Box>

        </>
    )
}