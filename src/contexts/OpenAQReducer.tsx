import { OpenAQResult, V2LocationsRequest, V2MeasurementsRequest } from "../openapi/openaq";
import { V2LocationsResponse } from "../openapi/openaq/models/V2LocationsResponse";

interface IOpenAQAction {
    type: 'UPDATE_LOCATIONS_QUERY' | 'UPDATE_MEASUREMENTS_QUERY';
    values: V2LocationsRequest | V2MeasurementsRequest;
}

interface IOpenAQState {
    locationsParameters: V2LocationsRequest;
    measurementsParameters: V2MeasurementsRequest;
    locations: V2LocationsResponse[];
}

export const openAQReducer = (state: IOpenAQState, action: IOpenAQAction) => {

}