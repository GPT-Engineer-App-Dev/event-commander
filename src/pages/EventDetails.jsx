import { Container, VStack, Heading, Text, Image, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const { name, description, date, image } = location.state;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          {name}
        </Heading>
        <Image src={image} alt={name} borderRadius="md" mb={4} />
        <Text fontSize="lg" textAlign="center">
          {description}
        </Text>
        <Box textAlign="center" mt={4}>
          <Text fontSize="md" color="gray.500">
            {new Date(date).toLocaleDateString()}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default EventDetails;