/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';
import type { ParametersRowV1 } from './ParametersRowV1';

export type ParametersResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<ParametersRowV1>;
};
