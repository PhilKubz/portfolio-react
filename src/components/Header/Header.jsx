import React from 'react'
import Navigation from '../Navigation'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'


const Header = () => {
	return (
		<Box as="header" bg={'gray'} width="100%" boxShadow='2xl' pt={1}>
			<VStack  justify="center" padding={2}>
				<Box align="center" >
					<Heading fontSize='6xl' >Philip Kubisz</Heading>
					<Text as='sup' fontSize='2xl' color='#dabb6a' >Aspiring Web Developer</Text>
				</Box>
				<Navigation />
			</VStack>
		</Box>
	)
}

export default Header