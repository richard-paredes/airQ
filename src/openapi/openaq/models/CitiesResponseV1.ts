/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityRowV1 } from './CityRowV1';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type CitiesResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<CityRowV1>;
};
