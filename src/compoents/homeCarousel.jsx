import React from 'react';
import "./homeCarousel.css"
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Container,
  Button
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import front1 from"../assets/frontCarousel/front1.jpg"
import front2 from"../assets/frontCarousel/front2.jpg"
import front3 from"../assets/frontCarousel/front3.jpg"
import front4 from"../assets/frontCarousel/front4.jpg"
import front5 from"../assets/frontCarousel/front5.jpg"
import front6 from"../assets/frontCarousel/front6.jpg"
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function homeCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const navigate = useNavigate();  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [{
    title:"SHAPE YOUR BODY",
    text: "TRAINING HARD",
    be:"BE",
    strong:"POWER",
    image:front2,
  },  
   {
    title:"SHAPE YOUR BODY",
    text: "NO GAIN",
    be:"NO",
    strong:"PAIN",
    image:front3,
  },
    {
      title:"SHAPE YOUR BODY",
      text: "TRAINING HARD",
      be:"BE",
      strong:"HERO",
      image:front4,
    },
    {
      title:"SHAPE YOUR BODY",
      text: "TRAINING HARD",
      be:"BE",
      strong:"MIGHTY",
      image:front1,
    },
      {
        title:"SHAPE YOUR BODY",
        text: "TRAINING HARD",
        be:"BE",
        strong:"STRONG",
        image:front5,
      },
      {
        title:"SHAPE YOUR BODY",
        text: "WORK INSANE",
        be:"BE",
        strong:"FLAME",
        image:front6,
      },
   
  ];
  function clickHandler() {
    navigate('/login');
    console.log("login ")
  }

  return (
    <Box
      position={'relative'}
      height={'150vh'}
      width={'full'}
      overflow={'hidden'}
      mt="-50"
      filter={'brightness(80%)'}
      color="#764baa"
      >
      {/* CSS files for react-slick */}
      
    
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#764baa"
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
      
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#764baa"
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPositionX="fixed"
            backgroundAttachment="fixed"
            // background= "rgb(255,255,255)"
            // background= "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,1) 100%)"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.2xxl" height="600px" position="relative">
                {/* <Center> */}
            
                
                    {/* </Center> */}
              <Box
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform={["translate(10%,15%)","translate(80%,50%)","translate(20%,20%)","translate(50%,-30%)"]}
                >
                <Heading  mt="30"  letterSpacing='10px' ml="2" fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} fontWeight="500" w='100%' color="#fff">
                  {card.title}
                </Heading>
                <Heading color="#fff" fontSize={["50px","60px","70px","90px"]} >{card.be}<span style={{color:"#764baa"}}> {card.strong}</span></Heading>
                <Text fontSize={["30px","40px","50px","60px"]}  fontWeight="650" color="#fff">
                  {card.text}
                </Text>
               
                <button onClick={clickHandler} class="cssbuttons-io-button">
 Get Info
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
              </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}