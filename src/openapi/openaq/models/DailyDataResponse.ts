/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DailyData } from './DailyData';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type DailyDataResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<DailyData>;
};
