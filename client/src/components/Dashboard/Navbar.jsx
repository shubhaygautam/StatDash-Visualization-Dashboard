import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Image, 
  Heading, 
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={2}
      bg="#4F3BA9"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading
            as="h1"
            size="md"
            color="white"
            fontWeight="bold"
            letterSpacing="wide"
            mr={4}
          >
            StatDash
          </Heading>
          <Box>
            <Flex align="center">
              <Avatar
                size="sm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ri4L9plRyX2uEotH1LsD3rk2UwxufqMYIBoldmCqW_JVgOv7kpT7NCJ-W6gRxoOpZwc&usqp=CAU"
                ml={3}
              />
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={6} />}
                bg="transparent"
                border="none"
              >
                <Badge colorScheme="red" color="red">
                  3
                </Badge>
              </IconButton>
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
            </Flex>
          </Box>
          <Box w="80%" position="relative">
            <Input
              type="text"
              placeholder="Search here"
              size="sm"
              borderRadius="full"
              bg={colorMode === "light" ? "white" : "gray.800"}
              px={4}
              py={1}
              color={colorMode === "light" ? "gray.800" : "white"}
              _placeholder={{
                color: colorMode === "light" ? "gray.500" : "gray.300",
              }}
              _focus={{ outline: "none" }}
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIxmKcjrlLgjrj4KertoBnCC1OAumVWFycXoDQ2GeoyESvwH1HQ7PJ5TPGRSKq2fdsV0&usqp=CAU"
              alt="Search"
              boxSize={6}
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              cursor="pointer"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
