import { V2LocationsRequest, V2MeasurementsRequest } from "../openapi/openaq";

interface IOpenAQAction {
    type: 'UPDATE_LOCATIONS_QUERY' | 'UPDATE_MEASUREMENTS_QUERY';
    values: V2LocationsRequest | V2MeasurementsRequest;
}

interface IOpenAQState {
    locationsParameters: V2LocationsRequest;
    measurementsParameters: V2MeasurementsRequest;
}

export const openAQReducer = (state: IOpenAQState, { type, values }: IOpenAQAction) => {
    switch (type) {
        case 'UPDATE_LOCATIONS_QUERY':
            return { ...state, values }
        case 'UPDATE_MEASUREMENTS_QUERY':
            return { ...state, values }
        default:
            return state;
    }
}