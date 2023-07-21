import React from 'react'
import { HStack, Box, Link, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Contact from './Contact'


const Footer = () => {
  return (
    <Box as="footer" mt="auto" bg="gray.500" width="100%">
      <Box>
        <HStack spacing={4} justify="center" padding={2}>
          <Box fontSize='sm'>
          </Box>
          <Link href='https://github.com/PhilKubz' isExternal >
            GitHub <ExternalLinkIcon mx='2px' />
          </Link>
          {'   '}|{'    '}
          <Link href='https://www.linkedin.com/in/philip-kubisz-a62314271/' isExternal >
            LinkedIn <ExternalLinkIcon mx='2px' />
          </Link>
          {'     '}|{'       '}
          <Contact />
        </HStack>
      </Box>
    </Box>
  )
}
export default Footer