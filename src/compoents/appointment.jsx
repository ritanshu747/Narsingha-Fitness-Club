import React from 'react';
import "../assets/styling/appointement.css";
import { Box, Heading, Text } from '@chakra-ui/react';
import img_2 from "../assets/frontCarousel/front4.jpg";
import "../assets/styling/appointement.css"
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
    return (
        <Box bg={"#151515"} pt="0">
            <Box sx={basicBoxStyles} filter="auto" pos={"relative"} maxW={"full"} h="100vh" margin={"auto"}>
                <Box pos={"absolute"} transform='translate(-50%, 0)' filter="brightness(150%)" left={'50%'}>
                    <Heading color="#fff" fontSize={["20","24","26","30"]} mb="10">Sign up now for exclusive offers</Heading>
                    <Text color="#363738" mb="10" fontSize={["20","24","26","30"]}>where health, beauty, and fitness converge.</Text>
                    <button 
                    className='button2'>Book an Appointment</button>
                </Box>
            </Box>
        </Box>
    );
};

export default Appointment;
