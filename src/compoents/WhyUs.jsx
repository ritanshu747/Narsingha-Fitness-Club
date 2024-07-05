import { Box, Container, Heading, SimpleGrid, Text, VStack, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaDumbbell , FaHeartbeat} from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { SiEquinixmetal } from "react-icons/si";

export default function WhyUs() {
  return (
    <Container maxW={"full"} bg="#0A0A0A" centerContent py={"20"}>
        <Text mb="5" color="#764baa" fontWeight={"700"}>WHY CHOOSE US?</Text>
        <Heading color="#fff" textAlign={"center"}>TAKE YOUR FITNESS TO THE NEXT LEVEL</Heading>
        <SimpleGrid columns={[1, 1, 2, 4]} mt="20" w="85%" spacing={"5"}>
            <VStack spacing={2} className="one">
                <Box mb="10" borderRadius={"50%"} backgroundColor="#2c2b2e" p="5" className="one_one">
                    <IconButton 
                        aria-label="State-of-the-Art Equipment"
                        icon={<Icon as={SiEquinixmetal} fontSize="45px" />}
                        bg="#2c2b2e"
                        color="#764baa"
                        _hover={{ 
                            bg: "#764baa",
                            color: "#2c2b2e",
                            transition: "all 0.3s ease",
                        }}
                    />
                </Box>
                <Heading fontSize={"23"} mt="10" color="#fff" textAlign={"center"}>State-of-the-Art Equipment</Heading>
                <Text textAlign={"center"} color="#363538">Experience workouts with cutting-edge equipment designed for maximum efficiency and comfort.</Text>
            </VStack>
            <VStack spacing={2} className="two">
                <Box mb="10" borderRadius={"50%"} backgroundColor="#2c2b2e" p="5" className="two_2">
                    <IconButton 
                        aria-label="Healthy Nutrition Plans"
                        icon={<Icon as={GiFruitBowl} fontSize="45px" />}
                        bg="#2c2b2e"
                        color="#764baa"
                        _hover={{ 
                            bg: "#764baa",
                            color: "#2c2b2e",
                            transition: "all 0.3s ease",
                        }}
                    />
                </Box>
                <Heading fontSize={"23"} mt="10" color="#fff" textAlign={"center"}>Healthy Nutrition Plans</Heading>
                <Text textAlign={"center"} color="#363538" fontFamily={"Muli, sans-serif"}>Fuel your body with personalized nutrition plans crafted to enhance your fitness journey.</Text>
            </VStack>
            <VStack spacing={2} className="three">
                <Box mb="10" borderRadius={"50%"} backgroundColor="#2c2b2e" p="5" className="three_3">
                    <IconButton 
                        aria-label="Effective Training Programs"
                        icon={<Icon as={FaDumbbell} fontSize="45px" />}
                        bg="#2c2b2e"
                        color="#764baa"
                        _hover={{ 
                            bg: "#764baa",
                            color: "#2c2b2e",
                            transition: "all 0.3s ease",
                        }}
                    />
                </Box>
                <Heading fontSize={"23"} mt="10" color="#fff" textAlign={"center"}>Effective Training Programs</Heading>
                <Text textAlign={"center"} color="#363538">Achieve your fitness goals with structured training programs tailored to your fitness level and objectives.</Text>
            </VStack>
            <VStack spacing={2} className="four">
                <Box borderRadius={"50%"} mb="10" backgroundColor="#2c2b2e" p="5" className="four_4">
                    <IconButton 
                        aria-label="Tailored to Your Needs"
                        icon={<Icon as={FaHeartbeat} fontSize="45px" />}
                        bg="#2c2b2e"
                        color="#764baa"
                        _hover={{ 
                            bg: "#764baa",
                            color: "#2c2b2e",
                            transition: "all 0.3s ease",
                        }}
                    />
                </Box>
                <Heading fontSize={"23"} mt="10" color="#fff" textAlign={"center"}>Tailored to Your Needs</Heading>
                <Text textAlign={"center"} color="#363538">Get personalized fitness solutions that adapt to your unique lifestyle, preferences, and health considerations.</Text>
            </VStack>
        </SimpleGrid>
    </Container>
  )
}
