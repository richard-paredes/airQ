/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LatestRow } from './LatestRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type openaq_api__models__responses__LatestResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<LatestRow>;
};
