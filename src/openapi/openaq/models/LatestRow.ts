/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { LatestMeasurement } from './LatestMeasurement';

export type LatestRow = {
    location?: (string | null);
    city?: (string | null);
    country?: (string | null);
    coordinates?: (Coordinates | null);
    measurements: Array<LatestMeasurement>;
};
