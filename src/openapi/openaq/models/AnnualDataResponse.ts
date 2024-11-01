/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnnualData } from './AnnualData';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type AnnualDataResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<AnnualData>;
};
