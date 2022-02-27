import React from 'react';
import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react"
import { V2LocationsResponse } from '../openapi/openaq';
import { EntityBadge } from './EntityBadge';
import { SensorBadge } from './SensorBadge';

interface LocationSummaryProps {
    location: V2LocationsResponse;
}

export const LocationSummary: React.FC<LocationSummaryProps> = ({ location }) => {
    return <Container bg="black" color="white" rounded="md" p="4">
        <Heading size="xs" textOverflow="ellipsis" maxW="full">{location.name}</Heading>
        <Divider my="2" />
        <Text>Entity: <EntityBadge entity={location.entity} /></Text>
        <Text>Sensor: <SensorBadge sensor={location.sensorType} /></Text>
        <Text># Sources: {location.sources?.length || 0}</Text>
        <Text># Parameters: {location.parameters?.length || 0}</Text>
        <Text>Is Mobile: {location.isMobile?.toString()}</Text>
        <Text>Is Analysis: {location.isAnalysis?.toString()}</Text>
        <Box mx="auto" p="1" color="teal.300">
            Click marker to learn more
        </Box>
    </Container>
}