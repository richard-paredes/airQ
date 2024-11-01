/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { openaq_api__models__responses__Meta } from './openaq_api__models__responses__Meta';
import type { ProjectsRow } from './ProjectsRow';

export type ProjectsResponse = {
    meta?: openaq_api__models__responses__Meta;
    results: Array<ProjectsRow>;
};
