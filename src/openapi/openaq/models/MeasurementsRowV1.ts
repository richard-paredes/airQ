/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { Date } from './Date';

export type MeasurementsRowV1 = {
    location: string;
    parameter: string;
    value: number;
    date: Date;
    unit: string;
    coordinates: Coordinates;
    country?: (string | null);
    city?: (string | null);
};
