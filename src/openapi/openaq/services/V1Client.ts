/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CitiesOrderV1 } from '../models/CitiesOrderV1';
import type { CitiesResponseV1 } from '../models/CitiesResponseV1';
import type { CountriesOrder } from '../models/CountriesOrder';
import type { CountriesOrderV1 } from '../models/CountriesOrderV1';
import type { CountriesResponseV1 } from '../models/CountriesResponseV1';
import type { EntityTypes } from '../models/EntityTypes';
import type { LatestResponseV1 } from '../models/LatestResponseV1';
import type { LocationsOrder } from '../models/LocationsOrder';
import type { LocationsResponseV1 } from '../models/LocationsResponseV1';
import type { MeasOrder } from '../models/MeasOrder';
import type { MeasurementsResponseV1 } from '../models/MeasurementsResponseV1';
import type { openaq_api__models__responses__CountriesResponse } from '../models/openaq_api__models__responses__CountriesResponse';
import type { ParametersResponseV1 } from '../models/ParametersResponseV1';
import type { SensorTypes } from '../models/SensorTypes';
import type { Sort } from '../models/Sort';
import type { SourcesResponseV1 } from '../models/SourcesResponseV1';
import type { SourcesV1Order } from '../models/SourcesV1Order';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class V1Client {

    /**
     * Get cities
     * Provides a list of cities supported by the platform
     * @returns CitiesResponseV1 Successful Response
     * @throws ApiError
     */
    public static citiesGetv1V1CitiesGet({
        limit,
        page,
        offset,
        sort,
        orderBy,
        country,
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
        /** Order by a field e.g. ?order_by=city **/
        orderBy?: CitiesOrderV1,
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        country?: (Array<string> | null),
    }): CancelablePromise<CitiesResponseV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cities',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'order_by': orderBy,
                'country': country,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get country by ID
     * Provides a single country by country ID
     * @returns openaq_api__models__responses__CountriesResponse Successful Response
     * @throws ApiError
     */
    public static countriesByPathV1CountriesCountryIdGet({
        countryId,
        limit = 100,
        page,
        offset,
        sort,
        orderBy,
    }: {
        countryId: number,
        /** Limit the number of results returned. e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
        /** Order by a field e.g. ?order_by=name **/
        orderBy?: CountriesOrder,
    }): CancelablePromise<openaq_api__models__responses__CountriesResponse> {
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
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get countries
     * Providecs a list of countries
     * @returns CountriesResponseV1 Successful Response
     * @throws ApiError
     */
    public static countriesGetv1V1CountriesGet({
        limit = 100,
        page,
        offset,
        sort,
        orderBy,
    }: {
        limit?: number,
        page?: (number | null),
        offset?: (number | null),
        sort?: (Sort | null),
        orderBy?: CountriesOrderV1,
    }): CancelablePromise<CountriesResponseV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/countries',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get latest measurements by location ID
     * @returns LatestResponseV1 Successful Response
     * @throws ApiError
     */
    public static getV1LatestByIdV1LatestLocationIdGet({
        locationId,
        limit,
        page,
        offset,
        sort,
    }: {
        /** The ID of the location **/
        locationId: number,
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
    }): CancelablePromise<LatestResponseV1> {
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
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get latest measurements
     * @returns LatestResponseV1 Successful Response
     * @throws ApiError
     */
    public static latestV1GetV1LatestGet({
        limit,
        page,
        offset,
        sort,
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
        dumpRaw,
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Sort Direction e.g. sort=desc **/
        sort?: (Sort | null),
        /** (optional) A parameter ID to filter measurement results. e.g. parameter_id=2 (i.e. PM2.5) will limit measurement results to only PM2.5 measurements **/
        parameterId?: (number | null),
        /** (optional) A parameter name or ID by which to filter measurement results. e.g. parameter=pm25 or parameter=pm25&parameter=pm10 **/
        parameter?: (Array<string> | null),
        unit?: (Array<string> | null),
        /** Coordinate pair in form lat,lng. Up to 8 decimal points of precision e.g. 38.907,-77.037 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=10000 **/
        radius?: number,
        /** Limit results by a certain country using two digit country ID. e.g. 13 **/
        countryId?: (number | null),
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        country?: (Array<string> | null),
        /** Limit results by a certain city or cities. (e.g. ?city=Chicago or ?city=Chicago&city=Boston) **/
        city?: (Array<string> | null),
        locationId?: (Array<number> | null),
        location?: (Array<string> | null),
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile e.g. ?isMobile=true **/
        isMobile?: (boolean | null),
        /** Data is the product of a previous analysis/aggregation and not raw measurements e.g. ?isAnalysis=true  **/
        isAnalysis?: (boolean | null),
        /** Name of the data source e.g. ?sourceName=Houston%20Mobile **/
        sourceName?: (Array<string> | null),
        /** Source entity type. e.g. ?entity=government **/
        entity?: (EntityTypes | null),
        /** Type of Sensor e.g. ?sensorType=reference%20grade **/
        sensorType?: (SensorTypes | null),
        /** Model Name of Sensor e.g. ?modelName=AE33 **/
        modelName?: (Array<string> | null),
        /** Manufacturer of Sensor e.g. ?manufacturer=Ecotech **/
        manufacturerName?: (Array<string> | null),
        dumpRaw?: (boolean | null),
    }): CancelablePromise<LatestResponseV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/latest',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
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
                'is_mobile': isMobile,
                'is_analysis': isAnalysis,
                'source_name': sourceName,
                'entity': entity,
                'sensor_type': sensorType,
                'model_name': modelName,
                'manufacturer_name': manufacturerName,
                'dump_raw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get location by ID
     * @returns LocationsResponseV1 Successful Response
     * @throws ApiError
     */
    public static getV1LocationsByIdV1LocationsLocationIdGet({
        locationId,
        limit,
        page,
        offset,
        sort,
    }: {
        /** The ID of the location **/
        locationId: number,
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
    }): CancelablePromise<LocationsResponseV1> {
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
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get locations
     * @returns LocationsResponseV1 Successful Response
     * @throws ApiError
     */
    public static locationsv1GetV1LocationsGet({
        limit,
        page,
        offset,
        sort,
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
        dumpRaw,
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Sort Direction e.g. sort=desc **/
        sort?: (Sort | null),
        /** (optional) A parameter ID to filter measurement results. e.g. parameter_id=2 (i.e. PM2.5) will limit measurement results to only PM2.5 measurements **/
        parameterId?: (number | null),
        /** (optional) A parameter name or ID by which to filter measurement results. e.g. parameter=pm25 or parameter=pm25&parameter=pm10 **/
        parameter?: (Array<string> | null),
        unit?: (Array<string> | null),
        /** Coordinate pair in form lat,lng. Up to 8 decimal points of precision e.g. 38.907,-77.037 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=10000 **/
        radius?: number,
        /** Limit results by a certain country using two digit country ID. e.g. 13 **/
        countryId?: (number | null),
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        country?: (Array<string> | null),
        /** Limit results by a certain city or cities. (e.g. ?city=Chicago or ?city=Chicago&city=Boston) **/
        city?: (Array<string> | null),
        locationId?: (Array<number> | null),
        location?: (Array<string> | null),
        /** Order by a field **/
        orderBy?: LocationsOrder,
        /** Location is mobile e.g. ?isMobile=true **/
        isMobile?: (boolean | null),
        /** Data is the product of a previous analysis/aggregation and not raw measurements e.g. ?isAnalysis=true  **/
        isAnalysis?: (boolean | null),
        /** Name of the data source e.g. ?sourceName=Houston%20Mobile **/
        sourceName?: (Array<string> | null),
        /** Source entity type. e.g. ?entity=government **/
        entity?: (EntityTypes | null),
        /** Type of Sensor e.g. ?sensorType=reference%20grade **/
        sensorType?: (SensorTypes | null),
        /** Model Name of Sensor e.g. ?modelName=AE33 **/
        modelName?: (Array<string> | null),
        /** Manufacturer of Sensor e.g. ?manufacturer=Ecotech **/
        manufacturerName?: (Array<string> | null),
        dumpRaw?: (boolean | null),
    }): CancelablePromise<LocationsResponseV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/locations',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
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
                'is_mobile': isMobile,
                'is_analysis': isAnalysis,
                'source_name': sourceName,
                'entity': entity,
                'sensor_type': sensorType,
                'model_name': modelName,
                'manufacturer_name': manufacturerName,
                'dump_raw': dumpRaw,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a list of measurements
     * @returns MeasurementsResponseV1 Successful Response
     * @throws ApiError
     */
    public static measurementsGetV1V1MeasurementsGet({
        format,
        dateFrom,
        dateTo,
        limit,
        page,
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
        format?: (string | null),
        /** From when? **/
        dateFrom?: (string | number | null),
        /** to when? **/
        dateTo?: (string | number | null),
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        sort?: Sort,
        hasGeo?: (boolean | null),
        /** (optional) A parameter ID to filter measurement results. e.g. parameter_id=2 (i.e. PM2.5) will limit measurement results to only PM2.5 measurements **/
        parameterId?: (number | null),
        /** (optional) A parameter name or ID by which to filter measurement results. e.g. parameter=pm25 or parameter=pm25&parameter=pm10 **/
        parameter?: (Array<string> | null),
        unit?: (Array<string> | null),
        /** Coordinate pair in form lat,lng. Up to 8 decimal points of precision e.g. 38.907,-77.037 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=10000 **/
        radius?: number,
        /** Limit results by a certain country using two digit country ID. e.g. 13 **/
        countryId?: (number | null),
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        country?: (Array<string> | null),
        /** Limit results by a certain city or cities. (e.g. ?city=Chicago or ?city=Chicago&city=Boston) **/
        city?: (Array<string> | null),
        locationId?: (Array<number> | null),
        location?: (Array<string> | null),
        orderBy?: MeasOrder,
        /** Location is mobile e.g. ?isMobile=true **/
        isMobile?: (boolean | null),
        /** Data is the product of a previous analysis/aggregation and not raw measurements e.g. ?isAnalysis=false **/
        isAnalysis?: (boolean | null),
        project?: (number | null),
        entity?: (EntityTypes | null),
        /** Filter by sensor type (i,e. reference grade, low-cost sensor) e.g. ?sensorType=reference%20grade **/
        sensorType?: (SensorTypes | null),
        valueFrom?: (number | null),
        valueTo?: (number | null),
        /** Additional fields to include in response e.g. ?include_fields=sourceName **/
        includeFields?: (string | null),
    }): CancelablePromise<MeasurementsResponseV1> {
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
                'is_mobile': isMobile,
                'is_analysis': isAnalysis,
                'project': project,
                'entity': entity,
                'sensor_type': sensorType,
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
     * Get parameters
     * Provides a list of parameters supported by the platform
     * @returns ParametersResponseV1 Successful Response
     * @throws ApiError
     */
    public static parametersGetv1V1ParametersGet({
        limit,
        page,
        offset,
        sort,
        orderBy = 'id',
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
        orderBy?: 'id' | 'name' | 'preferredUnit',
    }): CancelablePromise<ParametersResponseV1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/parameters',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Sources
     * Provides a list of sources
     * @returns SourcesResponseV1 Successful Response
     * @throws ApiError
     */
    public static sourcesV1GetV1SourcesGet({
        limit,
        page,
        offset,
        sort,
        name,
        orderBy,
    }: {
        limit?: (number | null),
        page?: (number | null),
        offset?: (number | null),
        sort?: (Sort | null),
        name?: (string | null),
        orderBy?: SourcesV1Order,
    }): CancelablePromise<SourcesResponseV1> {
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

}