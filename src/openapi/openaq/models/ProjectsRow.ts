/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectParameterDetails } from './ProjectParameterDetails';

export type ProjectsRow = {
    id: number;
    name: string;
    subtitle: string;
    isMobile?: boolean;
    isAnalysis?: boolean;
    entity?: string;
    sensorType?: string;
    locations: number;
    locationIds: Array<number>;
    countries?: Array<string>;
    parameters: Array<ProjectParameterDetails>;
    bbox?: Array<number>;
    measurements: number;
    firstUpdated: string;
    lastUpdated: string;
    sources?: Array<any>;
};
