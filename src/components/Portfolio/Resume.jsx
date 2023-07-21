import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Resume = () => {
    return (
        <Box>
            <Heading mb={4}>Resume</Heading>

            <Heading size="md" mb={2}>Profile:</Heading>
            <Text mb={4}>Aspiring Full Stack Web Developer with a passion learning and development in team-based environments</Text>

            <Heading size="md" mb={2}>Education:</Heading>
            <Text mb={4}>Web Development FullStack Bootcamp, edX, Jan 2023 - July 2023</Text>
            <Text mb={4}>Bachelor's degree in French Language and Literature, Wabash College, August 2010 - May 2014</Text>

            <Heading size="md" mb={2}>Technical Skills:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>React.js</Text>
                    <Text>MERN Stack</Text>
                    <Text>Node.js</Text>
                    <Text>NoSQL</Text>
                    <Text>Object-Oriented Programming (OOP)</Text>
                    <Text>Express.js</Text>
                    <Text>Heroku</Text>
                    <Text>MongoDB</Text>
                    <Text>Web Design</Text>
                    <Text>Agile Application Development</Text>
                    <Text>Debugging Code</Text>
            </SimpleGrid>

            <Heading size="md" mb={2}>Work Experience:</Heading>
            <Text mb={2}><b>Furtniture Sales Associate - MJacobs Furniture, July 2022 - Present</b></Text>
            <Text mb={4}>Language Arts Tutor, Feb 2022 - Jun 2022</Text>
            <Text mb={2}><b>Restaraunt Server, May 2014 - Oct 2021</b></Text>
            <Text mb={4}>English Language Paraprofessional, Nov 2014 - Jun 2016</Text>

            <Heading size="md" mb={2}>Other Professional Experience:</Heading>
            <Text mb={4}>Customer Service Representative at Wells Fargo...</Text>
            
            <Heading size="md" mb={2}>Key Competencies:</Heading>
            <SimpleGrid columns={2} spacing={2} mb={4}>
                    <Text>Critical Thinking</Text>
                    <Text>Interpersonal Communication</Text>
                    <Text>Collaboration</Text>
                    <Text>Effective Teamwork</Text>
                    <Text>Conflict Resolution and Management</Text>
                    <Text>Customer Service</Text>
                    <Text>Punctuality</Text>
            </SimpleGrid>
        </Box>
    );
};

export default Resume;