import React from 'react';
import { Badge } from '@chakra-ui/react';

import { EntityTypes } from '../openapi/openaq';

interface EntityBadgeProps {
    entity: EntityTypes;
}
function getEntityColorScheme(entity: EntityTypes) {
    switch(entity) {
        case "community":
            return "green";
        case "government":
            return "orange";
        case "research":
            return "purple";
    }
}
export const EntityBadge: React.FC<EntityBadgeProps> = ({ entity }) => {
    return <Badge colorScheme={getEntityColorScheme(entity)}>{entity.toUpperCase()}</Badge>
}