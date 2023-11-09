import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box display='flex' justifyContent='center' p={3} bg={"white"} w={"100%"} m={"40px 0 15px 0"} borderRadius={"lg"} borderWidth={"1px"} >
                <Text fontFamily={"work sans"} fontSize={"4xl"}>
                    Chat-Verse
                </Text>
            </Box>
            <Box bg={"white"} w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
                <Tabs variant='soft-rounded'>
                    <TabList mb={"1em"}>
                        <Tab w={"50%"}>Login</Tab>
                        <Tab w={"50%"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
