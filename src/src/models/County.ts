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
 * A representation of a county
 * @export
 * @interface County
 */
export interface County {
    /**
     * 
     * @type {string}
     * @memberof County
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof County
     */
    countyId?: string;
    /**
     * 
     * @type {string}
     * @memberof County
     */
    stateInitial?: string;
}

/**
 * Check if a given object implements the County interface.
 */
export function instanceOfCounty(value: object): boolean {
    return true;
}

export function CountyFromJSON(json: any): County {
    return CountyFromJSONTyped(json, false);
}

export function CountyFromJSONTyped(json: any, ignoreDiscriminator: boolean): County {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'countyId': json['countyId'] == null ? undefined : json['countyId'],
        'stateInitial': json['stateInitial'] == null ? undefined : json['stateInitial'],
    };
}

export function CountyToJSON(value?: County | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'countyId': value['countyId'],
        'stateInitial': value['stateInitial'],
    };
}

