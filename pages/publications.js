import { Container, Heading, SimpleGrid, Box, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Publications = () => (
  <Layout title="Publications">
    <Container mt={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        International Conferences
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              Extend3D: Town-scale 3D Generation
            </Text>
            <Text fontSize={'sm'}>
              Seungwoo Kim, <b>Jinmo Kim</b>, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              Conference on Computer Vision and Pattern Recognition (CVPR), Jun. 2026
            </Text>
          </Box>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4} mt={8}>
        Domestic Conferences
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
            가려진 형상의 복원을 위한 Masked Multi-view Transformer
            </Text>
            <Text fontSize={'sm'}>
              <b>Jinmo Kim</b>, Namtae Kim, Hyunjoon Lee, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              제 37회 영상처리 및 이해에 관한 워크샵 (IPIU), 2025
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              다시점 이미지와 회전형 라이다를 활용한 열린 어휘집합의 CLIP 특징점 생성과 3차원 의미론적 물체분할
            </Text>
            <Text fontSize={'sm'}>
              Kwonyoung Ryu, <b>Jinmo Kim</b>, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              제 36회 영상처리 및 이해에 관한 워크샵 (IPIU), 2024
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              고정형 라이다 환경에서의 3차원 객체 인식 도메인 적응 기술 개발
            </Text>
            <Text fontSize={'sm'}>
              <b>Jinmo Kim</b>, Kwonyoung Ryu, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              제 35회 영상처리 및 이해에 관한 워크샵 (IPIU), 2023
            </Text>
          </Box>
        </Section>
      </SimpleGrid>

    <Box align="center" h="5em">
    </Box>
    </Container>
  </Layout>
)

export default Publications
export { getServerSideProps } from '../components/chakra'
