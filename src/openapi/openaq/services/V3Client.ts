/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnualDataResponse } from '../models/AnnualDataResponse';
import type { CountriesSortFields } from '../models/CountriesSortFields';
import type { DailyDataResponse } from '../models/DailyDataResponse';
import type { HourlyDataResponse } from '../models/HourlyDataResponse';
import type { InstrumentsResponse } from '../models/InstrumentsResponse';
import type { InstrumentsSortFields } from '../models/InstrumentsSortFields';
import type { LicensesResponse } from '../models/LicensesResponse';
import type { LicensesSortFields } from '../models/LicensesSortFields';
import type { LocationFlagsResponse } from '../models/LocationFlagsResponse';
import type { LocationsSortFields } from '../models/LocationsSortFields';
import type { ManufacturersResponse } from '../models/ManufacturersResponse';
import type { ManufacturersSortFields } from '../models/ManufacturersSortFields';
import type { openaq_api__v3__models__responses__CountriesResponse } from '../models/openaq_api__v3__models__responses__CountriesResponse';
import type { openaq_api__v3__models__responses__LatestResponse } from '../models/openaq_api__v3__models__responses__LatestResponse';
import type { openaq_api__v3__models__responses__LocationsResponse } from '../models/openaq_api__v3__models__responses__LocationsResponse';
import type { openaq_api__v3__models__responses__MeasurementsResponse } from '../models/openaq_api__v3__models__responses__MeasurementsResponse';
import type { openaq_api__v3__models__responses__ParametersResponse } from '../models/openaq_api__v3__models__responses__ParametersResponse';
import type { OwnersResponse } from '../models/OwnersResponse';
import type { OwnersSortFields } from '../models/OwnersSortFields';
import type { ParametersSortFields } from '../models/ParametersSortFields';
import type { ParameterType } from '../models/ParameterType';
import type { ProvidersResponse } from '../models/ProvidersResponse';
import type { ProvidersSortFields } from '../models/ProvidersSortFields';
import type { SensorsResponse } from '../models/SensorsResponse';
import type { SortOrder } from '../models/SortOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class V3Client {

    /**
     * Get an instrument by ID
     * Provides a instrument by instrument ID
     * @returns InstrumentsResponse Successful Response
     * @throws ApiError
     */
    public static instrumentGetV3InstrumentsInstrumentsIdGet({
        instrumentsId,
    }: {
        /** Limit the results to a specific instruments id **/
        instrumentsId: number,
    }): CancelablePromise<InstrumentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/instruments/{instruments_id}',
            path: {
                'instruments_id': instrumentsId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get instruments
     * Provides a list of instruments
     * @returns InstrumentsResponse Successful Response
     * @throws ApiError
     */
    public static instrumentsGetV3InstrumentsGet({
        orderBy,
        sortOrder,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (InstrumentsSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<InstrumentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/instruments',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get instruments by manufacturer ID
     * Provides a list of instruments for a specific manufacturer
     * @returns InstrumentsResponse Successful Response
     * @throws ApiError
     */
    public static getInstrumentsByManufacturerV3ManufacturersManufacturersIdInstrumentsGet({
        manufacturersId,
    }: {
        /** Limit results to a specific manufacturer id **/
        manufacturersId: number,
    }): CancelablePromise<InstrumentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/manufacturers/{manufacturers_id}/instruments',
            path: {
                'manufacturers_id': manufacturersId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a location by ID
     * Provides a location by location ID
     * @returns openaq_api__v3__models__responses__LocationsResponse Successful Response
     * @throws ApiError
     */
    public static locationGetV3LocationsLocationsIdGet({
        locationsId,
    }: {
        /** Limit the results to a specific location by id **/
        locationsId: number,
    }): CancelablePromise<openaq_api__v3__models__responses__LocationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/locations/{locations_id}',
            path: {
                'locations_id': locationsId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get locations
     * Provides a list of locations
     * @returns openaq_api__v3__models__responses__LocationsResponse Successful Response
     * @throws ApiError
     */
    public static locationsGetV3LocationsGet({
        coordinates,
        radius,
        providersId,
        parametersId,
        limit = 100,
        page = 1,
        ownerContactsId,
        manufacturersId,
        orderBy,
        sortOrder,
        licensesId,
        monitor,
        mobile,
        instrumentsId,
        iso,
        countriesId,
        bbox,
    }: {
        /** WGS 84 Coordinate pair in form latitude,longitude. Supports up to 4 decimal points of precision, additional decimal precision will be truncated in the query e.g. 38.9074,-77.0373 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=1000 **/
        radius?: (number | null),
        /** Limit the results to a specific provider or multiple providers  with a single provider ID or a comma delimited list of IDs **/
        providersId?: (Array<number> | null),
        parametersId?: (Array<number> | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
        /** Limit the results to a specific owner by owner ID with a single owner ID or comma delimited list of IDs **/
        ownerContactsId?: (Array<number> | null),
        manufacturersId?: (Array<number> | null),
        /** The field by which to order results **/
        orderBy?: (LocationsSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        licensesId?: (Array<number> | null),
        /** Is the location considered a reference monitor? **/
        monitor?: (boolean | null),
        /** Is the location considered a mobile location? **/
        mobile?: (boolean | null),
        instrumentsId?: (Array<number> | null),
        /** Limit the results to a specific country using ISO 3166-1 alpha-2 code **/
        iso?: (string | null),
        /** Limit the results to a specific country or countries by country ID as a single country ID or a comma delimited list of IDs **/
        countriesId?: (Array<number> | null),
        /** geospatial bounding box of Min X, min Y, max X, max Y in WGS 84 coordinates. Up to 4 decimal points of precision, addtional decimal precision will be truncated to 4 decimal points precision e.g. -77.037,38.907,-77.0,39.910 **/
        bbox?: (string | null),
    }): CancelablePromise<openaq_api__v3__models__responses__LocationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/locations',
            query: {
                'coordinates': coordinates,
                'radius': radius,
                'providers_id': providersId,
                'parameters_id': parametersId,
                'limit': limit,
                'page': page,
                'owner_contacts_id': ownerContactsId,
                'manufacturers_id': manufacturersId,
                'order_by': orderBy,
                'sort_order': sortOrder,
                'licenses_id': licensesId,
                'monitor': monitor,
                'mobile': mobile,
                'instruments_id': instrumentsId,
                'iso': iso,
                'countries_id': countriesId,
                'bbox': bbox,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get an instrument by ID
     * Provides a instrument by instrument ID
     * @returns LicensesResponse Successful Response
     * @throws ApiError
     */
    public static licenseGetV3LicensesLicensesIdGet({
        licensesId,
    }: {
        /** Limit the results to a specific licenses id **/
        licensesId: number,
    }): CancelablePromise<LicensesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/licenses/{licenses_id}',
            path: {
                'licenses_id': licensesId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get licenses
     * Provides a list of licenses
     * @returns LicensesResponse Successful Response
     * @throws ApiError
     */
    public static instrumentsGetV3LicensesGet({
        orderBy,
        sortOrder,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (LicensesSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<LicensesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/licenses',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a parameter by ID
     * Provides a parameter by parameter ID
     * @returns openaq_api__v3__models__responses__ParametersResponse Successful Response
     * @throws ApiError
     */
    public static parameterGetV3ParametersParametersIdGet({
        parametersId,
    }: {
        /** Limit the results to a specific parameters id **/
        parametersId: number,
    }): CancelablePromise<openaq_api__v3__models__responses__ParametersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/parameters/{parameters_id}',
            path: {
                'parameters_id': parametersId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a parameters
     * Provides a list of parameters
     * @returns openaq_api__v3__models__responses__ParametersResponse Successful Response
     * @throws ApiError
     */
    public static parametersGetV3ParametersGet({
        orderBy,
        sortOrder,
        parameterType,
        coordinates,
        radius,
        bbox,
        iso,
        countriesId,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (ParametersSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Limit the results to a specific parameters type **/
        parameterType?: (ParameterType | null),
        /** WGS 84 Coordinate pair in form latitude,longitude. Supports up to 4 decimal points of precision, additional decimal precision will be truncated in the query e.g. 38.9074,-77.0373 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=1000 **/
        radius?: (number | null),
        /** geospatial bounding box of Min X, min Y, max X, max Y in WGS 84 coordinates. Up to 4 decimal points of precision, addtional decimal precision will be truncated to 4 decimal points precision e.g. -77.037,38.907,-77.0,39.910 **/
        bbox?: (string | null),
        /** Limit the results to a specific country using ISO 3166-1 alpha-2 code **/
        iso?: (string | null),
        /** Limit the results to a specific country or countries by country ID as a single country ID or a comma delimited list of IDs **/
        countriesId?: (Array<number> | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<openaq_api__v3__models__responses__ParametersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/parameters',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'parameter_type': parameterType,
                'coordinates': coordinates,
                'radius': radius,
                'bbox': bbox,
                'iso': iso,
                'countries_id': countriesId,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a country by ID
     * Provides a country by country ID
     * @returns openaq_api__v3__models__responses__CountriesResponse Successful Response
     * @throws ApiError
     */
    public static countryGetV3CountriesCountriesIdGet({
        countriesId,
    }: {
        countriesId: number,
    }): CancelablePromise<openaq_api__v3__models__responses__CountriesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/countries/{countries_id}',
            path: {
                'countries_id': countriesId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get countries
     * Provides a list of countries
     * @returns openaq_api__v3__models__responses__CountriesResponse Successful Response
     * @throws ApiError
     */
    public static countriesGetV3CountriesGet({
        orderBy,
        sortOrder,
        providersId,
        parametersId,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (CountriesSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Limit the results to a specific provider or multiple providers  with a single provider ID or a comma delimited list of IDs **/
        providersId?: (Array<number> | null),
        parametersId?: (Array<number> | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<openaq_api__v3__models__responses__CountriesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/countries',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'providers_id': providersId,
                'parameters_id': parametersId,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a manufacturer by ID
     * Provides a manufacturer by manufacturer ID
     * @returns ManufacturersResponse Successful Response
     * @throws ApiError
     */
    public static manufacturerGetV3ManufacturersManufacturersIdGet({
        manufacturersId,
    }: {
        /** Limit the results to a specific manufacturers id **/
        manufacturersId: number,
    }): CancelablePromise<ManufacturersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/manufacturers/{manufacturers_id}',
            path: {
                'manufacturers_id': manufacturersId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get manufacturers
     * Provides a list of manufacturers
     * @returns ManufacturersResponse Successful Response
     * @throws ApiError
     */
    public static manufacturersGetV3ManufacturersGet({
        orderBy,
        sortOrder,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (ManufacturersSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<ManufacturersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/manufacturers',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements by sensor ID
     * Provides a list of measurements by sensor ID
     * @returns openaq_api__v3__models__responses__MeasurementsResponse Successful Response
     * @throws ApiError
     */
    public static sensorMeasurementsGetV3SensorsSensorsIdMeasurementsGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<openaq_api__v3__models__responses__MeasurementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/measurements',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated to hours by sensor ID
     * Provides a list of measurements by sensor ID
     * @returns openaq_api__v3__models__responses__MeasurementsResponse Successful Response
     * @throws ApiError
     */
    public static sensorMeasurementsAggregatedGetHourlyV3SensorsSensorsIdMeasurementsHourlyGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<openaq_api__v3__models__responses__MeasurementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/measurements/hourly',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated to days by sensor ID
     * Provides a list of measurements by sensor ID
     * @returns openaq_api__v3__models__responses__MeasurementsResponse Successful Response
     * @throws ApiError
     */
    public static sensorMeasurementsAggregatedGetDailyV3SensorsSensorsIdMeasurementsDailyGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<openaq_api__v3__models__responses__MeasurementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/measurements/daily',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated to hour by sensor ID
     * Provides a list of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsGetV3SensorsSensorsIdHoursGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to day by sensor ID
     * Provides a list of daily summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToDayGetV3SensorsSensorsIdHoursDailyGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/daily',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to month by sensor ID
     * Provides a list of daily summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToMonthGetV3SensorsSensorsIdHoursMonthlyGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/monthly',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to year by sensor ID
     * Provides a list of yearly summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToYearGetV3SensorsSensorsIdHoursYearlyGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/yearly',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to day of week by sensor ID
     * Provides a list of yearly summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToHodGetV3SensorsSensorsIdHoursHourofdayGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/hourofday',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to day of week by sensor ID
     * Provides a list of yearly summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToDowGetV3SensorsSensorsIdHoursDayofweekGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/dayofweek',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to day of week by sensor ID
     * Provides a list of yearly summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorHourlyMeasurementsAggregateToMoyGetV3SensorsSensorsIdHoursMonthofyearGet({
        sensorsId,
        datetimeTo,
        datetimeFrom,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        datetimeTo?: (string | null),
        /** From when? **/
        datetimeFrom?: (string | null),
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/hours/monthofyear',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'datetime_to': datetimeTo,
                'datetime_from': datetimeFrom,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from day to day of week by sensor ID
     * Provides a list of yearly summaries of dayly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorDailyMeasurementsAggregateToDowGetV3SensorsSensorsIdDaysDayofweekGet({
        sensorsId,
        dateTo,
        dateFrom,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/days/dayofweek',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from day to day of week by sensor ID
     * Provides a list of yearly summaries of daily data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorDailyMeasurementsAggregateToMoyGetV3SensorsSensorsIdDaysMonthofyearGet({
        sensorsId,
        dateTo,
        dateFrom,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/days/monthofyear',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated to day by sensor ID
     * Provides a list of daily data by sensor ID
     * @returns DailyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorDailyGetV3SensorsSensorsIdDaysGet({
        sensorsId,
        dateTo,
        dateFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<DailyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/days',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from hour to month by sensor ID
     * Provides a list of daily summaries of hourly data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorDailyAggregateToMonthGetV3SensorsSensorsIdDaysMonthlyGet({
        sensorsId,
        dateTo,
        dateFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/days/monthly',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated from day to year by sensor ID
     * Provides a list of yearly summaries of daily data by sensor ID
     * @returns HourlyDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorDailyAggregateToYearGetV3SensorsSensorsIdDaysYearlyGet({
        sensorsId,
        dateTo,
        dateFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<HourlyDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/days/yearly',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get measurements aggregated to year by sensor ID
     * Provides a list of annual data by sensor ID
     * @returns AnnualDataResponse Successful Response
     * @throws ApiError
     */
    public static sensorYearlyGetV3SensorsSensorsIdYearsGet({
        sensorsId,
        dateTo,
        dateFrom,
        limit = 100,
        page = 1,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
        /** To when? **/
        dateTo?: (string | null),
        /** From when? **/
        dateFrom?: (string | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<AnnualDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}/years',
            path: {
                'sensors_id': sensorsId,
            },
            query: {
                'date_to': dateTo,
                'date_from': dateFrom,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a owner by ID
     * Provides a owner by owner ID
     * @returns OwnersResponse Successful Response
     * @throws ApiError
     */
    public static ownerGetV3OwnersOwnersIdGet({
        ownersId,
    }: {
        /** Limit the results to a specific owner by id **/
        ownersId: number,
    }): CancelablePromise<OwnersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/owners/{owners_id}',
            path: {
                'owners_id': ownersId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get owners
     * Provides a list of owners
     * @returns OwnersResponse Successful Response
     * @throws ApiError
     */
    public static ownersGetV3OwnersGet({
        orderBy,
        sortOrder,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (OwnersSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<OwnersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/owners',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a provider by ID
     * Provides a provider by provider ID
     * @returns ProvidersResponse Successful Response
     * @throws ApiError
     */
    public static providerGetV3ProvidersProvidersIdGet({
        providersId,
    }: {
        /** Limit the results to a specific provider by id **/
        providersId: number,
    }): CancelablePromise<ProvidersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/providers/{providers_id}',
            path: {
                'providers_id': providersId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get providers
     * Provides a list of providers
     * @returns ProvidersResponse Successful Response
     * @throws ApiError
     */
    public static providersGetV3ProvidersGet({
        orderBy,
        sortOrder,
        parametersId,
        monitor,
        iso,
        countriesId,
        bbox,
        coordinates,
        radius,
        limit = 100,
        page = 1,
    }: {
        /** The field by which to order results **/
        orderBy?: (ProvidersSortFields | null),
        /** Sort results ascending or descending. Default ASC **/
        sortOrder?: (SortOrder | null),
        parametersId?: (Array<number> | null),
        /** Is the location considered a reference monitor? **/
        monitor?: (boolean | null),
        /** Limit the results to a specific country using ISO 3166-1 alpha-2 code **/
        iso?: (string | null),
        /** Limit the results to a specific country or countries by country ID as a single country ID or a comma delimited list of IDs **/
        countriesId?: (Array<number> | null),
        /** geospatial bounding box of Min X, min Y, max X, max Y in WGS 84 coordinates. Up to 4 decimal points of precision, addtional decimal precision will be truncated to 4 decimal points precision e.g. -77.037,38.907,-77.0,39.910 **/
        bbox?: (string | null),
        /** WGS 84 Coordinate pair in form latitude,longitude. Supports up to 4 decimal points of precision, additional decimal precision will be truncated in the query e.g. 38.9074,-77.0373 **/
        coordinates?: (string | null),
        /** Search radius from coordinates as center in meters. Maximum of 25,000 (25km) defaults to 1000 (1km) e.g. radius=1000 **/
        radius?: (number | null),
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
    }): CancelablePromise<ProvidersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/providers',
            query: {
                'order_by': orderBy,
                'sort_order': sortOrder,
                'parameters_id': parametersId,
                'monitor': monitor,
                'iso': iso,
                'countries_id': countriesId,
                'bbox': bbox,
                'coordinates': coordinates,
                'radius': radius,
                'limit': limit,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get sensors by location ID
     * Provides a list of sensors by location ID
     * @returns SensorsResponse Successful Response
     * @throws ApiError
     */
    public static sensorsGetV3LocationsLocationsIdSensorsGet({
        locationsId,
    }: {
        /** Limit the results to a specific sensors id **/
        locationsId: number,
    }): CancelablePromise<SensorsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/locations/{locations_id}/sensors',
            path: {
                'locations_id': locationsId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a sensor by ID
     * Provides a sensor by sensor ID
     * @returns SensorsResponse Successful Response
     * @throws ApiError
     */
    public static sensorGetV3SensorsSensorsIdGet({
        sensorsId,
    }: {
        /** Limit the results to a specific sensors id **/
        sensorsId: number,
    }): CancelablePromise<SensorsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensors_id}',
            path: {
                'sensors_id': sensorsId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Parameters Latest Get
     * @returns openaq_api__v3__models__responses__LatestResponse Successful Response
     * @throws ApiError
     */
    public static parametersLatestGetV3ParametersParametersIdLatestGet({
        parametersId,
        limit = 100,
        page = 1,
        datetimeMin,
    }: {
        /** Limit the results to a specific parameters id **/
        parametersId: number,
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
        /** Minimum datetime **/
        datetimeMin?: (string | null),
    }): CancelablePromise<openaq_api__v3__models__responses__LatestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/parameters/{parameters_id}/latest',
            path: {
                'parameters_id': parametersId,
            },
            query: {
                'limit': limit,
                'page': page,
                'datetime_min': datetimeMin,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get a location's latest measurements
     * Providers a location's latest measurement values
     * @returns openaq_api__v3__models__responses__LatestResponse Successful Response
     * @throws ApiError
     */
    public static locationLatestGetV3LocationsLocationsIdLatestGet({
        locationsId,
        limit = 100,
        page = 1,
        datetimeMin,
    }: {
        /** Limit the results to a specific location by id **/
        locationsId: number,
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
        /** Minimum datetime **/
        datetimeMin?: (string | null),
    }): CancelablePromise<openaq_api__v3__models__responses__LatestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/locations/{locations_id}/latest',
            path: {
                'locations_id': locationsId,
            },
            query: {
                'limit': limit,
                'page': page,
                'datetime_min': datetimeMin,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get flags by location ID
     * Provides a list of flags by location ID
     * @returns LocationFlagsResponse Successful Response
     * @throws ApiError
     */
    public static locationFlagsGetV3LocationsLocationsIdFlagsGet({
        locationsId,
        limit = 100,
        page = 1,
        datetimeFrom,
        datetimeTo,
    }: {
        /** Limit the results to a specific locations **/
        locationsId: number,
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
        /** To when? **/
        datetimeFrom?: (string | null),
        /** To when? **/
        datetimeTo?: (string | null),
    }): CancelablePromise<LocationFlagsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/locations/{locations_id}/flags',
            path: {
                'locations_id': locationsId,
            },
            query: {
                'limit': limit,
                'page': page,
                'datetime_from': datetimeFrom,
                'datetime_to': datetimeTo,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get flags by sensor ID
     * Provides a list of flags by sensor ID
     * @returns LocationFlagsResponse Successful Response
     * @throws ApiError
     */
    public static sensorFlagsGetV3SensorsSensorIdFlagsGet({
        sensorId,
        limit = 100,
        page = 1,
        datetimeFrom,
        datetimeTo,
    }: {
        /** Limit the results to a specific sensor **/
        sensorId: number,
        /** Change the number of results returned.
         * e.g. limit=100 will return up to 100 results **/
        limit?: number,
        /** Paginate through results. e.g. page=1 will return first page of results **/
        page?: number,
        /** To when? **/
        datetimeFrom?: (string | null),
        /** To when? **/
        datetimeTo?: (string | null),
    }): CancelablePromise<LocationFlagsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/sensors/{sensor_id}/flags',
            path: {
                'sensor_id': sensorId,
            },
            query: {
                'limit': limit,
                'page': page,
                'datetime_from': datetimeFrom,
                'datetime_to': datetimeTo,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}