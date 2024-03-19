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
import type { Stream } from './Stream';
import {
    StreamFromJSON,
    StreamFromJSONTyped,
    StreamToJSON,
} from './Stream';

/**
 * 
 * @export
 * @interface Basin
 */
export interface Basin {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Basin
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof Basin
     */
    basinName?: string;
    /**
     * 
     * @type {Stream}
     * @memberof Basin
     */
    primaryStream?: Stream;
    /**
     * 
     * @type {number}
     * @memberof Basin
     */
    sortOrder?: number;
    /**
     * 
     * @type {number}
     * @memberof Basin
     */
    basinArea?: number;
    /**
     * 
     * @type {number}
     * @memberof Basin
     */
    contributingArea?: number;
    /**
     * 
     * @type {string}
     * @memberof Basin
     */
    parentBasinId?: string;
}

/**
 * Check if a given object implements the Basin interface.
 */
export function instanceOfBasin(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function BasinFromJSON(json: any): Basin {
    return BasinFromJSONTyped(json, false);
}

export function BasinFromJSONTyped(json: any, ignoreDiscriminator: boolean): Basin {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'basinName': json['basin-name'] == null ? undefined : json['basin-name'],
        'primaryStream': json['primary-stream'] == null ? undefined : StreamFromJSON(json['primary-stream']),
        'sortOrder': json['sort-order'] == null ? undefined : json['sort-order'],
        'basinArea': json['basin-area'] == null ? undefined : json['basin-area'],
        'contributingArea': json['contributing-area'] == null ? undefined : json['contributing-area'],
        'parentBasinId': json['parent-basin-id'] == null ? undefined : json['parent-basin-id'],
    };
}

export function BasinToJSON(value?: Basin | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'basin-name': value['basinName'],
        'primary-stream': StreamToJSON(value['primaryStream']),
        'sort-order': value['sortOrder'],
        'basin-area': value['basinArea'],
        'contributing-area': value['contributingArea'],
        'parent-basin-id': value['parentBasinId'],
    };
}

