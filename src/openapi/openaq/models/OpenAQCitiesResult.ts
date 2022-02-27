/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CitiesRow } from './CitiesRow';
import type { Meta } from './Meta';

export type OpenAQCitiesResult = {
    meta?: Meta;
    results: Array<CitiesRow>;
};
