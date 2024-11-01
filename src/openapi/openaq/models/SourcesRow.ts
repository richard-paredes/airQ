/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Datum } from './Datum';

export type SourcesRow = {
    data?: (Datum | null);
    readme?: (string | null);
    sourceId: number;
    locations: number;
    sourceName: string;
    sourceSlug?: (string | null);
};
