import { Flex, Link, Text, Container, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container maxW="full" bgGradient="linear(to-r, teal.500, teal.600)" color="white" py={10}>
      <VStack spacing={5} alignItems="initial">
        <Flex
          flexWrap="wrap"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          px={8}
          w="100%"
        >
          <FooterSection title="Explore" links={[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' }
          ]} />
          <FooterSection title="Connect" links={[]} />
          <FooterSection title="Visit Us" links={[
            { label: 'Find Us', href: '#' }
          ]} />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Text fontSize="sm" color="gray.200">
            Made with ❤️ by Ritanshu Shivhare
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

const FooterSection = ({ title, links }) => {
  return (
    <Flex direction="column" mb={{ base: 6, md: 0 }}>
      <Text fontWeight="bold" mb={2}>{title}</Text>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          fontSize="sm"
          py={1}
          color="gray.200"
          _hover={{ textDecoration: 'underline' }}
        >
          {link.label}
        </Link>
      ))}
      {title === 'Connect' && (
        <Flex mt={4}>
          <SocialIcon icon={<FaFacebook />} href="https://www.facebook.com/" />
          <SocialIcon icon={<FaYoutube />} href="https://www.youtube.com/" />
          <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/" />
        </Flex>
      )}
    </Flex>
  );
};

const SocialIcon = ({ icon, href }) => {
  return (
    <Link href={href} isExternal mx={2} _hover={{ color: 'teal.100' }}>
      {icon}
    </Link>
  );
};

export default Footer;
