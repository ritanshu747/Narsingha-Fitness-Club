import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const ForgotPassword = () => {
  return (
    <Box
      minH="100vh"
      py={{ base: '8', md: '12' }} 
      px={{ base: '4', lg: '8' }}  
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Box maxW={{ base: 'full', sm: 'md' }} mx="auto">  
        <Heading textAlign="center" mb={{ base: '6', md: '8' }} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot Password
        </Heading>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py={{ base: '6', md: '8' }}  
          px={{ base: '4', md: '6', lg: '10' }}  
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <Stack spacing={{ base: '4', md: '6' }}>
            <Text textAlign="center" color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              Enter the email address associated with your account. We'll send you a link to reset your password.
            </Text>
            <form>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  autoFocus
                  variant="filled"
                  bg={useColorModeValue('white', 'gray.800')}
                  _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                  _focus={{ bg: 'white', borderColor: 'teal.500', outline: 'none' }}
                  size={{ base: 'sm', md: 'md' }} 
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                mt="4"
                w="full"
                variant="solid"
                _hover={{ bg: 'teal.500' }}
                _focus={{ outline: 'none' }}
                size={{ base: 'sm', md: 'md' }}
              >
                Send Reset Link
              </Button>
            </form>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
