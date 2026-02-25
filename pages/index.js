import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { EduSection } from '../components/edu'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container maxW="1200px">
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box> */}
      <Box display={{ md: 'flex' }} mt={{ base: 4, md: 8 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          <Text 
            as="span" 
            color="#7f523d"
            _dark={{ color: '#ff63c3' }}
          >
            Jinmo
          </Text>{' '}
           Kim
          </Heading>
          <b>M.S./Ph.D. Integrated Student</b>
          <p>SNU, Visual & Geometric Intelligence Lab.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
          display={{ base: 'none', md: 'block' }}
        >
          <Box
            borderColor="#f4ede4"
            borderWidth={5}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/jinmo.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="left"
      >
        <Button
          as={NextLink}
          href="/Jinmo_Kim_CV.pdf"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          color="white"
          bg="#7f523d"
          _hover={{ bg: '#a3694e' }}
          _dark={{ bg: '#ff63c3', _hover: { bg: '#c24c96' } }}
          leftIcon={<IoDocumentText />}
          mb={{ base: 4, md: 6 }}
          mt={{ base: 4, md: 0 }}
        >
          Curriculum Vitae
        </Button>
        <Button
          as="a"
          href="mailto:jmkim1012@snu.ac.kr"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          color="white"
          bg="#7f523d"
          _hover={{ bg: '#a3694e' }}
          _dark={{ bg: '#ff63c3', _hover: { bg: '#c24c96' } }}
          leftIcon={<EmailIcon />}
          ml={{ base: 0, md: 3 }}
          mb={{ base: 4, md: 6 }}
        >
          Contact
        </Button>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I am an M.S./Ph.D. integrated student at Seoul National University, as advised by Prof. {' '}
          <Link as={NextLink} href="https://jaesik.info" passHref scroll={false} color={'#a3694e'} _hover={{ color: '#7f523d' }} _dark={{ color: '#ff63c3', _hover: { color: '#c24c96' }}}>
            Jaesik Park
          </Link>
          . I am also a member of the <b>Visual & Geometric Intelligence Lab</b>. 
          Previously, I completed my B.S. in Computer Science at Pohang University of Science and Technology (POSTECH).
        </Paragraph>
        <Paragraph>
          My research interests include <b>3D reconstruction</b>, <b>robotics</b>, and <b>3D scene understanding</b>.
          Recently, I have been mainly focusing on feed-forward image-to-3D reconstruction.
        </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Research Interests
        </Heading>
        <EduSection year="3D Vision" centerLabel>
          Feed-forward Image-to-3D, 3D Scene Understanding, Robot Vision for Clutter Scenes
        </EduSection>
        <EduSection year="Computer Graphics" centerLabel>
          Neural Graphics (Novel View Synthesis, Surface Reconstruction)
        </EduSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <EduSection year="Sep. 2023 - Present">
          <Text as="span" fontWeight="bold">
            Seoul National University
          </Text>
          <br />
          M.S./Ph.D. Integrated Student in AI. <br />
          Advised by Prof. Jaesik Park (VGI Lab.).
        </EduSection>
        <EduSection year="Feb. 2023 - Aug. 2023">
          <Text as="span" fontWeight="bold">
            Pohang University of Science and Technology
          </Text>
          <br />
          M.S. Student in CSE. <br />
          Advised by Prof. Jaesik Park.
        </EduSection>
        <EduSection year="Feb. 2019 - Feb. 2023">
          <Text as="span" fontWeight="bold">
            Pohang University of Science and Technology
          </Text>
          <br />
          B.S. Student in CSE. <br />
          <em><b>Cum Laude</b></em>, GPA: 3.83/4.3.
        </EduSection>
        <EduSection year="Mar. 2016 - Feb. 2019">
          <Text as="span" fontWeight="bold">
            Sejong Science High School
          </Text>
        </EduSection> 
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          <b>Programming Language:</b> C/C++, Python<br />
          <b>Tools:</b> PyTorch, TensorFlow, Open3D, OpenCV, Git(GitHub, GitLab), Docker<br />
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JinmoKIM1012" target="_blank">
              <Button
                scroll={false}
                color="black"
                bg="#7f523d00"
                _hover={{ bg: '#a3694e10', color: '#7f523d' }}
                _dark={{ bg: '#ff63c300', color: 'white', _hover: { bg: '#ff63c330' } }}
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
            <Link href="https://www.linkedin.com/in/jinmo-kim-3041501aa" target="_blank">
              <Button
                scroll={false}
                color="black"
                bg="#7f523d00"
                _hover={{ bg: '#a3694e10', color: '#7f523d' }}
                _dark={{ bg: '#ff63c300', color: 'white', _hover: { bg: '#ff63c330' } }}
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
