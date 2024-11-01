import React from 'react';
import { Container } from "@chakra-ui/react";
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { LocationMarkers } from './LocationMarker';

interface MapOfUsaProps { }

export const WorldMap: React.FC<MapOfUsaProps> = ({ }) => {
    return <Container maxW="full" border="1px" rounded="md" py="6">
        <MapContainer center={[39, -98]} minZoom={2} maxZoom={10} zoom={2} scrollWheelZoom style={{ minHeight: '75vh', borderRadius: 9 }} maxBounds={[[-90, -180], [90, 180]]}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap
            />
            <LocationMarkers />
        </MapContainer>
    </Container>
}

export default WorldMap;