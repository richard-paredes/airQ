/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coordinates } from './Coordinates';
import type { CountryBase } from './CountryBase';
import type { DatetimeObject } from './DatetimeObject';
import type { EntityBase } from './EntityBase';
import type { InstrumentBase } from './InstrumentBase';
import type { LocationLicense } from './LocationLicense';
import type { ProviderBase } from './ProviderBase';
import type { SensorBase } from './SensorBase';

export type Location = {
    id: number;
    name?: (string | null);
    locality?: (string | null);
    timezone: string;
    country: CountryBase;
    owner: EntityBase;
    provider: ProviderBase;
    isMobile: boolean;
    isMonitor: boolean;
    instruments: Array<InstrumentBase>;
    sensors: Array<SensorBase>;
    coordinates: Coordinates;
    licenses?: (Array<LocationLicense> | null);
    bounds: Array<number>;
    distance?: (number | null);
    datetimeFirst?: (DatetimeObject | null);
    datetimeLast?: (DatetimeObject | null);
};
