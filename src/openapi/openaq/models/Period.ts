/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DatetimeObject } from './DatetimeObject';

export type Period = {
    label: string;
    interval: string;
    datetimeFrom?: (DatetimeObject | null);
    datetimeTo?: (DatetimeObject | null);
};
