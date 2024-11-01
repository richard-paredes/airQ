/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__v3__models__responses__Meta } from './openaq_api__v3__models__responses__Meta';
import type { Sensor } from './Sensor';

export type SensorsResponse = {
    meta?: openaq_api__v3__models__responses__Meta;
    results: Array<Sensor>;
};
