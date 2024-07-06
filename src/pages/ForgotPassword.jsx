import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const ForgotPassword = () => {
  return (
    <Box
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" mb="8">Forgot Password</Heading>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{
            base: '4',
            md: '10',
          }}
          shadow="base"
          rounded={{ sm: 'lg' }}
        >
          <Stack spacing="6">
            <Text textAlign="center" color="gray.600">
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
