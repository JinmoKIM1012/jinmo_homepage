import { Container, Heading, Icon, Text } from '@chakra-ui/react'
import { FaTrophy } from "react-icons/fa"
import { PiGraduationCapFill } from "react-icons/pi"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FundSection } from '../components/funding'
import { AwardSection } from '../components/award'

const Awards = () => (
  <Layout title="Awards">
    <Container maxW="1200px" mt={8}>
      <Section delay={0.1} mb={12}>
        <Heading as="h3" fontSize={20} mb={4}>
          Awards & Scholarships
        </Heading>
        <AwardSection year="Feb 2022">
          <Text fontSize={'md'} fontWeight='bold'>
            <Icon as={FaTrophy} mr={2} color="#eabd00" h="0.8em" w="0.8em"/>
            Top Award for Excellence in Research
          </Text>
          <Text fontSize={'sm'}>
            <em>2021 Undergraduate Group Research Project Program</em>, POSTECH
          </Text>
        </AwardSection>
        <AwardSection year="Feb 2020">
          <Text fontSize={'md'} fontWeight='bold'>
          <Icon as={FaTrophy} mr={2} color="#eabd00" h="0.8em" w="0.8em"/>
            Top Award for Excellence in Research
          </Text>
          <Text fontSize={'sm'}>
            <em>2019 Undergraduate Group Research Project Program</em>, POSTECH
          </Text>
        </AwardSection>

        <AwardSection year="Mar 2022">
          <Text fontSize={'md'} fontWeight='bold'>
            <Icon 
              as={PiGraduationCapFill} 
              mr={2} 
              color="#000000" 
              _dark={{ color: '#ffffff' }}
              h="0.8em"
              w="0.8em"
            />
            GLP (Global Leadership Program)
          </Text>
          <Text fontSize={'sm'}>
            <em>Merit-based, KRW 3,000,000 (USD ~2,600)</em>, POSTECH
          </Text>
        </AwardSection>
        <AwardSection year="Sep 2021">
          <Text fontSize={'md'} fontWeight='bold'>
            <Icon 
              as={PiGraduationCapFill} 
              mr={2} 
              color="#000000" 
              _dark={{ color: '#ffffff' }}
              h="0.8em"
              w="0.8em"
            />
            GLP (Global Leadership Program)
          </Text>
          <Text fontSize={'sm'}>
            <em>Merit-based, KRW 3,000,000 (USD ~2,600)</em>, POSTECH
          </Text>
        </AwardSection>
        <AwardSection year="Mar 2021">
          <Text fontSize={'md'} fontWeight='bold'>
            <Icon 
              as={PiGraduationCapFill} 
              mr={2} 
              color="#000000" 
              _dark={{ color: '#ffffff' }}
              h="0.8em"
              w="0.8em"
            />
            GLP (Global Leadership Program)
          </Text>
          <Text fontSize={'sm'}>
            <em>Merit-based, KRW 3,000,000 (USD ~2,600)</em>, POSTECH
          </Text>
        </AwardSection>
        <AwardSection year="Sep 2020">
          <Text fontSize={'md'} fontWeight='bold'>
            <Icon 
              as={PiGraduationCapFill} 
              mr={2} 
              color="#000000" 
              _dark={{ color: '#ffffff' }}
              h="0.8em"
              w="0.8em"
            />
            GLP (Global Leadership Program)
          </Text>
          <Text fontSize={'sm'}>
            <em>Merit-based, KRW 3,000,000 (USD ~2,600)</em>, POSTECH
          </Text>
        </AwardSection>
      </Section>
      
      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          Fundings
        </Heading>
        <FundSection year="Jul 2024 - Jun 2025">
          <Text fontSize={'md'} fontWeight='bold'>
            Fast 3D Shape Reconstruction of Multiple Objects from Single/Few Images for Robotic Environments
          </Text>
          <Text fontSize={'sm'}>
            <em>Master's Student Research Fellowship Program</em> <br />
            Ministry of Education, Republic of Korea
          </Text>
        </FundSection>
      </Section>
    </Container>
  </Layout>
)

export default Awards
export { getServerSideProps } from '../components/chakra'