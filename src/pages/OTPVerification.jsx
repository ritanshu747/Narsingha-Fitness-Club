import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  HStack,
  Link,
  Center,
  VStack,
  IconButton,
  useToast
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from './theme';

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, phoneNumber } = location.state;
  const [code, setCode] = useState(new Array(6).fill(''));
  const [seconds, setSeconds] = useState(60);
  const toast = useToast();

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResendCode = () => {
    // Logic to resend the OTP
    console.log('Resend OTP');
    setSeconds(60); // Reset timer
    toast({
      title: "OTP Resent",
      description: "A new OTP has been sent to your email.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <ChakraProvider theme={theme}>
      <Center height="100vh" bg="gray.900">
        <Box
          bg="gray.800"
          p={10} // Increased padding
          rounded="md"
          textAlign="center"
          color="white"
          maxW="lg" // Increased max width
          w="100%"
          boxShadow="xl"
        >
          <VStack spacing={5}> {/* Increased spacing */}
            <HStack width="100%" justifyContent="flex-start">
              <IconButton
                icon={<IoArrowBackOutline />}
                onClick={handleBack}
                variant="ghost"
                color="white"
                _hover={{ bg: 'gray.700' }}
                size="lg"
              />
            </HStack>
            <Text fontSize="2xl" fontWeight="bold">Verify Your Account</Text> {/* Updated text */}
            <Text fontSize="lg">Enter the 6 digit code sent to your email:</Text>
            <Text fontSize="xl" fontWeight="bold">{email}</Text> {/* Updated text */}
            <HStack justify="center" spacing={2}>
              {code.map((data, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength="1"
                  w="50px" // Increased width
                  h="50px" // Increased height
                  textAlign="center"
                  fontSize="2xl" // Increased font size
                  bg="gray.700"
                  border="none"
                  color="white"
                  focusBorderColor="purple.500"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </HStack>
            <Text>
              Didn't receive the code?{' '}
              {seconds > 0 ? (
                <span>Resend code in {seconds}s</span>
              ) : (
                <Link color="purple.500" onClick={handleResendCode}>
                  Resend code
                </Link>
              )}
            </Text>
            <Button colorScheme="purple" size="lg" mt={4}>
              Continue
            </Button>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default OTPVerification;
