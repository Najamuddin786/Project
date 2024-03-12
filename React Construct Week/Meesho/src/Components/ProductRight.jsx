import { useState,useEffect } from "react"
import { Center ,Box,Flex,Text,Image, Button, Grid, Spacer} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import '../App.css'

export default function ProductRight(){
    let [product,setProduct]=useState([''])
    async function Pro(){
        let res=await fetch('https://fakestoreapi.com/products/')
        let data =await res.json()
            setProduct(data)
        // console.log(data)
        // console.log(data[0]['id'])
    }
    useEffect(()=>{
        Pro()
    },[])
    

    return (<>
         <h1>Product</h1>
         <Center p='1em 1.2em'>
            <Flex w='100%' flexWrap={'wrap'} gap={10}>
                {
                product.map((key)=>{
                    
                    return  <Box key='id' className="zoom" borderRadius={'1em'} p='1em' w='250px' style={{boxShadow:"1px 1px 10px 0.1px black"}}>
                                    <Image w='200px' h='250px' src={key["image"]}/>
                                    <Text fontSize={'1rem'} fontWeight={600}>{key['title']}</Text>
                                    <Text fontWeight={600} fontSize={'1.4rem'}>₹{key["price"]}</Text>
                                    <Flex align={'center'}>
                                    <Text >Free Delivery</Text>
                                    <Spacer/>
                                    <Text borderRadius={'5rem'} color='white' p='0.2em 1.5em' bg='blue' fontWeight={600} fontSize={'1.5rem'}><Link to={`/detail/${key['id']}`}>More</Link></Text>
                                    </Flex>
                                    
                                </Box>
                        
                })
            }
            </Flex>
         </Center>
    </>)
}