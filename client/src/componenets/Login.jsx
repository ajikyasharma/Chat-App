import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast();
    const navigate = useNavigate()
   
   

   
    const submitHandler = async() =>{
        setLoading(true)

        if(!email || !password)
          {
            toast({
              title:"Please Fill all the Fields",
              status:"warning",
              duration:5000,
              isClosable:true,
              position:'bottom',
          });
          setLoading(false)
          return;
          }

          try {
            const config = {
              headers:{
                "Contenet-type":"application/json",
              },
            }

            
            const { data }  = axios.post('http://localhost:8000/api/user/login',{ email, password}, config)
            .then((res)=>{
              localStorage.setItem('userInfo', JSON.stringify(res.data));
                toast({
                    title:"Login Successful",
                    status:"success",
                    duration:5000,
                    isClosable:true,
                    position:'bottom',
                });

              
                setLoading(false);
                navigate('/chat')
            })
          } catch (error) {
            toast({
              title:"Error Occured!!",
              description:error.response.data.message,
              status:"error",
              duration:5000,
              isClosable:true,
              position:'bottom',
          });
          setLoading(false)
          }
    }
   
    
   
     return <VStack spacing='5px'>

   
       <FormControl id='email' isRequired>
           <FormLabel>
               Email
           </FormLabel>
           <Input
              placeholder='Enter Your Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
           />
       </FormControl>
   
           <FormControl id='password' isRequired>
           <FormLabel>
               Password
           </FormLabel>
   
           <InputGroup>
           <Input
              type={show ? 'text' : 'password'}
              value={password}
              placeholder='Enter Your Password'
              onChange={(e)=>setPassword(e.target.value)}
           />
           <InputRightElement width='4.5re'>
               <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                   {show? "Hide" :"Show"}
               </Button>
           </InputRightElement>
           </InputGroup>
   
       </FormControl>
   
     
       <Button
         colorScheme='blue'
         width="100%"
         style={{marginTop: 15}}
         onClick={submitHandler}
         isLoading={loading}
       >
         Login
       </Button>

       <Button
         variant="solid"
         colorScheme='red'
         width="100%"
         style={{marginTop: 15}}
         onClick={() => {
            setEmail('guest@example.com');
            setPassword('123456')
         }}
       >
         Get Guest User Credentials
       </Button>
   
   
     </VStack>
}

export default Login