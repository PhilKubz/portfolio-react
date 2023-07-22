import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Breadcrumb color='black' fontSize='xl' separator="">
      <Box
        as={BreadcrumbItem}
        rounded="md"
        bgGradient="radial-gradient(circle, gray.200, gray.400)"
        border="1px solid black"
        marginRight="5px"
        padding="5px"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <BreadcrumbLink as={Link} to="/">
          About Me
        </BreadcrumbLink>
      </Box>

      <Box
        as={BreadcrumbItem}
        rounded="md"
        bgGradient="radial-gradient(circle, gray.200, gray.400)"
        border="1px solid black"
        marginRight="5px"
        padding="5px"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <BreadcrumbLink as={Link} to="/portfolio">
          Portfolio
        </BreadcrumbLink>
      </Box>

      <Box
        as={BreadcrumbItem}
        rounded="md"
        bgGradient="radial-gradient(circle, gray.200, gray.400)"
        border="1px solid black"
        marginRight="5px"
        padding="5px"
        isCurrentPage
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <BreadcrumbLink as={Link} to="/resume">
          Resume
        </BreadcrumbLink>
      </Box>
    </Breadcrumb>
  );
};

export default Navigation;