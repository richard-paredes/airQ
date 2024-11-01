import useSWR from 'swr';
import { V3Client, Measurement } from '../openapi/openaq';
import { fetcher } from '../utilities/fetcher';


export type MeasurementRequest = Parameters<typeof V3Client.sensorHourlyMeasurementsGetV3SensorsSensorsIdHoursGet>[0];

export const useMeasurements = (request: MeasurementRequest) => {
    const { data } = useSWR<Measurement[]>({
        url: "/api/measurements",
        params: request
    }, fetcher);
    return data || [];
}