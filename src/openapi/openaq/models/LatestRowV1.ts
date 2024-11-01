/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { LatestMeasurementRow } from './LatestMeasurementRow';

export type LatestRowV1 = {
    location: string;
    city?: (string | null);
    country?: (string | null);
    coordinates: Coordinates;
    measurements: Array<LatestMeasurementRow>;
};
