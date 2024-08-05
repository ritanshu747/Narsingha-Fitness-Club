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
  Flex,
} from '@chakra-ui/react';
import image from "../assets/frontCarousel/front3.jpg";
import Navbar from "../compoents/Navbar";
import Footer from "../compoents/Footer";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = () => {
    navigate('/email-verification', { state: { email: formData.email} });
  };

  return (
    <>
      <Navbar />
      <Stack minH="100vh" bg={'#b0b19b'}  direction={{ base: 'column-reverse', md: 'row' }}>
        <Flex flex={1}>
          <Image alt="Cover image" objectFit="cover" src={image} />
        </Flex>
        <Flex p={8} flex={1} align="center" justifyContent="center">
          <Stack spacing={4}>
            <Stack align="center">
              <Heading fontSize="2xl">Sign in to your account</Heading>
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
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input rounded="md" type="text" value={formData.firstName} onChange={handleChange} />
                </FormControl>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input rounded="md" type="text" value={formData.lastName} onChange={handleChange} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input rounded="md" type="email" value={formData.email} onChange={handleChange} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input rounded="md" type="password" value={formData.password} onChange={handleChange} />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justifyContent="space-between" w="100%">
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  
                </Stack>
                <Button
                  onClick={handleClick}
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500',
                  }}
                  rounded="md"
                  w="100%"
                >
                  Sign in
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default SignUp;
