/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__v3__models__responses__Manufacturer } from './openaq_api__v3__models__responses__Manufacturer';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type ManufacturersResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<openaq_api__v3__models__responses__Manufacturer>;
};
