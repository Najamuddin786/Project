import { Container,Box,Flex, Button,Link, Spacer, Center} from "@chakra-ui/react";


export default function Footer(){
    return (<>
   
     
            
   <Flex
      fontWeight='500'
      gap={3}
      color='#46618a'
      fontSize={['18px', '18px']}
      bg='#ededeb'
      h={['auto', '15vh']}
      p='1em'
      alignItems="center"
      
      flexWrap="wrap" // Allow items to wrap to the next line on smaller screens
      
    >
      <Box textAlign={['center', 'right']} mt={['1em', '0']}>
        Copyright © 2024 MyNetDiary Inc. All rights reserved.
      </Box>

      <Spacer />

      
      <Link href='#'>Contact Us</Link>
      <Box opacity={0.1}>|</Box>
      <Link href='#'>FAQ</Link>
      <Box opacity={0.1}>|</Box>
      <Link href='#'>Privacy</Link>
      <Box opacity={0.1}>|</Box>
      <Link href='#'>Terms of Use</Link>
    </Flex>
      
    </>)
}