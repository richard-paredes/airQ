/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocationsRowV1 } from './LocationsRowV1';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type LocationsResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<LocationsRowV1>;
};
