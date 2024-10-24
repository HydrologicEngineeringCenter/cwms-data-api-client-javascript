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
/**
 * Timeseries extent information
 * @export
 * @interface Extents
 */
export interface Extents {
    /**
     * Earliest value in the timeseries
     * @type {Date}
     * @memberof Extents
     */
    earliestTime?: Date;
    /**
     * Last update in the timeseries
     * @type {Date}
     * @memberof Extents
     */
    lastUpdate?: Date;
    /**
     * Latest value in the timeseries
     * @type {Date}
     * @memberof Extents
     */
    latestTime?: Date;
    /**
     * Timeseries version to which this extent information applies
     * @type {Date}
     * @memberof Extents
     */
    versionTime?: Date;
}

/**
 * Check if a given object implements the Extents interface.
 */
export function instanceOfExtents(value: object): boolean {
    return true;
}

export function ExtentsFromJSON(json: any): Extents {
    return ExtentsFromJSONTyped(json, false);
}

export function ExtentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Extents {
    if (json == null) {
        return json;
    }
    return {
        
        'earliestTime': json['earliest-time'] == null ? undefined : (new Date(json['earliest-time'])),
        'lastUpdate': json['last-update'] == null ? undefined : (new Date(json['last-update'])),
        'latestTime': json['latest-time'] == null ? undefined : (new Date(json['latest-time'])),
        'versionTime': json['version-time'] == null ? undefined : (new Date(json['version-time'])),
    };
}

export function ExtentsToJSON(value?: Extents | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'earliest-time': value['earliestTime'] == null ? undefined : ((value['earliestTime']).toISOString()),
        'last-update': value['lastUpdate'] == null ? undefined : ((value['lastUpdate']).toISOString()),
        'latest-time': value['latestTime'] == null ? undefined : ((value['latestTime']).toISOString()),
        'version-time': value['versionTime'] == null ? undefined : ((value['versionTime']).toISOString()),
    };
}

