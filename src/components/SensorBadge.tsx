import React from 'react';
import { Badge } from '@chakra-ui/react';

import { SensorTypes } from '../openapi/openaq';

interface SensorBadgeProps {
    sensor: SensorTypes;
}
function getSensorColorScheme(entity: SensorTypes) {
    switch(entity) {
        case "low-cost sensor":
            return "yellow";
        case "reference grade":
            return "red";
    }
}
export const SensorBadge: React.FC<SensorBadgeProps> = ({ sensor }) => {
    return <Badge colorScheme={getSensorColorScheme(sensor)}>{sensor.toUpperCase()}</Badge>
}