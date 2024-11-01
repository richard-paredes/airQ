import { useLocations } from '@/hooks/useLocations';
import { useMeasurements } from '@/hooks/useMeasurements';
import { useSensors } from '@/hooks/useSensors';
import { Sensor, Location } from '@/openapi/openaq';
import { Box, Container, Skeleton, Spinner, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export const LocationMarkers = () => {
    const [mapBounds, setMapBounds] = useState("");
    const [selectedLocationId, setSelectedLocationId] = useState<number>(null);

    const map = useMapEvents({
        moveend: () => {
            const bounds = map.getBounds();
            const southWest = bounds.getSouthWest();
            const northEast = bounds.getNorthEast();
            const clampedBounds = [clamp(southWest.lng, -180, 180).toString(), clamp(southWest.lat, -180, 180), clamp(northEast.lng, -180, 180), clamp(northEast.lat, -180, 180)].join(',');
            setMapBounds(clampedBounds);
        }
    });


    const { data: locations } = useLocations({ bbox: mapBounds, limit: 1000 });
    return (
        <>
            {locations.map((loc) => <LocationMarker key={loc.id} location={loc} />)}
        </>
    )
}

function LocationMarker({ location }: { location: Location }) {
    const [shouldDisplayInfo, setShouldDisplayInfo] = useState(false);
    const { data: sensors, isLoading } = useSensors({ locationsId: shouldDisplayInfo ? location.id : null });

    return <Marker key={location.id} position={[location.coordinates.latitude, location.coordinates.longitude]} eventHandlers={{
        click: () => setShouldDisplayInfo(true)
    }}>
        <Popup>
            <strong>{location.name}</strong>
            <br />
            ID: {location.id}
            <br />
            Country: {location.country.name}
            <br />
            <br />
            <strong>Available sensors:</strong>
            <br />

            <Box w="full" maxH={32} overflow="auto">
                {isLoading ? <Box display="flex" justifyContent="center">
                    <Spinner color="teal.400" />
                    <Text>Loading sensors...</Text>
                </Box> : (sensors || []).map(sen => <SensorInfo key={sen.id} sensor={sen} />)}

            </Box>
        </Popup>
    </Marker>
}

function SensorInfo({ sensor }: { sensor: Sensor }) {

    return <Box bgColor="teal.100" rounded="md" px="1" my="2" py="1">
        <strong>Sensor: {sensor.name}</strong>
        <br />
        <strong>Parameter:</strong> {sensor.parameter.displayName}
        <br />
        <strong>Summary: </strong>
        {sensor.summary ? <Box ml="2">
            <div>Average: {sensor.summary.avg || 'N/A'} {sensor.parameter.units}</div>
            <div>Maximum: {sensor.summary.max || 'N/A'} {sensor.parameter.units}</div>
            <div>Minimum: {sensor.summary.min || 'N/A'} {sensor.parameter.units}</div>
            <div>Median: {sensor.summary.median || 'N/A'} {sensor.parameter.units}</div>
        </Box> : <>No data available</>}

    </Box>
}