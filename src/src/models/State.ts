/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A representation of a state
 * @export
 * @interface State
 */
export interface State {
    /**
     * 
     * @type {string}
     * @memberof State
     */
    stateInitial?: string;
    /**
     * 
     * @type {string}
     * @memberof State
     */
    name?: string;
}

/**
 * Check if a given object implements the State interface.
 */
export function instanceOfState(value: object): boolean {
    return true;
}

export function StateFromJSON(json: any): State {
    return StateFromJSONTyped(json, false);
}

export function StateFromJSONTyped(json: any, ignoreDiscriminator: boolean): State {
    if (json == null) {
        return json;
    }
    return {
        
        'stateInitial': json['stateInitial'] == null ? undefined : json['stateInitial'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function StateToJSON(value?: State | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stateInitial': value['stateInitial'],
        'name': value['name'],
    };
}

