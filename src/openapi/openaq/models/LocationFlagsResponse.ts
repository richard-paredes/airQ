/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationFlag } from './LocationFlag';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type LocationFlagsResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<LocationFlag>;
};
