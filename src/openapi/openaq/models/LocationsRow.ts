/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { openaq_api__models__responses__Manufacturer } from './openaq_api__models__responses__Manufacturer';
import type { openaq_api__models__responses__Parameter } from './openaq_api__models__responses__Parameter';
import type { Source } from './Source';

export type LocationsRow = {
    id: number;
    city?: (string | null);
    name?: (string | null);
    entity?: (string | null);
    country?: (string | null);
    sources?: (Array<Source> | Source);
    isMobile: boolean;
    isAnalysis?: (boolean | null);
    parameters?: (Array<openaq_api__models__responses__Parameter> | null);
    sensorType?: (string | null);
    coordinates?: (Coordinates | null);
    lastUpdated?: (string | null);
    firstUpdated?: (string | null);
    measurements: number;
    bounds?: (Array<number> | null);
    manufacturers?: (Array<openaq_api__models__responses__Manufacturer> | null);
};
