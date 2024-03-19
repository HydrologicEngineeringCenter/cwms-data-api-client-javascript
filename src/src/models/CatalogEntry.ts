/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { LocationCatalogEntry } from './LocationCatalogEntry';
import {
    instanceOfLocationCatalogEntry,
    LocationCatalogEntryFromJSON,
    LocationCatalogEntryFromJSONTyped,
    LocationCatalogEntryToJSON,
} from './LocationCatalogEntry';
import type { TimeseriesCatalogEntry } from './TimeseriesCatalogEntry';
import {
    instanceOfTimeseriesCatalogEntry,
    TimeseriesCatalogEntryFromJSON,
    TimeseriesCatalogEntryFromJSONTyped,
    TimeseriesCatalogEntryToJSON,
} from './TimeseriesCatalogEntry';

/**
 * @type CatalogEntry
 * 
 * @export
 */
export type CatalogEntry = LocationCatalogEntry | TimeseriesCatalogEntry;

export function CatalogEntryFromJSON(json: any): CatalogEntry {
    return CatalogEntryFromJSONTyped(json, false);
}

export function CatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogEntry {
    if (json == null) {
        return json;
    }
    return { ...LocationCatalogEntryFromJSONTyped(json, true), ...TimeseriesCatalogEntryFromJSONTyped(json, true) };
}

export function CatalogEntryToJSON(value?: CatalogEntry | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfLocationCatalogEntry(value)) {
        return LocationCatalogEntryToJSON(value as LocationCatalogEntry);
    }
    if (instanceOfTimeseriesCatalogEntry(value)) {
        return TimeseriesCatalogEntryToJSON(value as TimeseriesCatalogEntry);
    }

    return {};
}

