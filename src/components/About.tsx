import { Box, Center, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const parameterData = [
    {
        title: 'PM₂.₅',
        description: 'Fine inhalable particles that can penetrate deep into the lungs, posing significant health risks.',
        unit: 'µg/m³',
    },
    {
        title: 'PM₁₀',
        description: 'Coarser inhalable particles that can affect the respiratory system.',
        unit: 'µg/m³',
    },
    {
        title: 'SO₂',
        description: 'Produced by volcanic activity and industrial processes, contributing to respiratory issues and acid rain.',
        unit: 'ppb',
    },
    {
        title: 'NO₂',
        description: 'Emitted from vehicles and industrial activities; can irritate airways and reduce lung function.',
        unit: 'ppb',
    },
    {
        title: 'O₃',
        description: 'A gas formed by chemical reactions between pollutants; can cause respiratory issues at ground level.',
        unit: 'ppb',
    },
    {
        title: 'CO',
        description: 'A colorless, odorless gas from incomplete combustion, impairing oxygen delivery in the body.',
        unit: 'ppb',
    },
    {
        title: 'BC',
        description: 'A component of particulate matter from combustion processes, affecting climate and health.',
        unit: 'µg/m³',
    },
];

export const About = () => (
    <Container py="2" borderRadius="md">
        <Box py={10} px={4}>
            <Heading as="h2" size="lg" textAlign="center" mb={6} color="green.500">
                Understanding Air Quality Parameters
            </Heading>
            <Text textAlign="center" fontSize="md" mb={10}>
                This air quality data, sourced from OpenAQ, provides insights into various pollutants and environmental factors,
                helping us understand air quality better. OpenAQ is a nonprofit that provides universal access to data on air quality.
                By aggregating data from various sources worldwide, OpenAQ compiles and shares this information on open-source platform,
                enabling informed decision-making and collaboration on decisions that address issues with the air we breathe every day.
            </Text>


            {/* Display each parameter in a responsive grid layout */}
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={6}>
                {parameterData.map((parameter) => (
                    <Box
                        key={parameter.title}
                        p={4}
                        _hover={{ boxShadow: "md", borderColor: "green.500" }}
                        transition="all 0.2s"
                    >
                        <VStack align="start" spaceY={2}>
                            <Heading as="h3" size="md" color="green.500">
                                {parameter.title}
                            </Heading>
                            <Text fontSize="sm" color="white">
                                {parameter.description}
                            </Text>
                            <Text fontSize="xs" color="gray.300">
                                <strong>Measurement Unit:</strong> {parameter.unit}
                            </Text>
                        </VStack>
                    </Box>
                ))}
            </Grid>
        </Box>

    </Container>
)