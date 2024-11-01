/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';
import type { SummaryRow } from './SummaryRow';

export type SummaryResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<SummaryRow>;
};
