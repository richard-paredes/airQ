/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { Coverage } from './Coverage';
import type { FlagInfo } from './FlagInfo';
import type { ParameterBase } from './ParameterBase';
import type { Period } from './Period';
import type { Summary } from './Summary';

export type HourlyData = {
    value?: (number | null);
    flagInfo: FlagInfo;
    parameter: ParameterBase;
    period?: (Period | null);
    coordinates?: (Coordinates | null);
    summary?: (Summary | null);
    coverage?: (Coverage | null);
};
