/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DatetimeObject } from './DatetimeObject';

export type Coverage = {
    expectedCount: number;
    expectedInterval: string;
    observedCount: number;
    observedInterval: string;
    percentComplete: number;
    percentCoverage: number;
    datetimeFrom?: (DatetimeObject | null);
    datetimeTo?: (DatetimeObject | null);
};
