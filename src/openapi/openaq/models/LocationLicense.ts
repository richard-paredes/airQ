/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttributionEntity } from './AttributionEntity';

export type LocationLicense = {
    id: number;
    name: string;
    attribution: AttributionEntity;
    dateFrom?: (string | null);
    dateTo?: (string | null);
};
