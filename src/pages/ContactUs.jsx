import * as React from 'react';

import Navbar from "../compoents/Navbar";
import Footer from "../compoents/Footer";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Image
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const contactOptions = [
  {
    label: 'Address',
    value: 'Chanda Takeej Road, Ghatampur',
    icon: GoLocation
  },
  {
    label: 'PHONE NUMBER',
    value: '+91 7007572920',
    icon: BsPhone
  },
  {
    label: 'EMAIL',
    value: 'Yashomar07@gmail.com',
    icon: HiOutlineMail
  }
];

const motivationalQuotes = [
  "The only way to achieve the impossible is to believe it is possible.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there."
];

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justifyContent="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" textAlign="center" maxW="xl" mx="auto">
            {motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {contactOptions.map((option, index) => (
            <Stack
              key={index}
              spacing={3}
              direction="column"
              justifyContent="center"
              alignItems="center"
              px={3}
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="md"
              p={6}
              w="100%"
              maxW="md"
            >
              <Icon as={option.icon} w={10} h={10} color="green.400" />
              <Text fontSize="lg" fontWeight="semibold" textAlign="center">
                {option.label}
              </Text>
              <Text fontSize="md" textAlign="center">
                {option.value}
              </Text>
            </Stack>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Enter the subject" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea size="lg" placeholder="Enter your message" rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.400"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
    <Footer/>
    </>
  );
};

export default ContactUs;
