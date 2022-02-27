import { Flex, FlexProps, Link } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="2" {...props}>
    Developed by <Link href="https://github.com/richard-paredes" target="_blank" mx="1" color="teal">Richard Paredes</Link>
  </Flex>
)
