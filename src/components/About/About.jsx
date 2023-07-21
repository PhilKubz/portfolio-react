import React from 'react'
import { Heading, Image, Box, Container, HStack, VStack, Text } from '@chakra-ui/react'
import PKbiopicture from '../../assets/PKbiopicture.jpg'
const About = () => {
  return (
    <>
      <HStack>
        <Container align={'end'}>
          <VStack >
            <Box boxSize='150px'>
              <Image
                borderRadius={'3xl'}
                src={PKbiopicture}
                 alt='Phil'
              />
            </Box>

            <Heading as="h1" size={'3xl'} style={{ paddingTop: '100px' }} >
              About Me
            </Heading>
            <Text textAlign={'center'} fontSize={'lg'} fontWeight={"bold"} p={5}>
            Me and my pursuit of a field that matches my passion for creation and team development
          </Text>
          </VStack>
        </Container>
        <Container >
          
          <Text fontSize={'lg'}  p={2}>
            In my new beginnings of this field, I have discovered how much learning there will along the way - and I'm up for the task!
          </Text>

          <Text fontSize={'md'}  p={2}>
            After decades of being arund computers for leisure and hobby, I have decided to turn my interests towards a career path.
          </Text>
          <Text fontSize={'md'}  p={2}>
            I have always enjoyed taking on difficult tasks and working with others. In this sense, the field offers a lot of personal enjoyment and opportunities ot add vlaue to others around me.
          </Text>
          <Text fontSize={'md'}  p={2}>
            As I start out, I will be seeking to acquire any and all necessary tools to accomplish the goals of the work asked of me, and to best benefit the team development process. 
          </Text>
        </Container>
      </HStack>
    </>
  )
}

export default About