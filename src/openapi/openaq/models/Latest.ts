/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { DatetimeObject } from './DatetimeObject';

export type Latest = {
    datetime: DatetimeObject;
    value: number;
    coordinates: Coordinates;
    sensorsId: number;
    locationsId: number;
};
