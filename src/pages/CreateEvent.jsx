import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and create a new event
    console.log({ name, description, date, image });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Create New Event
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Event Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Event Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </FormControl>
          <FormControl id="date" mb={4}>
            <FormLabel>Event Date</FormLabel>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </FormControl>
          <FormControl id="image" mb={4}>
            <FormLabel>Event Image</FormLabel>
            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" width="100%">
            Create Event
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateEvent;