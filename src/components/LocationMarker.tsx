import { Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { Marker } from 'react-simple-maps';

import { V2LocationsResponse } from '../openapi/openaq';
import { LocationSummary } from './LocationSummary';

interface LocationMarkerProps {
    location: V2LocationsResponse;
    setTooltip: React.Dispatch<React.SetStateAction<JSX.Element | string>>;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({ location, setTooltip }) => {
    const [hover, setHover] = useState(false);
    const activateTooltip = useCallback(() => {
        setHover(true);
        setTooltip(<LocationSummary location={location} />);
    }, [setTooltip]);
    const deactiveTooltip = useCallback(() => {
        setHover(false);
        setTooltip(null);
    }, [setTooltip]);
    return <g key={location.id}>
        <Marker coordinates={[location.coordinates.longitude, location.coordinates.latitude]}>
            <circle r={4} fill={hover ? "red" : "teal"}
                onMouseEnter={activateTooltip}
                onMouseLeave={deactiveTooltip}
                />
        </Marker>
    </g>
}