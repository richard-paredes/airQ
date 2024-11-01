/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasurementsRow } from './MeasurementsRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type openaq_api__models__responses__MeasurementsResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<MeasurementsRow>;
};
