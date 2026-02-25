import { Box, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const color = useColorModeValue('gray.600', 'gray.400')
  const linkColor = useColorModeValue('#7f523d', '#ff63c3')

  return (
    <Box
      as="footer"
      width="100%"
      py={4}
      textAlign="center"
      opacity={0.6}
      fontSize="sm"
      color={color}
    >
      Built based on the{' '}
      <Link
        href="https://www.craftz.dog/"
        target="_blank"
        rel="noopener noreferrer"
        color={linkColor}
        transition="color 0.3s ease-in-out"
      >
        Takuya Matsuyama&apos;s website
      </Link>.
    </Box>
  )
}

export default Footer
