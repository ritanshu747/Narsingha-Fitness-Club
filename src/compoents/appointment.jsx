import React from 'react';
import { Box, Heading, Text, useToast } from '@chakra-ui/react';
import img_2 from "../assets/frontCarousel/front4.jpg";
import "../assets/styling/appointement.css";

const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img_2}) center/cover no-repeat`,
};

const Appointment = () => {
    const toast = useToast(); 

    const clickHandler = () => {
        toast({
            title: 'Narsingha Fitness club Address',
            description: "Visit us at Ganeshi Lal Market, Takiz Rd, Birshibpur, Ghatampur, Uttar Pradesh 209206. For more details, call us at 700-757-2920.",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        });
    };

    return (
        <Box bg={"#151515"} pt="0" width="full" overflow="hidden">
            <Box
                sx={basicBoxStyles}
                filter="auto"
                pos={"relative"}
                maxW={"full"}
                h={{ base: '60vh', md: '80vh', lg: '100vh' }}
                margin={"auto"}
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <Box
                    pos={"absolute"}
                    left={'50%'}
                    top={'50%'}
                    transform='translate(-50%, -50%)'
                    filter="brightness(150%)"
                    p={{ base: '4', md: '6' }}
                >
                    <Heading
                        color="#fff"
                        fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                        mb="4"
                    >
                        Sign up now for exclusive offers
                    </Heading>
                    <Text
                        color="#ddd"
                        mb="6"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' }}
                    >
                        Where health, beauty, and fitness converge.
                    </Text>
                    <button
                        onClick={clickHandler}
                        className='button2'
                        style={{
                            backgroundColor: '#a370f0',
                            color: 'white',
                            border: 'none',
                            padding: '0.5em 1em',
                            borderRadius: '0.3em',
                            fontSize: '16px',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Visit us
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default Appointment;
