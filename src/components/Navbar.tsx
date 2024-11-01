import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';


export const Navbar = () => {
    return <Box as="header" bg="green.900" py={6} color="white" textAlign="center">
        <Heading fontSize="2xl">AirQuality Monitor</Heading>
        <Text fontSize="md" color="teal.200">Explore real-time air quality data from OpenAQ</Text>
    </Box>
}