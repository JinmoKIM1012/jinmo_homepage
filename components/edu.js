import { Flex, Text, Box, chakra } from '@chakra-ui/react'


export const EduSection = ({ year, children, centerLabel = false }) => {
  return (
    <Flex align={centerLabel ? 'center' : 'flex-start'} mb={2}>
      <Box flexShrink={0} w={{ base: '96px', md: '180px' }}>
        <Text fontWeight="bold" color="#7f523d" _dark={{ color: '#ff63c3' }}>
          {year}
        </Text>
      </Box>
      <Box ml={1}>
        {children}
      </Box>
    </Flex>
  )
}

export const EduYear = chakra('span', {
  baseStyle: {
    fontWeight: 'bold',
    marginRight: '1em',
    color: '#7f523d',
    _dark: {
      color: '#ff63c3', 
    },
  },
})
