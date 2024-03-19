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
 * @interface LocationAlias
 */
export interface LocationAlias {
    /**
     * 
     * @type {string}
     * @memberof LocationAlias
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationAlias
     */
    value?: string;
}

/**
 * Check if a given object implements the LocationAlias interface.
 */
export function instanceOfLocationAlias(value: object): boolean {
    return true;
}

export function LocationAliasFromJSON(json: any): LocationAlias {
    return LocationAliasFromJSONTyped(json, false);
}

export function LocationAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationAlias {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function LocationAliasToJSON(value?: LocationAlias | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'value': value['value'],
    };
}

