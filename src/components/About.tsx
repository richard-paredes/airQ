import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";

export const About = () => (
    <Container py={5} borderRadius="md">
        <Center>
            <Box textAlign="center">
                <Heading as="h2" fontSize="2xl" mb={4} color="green.300">Track Air Quality Across the World</Heading>
                <Text fontSize="md" >
                    This interactive map displays air quality data sourced from OpenAQ.
                    Zoom in to explore air quality levels across different regions, and stay informed
                    about air quality in your area or any location worldwide.
                </Text>
            </Box>
        </Center>
    </Container>
)