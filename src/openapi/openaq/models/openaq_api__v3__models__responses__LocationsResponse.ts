/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type openaq_api__v3__models__responses__LocationsResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Location>;
};
