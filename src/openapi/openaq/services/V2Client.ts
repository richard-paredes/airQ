/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AveragesResponse } from '../models/AveragesResponse';
import type { Body_latest_get_v2_latest_get } from '../models/Body_latest_get_v2_latest_get';
import type { CitiesOrder } from '../models/CitiesOrder';
import type { CitiesResponse } from '../models/CitiesResponse';
import type { CountriesOrder } from '../models/CountriesOrder';
import type { EntityTypes } from '../models/EntityTypes';
import type { LocationsOrder } from '../models/LocationsOrder';
import type { MeasOrder } from '../models/MeasOrder';
import type { openaq_api__models__responses__CountriesResponse } from '../models/openaq_api__models__responses__CountriesResponse';
import type { openaq_api__models__responses__LatestResponse } from '../models/openaq_api__models__responses__LatestResponse';
import type { openaq_api__models__responses__LocationsResponse } from '../models/openaq_api__models__responses__LocationsResponse';
import type { openaq_api__models__responses__MeasurementsResponse } from '../models/openaq_api__models__responses__MeasurementsResponse';
import type { openaq_api__models__responses__ParametersResponse } from '../models/openaq_api__models__responses__ParametersResponse';
import type { PeriodNames } from '../models/PeriodNames';
import type { ProjectsOrder } from '../models/ProjectsOrder';
import type { ProjectsResponse } from '../models/ProjectsResponse';
import type { SensorTypes } from '../models/SensorTypes';
import type { Sort } from '../models/Sort';
import type { SourcesOrder } from '../models/SourcesOrder';
import type { SourcesResponse } from '../models/SourcesResponse';
import type { SpatialTypes } from '../models/SpatialTypes';
import type { SummaryResponse } from '../models/SummaryResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class V2Client {

    /**
     * Get averaged values
     * @returns AveragesResponse Successful Response
     * @throws ApiError
     */
    public static averagesV2GetV2AveragesGet({
        temporal,
        parametersId,
        dateTo,
        dateFrom,
        locationsId = 70084,
        spatial,
        limit = 100,
        page = 1,
    }: {
        /** Period to aggregate. month, day, hour **/
        temporal?: (PeriodNames | null),
        /** What measurand would you like? **/
        parametersId?: (number | null),
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
        /** Limit the results to a specific location by id **/
        locationsId?: number,
        /** Define how you want to aggregate in space **/
        spatial?: (SpatialTypes | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<AveragesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/averages',
            query: {
                'temporal': temporal,
                'parameters_id': parametersId,
                'date_to': dateTo,
                'date_from': dateFrom,
                'locations_id': locationsId,
                'spatial': spatial,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get cities
     * Provides a list of cities supported by the platform
     * @returns CitiesResponse Successful Response
     * @throws ApiError
     */
    public static citiesGetV2CitiesGet({
        limit,
        page,
        offset,
        sort,
        countryId,
        country,
        city,
        orderBy,
        entity,
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
        /** Limit results by a certain country using two digit country ID. e.g. 13 **/
        countryId?: (number | null),
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        country?: (Array<string> | null),
        /** Limit results by a certain city or cities. (e.g. ?city=Chicago or ?city=Chicago&city=Boston) **/
        city?: (Array<string> | null),
        /** Order by a field e.g. ?order_by=city **/
        orderBy?: CitiesOrder,
        entity?: (string | null),
    }): CancelablePromise<CitiesResponse> {
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
     * Get country by ID
     * Provides a single country by country ID
     * @returns openaq_api__models__responses__CountriesResponse Successful Response
     * @throws ApiError
     */
    public static countriesByPathV2CountriesCountryIdGet({
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
            url: '/v2/countries/{country_id}',
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
     * Provides a list of countries
     * @returns openaq_api__models__responses__CountriesResponse Successful Response
     * @throws ApiError
     */
    public static countriesGetV2CountriesGet({
        limit = 100,
        page,
        offset,
        sort,
        countryId,
        orderBy,
        requestBody,
    }: {
        limit?: number,
        page?: (number | null),
        offset?: (number | null),
        sort?: (Sort | null),
        countryId?: (number | null),
        orderBy?: CountriesOrder,
        requestBody?: (Array<string> | null),
    }): CancelablePromise<openaq_api__models__responses__CountriesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/countries',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'country_id': countryId,
                'order_by': orderBy,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a location by ID
     * Provides a location by location ID
     * @returns openaq_api__models__responses__LocationsResponse Successful Response
     * @throws ApiError
     */
    public static getV2LocationByIdV2LocationsLocationIdGet({
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
    }): CancelablePromise<openaq_api__models__responses__LocationsResponse> {
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
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get locations
     * Provides a list of locations
     * @returns openaq_api__models__responses__LocationsResponse Successful Response
     * @throws ApiError
     */
    public static locationsGetV2LocationsGet({
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
    }): CancelablePromise<openaq_api__models__responses__LocationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/locations',
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
     * Get latest measurements by location ID
     * Provides latest measurements for a locations by location ID
     * @returns openaq_api__models__responses__LatestResponse Successful Response
     * @throws ApiError
     */
    public static getV2LatestByIdV2LatestLocationIdGet({
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
    }): CancelablePromise<openaq_api__models__responses__LatestResponse> {
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
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get latest measurements
     * Provides a list of locations with latest measurements
     * @returns openaq_api__models__responses__LatestResponse Successful Response
     * @throws ApiError
     */
    public static latestGetV2LatestGet({
        limit,
        page,
        offset,
        sort,
        parameterId,
        coordinates,
        radius = 1000,
        countryId,
        orderBy,
        isMobile,
        isAnalysis,
        entity,
        sensorType,
        dumpRaw,
        requestBody,
    }: {
        limit?: (number | null),
        page?: (number | null),
        offset?: (number | null),
        sort?: (Sort | null),
        parameterId?: (number | null),
        coordinates?: (string | null),
        radius?: number,
        countryId?: (number | null),
        orderBy?: LocationsOrder,
        isMobile?: (boolean | null),
        isAnalysis?: (boolean | null),
        entity?: (EntityTypes | null),
        sensorType?: (SensorTypes | null),
        dumpRaw?: (boolean | null),
        requestBody?: Body_latest_get_v2_latest_get,
    }): CancelablePromise<openaq_api__models__responses__LatestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/latest',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'parameter_id': parameterId,
                'coordinates': coordinates,
                'radius': radius,
                'country_id': countryId,
                'order_by': orderBy,
                'is_mobile': isMobile,
                'is_analysis': isAnalysis,
                'entity': entity,
                'sensor_type': sensorType,
                'dump_raw': dumpRaw,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements
     * @returns openaq_api__models__responses__MeasurementsResponse Successful Response
     * @throws ApiError
     */
    public static measurementsGetV2MeasurementsGet({
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
    }): CancelablePromise<openaq_api__models__responses__MeasurementsResponse> {
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
     * @returns openaq_api__models__responses__ParametersResponse Successful Response
     * @throws ApiError
     */
    public static parametersGetV2ParametersGet({
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
    }): CancelablePromise<openaq_api__models__responses__ParametersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/parameters',
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
     * Project by ID
     * Provides a project by project ID
     * @returns ProjectsResponse Successful Response
     * @throws ApiError
     */
    public static projectsGetV2ProjectsProjectIdGet({
        projectId,
    }: {
        projectId: number,
    }): CancelablePromise<ProjectsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Projects
     * Provides a list of projects
     * @returns ProjectsResponse Successful Response
     * @throws ApiError
     */
    public static projectsGetV2ProjectsGet({
        countryId,
        limit,
        page,
        offset,
        requestBody,
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
        countryId: (number | null),
        limit: (number | null),
        page: (number | null),
        offset: (number | null),
        requestBody: (Array<string> | null),
        /** Limit results by a certain country using two digit country ID. e.g. 13 **/
        sort?: (Sort | null),
        /** Limit results by a certain country using two letter country code. e.g. ?country=US or ?country=US&country=MX **/
        parameterId?: (number | null),
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        parameter?: (Array<string> | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        unit?: (Array<string> | null),
        projectId?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        project?: (Array<string> | null),
        /** (optional) A parameter ID to filter measurement results. e.g. parameter_id=2 (i.e. PM2.5) will limit measurement results to only PM2.5 measurements **/
        orderBy?: ProjectsOrder,
        /** (optional) A parameter name or ID by which to filter measurement results. e.g. parameter=pm25 or parameter=pm25&parameter=pm10 **/
        isMobile?: (boolean | null),
        isAnalysis?: (boolean | null),
        entity?: (string | null),
        sensorType?: (string | null),
        sourceName?: (Array<string> | null),
    }): CancelablePromise<ProjectsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/projects',
            query: {
                'country_id': countryId,
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
                'is_mobile': isMobile,
                'is_analysis': isAnalysis,
                'entity': entity,
                'sensor_type': sensorType,
                'source_name': sourceName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Sources
     * Provides a list of sources
     * @returns SourcesResponse Successful Response
     * @throws ApiError
     */
    public static sourcesGetV2SourcesGet({
        limit,
        page,
        offset,
        sort,
        sourceName,
        sourceId,
        sourceSlug,
        orderBy,
    }: {
        /** Change the number of results returned. e.g. limit=1000 will return up to 1000 results **/
        limit?: (number | null),
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: (number | null),
        offset?: (number | null),
        /** Define sort order. e.g. ?sort=asc **/
        sort?: (Sort | null),
        sourceName?: (Array<string> | null),
        sourceId?: (Array<number> | null),
        sourceSlug?: (Array<string> | null),
        /** Field by which to order the results e.g. ?order_by=sourceName or ?order_by=firstUpdated **/
        orderBy?: SourcesOrder,
    }): CancelablePromise<SourcesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/sources',
            query: {
                'limit': limit,
                'page': page,
                'offset': offset,
                'sort': sort,
                'source_name': sourceName,
                'source_id': sourceId,
                'source_slug': sourceSlug,
                'order_by': orderBy,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Source Readme
     * Provides a readme for a given source by the source slug
     * @returns string Successful Response
     * @throws ApiError
     */
    public static readmeGetV2SourcesReadmeSlugGet({
        slug,
    }: {
        slug: string,
    }): CancelablePromise<string> {
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
     * Platform Summary
     * Provides a summary of platform data
     * @returns SummaryResponse Successful Response
     * @throws ApiError
     */
    public static summaryGetV2SummaryGet(): CancelablePromise<SummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/summary',
        });
    }

}