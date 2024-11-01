import useSWR from 'swr';
import { V3Client, Sensor } from '../openapi/openaq';
import { fetcher } from '../utilities/fetcher';


export type SensorRequest = Parameters<typeof V3Client.sensorsGetV3LocationsLocationsIdSensorsGet>[0];

export const useSensors = (request: SensorRequest) => {
    const { data, isLoading } = useSWR<Sensor[]>(() => request.locationsId ? {
        url: "/api/sensors",
        params: request
    } : null, fetcher);
    return { data, isLoading };
}