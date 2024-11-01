/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationsRow } from './LocationsRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type openaq_api__models__responses__LocationsResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<LocationsRow>;
};
