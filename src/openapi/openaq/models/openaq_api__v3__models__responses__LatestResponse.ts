/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Latest } from './Latest';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type openaq_api__v3__models__responses__LatestResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Latest>;
};
