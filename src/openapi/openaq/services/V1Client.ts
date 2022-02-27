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
import type { OpenAQResult } from '../models/OpenAQResult';
import type { SensorTypes } from '../models/SensorTypes';
import type { Sort } from '../models/Sort';
import type { SourcesV1Order } from '../models/SourcesV1Order';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class V1Client {

    /**
     * Measurements Get V1
     * @returns any Successful Response
     * @throws ApiError
     */
    public static measurementsGetV1V1MeasurementsGet({
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
            url: '/v1/measurements',
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
     * Latest V1 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static latestV1GetV1LatestGet({
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
            url: '/v1/latest',
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
     * Latest V1 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static latestV1GetV1LatestLocationIdGet({
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
            url: '/v1/latest/{location_id}',
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
     * Locationsv1 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static locationsv1GetV1LocationsGet({
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
            url: '/v1/locations',
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
     * Locationsv1 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static locationsv1GetV1LocationsLocationIdGet({
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
            url: '/v1/locations/{location_id}',
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
    public static citiesGetv1V1CitiesGet({
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
            url: '/v1/cities',
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
    public static countriesGetV1CountriesCountryIdGet({
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
            url: '/v1/countries/{country_id}',
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
     * Countries Getv1
     * @returns OpenAQCountriesResult Successful Response
     * @throws ApiError
     */
    public static countriesGetv1V1CountriesGet({
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
            url: '/v1/countries',
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
     * Sources V1 Get
     * @returns OpenAQResult Successful Response
     * @throws ApiError
     */
    public static sourcesV1GetV1SourcesGet({
        limit = 100,
        page = 1,
        offset,
        sort,
        name,
        orderBy,
    }: {
        /** Change the number of results returned. **/
        limit?: number,
        /** Paginate through results. **/
        page?: number,
        offset?: number,
        /** Define sort order. **/
        sort?: Sort,
        name?: string,
        orderBy?: SourcesV1Order,
    }): CancelablePromise<OpenAQResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/sources',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'name': name,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Parameters Getv1
     * @returns OpenAQParametersResult Successful Response
     * @throws ApiError
     */
    public static parametersGetv1V1ParametersGet({
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
            url: '/v1/parameters',
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

}