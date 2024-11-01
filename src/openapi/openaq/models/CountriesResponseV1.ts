/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountriesRowV1 } from './CountriesRowV1';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type CountriesResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<CountriesRowV1>;
};
