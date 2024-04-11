import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Select,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";

const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLogoutAlertOpen, setIsLogoutAlertOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      window.location.href = "http://localhost:3000/";
    }, 2000);
  };

  const cancelLogout = () => {
    setIsLogoutAlertOpen(false);
    setIsLoggingOut(false);
  };

  return (
    <>
      <Container>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={onOpen}
          position="fixed"
          top="50%"
          left={0}
          transform="translateY(-50%)"
          zIndex={1}
          colorScheme="teal"
          variant="outline"
        />

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={bgColor} color={textColor}>
            <Flex alignItems="center" mt={4} ml={4}>
              <Avatar
                size="lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ri4L9plRyX2uEotH1LsD3rk2UwxufqMYIBoldmCqW_JVgOv7kpT7NCJ-W6gRxoOpZwc&usqp=CAU"
                mr={4}
              />
              <Heading size="md">Shubhay Gautam</Heading>
            </Flex>

            <Divider my={4} />

            <DrawerHeader
              borderBottomWidth="1px"
              fontSize="xl"
              fontWeight="bold"
              color="Blue.500"
            >
              Admin
            </DrawerHeader>
            <DrawerBody>
              <Text fontSize="lg" mb={2} fontWeight="bold">
                Menu
              </Text>
              <Divider
                mb={4}
                borderColor={useColorModeValue("gray.300", "gray.600")}
              />

              <List spacing={3}>
                <ListItem cursor="pointer">
                  <ListIcon as={MdDashboard} fontSize="xl" />
                  Dashboard
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdAssignment} fontSize="xl" />
                  Tasks
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdPeople} fontSize="xl" />
                  Users
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                  Files
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdAnalytics} fontSize="xl" />
                  Analytics
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdSettings} fontSize="xl" />
                  Settings
                </ListItem>
                <ListItem
                  cursor="pointer"
                  onClick={() => setIsLogoutAlertOpen(true)}
                >
                  <ListIcon as={MdExitToApp} fontSize="xl" />
                  Logout
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>

      {isLoggingOut && (
        <AlertDialog isOpen={true} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent bg="blue.800" color="white">
              <AlertDialogHeader>Logging Out...</AlertDialogHeader>
              <AlertDialogBody>Redirecting...</AlertDialogBody>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}

      <AlertDialog
        isOpen={isLogoutAlertOpen}
        onClose={() => setIsLogoutAlertOpen(false)}
        leastDestructiveRef={undefined}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure you want to logout?</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
              <Button onClick={cancelLogout}>Cancel</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AdminDashboard;
