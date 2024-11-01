import { LocationsRequest } from "../hooks/useLocations";
import { Location } from "../openapi/openaq";

export interface IOpenAQAction {
    type: 'UPDATE_LOCATIONS_QUERY' | 'UPDATE_MEASUREMENTS_QUERY';
    values: LocationsRequest | Location[];
}

export interface IOpenAQParameters {
    locationsParameters: any;
    selectedLocation?: any;
}

export const initialOpenAQParameters: IOpenAQParameters = {
    locationsParameters: {
        limit: 100,
        hasGeo: true,
        countryId: 'US',
        entity: '',
        sensorType: ''
    },
    selectedLocation: null
}

export const openAQReducer = (state: IOpenAQParameters, { type, values }: IOpenAQAction): IOpenAQParameters => {
    switch (type) {
        case 'UPDATE_LOCATIONS_QUERY':
            return { ...state, locationsParameters: { ...values as LocationsRequest } }
        case 'UPDATE_MEASUREMENTS_QUERY':
            return {
                ...state,
                selectedLocation: { ...values as any }
            }
        default:
            return state;
    }
}