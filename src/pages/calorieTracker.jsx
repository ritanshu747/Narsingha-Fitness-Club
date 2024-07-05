import * as React from 'react';
import Navbar from "../compoents/Navbar";
import Footer from "../compoents/Footer";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SlideFade,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';

const CalorieTracker = () => {
  const [searchType, setSearchType] = React.useState('food'); // 'food' or 'exercise'
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Replace with your actual API endpoint
      let endpoint = '';
      if (searchType === 'food') {
        endpoint = `/api/food?name=${query}`;
      } else if (searchType === 'exercise') {
        endpoint = `/api/exercise?muscle=${query}`;
      }

      // Simulating API response with hardcoded data
      const data = [
        { name: 'Exercise 1', calories: 150, duration: '20 min' },
        { name: 'Exercise 2', calories: 200, duration: '30 min' },
        // Add more exercise data as needed
      ];
      
      setResults(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch results');
      setResults([]);
    }
    setLoading(false);
  };

  const handleTypeChange = (type) => {
    setSearchType(type);
    setQuery('');
    setResults([]);
    setSelectedItem(null);
    setError(null);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Navbar />
      <Container maxW="xl" py={10} px={8}>
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Calorie Tracker
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl id="searchType">
              <FormLabel>Search Type</FormLabel>
              <Stack direction="row" spacing={4}>
                <Button
                  colorScheme={searchType === 'food' ? 'green' : 'gray'}
                  onClick={() => handleTypeChange('food')}
                >
                  Food
                </Button>
                <Button
                  colorScheme={searchType === 'exercise' ? 'green' : 'gray'}
                  onClick={() => handleTypeChange('exercise')}
                >
                  Exercise
                </Button>
              </Stack>
            </FormControl>
            <FormControl id="query">
              <FormLabel>{searchType === 'food' ? 'Enter Food Name' : 'Enter Muscle Name'}</FormLabel>
              <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={searchType === 'food' ? 'Enter food name...' : 'Enter muscle name...'}
                disabled={loading}
                focusBorderColor="green.300"
              />
            </FormControl>
            <Button
              colorScheme="green"
              onClick={handleSearch}
              isLoading={loading}
              loadingText="Searching"
              disabled={!query.trim() || loading}
              _hover={{
                bg: 'green.400'
              }}
              _focus={{
                bg: 'green.400'
              }}
            >
              Search
            </Button>
          </VStack>
          <SlideFade in={results.length > 0}>
            <VStack spacing={4} align="stretch">
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Error:</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {results.length > 0 && (
                <Stack w="100%">
                  <Divider />
                  <Heading as="h2" size="lg">
                    {searchType === 'food' ? 'Nutritional Information' : 'Exercise Details'}
                  </Heading>
                  {searchType === 'food' && (
                    <VStack spacing={2} align="stretch">
                      <Text fontSize="md">Selected Food: {query}</Text>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Calories</Th>
                            <Th isNumeric>Protein</Th>
                            <Th isNumeric>Carbohydrates</Th>
                            <Th isNumeric>Fats</Th>
                            <Th isNumeric>Sugars</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>{selectedItem?.calories}</Td>
                            <Td isNumeric>{selectedItem?.protein}</Td>
                            <Td isNumeric>{selectedItem?.carbohydrates}</Td>
                            <Td isNumeric>{selectedItem?.fats}</Td>
                            <Td isNumeric>{selectedItem?.sugars}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </VStack>
                  )}
                  {searchType === 'exercise' && (
                    <VStack spacing={2} align="stretch">
                      <Text fontSize="md">Selected Muscle: {query}</Text>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Exercise Name</Th>
                            <Th isNumeric>Calories Burned</Th>
                            <Th>Duration</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {results.map((item, index) => (
                            <Tr
                              key={index}
                              onClick={() => handleSelectItem(item)}
                              cursor="pointer"
                              _hover={{ bg: 'gray.100' }}
                            >
                              <Td>{item.name}</Td>
                              <Td isNumeric>{item.calories}</Td>
                              <Td>{item.duration}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </VStack>
                  )}
                </Stack>
              )}
            </VStack>
          </SlideFade>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default CalorieTracker;
