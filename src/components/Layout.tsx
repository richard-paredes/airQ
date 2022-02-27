import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Layout = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      overflow="auto"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
