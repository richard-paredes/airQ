/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasurementsRowV1 } from './MeasurementsRowV1';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type MeasurementsResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<MeasurementsRowV1>;
};
