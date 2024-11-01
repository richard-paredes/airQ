/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DatetimeObject } from './DatetimeObject';
import type { FlagType } from './FlagType';

export type LocationFlag = {
    locationId: number;
    flagType: FlagType;
    datetimeFrom: DatetimeObject;
    datetimeTo: DatetimeObject;
    sensorIds?: Array<number>;
    note?: (string | null);
};
