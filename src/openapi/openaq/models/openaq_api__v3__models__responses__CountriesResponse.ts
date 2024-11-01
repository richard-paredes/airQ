/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type openaq_api__v3__models__responses__CountriesResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Country>;
};
