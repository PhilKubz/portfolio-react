import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider, Container, VStack, Box } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Portfolio/Resume';
import blackgraybg from './assets/blackgraybg.jpg';
import TealBluebg from './assets/TealBluebg.jpg';

import theme from './theme';

function App() {
  const homepage = '/portfolio-react/about';

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box bgImage={blackgraybg} bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
          <VStack minH="100vh" spacing={4}>
            <Header />
            <Container boxShadow="2xl" p="6" rounded="3xl" bgImage={TealBluebg} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" maxW="container.md">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/" element={<Navigate to={homepage} />} />
              </Routes>
            </Container>
            <Footer />
          </VStack>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;