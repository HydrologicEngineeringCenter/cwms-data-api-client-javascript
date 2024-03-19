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

import { mapValues } from '../runtime';
import type { LocationLevel } from './LocationLevel';
import {
    LocationLevelFromJSON,
    LocationLevelFromJSONTyped,
    LocationLevelToJSON,
} from './LocationLevel';

/**
 * 
 * @export
 * @interface LocationLevels
 */
export interface LocationLevels {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof LocationLevels
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof LocationLevels
     */
    readonly total?: number;
    /**
     * List of retrieved location levels
     * @type {Array<LocationLevel>}
     * @memberof LocationLevels
     */
    levels?: Array<LocationLevel>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof LocationLevels
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof LocationLevels
     */
    readonly pageSize?: number;
}

/**
 * Check if a given object implements the LocationLevels interface.
 */
export function instanceOfLocationLevels(value: object): boolean {
    return true;
}

export function LocationLevelsFromJSON(json: any): LocationLevels {
    return LocationLevelsFromJSONTyped(json, false);
}

export function LocationLevelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationLevels {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'levels': json['levels'] == null ? undefined : ((json['levels'] as Array<any>).map(LocationLevelFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}

export function LocationLevelsToJSON(value?: LocationLevels | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'levels': value['levels'] == null ? undefined : ((value['levels'] as Array<any>).map(LocationLevelToJSON)),
    };
}
