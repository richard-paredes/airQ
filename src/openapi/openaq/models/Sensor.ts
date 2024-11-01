/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coverage } from './Coverage';
import type { DatetimeObject } from './DatetimeObject';
import type { LatestBase } from './LatestBase';
import type { ParameterBase } from './ParameterBase';
import type { Summary } from './Summary';

export type Sensor = {
    id: number;
    name: string;
    parameter: ParameterBase;
    datetimeFirst?: (DatetimeObject | null);
    datetimeLast?: (DatetimeObject | null);
    coverage?: (Coverage | null);
    latest?: (LatestBase | null);
    summary?: (Summary | null);
};
