import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={active ? '#7f523d' : inactiveColor}
      _hover={{color: '#7f523d'}}
      _dark={{ color: active ? '#ff63c3' : 'whiteAlpha.900', _hover: { color: '#ff63c3' }}}
      fontWeight={active ? 'bold' : 'normal'}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="1280px"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/publications" path={path}>
            Publications
          </LinkItem>
          <LinkItem href="/awards" path={path}>
            Awards
          </LinkItem>
          
          <LinkItem
            target="_blank"
            href="https://github.com/JinmoKIM1012/jinmo_homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _hover={{ bg: '#a3694e' }}
                _active={{ bg: '#a3694e' }}
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/" _hover={{ color: '#7f523d', fontWeight: 'bold', bg: 'transparent'}}>
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/publications" _hover={{ color: '#7f523d', fontWeight: 'bold', bg: 'transparent'}}>
                  Publications
                </MenuItem>
                <MenuItem as={MenuLink} href="/awards" _hover={{ color: '#7f523d', fontWeight: 'bold', bg: 'transparent'}}>
                  Awards
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/JinmoKIM1012/jinmo_homepage"
                  _hover={{ color: '#7f523d', fontWeight: 'bold', bg: 'transparent'}}
                >
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
