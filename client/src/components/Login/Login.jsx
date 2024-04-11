import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('admin');
  let timeoutId;

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    timeoutId = setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  const cancelRedirect = () => {
    setIsOpen(false);
    clearTimeout(timeoutId);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Box
        bgGradient="linear(to-b, #68D391, #38B2AC)"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          borderColor="white"
          textAlign="center"
          color="black"
          bg="white"
          fontFamily="sans-serif"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={8} // Adjust margin as needed
          >
            <img
              src="https://media.licdn.com/dms/image/C560BAQFCVjlwyyHoNw/company-logo_200_200/0/1631311944859?e=2147483647&v=beta&t=g_p5KFccpIZSqQVYEilRPHSnhQXWeAO0RXmcBuZ1lb0"
              alt="Blackcoffer Logo"
              style={{ width: '100px', height: '100px', marginBottom: '20px' }}
            />
          </Box>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to StatDash</h1>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                value="admin@gmail.com"
                borderColor="white"
                disabled
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  borderColor="white"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled
                />
                <InputRightElement>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/013/729/597/original/show-password-icon-eye-symbol-vision-hide-from-watch-icon-secret-view-web-design-element-vector.jpg"
                    alt="Show/Hide Password"
                    style={{ width: '24px', height: 'auto', cursor: 'pointer' }}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button colorScheme="teal" mt={6} w="100%" onClick={handleLogin}>
              Login
            </Button>
            {/* AlertDialog */}
            <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
              <AlertDialogOverlay>
                <AlertDialogContent bg="blue.800" color="white">
                  <AlertDialogHeader>Welcome user</AlertDialogHeader>
                  <AlertDialogBody>
                    Redirecting
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button onClick={cancelRedirect}>Cancel</Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
