/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { License } from './License';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type LicensesResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<License>;
};
