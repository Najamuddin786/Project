import { Box,Flex,Container, Center,Image,Text, Grid, Button } from "@chakra-ui/react";

export default function Home(){
    return (<>
            <Box maxW="100vw"  bg='#F2F2F2 '>
                <Center h='70vh'>
                <Flex  align='center' flexDirection="column" w='2xl' fontSize='2rem' fontWeight="600" textAlign='center' color="#46618a" >
                “You really can't go wrong with MyNetDiary
                as a scientifically-proven way to help you lose weight” <br/>
                <Image  w='60%' my='1em' src='https://assets.mynetdiary.com/images/wh-logo.svg'/>


                </Flex>
                </Center>
                <Center w='100vw' >
                    <Flex w='full' mb='5em' p='1em' justifyContent='space-around'>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-usa-today@2x.png'/>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-abc-news.svg'/>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-fox.svg'/>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-consumer-reports.svg'/>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-wsj.svg'/>
                        <Image w='15%' src='https://assets.mynetdiary.com/images/logo-chicago-tribune.svg'/>

                    </Flex>
                </Center>


            </Box>
            <Box maxW='100vw' bg='#fcf0f4'>
                <Center h='40vh' fontSize='4rem' color="rgb(38, 143, 208)" fontWeight='700'>What it takes to succeed</Center>
                <Box>
                    <Grid align='center' w='100%'  templateColumns="repeat(2, 1fr)">
                            <Container p='1em 0em'>
                            <Image my='1em' w='400px' src="https://assets.mynetdiary.com/images/cover-insights-Illustration-1@2x.png"/>
                            <Text color='rgb(38, 143, 208)' fontSize='3rem' fontWeight='600'>Find your Diet</Text>
                            <Text my='1em' fontSize='2rem' color='rgb(70, 97, 138)'>Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.</Text>
                            </Container>
                            <Container p='1em 0em'>
                            <Image my='1em' w='400px' src="https://assets.mynetdiary.com/images/cover-insights-Illustration-2@2x.png"/>
                            <Text color='rgb(38, 143, 208)' fontSize='3rem' fontWeight='600'>Set Your Targets</Text>
                            <Text my='1em' fontSize='2rem' color='rgb(70, 97, 138)'>Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins.</Text>
                            </Container>
                            <Container p='1em 0em'>
                            <Image my='1em' w='400px' src="https://assets.mynetdiary.com/images/cover-insights-Illustration-4@2x.png"/>
                            <Text color='rgb(38, 143, 208)' fontSize='3rem' fontWeight='600'>Log Your Meals & Exercise</Text>
                            <Text my='1em' fontSize='2rem' color='rgb(70, 97, 138)'>Use the App to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling.</Text>
                            </Container>
                            <Container p='1em 0em'>
                            <Image my='1em' w='400px' src="https://assets.mynetdiary.com/images/cover-insights-Illustration-1@2x.png"/>
                            <Text color='rgb(38, 143, 208)' fontSize='3rem' fontWeight='600'>Reach Your Goals</Text>
                            <Text my='1em' fontSize='2rem' color='rgb(70, 97, 138)'>Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices.</Text>
                            </Container>
                            
                           
                    </Grid>
                </Box>

            </Box>
             {/* _________________________ NEW SECTION  #3 __________________________ */}
             <Box w="100vw" p='2em 4em' align='center'>
                <Text my='1.5em' fontSize='4.5rem' fontWeight='700' color='rgb(38, 143, 208)' >Top Rated Calorie Counter App</Text>
                <Text my='1.5em' fontSize='2.5rem' fontWeight='500' color='rgb(70, 97, 138)'>“This is my favorite food diary app. I used six of the "top" apps in this category for several days so that I could compare them and select what worked best for me. MyNetDiary was the winner. Intuitive, simple layout, decent database, appealing graphic design, and no ads.”</Text>
                <Button my='1.5em' fontSize='2.2rem' p='1.5em 1.5em' border="2px solid green" borderRadius='100px'
                bg="white" color="green">SEE MORE TESTIMONIALS
                {">"}</Button>
            

             </Box>
             <Box  w="full" mt='4em' mb='10em' borderBottom="1px dotted grey"></Box>
             <Flex w='full' bg="white"> 
                <Container textAlign='center'>
                    
                    <Image  borderRadius='20px' src="https://assets.mynetdiary.com/keto/cover-premium-keto-recipes@2x.jpg"/>
                    <Text my='0.5em' w='100%' px='25%' fontSize='3.5rem' fontWeight='700' color='rgb(38, 143, 208)' lineHeight='1.1em'>Premium Recipes</Text>
                    <Text my='0.5em' color='rgb(70, 97, 138)' fontSize='2em' fontWeight='600'>Hundreds of easy recipes, with great variety, carefully crafted for great taste by a team of Registered Dietitians.</Text>
                </Container>
                <Container textAlign='center'>
                    
                    <Image  borderRadius='20px' src="https://assets.mynetdiary.com/images/cover-easy-tracking-premium@2x.png"/>
                    <Text my='0.5em' w='100%' px='25%' fontSize='3.5rem' fontWeight='700' color='rgb(38, 143, 208)' lineHeight='1.1em'>Easy Tracking</Text>
                    <Text my='0.5em' color='rgb(70, 97, 138)' fontSize='2em' fontWeight='600'>Massive food catalog, fastest barcode scanner, quickest food lookup making food tracking a breeze</Text>
                </Container>
                <Container textAlign='center'>
                    
                    <Image  borderRadius='20px' src="https://assets.mynetdiary.com/images/cover-insights-and-guidance-keto@2x.png"/>
                    <Text my='0.5em' w='100%' px='5%' fontSize='3.5rem' fontWeight='700' color='rgb(38, 143, 208)' lineHeight='1.1em'>Insights and Guidance</Text>
                    <Text my='0.5em' color='rgb(70, 97, 138)' fontSize='2em' fontWeight='600'>Encouraging and supportive feedback, guiding you to your goal.</Text>
                </Container>

             </Flex>

    </>)
}