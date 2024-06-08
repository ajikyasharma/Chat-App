import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from '../componenets/Login'
import SignUp from '../componenets/SignUp'

function Home() {

  return <Container maxW ="xl" centerContent>
    <Box d="flex" justifyContent="center"  p={3} bg={"white"} w="100%" m ="40px 0 15px 0" borderRadius="lg" borderWidth="1px" >
      <Text fontSize="4xl" fontFamily="work sans" color="black" >Talk-A-Tive</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" >
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1em" >
    <Tab width="100%" >Login</Tab>
    <Tab width="100%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <SignUp />
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>

  </Container>
}

export default Home