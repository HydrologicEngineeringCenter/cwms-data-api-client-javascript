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
 * @interface SpecifiedLevel
 */
export interface SpecifiedLevel {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof SpecifiedLevel
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof SpecifiedLevel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SpecifiedLevel
     */
    description?: string;
}

/**
 * Check if a given object implements the SpecifiedLevel interface.
 */
export function instanceOfSpecifiedLevel(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function SpecifiedLevelFromJSON(json: any): SpecifiedLevel {
    return SpecifiedLevelFromJSONTyped(json, false);
}

export function SpecifiedLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecifiedLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function SpecifiedLevelToJSON(value?: SpecifiedLevel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
    };
}
