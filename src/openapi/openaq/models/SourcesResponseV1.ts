/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';
import type { SourcesRowV1 } from './SourcesRowV1';

export type SourcesResponseV1 = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<SourcesRowV1>;
};
