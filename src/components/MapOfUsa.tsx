import React, { Dispatch, useState } from 'react';
import { Container } from "@chakra-ui/react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import ReactTooltip from 'react-tooltip';

import { IOpenAQAction, IOpenAQParameters } from '../reducers/OpenAQReducer';
import { useLocations } from '../hooks/useLocations';
import { V2LocationsResponse } from '../openapi/openaq';
import { LocationMarker } from './LocationMarker';
import { LocationMeasurements } from './LocationMeasurements';

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
interface MapOfUsaProps {
    openAQParameters: IOpenAQParameters;
    dispatchOpenAQ: Dispatch<IOpenAQAction>;
}

export const MapOfUsa: React.FC<MapOfUsaProps> = ({ openAQParameters, dispatchOpenAQ }) => {
    const locations = useLocations(openAQParameters.locationsParameters);
    const [tooltip, setTooltip] = useState<JSX.Element | string>();
    const [showMeasurements, setShowMeasurements] = useState(false);

    return <Container maxW="container.lg" border="1px" borderColor="teal" rounded="md">
        <ComposableMap data-tip="" projection="geoAlbers" projectionConfig={{scale: 500}}>
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                        <React.Fragment>
                            {renderUsaStates(geographies)}
                            {renderLocationMarkers(locations, dispatchOpenAQ, setTooltip, setShowMeasurements)}
                        </React.Fragment>
                    )}
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip wrapper={null} backgroundColor="transparent">
            {tooltip}
        </ReactTooltip>
        <LocationMeasurements openAQParameters={openAQParameters} show={showMeasurements} setShow={setShowMeasurements} />
    </Container>
}


function renderLocationMarkers(
    locations: V2LocationsResponse[],
    dispatchOpenAQ: Dispatch<IOpenAQAction>,
    setTooltip: React.Dispatch<React.SetStateAction<JSX.Element | string>>,
    setShowMeasurements: React.Dispatch<React.SetStateAction<boolean>>) {
    const locationsWithCoordinates = locations.filter(x => !!x.coordinates);
    return locationsWithCoordinates.map(x => <LocationMarker key={x.id}
        location={x}
        dispatchOpenAQ={dispatchOpenAQ}
        setTooltip={setTooltip}
        setShowMeasurements={setShowMeasurements}
    />);
}

function renderUsaStates(geographies) {
    return geographies.map(geo => (
        <Geography
            key={geo.rsmKey}
            stroke="#FFF"
            geography={geo}
            fill="#2D3748"
        />
    ))
}