/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LatestRowV1 } from './LatestRowV1';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type LatestResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<LatestRowV1>;
};
