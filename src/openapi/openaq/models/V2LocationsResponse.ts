import { EntityTypes, SensorTypes } from "..";
import { Coordinates } from "./Coordinate";
import { V2LocationParameter } from "./V2LocationParameter";
import { V2LocationSource } from "./V2LocationSource";

export interface V2LocationsResponse {
    id: number;
    name: string;
    entity: EntityTypes;
    country: string;
    sources: V2LocationSource[];
    isMobile: boolean;
    isAnalysis: boolean;
    parameters: V2LocationParameter[];
    sensorType: SensorTypes;
    coordinates: Coordinates;
    lastUpdated: string;
    firstUpdated: string;
    measurements: number;
}