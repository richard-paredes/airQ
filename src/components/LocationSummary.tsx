import React from 'react';
import { Container, Heading, Text } from "@chakra-ui/react"
import { V2LocationsResponse } from '../openapi/openaq';

interface LocationSummaryProps {
    location: V2LocationsResponse;
}

export const LocationSummary: React.FC<LocationSummaryProps> = ({ location }) => {
    return <Container>
        <Heading size="xs">{location.name}</Heading>
        <Text>Entity: {location.entity}</Text>
        <Text>Sensor: {location.sensorType}</Text>
        <Text># Sources: {location.sources?.length || 0}</Text>
        <Text># Parameters: {location.parameters?.length || 0}</Text>
        <Text>Is Mobile: {location.isMobile?.toString()}</Text>
        <Text>Is Analysis: {location.isAnalysis?.toString()}</Text>
    </Container>
}