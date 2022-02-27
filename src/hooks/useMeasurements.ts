import useSWR from 'swr';
import { V2LocationsResponse, V2MeasurementsResponse } from '../openapi/openaq';
import { fetcher } from '../utilities/fetcher';

export const useMeasurements = (request: V2LocationsResponse) => {
    const { data } = useSWR<V2MeasurementsResponse[]>({
        url: "/api/measurements",
        params: {
            locationId: request?.id,
            unit: ["µg/m³"]
        }
    }, fetcher);
    return data || [];
}