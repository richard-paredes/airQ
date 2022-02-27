import React, { Dispatch, useState } from 'react';
import { Box, Container } from "@chakra-ui/react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";

import { IOpenAQAction, IOpenAQParameters } from '../reducers/OpenAQReducer';
import { useLocations } from '../hooks/useLocations';
import { V2LocationsResponse } from '../openapi/openaq';
import { LocationMarker } from './LocationMarker';
import ReactTooltip from 'react-tooltip';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface MapOfUsaProps {
    openAQParameters: IOpenAQParameters;
    dispatchOpenAQ: Dispatch<IOpenAQAction>;
}

function markLocations(locations: V2LocationsResponse[], setTooltip: React.Dispatch<React.SetStateAction<JSX.Element | string>>) {
    const locationsWithCoordinates = locations.filter(x => !!x.coordinates);
    return locationsWithCoordinates.map(x => <LocationMarker key={x.id} location={x} setTooltip={setTooltip} />);
}

export const MapOfUsa: React.FC<MapOfUsaProps> = ({ openAQParameters, dispatchOpenAQ }) => {
    const locations = useLocations(openAQParameters.locationsParameters);
    const [tooltip, setTooltip] = useState<JSX.Element | string>();
    return <Container maxW="container.lg">
        <ComposableMap data-tip="" projection="geoAlbersUsa" >
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                        <>
                            {geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    stroke="#FFF"
                                    geography={geo}
                                    fill="#CDCDCD"
                                />
                            ))}
                            {markLocations(locations, setTooltip)}
                        </>
                    )}
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip>
            {tooltip}
        </ReactTooltip>
    </Container>
}