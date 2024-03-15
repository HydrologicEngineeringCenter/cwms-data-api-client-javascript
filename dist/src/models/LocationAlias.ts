/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
    let isInstance = true;

    return isInstance;
}

export function LocationAliasFromJSON(json: any): LocationAlias {
    return LocationAliasFromJSONTyped(json, false);
}

export function LocationAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function LocationAliasToJSON(value?: LocationAlias | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

