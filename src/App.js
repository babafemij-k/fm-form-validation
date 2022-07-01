import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Flex,
  Form,
  Input,
  Button,
  Stack,
  Badge,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { InfoIcon, ViewIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import bgDesktop from './bg-intro-desktop.png';
import mobileDesktop from './bg-intro-mobile.png';
import theme from './theme';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Event Handlers
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setHasSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && hasSubmitted) {
      setFormValues({ firstName: '', lastName: '', email: '', password: '' });
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
    }
  }, [formErrors]);

  const validate = values => {
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.firstName) {
      errors.firstName = 'First Name cannot be empty';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name cannot be empty';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    }
    if (!values.password) {
      errors.password = 'Password cannot be empty';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }
    return errors;
  };
  return (
    <ChakraProvider theme={theme}>
      <Box
        fontSize="xl"
        bgImage={[mobileDesktop, mobileDesktop, bgDesktop, bgDesktop]}
        bgColor="primary.red"
        width="100%"
        px={['5%', '5%', '15%', '15%']}
        py={['20%', '20%', '10%', '10%']}
        fontFamily={'Poppins'}
      >
        <Flex
          direction={['column', 'column', 'row', 'row']}
          alignItems={['center', 'center', 'unset', 'center']}
          gap={'40'}
        >
          <Flex
            direction={'column'}
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
            textAlign={['center', 'center', 'unset', 'unset']}
            width={'100%'}
            color={'white'}
          >
            <Heading mb={'5'} size={'xl'}>
              Learn to code by watching others code.
            </Heading>
            <Text fontSize={'md'}>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </Text>
          </Flex>

          <Flex width={'100%'} direction={'column'}>
            <Box
              bgColor={'accent.blue'}
              px={[20, 15, 'unset', 'unset']}
              width={'100%'}
              py={'5'}
              borderRadius={'lg'}
              boxShadow={'0 8px rgba(0, 0, 0, .15)'}
              mb={'10'}
            >
              <Text textAlign={'center'} fontSize={'sm'} fontWeight={'600'}>
                <b>Try it free 7 days</b> then $20/mo. thereafter
              </Text>
            </Box>
            <VStack
              bgColor={'white'}
              px={'7'}
              borderRadius={'lg'}
              py={'10'}
              spacing={'5'}
              boxShadow={'0 8px rgba(0, 0, 0, .15)'}
            >
              {successMessage && (
                <Badge
                  variant={'solid'}
                  fontSize={'md'}
                  fontWeight={'medium'}
                  bgColor={'green.300'}
                  textTransform={'capitalize'}
                  boxShadow={'md'}
                >
                  Signed In!
                </Badge>
              )}
              <FormControl>
                <InputGroup>
                  <Input
                    value={formValues.firstName}
                    name="firstName"
                    onChange={handleChange}
                    variant="outline"
                    placeholder="First Name"
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    borderColor={'gray.300'}
                    size={'lg'}
                    color={'blackAlpha.800'}
                    fontSize={'md'}
                    fontWeight={'semibold'}
                    _hover={{}}
                    isInvalid={formErrors.firstName}
                  />
                  <InputRightElement
                    children={
                      formErrors.firstName && <InfoIcon color="red.400" />
                    }
                  />
                </InputGroup>
                {formErrors.firstName && (
                  <Text
                    textAlign={'end'}
                    color={'red'}
                    fontSize={'xs'}
                    fontStyle={'italic'}
                  >
                    {formErrors.firstName}
                  </Text>
                )}

                <InputGroup mt={'6'}>
                  <Input
                    value={formValues.lastName}
                    onChange={handleChange}
                    name="lastName"
                    variant="outline"
                    placeholder="Last Name"
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    borderColor={'gray.300'}
                    size={'lg'}
                    fontSize={'md'}
                    fontWeight={'semibold'}
                    color={'blackAlpha.800'}
                    _hover={{}}
                    isInvalid={formErrors.lastName}
                  />
                  <InputRightElement
                    children={
                      formErrors.lastName && <InfoIcon color="red.400" />
                    }
                  />
                </InputGroup>
                {formErrors.lastName && (
                  <Text
                    textAlign={'end'}
                    color={'red'}
                    fontSize={'xs'}
                    fontStyle={'italic'}
                  >
                    {formErrors.lastName}
                  </Text>
                )}

                <InputGroup mt={'6'}>
                  <Input
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                    variant="outline"
                    placeholder="Email Address"
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    borderColor={'gray.300'}
                    size={'lg'}
                    fontSize={'md'}
                    fontWeight={'semibold'}
                    color={'blackAlpha.800'}
                    _hover={{}}
                    isInvalid={formErrors.email}
                  />
                  <InputRightElement
                    children={formErrors.email && <InfoIcon color="red.400" />}
                  />
                </InputGroup>
                {formErrors.email && (
                  <Text
                    textAlign={'end'}
                    color={'red'}
                    fontSize={'xs'}
                    fontStyle={'italic'}
                  >
                    {formErrors.email}
                  </Text>
                )}

                <InputGroup mt={'6'}>
                  <Input
                    value={formValues.password}
                    onChange={handleChange}
                    name="password"
                    variant="outline"
                    placeholder="Password"
                    _placeholder={{ opacity: 1, color: 'gray.500' }}
                    borderColor={'gray.300'}
                    size={'lg'}
                    fontSize={'md'}
                    fontWeight={'semibold'}
                    color={'blackAlpha.800'}
                    _hover={{}}
                    isInvalid={formErrors.password}
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputRightElement mr={10}>
                    <Button
                      h="1.75rem"
                      size="xs"
                      bgColor={'blackAlpha.400'}
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      _hover={{}}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                  <InputRightElement
                    children={
                      formErrors.password && <InfoIcon color="red.400" />
                    }
                  />
                </InputGroup>
                {formErrors.password && (
                  <Text
                    textAlign={'end'}
                    color={'red'}
                    fontSize={'xs'}
                    fontStyle={'italic'}
                  >
                    {formErrors.password}
                  </Text>
                )}
                <Button
                  bg={'hsl(154, 59%, 51%)'}
                  width={'100%'}
                  size={'lg'}
                  boxShadow={'0 5px hsl(154, 40%, 51%)'}
                  _hover={{}}
                  _active={{
                    bg: 'hsl(154, 40%, 51%)',
                    transform: 'scale(0.98)',
                  }}
                  onClick={handleSubmit}
                  mt={'7'}
                >
                  CLAIM YOUR FREE TRIAL
                </Button>
              </FormControl>
              <Text color={'gray'} fontSize="xs">
                By clicking the button, you are agreeing to our{' '}
                <Text display={'inline'} color={'red'} fontWeight={600}>
                  Terms and Services
                </Text>
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
