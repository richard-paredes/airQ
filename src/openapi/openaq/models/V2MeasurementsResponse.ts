import { EntityTypes, SensorTypes } from "..";
import { Coordinates } from "./Coordinate";
import { V2MeasurementDate } from "./V2MeasurementDate";

export interface V2MeasurementsResponse  {
    locationId: number;
    location: string;
    parameter: string;
    value: number;
    date: V2MeasurementDate;
    unit: string;
    coordinates: Coordinates;
    country: string;
    city: string;
    isMobile: boolean;
    isAnalysis: boolean;
    entity: EntityTypes,
    sensorType: SensorTypes
  }