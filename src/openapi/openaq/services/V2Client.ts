/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CitiesOrder } from '../models/CitiesOrder';
import type { CountriesOrder } from '../models/CountriesOrder';
import type { EntityTypes } from '../models/EntityTypes';
import type { LocationsOrder } from '../models/LocationsOrder';
import type { MeasOrder } from '../models/MeasOrder';
import type { OpenAQCitiesResult } from '../models/OpenAQCitiesResult';
import type { OpenAQCountriesResult } from '../models/OpenAQCountriesResult';
import type { OpenAQParametersResult } from '../models/OpenAQParametersResult';
import type { OpenAQProjectsResult } from '../models/OpenAQProjectsResult';
import type { OpenAQResult } from '../models/OpenAQResult';
import type { ProjectsOrder } from '../models/ProjectsOrder';
import type { SensorTypes } from '../models/SensorTypes';
import type { Sort } from '../models/Sort';
import type { SourcesOrder } from '../models/SourcesOrder';
import type { Spatial } from '../models/Spatial';
import type { Temporal } from '../models/Temporal';
import type { TileJSON } from '../models/TileJSON';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class V2Client {

    /**
     * Measurements Get
     * @returns any Successful Response
     * @throws ApiError
     */
    public static measurementsGetV2MeasurementsGet({
        format,
        dateFrom,
        dateTo,
        limit = 100,
        page = 1,
        offset,
        sort,
        hasGeo,
        parameterId,
        parameter,
        unit,
        coordinates,
        radius = 1000,
        countryId,
        country,
        city,
        locationId,
        location,
        orderBy,
        isMobile,
        isAnalysis,
        project,
        entity,
        sensorType,
        valueFrom,
        valueTo,
        includeFields,
    }: {
        format?: string,
        dateFrom?: string,
        dateTo?: string,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        sort?: Sort,
        hasGeo?: boolean,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        coordinates?: string,
        radius?: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        locationId?: number,
        location?: Array<(number | string)>,
        orderBy?: MeasOrder,
        isMobile?: boolean,
        isAnalysis?: boolean,
        project?: number,
        entity?: EntityTypes,
        sensorType?: SensorTypes,
        valueFrom?: number,
        valueTo?: number,
        includeFields?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/measurements',
            query: {
                'format': format,
                'date_from': dateFrom,
                'date_to': dateTo,
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'has_geo': hasGeo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'country': country,
                'city': city,
                'location_id': locationId,
                'location': location,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'project': project,
                'entity': entity,
                'sensorType': sensorType,
                'value_from': valueFrom,
                'value_to': valueTo,
                'include_fields': includeFields,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Averages V2 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static averagesV2GetV2AveragesGet({
        spatial,
        temporal,
        dateFrom,
        dateTo,
        parameterId,
        parameter,
        unit,
        projectId,
        project,
        countryId,
        country,
        limit = 100,
        page = 1,
        offset,
        sort,
        location,
        group = false,
    }: {
        spatial: Spatial,
        temporal: Temporal,
        dateFrom?: string,
        dateTo?: string,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        projectId?: number,
        project?: Array<(number | string)>,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        location?: Array<string>,
        group?: boolean,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/averages',
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'project_id': projectId,
                'project': project,
                'country_id': countryId,
                'country': country,
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'spatial': spatial,
                'temporal': temporal,
                'location': location,
                'group': group,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Locations Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static locationsGetV2LocationsGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        hasGeo,
        parameterId,
        parameter,
        unit,
        coordinates,
        radius = 1000,
        countryId,
        country,
        city,
        locationId,
        location,
        orderBy,
        isMobile,
        isAnalysis,
        sourceName,
        entity,
        sensorType,
        modelName,
        manufacturerName,
        dumpRaw = false,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Sort Direction **/
        sort?: Sort,
        hasGeo?: boolean,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        coordinates?: string,
        radius?: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        locationId?: number,
        location?: Array<(number | string)>,
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile **/
        isMobile?: boolean,
        /** Data is the product of a previous analysis/aggregation and not raw measurements **/
        isAnalysis?: boolean,
        /** Name of the data source **/
        sourceName?: Array<string>,
        /** Source entity type. **/
        entity?: EntityTypes,
        /** Type of Sensor **/
        sensorType?: SensorTypes,
        /** Model Name of Sensor **/
        modelName?: Array<string>,
        /** Manufacturer of Sensor **/
        manufacturerName?: Array<string>,
        dumpRaw?: boolean,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'has_geo': hasGeo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'country': country,
                'city': city,
                'location_id': locationId,
                'location': location,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'sourceName': sourceName,
                'entity': entity,
                'sensorType': sensorType,
                'modelName': modelName,
                'manufacturerName': manufacturerName,
                'dumpRaw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Locations Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static locationsGetV2LocationsLocationIdGet({
        locationId,
        limit = 100,
        page = 1,
        offset,
        sort,
        hasGeo,
        parameterId,
        parameter,
        unit,
        coordinates,
        radius = 1000,
        countryId,
        country,
        city,
        location,
        orderBy,
        isMobile,
        isAnalysis,
        sourceName,
        entity,
        sensorType,
        modelName,
        manufacturerName,
        dumpRaw = false,
    }: {
        locationId: number,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Sort Direction **/
        sort?: Sort,
        hasGeo?: boolean,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        coordinates?: string,
        radius?: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        location?: Array<(number | string)>,
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile **/
        isMobile?: boolean,
        /** Data is the product of a previous analysis/aggregation and not raw measurements **/
        isAnalysis?: boolean,
        /** Name of the data source **/
        sourceName?: Array<string>,
        /** Source entity type. **/
        entity?: EntityTypes,
        /** Type of Sensor **/
        sensorType?: SensorTypes,
        /** Model Name of Sensor **/
        modelName?: Array<string>,
        /** Manufacturer of Sensor **/
        manufacturerName?: Array<string>,
        dumpRaw?: boolean,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/{location_id}',
            path: {
                'location_id': locationId,
            },
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'has_geo': hasGeo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'country': country,
                'city': city,
                'location': location,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'sourceName': sourceName,
                'entity': entity,
                'sensorType': sensorType,
                'modelName': modelName,
                'manufacturerName': manufacturerName,
                'dumpRaw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Latest Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static latestGetV2LatestGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        hasGeo,
        parameterId,
        parameter,
        unit,
        coordinates,
        radius = 1000,
        countryId,
        country,
        city,
        locationId,
        location,
        orderBy,
        isMobile,
        isAnalysis,
        sourceName,
        entity,
        sensorType,
        modelName,
        manufacturerName,
        dumpRaw = false,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Sort Direction **/
        sort?: Sort,
        hasGeo?: boolean,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        coordinates?: string,
        radius?: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        locationId?: number,
        location?: Array<(number | string)>,
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile **/
        isMobile?: boolean,
        /** Data is the product of a previous analysis/aggregation and not raw measurements **/
        isAnalysis?: boolean,
        /** Name of the data source **/
        sourceName?: Array<string>,
        /** Source entity type. **/
        entity?: EntityTypes,
        /** Type of Sensor **/
        sensorType?: SensorTypes,
        /** Model Name of Sensor **/
        modelName?: Array<string>,
        /** Manufacturer of Sensor **/
        manufacturerName?: Array<string>,
        dumpRaw?: boolean,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/latest',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'has_geo': hasGeo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'country': country,
                'city': city,
                'location_id': locationId,
                'location': location,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'sourceName': sourceName,
                'entity': entity,
                'sensorType': sensorType,
                'modelName': modelName,
                'manufacturerName': manufacturerName,
                'dumpRaw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Latest Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static latestGetV2LatestLocationIdGet({
        locationId,
        limit = 100,
        page = 1,
        offset,
        sort,
        hasGeo,
        parameterId,
        parameter,
        unit,
        coordinates,
        radius = 1000,
        countryId,
        country,
        city,
        location,
        orderBy,
        isMobile,
        isAnalysis,
        sourceName,
        entity,
        sensorType,
        modelName,
        manufacturerName,
        dumpRaw = false,
    }: {
        locationId: number,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Sort Direction **/
        sort?: Sort,
        hasGeo?: boolean,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        coordinates?: string,
        radius?: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        location?: Array<(number | string)>,
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile **/
        isMobile?: boolean,
        /** Data is the product of a previous analysis/aggregation and not raw measurements **/
        isAnalysis?: boolean,
        /** Name of the data source **/
        sourceName?: Array<string>,
        /** Source entity type. **/
        entity?: EntityTypes,
        /** Type of Sensor **/
        sensorType?: SensorTypes,
        /** Model Name of Sensor **/
        modelName?: Array<string>,
        /** Manufacturer of Sensor **/
        manufacturerName?: Array<string>,
        dumpRaw?: boolean,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/latest/{location_id}',
            path: {
                'location_id': locationId,
            },
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'has_geo': hasGeo,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'country': country,
                'city': city,
                'location': location,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'sourceName': sourceName,
                'entity': entity,
                'sensorType': sensorType,
                'modelName': modelName,
                'manufacturerName': manufacturerName,
                'dumpRaw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Provides a simple listing of cities within the platform
     * @returns OpenAQCitiesResult Successful Response
     * @throws ApiError
     */
    public static citiesGetV2CitiesGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        countryId,
        country,
        city,
        orderBy,
        entity,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /**
         * Limit results by a certain city or cities.
         * (ex. ?city=Chicago or ?city=Chicago&city=Boston)
         *  **/
        city?: Array<string>,
        /** Order by a field **/
        orderBy?: CitiesOrder,
        entity?: string,
    }): CancelablePromise<OpenAQCitiesResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cities',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'country_id': countryId,
                'country': country,
                'city': city,
                'order_by': orderBy,
                'entity': entity,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Countries Get
     * @returns OpenAQCountriesResult Successful Response
     * @throws ApiError
     */
    public static countriesGetV2CountriesGet({
        limit = 200,
        page = 1,
        offset,
        sort,
        countryId,
        country,
        orderBy,
    }: {
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        orderBy?: CountriesOrder,
    }): CancelablePromise<OpenAQCountriesResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/countries',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'country_id': countryId,
                'country': country,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Countries Get
     * @returns OpenAQCountriesResult Successful Response
     * @throws ApiError
     */
    public static countriesGetV2CountriesCountryIdGet({
        countryId,
        limit = 200,
        page = 1,
        offset,
        sort,
        country,
        orderBy,
    }: {
        countryId: string,
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        orderBy?: CountriesOrder,
    }): CancelablePromise<OpenAQCountriesResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/countries/{country_id}',
            path: {
                'country_id': countryId,
            },
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'country': country,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Tile
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getTileV2LocationsTilesZXYPbfGet({
        z,
        x,
        y,
        parameter,
        location,
        lastUpdatedFrom,
        lastUpdatedTo,
        isMobile,
        project,
        isAnalysis,
    }: {
        z: number,
        x: number,
        y: number,
        parameter?: (number | string),
        /** limit data to location id **/
        location?: Array<number>,
        lastUpdatedFrom?: string,
        lastUpdatedTo?: string,
        isMobile?: boolean,
        project?: number,
        isAnalysis?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/{z}/{x}/{y}.pbf',
            path: {
                'z': z,
                'x': x,
                'y': y,
            },
            query: {
                'parameter': parameter,
                'location': location,
                'lastUpdatedFrom': lastUpdatedFrom,
                'lastUpdatedTo': lastUpdatedTo,
                'isMobile': isMobile,
                'project': project,
                'isAnalysis': isAnalysis,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Mobiletile
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMobiletileV2LocationsTilesMobileZXYPbfGet({
        z,
        x,
        y,
        dateFrom,
        dateTo,
        parameter,
        location,
        lastUpdatedFrom,
        lastUpdatedTo,
        isMobile,
        project,
        isAnalysis,
    }: {
        z: number,
        x: number,
        y: number,
        dateFrom: string,
        dateTo: string,
        parameter?: (number | string),
        /** limit data to location id **/
        location?: Array<number>,
        lastUpdatedFrom?: string,
        lastUpdatedTo?: string,
        isMobile?: boolean,
        project?: number,
        isAnalysis?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/mobile/{z}/{x}/{y}.pbf',
            path: {
                'z': z,
                'x': x,
                'y': y,
            },
            query: {
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'parameter': parameter,
                'location': location,
                'lastUpdatedFrom': lastUpdatedFrom,
                'lastUpdatedTo': lastUpdatedTo,
                'isMobile': isMobile,
                'project': project,
                'isAnalysis': isAnalysis,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Mobilegentile
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet({
        z,
        x,
        y,
        parameter,
        location,
        lastUpdatedFrom,
        lastUpdatedTo,
        isMobile,
        project,
        isAnalysis,
    }: {
        z: number,
        x: number,
        y: number,
        parameter?: (number | string),
        /** limit data to location id **/
        location?: Array<number>,
        lastUpdatedFrom?: string,
        lastUpdatedTo?: string,
        isMobile?: boolean,
        project?: number,
        isAnalysis?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/mobile-generalized/{z}/{x}/{y}.pbf',
            path: {
                'z': z,
                'x': x,
                'y': y,
            },
            query: {
                'parameter': parameter,
                'location': location,
                'lastUpdatedFrom': lastUpdatedFrom,
                'lastUpdatedTo': lastUpdatedTo,
                'isMobile': isMobile,
                'project': project,
                'isAnalysis': isAnalysis,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Tilejson
     * @returns TileJSON Return a tilejson
     * @throws ApiError
     */
    public static tilejsonV2LocationsTilesTilesJsonGet(): CancelablePromise<TileJSON> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/tiles.json',
        });
    }

    /**
     * Mobiletilejson
     * @returns TileJSON Return a tilejson
     * @throws ApiError
     */
    public static mobiletilejsonV2LocationsTilesMobileTilesJsonGet(): CancelablePromise<TileJSON> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/mobile/tiles.json',
        });
    }

    /**
     * Mobilegentilejson
     * @returns TileJSON Return a tilejson
     * @throws ApiError
     */
    public static mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet(): CancelablePromise<TileJSON> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/mobile-generalized/tiles.json',
        });
    }

    /**
     * Demo
     * @returns string Successful Response
     * @throws ApiError
     */
    public static demoV2LocationsTilesViewerGet(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations/tiles/viewer',
        });
    }

    /**
     * Projects Get
     * @returns OpenAQProjectsResult Successful Response
     * @throws ApiError
     */
    public static projectsGetV2ProjectsGet({
        countryId,
        country,
        limit = 100,
        page = 1,
        offset,
        sort,
        parameterId,
        parameter,
        unit,
        projectId,
        project,
        orderBy,
        isMobile,
        isAnalysis,
        entity,
        sensorType,
        sourceName,
    }: {
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        projectId?: number,
        project?: Array<(number | string)>,
        orderBy?: ProjectsOrder,
        isMobile?: boolean,
        isAnalysis?: boolean,
        entity?: string,
        sensorType?: string,
        sourceName?: Array<string>,
    }): CancelablePromise<OpenAQProjectsResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/projects',
            query: {
                'country_id': countryId,
                'country': country,
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'project_id': projectId,
                'project': project,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'entity': entity,
                'sensorType': sensorType,
                'sourceName': sourceName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Projects Get
     * @returns OpenAQProjectsResult Successful Response
     * @throws ApiError
     */
    public static projectsGetV2ProjectsProjectIdGet({
        projectId,
        countryId,
        country,
        limit = 100,
        page = 1,
        offset,
        sort,
        parameterId,
        parameter,
        unit,
        project,
        orderBy,
        isMobile,
        isAnalysis,
        entity,
        sensorType,
        sourceName,
    }: {
        projectId: number,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. /US)
         *  **/
        countryId?: string,
        /**
         * Limit results by a certain country using two letter country code.
         * (ex. ?country=US or ?country=US&country=MX)
         *  **/
        country?: Array<string>,
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        parameterId?: number,
        parameter?: Array<(number | string)>,
        unit?: Array<string>,
        project?: Array<(number | string)>,
        orderBy?: ProjectsOrder,
        isMobile?: boolean,
        isAnalysis?: boolean,
        entity?: string,
        sensorType?: string,
        sourceName?: Array<string>,
    }): CancelablePromise<OpenAQProjectsResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            query: {
                'country_id': countryId,
                'country': country,
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'parameter_id': parameterId,
                'parameter': parameter,
                'unit': unit,
                'project': project,
                'order_by': orderBy,
                'isMobile': isMobile,
                'isAnalysis': isAnalysis,
                'entity': entity,
                'sensorType': sensorType,
                'sourceName': sourceName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Sources Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static sourcesGetV2SourcesGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        sourceName,
        sourceId,
        sourceSlug,
        orderBy,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        sourceName?: Array<string>,
        sourceId?: Array<number>,
        sourceSlug?: Array<string>,
        orderBy?: SourcesOrder,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/sources',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'sourceName': sourceName,
                'sourceId': sourceId,
                'sourceSlug': sourceSlug,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Readme Get
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readmeGetV2SourcesReadmeSlugGet({
        slug,
    }: {
        slug: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/sources/readme/{slug}',
            path: {
                'slug': slug,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Parameters Get
     * @returns OpenAQParametersResult Successful Response
     * @throws ApiError
     */
    public static parametersGetV2ParametersGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        sourceName,
        sourceId,
        sourceSlug,
        orderBy,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        sourceName?: Array<string>,
        sourceId?: Array<number>,
        sourceSlug?: Array<string>,
        orderBy?: string,
    }): CancelablePromise<OpenAQParametersResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/parameters',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'sourceName': sourceName,
                'sourceId': sourceId,
                'sourceSlug': sourceSlug,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Mfr Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static mfrGetV2ManufacturersGet(): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/manufacturers',
        });
    }

    /**
     * Model Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static modelGetV2ModelsGet(): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/models',
        });
    }

    /**
     * Summary Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static summaryGetV2SummaryGet(): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/summary',
        });
    }

}