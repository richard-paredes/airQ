/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Parameter } from './openaq_api__models__responses__Parameter';
import type { ProjectsSource } from './ProjectsSource';

export type ProjectsRow = {
    id: number;
    name: string;
    subtitle: string;
    isMobile: boolean;
    isAnalysis?: (boolean | null);
    entity?: (string | null);
    sensorType?: (string | null);
    locations: number;
    locationIds: Array<number>;
    countries: Array<string>;
    parameters: Array<openaq_api__models__responses__Parameter>;
    bbox?: (Array<number> | null);
    measurements: number;
    firstUpdated: string;
    lastUpdated: string;
    sources: Array<ProjectsSource>;
};
