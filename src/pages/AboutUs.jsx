import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Heading, Text, Flex, VStack, Center } from '@chakra-ui/react';
import Navbar from '../compoents/Navbar'; 
import Footer from '../compoents/Footer'; 
import image from "../assets/frontCarousel/1.jpg"

const quotes = [
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one that didn’t happen.",
  "Success isn’t always about greatness. It’s about consistency.",
  "The only place where success comes before work is in the dictionary.",
  "Don’t wish for a good body, work for it."
];

function AboutUs() {
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <>
      <Helmet>
        <title>About Us - Narsihna Fitness Club</title>
        <meta name="description" content="Learn more about Narsihna Fitness Club and our commitment to health and fitness." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <Box bg="  	#9aa0a3">
        <Navbar />
        <Box h="400px" w="full" bg="black" position="relative" display="flex" justifyContent="center" alignItems="flex-end">
          <img src={image} alt="About Us Hero Image" className="object-cover" style={{ width: '100%', height: '100%' }} loading="lazy" />
          <Box w="full" h="full" bg="blackAlpha.500" position="absolute" zIndex="10"></Box>
          <Box textAlign="center" fontSize="2xl" mt={10} mb={5} letterSpacing=".1em" fontWeight="semibold" color="white">
            <Box w="8px" h="2px" bgGradient="linear(to-r, red.500, orange.600)" display="inline-block"></Box>
            About Us
            <Box w="8px" h="2px" bgGradient="linear(to-r, red.500, orange.600)" display="inline-block"></Box>
          </Box>
        </Box>

        <Box bg=" 	#8d988d" py={8}>
          <Container maxW="3xl" px={8}>
            <Heading as="h1" fontSize="3xl" fontWeight="medium" textAlign="center" mb={4}>
              Welcome to Narsihna Fitness Club
            </Heading>
            <Text fontSize="lg" textAlign="center" color="black">
              Empowering your fitness journey with state-of-the-art facilities and expert guidance.
            </Text>
            <Flex mt={12} justifyContent="space-between" flexWrap="wrap">
              <Box flexBasis={{ base: "100%", md: "45%" }} mb={8}>
                <VStack spacing={6} p={6} bg="gray.100" borderRadius="lg" boxShadow="md" _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}>
                  <Text fontSize="lg" fontWeight="semibold" textAlign="center" color="gray.800">
                    Our Mission
                  </Text>
                  <Text textAlign="center">
                    To inspire and empower our members to achieve their fitness goals through innovative programs, exceptional facilities, and personalized guidance.
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" color="gray.600" mt="auto">
                    "{getRandomQuote()}"
                  </Text>
                </VStack>
              </Box>
              <Box flexBasis={{ base: "100%", md: "45%" }} mb={8}>
                <VStack spacing={6} p={6} bg="gray.100" borderRadius="lg" boxShadow="md" _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}>
                  <Text fontSize="lg" fontWeight="semibold" textAlign="center" color="gray.800">
                    Our Vision
                  </Text>
                  <Text textAlign="center">
                    To be the leading fitness club in our community, recognized for our commitment to health, wellness, and member satisfaction.
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" color="gray.600" mt="auto">
                    "{getRandomQuote()}"
                  </Text>
                </VStack>
              </Box>
              <Box flexBasis={{ base: "100%", md: "45%" }} mb={8}>
                <VStack spacing={6} p={6} bg="gray.100" borderRadius="lg" boxShadow="md" _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}>
                  <Text fontSize="lg" fontWeight="semibold" textAlign="center" color="gray.800">
                    Our Values
                  </Text>
                  <Text textAlign="center">
                    Integrity, Excellence, Community, Innovation, and Personal Growth.
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" color="gray.600" mt="auto">
                    "{getRandomQuote()}"
                  </Text>
                </VStack>
              </Box>
              <Box flexBasis={{ base: "100%", md: "45%" }} mb={8}>
                <VStack spacing={6} p={6} bg="gray.100" borderRadius="lg" boxShadow="md" _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease" }}>
                  <Text fontSize="lg" fontWeight="semibold" textAlign="center" color="gray.800">
                    Our Goals
                  </Text>
                  <Text textAlign="center">
                    To continuously innovate and expand our services, ensuring the highest standards of fitness excellence for our members.
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" color="gray.600" mt="auto">
                    "{getRandomQuote()}"
                  </Text>
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AboutUs;