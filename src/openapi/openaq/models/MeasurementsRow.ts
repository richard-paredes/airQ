/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { Date } from './Date';

export type MeasurementsRow = {
    locationId: number;
    location: string;
    parameter: string;
    value: number;
    date: Date;
    unit: string;
    coordinates?: (Coordinates | null);
    country?: (string | null);
    city?: (string | null);
    isMobile: boolean;
    isAnalysis?: (boolean | null);
    entity?: (string | null);
    sensorType: string;
};
