import { EntityTypes, LocationsOrder, SensorTypes, Sort } from "..";

export interface V2LocationsRequest {
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
}