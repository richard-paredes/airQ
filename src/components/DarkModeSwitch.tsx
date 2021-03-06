import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="absolute"
      right="1rem"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
