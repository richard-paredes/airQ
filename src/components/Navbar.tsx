import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
export const Navbar = () => {
    return <Flex
        w="full"
        minH="24"
        position="relative"
        align="center"
        p="4"
        borderBottom="1px"
        borderColor="teal">
        <nav>
            <Heading>AirQ</Heading>
        </nav>
        <DarkModeSwitch />
    </Flex>
}