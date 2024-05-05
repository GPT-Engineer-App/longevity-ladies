import { Box, Flex, Text, VStack, Heading, Link, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="pink.100" minH="100vh" p={4}>
      <Flex as="header" justifyContent="space-between" alignItems="center" p={4} bg="pink.300">
        <Heading as="h1" size="lg" color="white">Longevity for Women</Heading>
        <Flex as="nav">
          <Link href="#about" p={2} color="white">About Us</Link>
          <Link href="#services" p={2} color="white">Services</Link>
          <Link href="#testimonials" p={2} color="white">Testimonials</Link>
          <Link href="#contact" p={2} color="white">Contact</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} mt={10} align="stretch">
        <Box id="about" p={5} shadow="md" borderWidth="1px" bg="white">
          <Heading size="md">About Us</Heading>
          <Text mt={4}>We are dedicated to promoting longevity and wellness specifically tailored for women through innovative health solutions and personalized care.</Text>
        </Box>
        <Box id="services" p={5} shadow="md" borderWidth="1px" bg="white">
          <Heading size="md">Our Services</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
            <Box shadow="sm" p={4} borderWidth="1px">
              <Heading size="sm">Nutrition Planning</Heading>
              <Text mt={2}>Personalized nutrition plans to boost longevity and overall health.</Text>
            </Box>
            <Box shadow="sm" p={4} borderWidth="1px">
              <Heading size="sm">Fitness Programs</Heading>
              <Text mt={2}>Customized fitness routines designed to enhance your life quality.</Text>
            </Box>
            <Box shadow="sm" p={4} borderWidth="1px">
              <Heading size="sm">Wellness Workshops</Heading>
              <Text mt={2}>Engaging workshops focusing on mental and physical health.</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box id="testimonials" p={5} shadow="md" borderWidth="1px" bg="white">
          <Heading size="md">Testimonials</Heading>
          <Text mt={4} fontStyle="italic">"The personalized care and attention I received were outstanding. I've never felt better!" - Jane Doe</Text>
        </Box>
        <Box id="contact" p={5} shadow="md" borderWidth="1px" bg="white">
          <Heading size="md">Contact Us</Heading>
          <Text mt={4}>Email us at info@longevityforwomen.com or follow us on social media.</Text>
          <Flex mt={4}>
            <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={6} h={6} m={1} /></Link>
            <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedin} w={6} h={6} m={1} /></Link>
            <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={6} h={6} m={1} /></Link>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;