import useSWR from 'swr';
import { V2LocationsRequest, V2LocationsResponse } from '../openapi/openaq';
import { fetcher } from '../utilities/fetcher';

export const useLocations = (request: V2LocationsRequest) => {
    const { data } = useSWR<V2LocationsResponse[]>({ url: "/api/locations", params: request }, fetcher);
    return data;
}