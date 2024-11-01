/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AveragingPeriodV1 } from './AveragingPeriodV1';

export type LatestMeasurementRow = {
    parameter: string;
    value: number;
    lastUpdated: string;
    unit: string;
    sourceName: string;
    averagingPeriod: AveragingPeriodV1;
};
