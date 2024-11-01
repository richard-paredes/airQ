/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Manufacturer } from './openaq_api__models__responses__Manufacturer';

export type openaq_api__models__responses__Parameter = {
    id: number;
    unit: string;
    count: number;
    average: number;
    parameter: string;
    lastValue?: (number | null);
    displayName?: (string | null);
    lastUpdated: string;
    parameterId: number;
    firstUpdated: string;
    manufacturers?: (Array<openaq_api__models__responses__Manufacturer> | openaq_api__models__responses__Manufacturer);
};
