import { V2LocationsRequest, V2MeasurementsRequest } from "../openapi/openaq";

export interface IOpenAQAction {
    type: 'UPDATE_LOCATIONS_QUERY' | 'UPDATE_MEASUREMENTS_QUERY';
    values: V2LocationsRequest | V2MeasurementsRequest;
}

export interface IOpenAQParameters {
    locationsParameters: V2LocationsRequest;
    measurementsParameters: V2MeasurementsRequest;
}

export const initialOpenAQParameters: IOpenAQParameters = {
    locationsParameters: {
        limit: 100,
        hasGeo: true,
        countryId: 'US',
        entity: '',
        sensorType: ''
    },
    measurementsParameters: {

    }
}

export const openAQReducer = (state: IOpenAQParameters, { type, values }: IOpenAQAction) => {
    switch (type) {
        case 'UPDATE_LOCATIONS_QUERY':
            return { ...state, locationsParameters: { ...values } }
        case 'UPDATE_MEASUREMENTS_QUERY':
            return { ...state, measurementsParameters: { ...values } }
        default:
            return state;
    }
}