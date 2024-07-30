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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PoolNameType
 */
export interface PoolNameType {
    /**
     * 
     * @type {string}
     * @memberof PoolNameType
     */
    poolName?: string;
    /**
     * 
     * @type {string}
     * @memberof PoolNameType
     */
    officeId?: string;
}

/**
 * Check if a given object implements the PoolNameType interface.
 */
export function instanceOfPoolNameType(value: object): boolean {
    return true;
}

export function PoolNameTypeFromJSON(json: any): PoolNameType {
    return PoolNameTypeFromJSONTyped(json, false);
}

export function PoolNameTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolNameType {
    if (json == null) {
        return json;
    }
    return {
        
        'poolName': json['poolName'] == null ? undefined : json['poolName'],
        'officeId': json['officeId'] == null ? undefined : json['officeId'],
    };
}

export function PoolNameTypeToJSON(value?: PoolNameType | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'poolName': value['poolName'],
        'officeId': value['officeId'],
    };
}

