import React, { useCallback, useState } from 'react';
import { Marker } from 'react-simple-maps';

import { V2LocationsResponse } from '../openapi/openaq';
import { IOpenAQAction } from '../reducers/OpenAQReducer';
import { LocationSummary } from './LocationSummary';

interface LocationMarkerProps {
    location: V2LocationsResponse;
    dispatchOpenAQ: React.Dispatch<IOpenAQAction>;
    setTooltip: React.Dispatch<React.SetStateAction<JSX.Element | string>>;
    setShowMeasurements: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({ location, dispatchOpenAQ, setTooltip, setShowMeasurements }) => {
    const [hover, setHover] = useState(false);
    const activateTooltip = useCallback(() => {
        setHover(true);
        setTooltip(<LocationSummary location={location} />);
    }, [setTooltip]);
    const deactiveTooltip = useCallback(() => {
        setHover(false);
        setTooltip(null);
    }, [setTooltip]);
    const activateLocationMeasurements = useCallback(() => {
        dispatchOpenAQ({ type: 'UPDATE_MEASUREMENTS_QUERY', values: location });
        setShowMeasurements(true);
    }, [setShowMeasurements]);

    return <g key={location.id}>
        <Marker coordinates={[location.coordinates.longitude, location.coordinates.latitude]}>
            <circle r={4} fill={hover ? "red" : "teal"}
                onMouseEnter={activateTooltip}
                onMouseLeave={deactiveTooltip}
                onClick={activateLocationMeasurements}
            />
        </Marker>
    </g>
}