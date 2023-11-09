import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => { }
    const submitHandler = () => { }

    return (
        <div>
            <VStack spacing={"5px"}>
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
                <Button width={"100%"} colorScheme="blue" style={{ marginTop: 15 }} onClick={submitHandler}>
                    Sign Up
                </Button>
            </VStack>
        </div>
    )
}

export default Login
