import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh" display="flex" flexDirection="column">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jinmo's homepage" />
        <meta name="author" content="Jinmo Kim" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <meta name="twitter:title" content="Jinmo Kim" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JinmoKIM1012" />
        <meta name="twitter:creator" content="@craftzdog" /> */}
        <meta property="og:site_name" content="Jinmo Kim" />
        <meta name="og:title" content="Jinmo Kim" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Jinmo Kim - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="1200px" pt={14} flex="1">
        {/* <LazyVoxelDog /> */}

        {children}
      </Container>

      <Container maxW="1200px">
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
