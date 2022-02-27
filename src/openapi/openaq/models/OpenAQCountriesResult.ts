/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountriesRow } from './CountriesRow';
import type { Meta } from './Meta';

export type OpenAQCountriesResult = {
    meta?: Meta;
    results: Array<CountriesRow>;
};
