import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';


export const Navbar = () => {
    return <Box as="header" bg="green.900" py="4" color="white" px="4">
        <Heading fontSize="2xl">AirQuality Monitor</Heading>
    </Box>
}