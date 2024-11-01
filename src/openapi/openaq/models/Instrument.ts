/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ManufacturerBase } from './ManufacturerBase';

export type Instrument = {
    id: number;
    name: string;
    isMonitor: boolean;
    manufacturer: ManufacturerBase;
};
