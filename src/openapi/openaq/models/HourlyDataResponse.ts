/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HourlyData } from './HourlyData';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type HourlyDataResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<HourlyData>;
};
