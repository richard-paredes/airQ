import { BoxProps } from '@chakra-ui/icons'
import { Box, Text, Link } from '@chakra-ui/react'

export const Footer = (props: BoxProps) => (
  <Box as="footer" bg="green.900" py={4} textAlign="center" color="white" {...props}>
    <Text>
      Developed by <Link href="https://github.com/richard-paredes" target="_blank" rel="noopener noreferrer" color="green.300">Richard Paredes</Link>
    </Text>
    <Text fontSize="xs" color="teal.100">
      Data provided by <a href="https://openaq.org/" target="_blank" rel="noopener noreferrer">OpenAQ</a>
    </Text>
  </Box>
)
