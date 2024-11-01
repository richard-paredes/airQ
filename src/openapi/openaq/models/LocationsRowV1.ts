/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { CountsByMeasurementItem } from './CountsByMeasurementItem';

export type LocationsRowV1 = {
    id: number;
    country: string;
    city?: (string | null);
    cities?: null;
    location: string;
    locations: Array<string>;
    sourceName: string;
    sourceNames: Array<string>;
    sourceType: string;
    sourceTypes: Array<string>;
    coordinates: Coordinates;
    firstUpdated: string;
    lastUpdated: string;
    parameters: Array<string>;
    countsByMeasurement: Array<CountsByMeasurementItem>;
    count: number;
};
