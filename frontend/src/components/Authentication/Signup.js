import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();


    const handleClick = () => setShow(!show);
    const postDetails = (pics) => { }
    const submitHandler = () => {

    }



    return (
        <VStack spacing={"5px"}>
            <FormControl id='first-name' isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input placeholder={"Enter your name"} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input placeholder={"Enter your password"} onChange={(e) => setEmail(e.target.value)} type={show ? 'text' : 'password'} />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input placeholder={"Enter your password"} onChange={(e) => setEmail(e.target.value)} type={show ? 'text' : 'password'} />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="image">Upload Image</FormLabel>
                <Input type="file" p={1.5} onChange={(e) => postDetails(e.target.files[0])} accept="image/*" />
            </FormControl>
            <Button width={"100%"} colorScheme="blue" style={{ marginTop: 15 }} onClick={submitHandler}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup;
