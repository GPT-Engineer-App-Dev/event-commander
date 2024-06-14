import { Container, VStack, Heading, Text, Button, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Event Management App
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Manage your events efficiently and effortlessly.
        </Text>
        <Box textAlign="center">
          <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg">
            Create New Event
          </Button>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="/images/event1.jpg" alt="Event 1" borderRadius="md" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Event 1
            </Heading>
            <Text mb={4}>Description of Event 1</Text>
            <Button leftIcon={<FaCalendarAlt />} colorScheme="teal">
              View Details
            </Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="/images/event2.jpg" alt="Event 2" borderRadius="md" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Event 2
            </Heading>
            <Text mb={4}>Description of Event 2</Text>
            <Button leftIcon={<FaCalendarAlt />} colorScheme="teal">
              View Details
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;