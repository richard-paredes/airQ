/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { ParametersRow } from './ParametersRow';

export type OpenAQParametersResult = {
    meta?: Meta;
    results: Array<ParametersRow>;
};
