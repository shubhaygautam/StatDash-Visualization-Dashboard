import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("#f5f5f5", "#333"); // Light gray or dark gray

  return (
    <Box bg={footerBgColor} py={4} borderTop="1px solid" borderTopColor="gray.200">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color="gray.500">
          &copy; Made by Shubhay Gautam
        </Text>
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="gray.500">
            <a href="mailto:shubhaygautam03@gmail.com">Contact</a>
          </Link>
          <Link mx={2} fontSize="sm" color="gray.500">
            Terms of Service
          </Link>
          <Link href="https://www.facebook.com" mx={2} fontSize="sm" color="gray.500">
            <Box as={RiFacebookBoxFill} boxSize={5} color="blue.500" />
          </Link>
          <Link href="https://www.twitter.com" mx={2} fontSize="sm" color="gray.500">
            <Box as={RiTwitterFill} boxSize={5} color="blue.400" />
          </Link>
          <Link href="https://www.instagram.com" mx={2} fontSize="sm" color="gray.500">
            <Box as={RiInstagramFill} boxSize={5} color="pink.500" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
