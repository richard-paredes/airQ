import useSWR from 'swr';
import { Location } from '../openapi/openaq';
import { fetcher } from '../utilities/fetcher';
import { V3Client } from '../openapi/openaq';
import useDebounce from './useDebounce';

export type LocationsRequest = Parameters<typeof V3Client.locationsGetV3LocationsGet>[0];

export const useLocations = (request: LocationsRequest) => {
    const debouncedValue = useDebounce(request, 300);
    const { data, isLoading } = useSWR<Location[]>({ url: "/api/locations", params: debouncedValue }, fetcher);
    if (!data) return { data: [], isLoading };
    return { data, isLoading };
}