import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, VStack, Box } from '@chakra-ui/react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Portfolio/Resume'

import theme from './theme';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          bg="blue.300"
          >
          <VStack
            minH="100vh"
            spacing={4}>
            <Header />
            <Container
              boxShadow='2xl'
              p='6'
              rounded='3xl'
              bg='gray.200'
              maxW='container.md'
            >
              <Routes >
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/" element={<About />} />
              </Routes>
            </Container>
            <Footer />
          </VStack>
        </Box>
      </Router>
    </ChakraProvider >
  );
}

export default App;