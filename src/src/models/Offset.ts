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
/**
 * 
 * @export
 * @interface Offset
 */
export interface Offset {
    /**
     * 
     * @type {boolean}
     * @memberof Offset
     */
    estimate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Offset
     */
    toDatum?: string;
    /**
     * 
     * @type {number}
     * @memberof Offset
     */
    value?: number;
}

/**
 * Check if a given object implements the Offset interface.
 */
export function instanceOfOffset(value: object): boolean {
    return true;
}

export function OffsetFromJSON(json: any): Offset {
    return OffsetFromJSONTyped(json, false);
}

export function OffsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offset {
    if (json == null) {
        return json;
    }
    return {
        
        'estimate': json['estimate'] == null ? undefined : json['estimate'],
        'toDatum': json['toDatum'] == null ? undefined : json['toDatum'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function OffsetToJSON(value?: Offset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'estimate': value['estimate'],
        'toDatum': value['toDatum'],
        'value': value['value'],
    };
}
