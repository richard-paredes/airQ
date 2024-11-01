/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Measurement } from './Measurement';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type openaq_api__v3__models__responses__MeasurementsResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Measurement>;
};
