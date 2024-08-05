import * as React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex
} from '@chakra-ui/react';
import image from "../assets/frontCarousel/front3.jpg";
import Navbar from "../compoents/Navbar";
import Footer from "../compoents/Footer";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleSignUpClick() {
    navigate("/signup");
  }

  function forgotPassword() {
    navigate("/forget-password");
  }

  return (
    <>
      <Navbar />
      <Stack minH="100vh"  bg={'#b0b19b'} direction={{ base: 'column-reverse', md: 'row' }}>
        <Flex flex={1}>
          <Image alt="Cover image" objectFit="cover" src={image} />
        </Flex>
        <Flex p={8} flex={1} align="center" justifyContent="center">
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">Log in to your account</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              h="max-content !important"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input rounded="md" type="password" />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justifyContent="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link onClick={forgotPassword} fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
                </Stack>
                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500'
                  }}
                  rounded="md"
                  w="100%"
                >
                  Log in
                </Button>
                <Link fontSize={{ base: 'md', sm: 'md' }} onClick={handleSignUpClick} cursor="pointer">
                  Don't have an account? Sign up
                </Link>
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default Login;
