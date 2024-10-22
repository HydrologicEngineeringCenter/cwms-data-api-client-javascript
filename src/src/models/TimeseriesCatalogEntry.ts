/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Extents } from './Extents';
import {
    ExtentsFromJSON,
    ExtentsFromJSONTyped,
    ExtentsToJSON,
} from './Extents';

/**
 * 
 * @export
 * @interface TimeseriesCatalogEntry
 */
export interface TimeseriesCatalogEntry {
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    units?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    interval?: string;
    /**
     * Offset from top of interval
     * @type {number}
     * @memberof TimeseriesCatalogEntry
     */
    intervalOffset?: number;
    /**
     * Only on 21.1.1 Database. The timezone the Interval Offset is from.
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    timeZone?: string;
    /**
     * 
     * @type {Array<Extents>}
     * @memberof TimeseriesCatalogEntry
     */
    extents?: Array<Extents>;
}

/**
 * Check if a given object implements the TimeseriesCatalogEntry interface.
 */
export function instanceOfTimeseriesCatalogEntry(value: object): boolean {
    return true;
}

export function TimeseriesCatalogEntryFromJSON(json: any): TimeseriesCatalogEntry {
    return TimeseriesCatalogEntryFromJSONTyped(json, false);
}

export function TimeseriesCatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesCatalogEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'office': json['office'] == null ? undefined : json['office'],
        'name': json['name'] == null ? undefined : json['name'],
        'units': json['units'] == null ? undefined : json['units'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'intervalOffset': json['interval-offset'] == null ? undefined : json['interval-offset'],
        'timeZone': json['time-zone'] == null ? undefined : json['time-zone'],
        'extents': json['extents'] == null ? undefined : ((json['extents'] as Array<any>).map(ExtentsFromJSON)),
    };
}

export function TimeseriesCatalogEntryToJSON(value?: TimeseriesCatalogEntry | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office': value['office'],
        'name': value['name'],
        'units': value['units'],
        'interval': value['interval'],
        'interval-offset': value['intervalOffset'],
        'time-zone': value['timeZone'],
        'extents': value['extents'] == null ? undefined : ((value['extents'] as Array<any>).map(ExtentsToJSON)),
    };
}

