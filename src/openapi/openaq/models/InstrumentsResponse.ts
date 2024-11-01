/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instrument } from './Instrument';
import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';

export type InstrumentsResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Instrument>;
};
