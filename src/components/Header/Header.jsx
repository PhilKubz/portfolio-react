import React from 'react';
import Navigation from '../Navigation.jsx';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import GrayTri from './GrayTri.jpg';

const Header = () => {
  return (
    <Box
      as="header"
      bgImage={GrayTri}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      width="100%"
      boxShadow="2xl"
      pt={1}
    >
      <VStack justify="center" padding={2}>
        <Box align="center">
          <Heading fontSize="6xl" marginBottom="20px">
            Philip Kubisz
          </Heading>
          <Text
            as="sup"
            fontSize="3xl"
            color="#3e92cc"
            textShadow="1px 1px 1px black"
           >
            Aspiring Web Developer
           </Text>
        </Box>
        <Navigation />
      </VStack>
    </Box>
  );
};

export default Header;