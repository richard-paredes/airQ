/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { CitiesOrder } from './models/CitiesOrder';
export type { CitiesRow } from './models/CitiesRow';
export type { CountriesOrder } from './models/CountriesOrder';
export type { CountriesRow } from './models/CountriesRow';
export type { EntityTypes } from './models/EntityTypes';
export type { HTTPValidationError } from './models/HTTPValidationError';
export type { LocationsOrder } from './models/LocationsOrder';
export type { MeasOrder } from './models/MeasOrder';
export type { Meta } from './models/Meta';
export type { OpenAQCitiesResult } from './models/OpenAQCitiesResult';
export type { OpenAQCountriesResult } from './models/OpenAQCountriesResult';
export type { OpenAQParametersResult } from './models/OpenAQParametersResult';
export type { OpenAQProjectsResult } from './models/OpenAQProjectsResult';
export type { OpenAQResult } from './models/OpenAQResult';
export type { ParametersRow } from './models/ParametersRow';
export type { ProjectParameterDetails } from './models/ProjectParameterDetails';
export type { ProjectsOrder } from './models/ProjectsOrder';
export type { ProjectsRow } from './models/ProjectsRow';
export type { SensorTypes } from './models/SensorTypes';
export type { Sort } from './models/Sort';
export type { SourcesOrder } from './models/SourcesOrder';
export type { SourcesV1Order } from './models/SourcesV1Order';
export type { Spatial } from './models/Spatial';
export type { Temporal } from './models/Temporal';
export type { TileJSON } from './models/TileJSON';
export type { ValidationError } from './models/ValidationError';
export type { V2LocationsRequest } from './models/V2LocationsRequest';
export type { V2MeasurementsRequest } from './models/V2MeasurementsRequest';

export { DefaultClient } from './services/DefaultClient';
export { V1Client } from './services/V1Client';
export { V2Client } from './services/V2Client';
