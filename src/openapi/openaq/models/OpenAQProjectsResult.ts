/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { ProjectsRow } from './ProjectsRow';

export type OpenAQProjectsResult = {
    meta?: Meta;
    results: Array<ProjectsRow>;
};
