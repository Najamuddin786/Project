

import { useState,useEffect } from "react"
import { Center ,Box,Flex,Text,Image, Button, Grid, Spacer} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import React from "react";
import '../App.css'
    

export default function Detail(){
   return (<>
        <Center>
            <Box w='90%' p=' 2% 15%'>
                <Flex >
                    {/* __________________________PART 1 */}
                    <Flex gap='5' flexDirection={'column'}>
                        <Box borderRadius={'md'}  w='4rem' h='6rem' bg='blue'>
                            IMAGE
                        </Box>
                        <Box borderRadius={'md'} w='4rem' h='6rem' bg='blue'>
                            IMAGE
                        </Box>
                        <Box borderRadius={'md'} w='4rem' h='6rem' bg='blue'>
                            IMAGE
                        </Box>
                        <Box borderRadius={'md'} w='4rem' h='6rem' bg='blue'>
                            IMAGE
                        </Box>
                    </Flex>
                    {/* __________________________PART 2 */}
                    {/* __________________________PART 3 */}
                
                </Flex>
            </Box>
        </Center>
   </>)
    
}