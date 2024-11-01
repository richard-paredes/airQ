/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoJSON } from './GeoJSON';
import type { ParameterBase } from './ParameterBase';

export type Provider = {
    id: number;
    name: string;
    sourceName: string;
    exportPrefix: string;
    datetimeAdded: string;
    datetimeFirst: string;
    datetimeLast: string;
    entitiesId: number;
    parameters: Array<ParameterBase>;
    bbox?: (GeoJSON | null);
};
