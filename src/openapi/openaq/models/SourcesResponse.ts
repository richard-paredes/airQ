/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';
import type { SourcesRow } from './SourcesRow';

export type SourcesResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<SourcesRow>;
};
