/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SourcesRowV1 = {
    url: string;
    adapter: string;
    name: string;
    city?: (string | null);
    country: string;
    description?: (string | null);
    sourceURL: string;
    resolution?: (string | null);
    contacts: Array<string>;
    active: boolean;
};
