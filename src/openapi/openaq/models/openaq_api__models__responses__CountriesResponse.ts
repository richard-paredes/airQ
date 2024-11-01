/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountriesRow } from './CountriesRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type openaq_api__models__responses__CountriesResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<CountriesRow>;
};
