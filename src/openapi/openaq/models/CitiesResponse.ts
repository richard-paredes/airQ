/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CityRow } from './CityRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type CitiesResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<CityRow>;
};
