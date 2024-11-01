/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AveragesRow } from './AveragesRow';
import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';

export type AveragesResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<AveragesRow>;
};
