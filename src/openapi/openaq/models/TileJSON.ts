/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
 */
export type TileJSON = {
    tilejson?: string;
    name?: string;
    description?: string;
    version?: string;
    attribution?: string;
    template?: string;
    legend?: string;
    scheme?: string;
    tiles: Array<string>;
    grids?: Array<string>;
    data?: Array<string>;
    minzoom?: number;
    maxzoom?: number;
    bounds?: Array<number>;
};
