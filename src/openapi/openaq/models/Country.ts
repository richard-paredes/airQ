/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParameterBase } from './ParameterBase';

export type Country = {
    id: number;
    code: string;
    name: string;
    datetimeFirst?: (string | null);
    datetimeLast?: (string | null);
    parameters?: (Array<ParameterBase> | null);
};
