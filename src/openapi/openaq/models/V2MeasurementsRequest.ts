import { EntityTypes, MeasOrder, SensorTypes, Sort } from "..";

export interface V2MeasurementsRequest {
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
}