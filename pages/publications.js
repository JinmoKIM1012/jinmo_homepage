import { Container, Heading, SimpleGrid, Box, Text, Link, Image, Grid, GridItem, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const PubEntry = ({ image, imageDark, title, authors, venue, links }) => {
  const imgSrc = useColorModeValue(image, imageDark || image)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w="100%" textAlign="left" mb={6}>
      <Grid
        templateColumns={{ base: '1fr', md: '225px 1fr' }}
        gap={4}
        alignItems="center"
      >
        <GridItem display={{ base: 'none', md: 'block' }}>
          <Image
            src={imgSrc}
            alt={title}
            borderRadius="lg"
            w="225px"
            h="150px"
            objectFit="cover"
            cursor="pointer"
            transition="opacity 0.2s"
            _hover={{ opacity: 0.8 }}
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="blackAlpha.700" />
            <ModalContent bg="transparent" boxShadow="none" maxW="unset" w="auto" minW="0" p={0} m={0} overflow="hidden">
              <ModalCloseButton color="white" zIndex={2} />
              <Image
                src={imgSrc}
                alt={title}
                maxH="80vh"
                maxW="90vw"
                display="block"
              />
            </ModalContent>
          </Modal>
        </GridItem>
        <GridItem>
          <Text fontSize="xl" fontWeight="semibold">{title}</Text>
          <Text fontSize="md" mt={2}>{authors}</Text>
          <Text fontSize="md" mt={2} color="grey" fontStyle="italic">
            {venue}
          </Text>
          {links && (
            <Text fontSize="md" mt={2}>
              {links.map((link, i) => (
                <span key={link.label}>
                  {i > 0 && ' / '}
                  <Link href={link.href} color="teal.500" _dark={{ color: '#ff63c3' }} isExternal>
                    {link.label}
                  </Link>
                </span>
              ))}
            </Text>
          )}
        </GridItem>
      </Grid>
    </Box>
  )
}

const Publications = () => (
  <Layout title="Publications">
    <Container maxW="1200px" mt={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        International Conferences
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <PubEntry
            image="/publications/extend3d.png"
            title="Extend3D: Town-scale 3D Generation"
            authors={<><Text as="span">Seungwoo Kim, <b>Jinmo Kim</b>, and Jaesik Park</Text></>}
            venue={<>Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2026</>}
          />
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4} mt={8}>
        Domestic Conferences
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
            Training-free Large-scale 3D Scene Generation via Extended Latent Space
            </Text>
            <Text fontSize={'sm'}>
              Seungwoo Yoon, <b>Jinmo Kim</b>, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              38th Workshop on Image Processing and Image Understanding (<b>IPIU</b>), 2026
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
            Occlusion Aware Object Reconstruction from Sparse Views
            </Text>
            <Text fontSize={'sm'}>
              <b>Jinmo Kim</b> and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              Korea Computer Congress (<b>KCC</b>), 2025
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              Masked Multi-view Transformer for Occluded Object Reconstruction
            </Text>
            <Text fontSize={'sm'}>
              <b>Jinmo Kim</b>, Namtae Kim, Hyunjoon Lee, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              37th Workshop on Image Processing and Image Understanding (<b>IPIU</b>), 2025
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              Open-Vocabulary 3D Semantic Segmentation Leveraging Multi-view Images and LiDAR Points
            </Text>
            <Text fontSize={'sm'}>
              Kwonyoung Ryu, <b>Jinmo Kim</b>, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              36th Workshop on Image Processing and Image Understanding (<b>IPIU</b>), 2024
            </Text>
          </Box>

          <Box w={"100%"} textAlign="left" mb={6}>
            <Text mt={2} fontSize={'lg'}>
              Domain Adaptation for 3D LiDAR Object Detection
            </Text>
            <Text fontSize={'sm'}>
              <b>Jinmo Kim</b>, Kwonyoung Ryu, and Jaesik Park
            </Text>
            <Text fontSize={'sm'} color="grey" fontStyle="italic">
              35th Workshop on Image Processing and Image Understanding (<b>IPIU</b>), 2023
            </Text>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Publications
export { getServerSideProps } from '../components/chakra'
