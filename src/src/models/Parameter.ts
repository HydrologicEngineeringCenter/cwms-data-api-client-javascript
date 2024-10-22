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
 * 
 * @export
 * @interface Parameter
 */
export interface Parameter {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Parameter
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    baseParameter?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    subParameter?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    subParameterDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    dbUnitId?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    unitLongName?: string;
    /**
     * 
     * @type {string}
     * @memberof Parameter
     */
    unitDescription?: string;
}

/**
 * Check if a given object implements the Parameter interface.
 */
export function instanceOfParameter(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function ParameterFromJSON(json: any): Parameter {
    return ParameterFromJSONTyped(json, false);
}

export function ParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Parameter {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'name': json['name'] == null ? undefined : json['name'],
        'baseParameter': json['base-parameter'] == null ? undefined : json['base-parameter'],
        'subParameter': json['sub-parameter'] == null ? undefined : json['sub-parameter'],
        'subParameterDescription': json['sub-parameter-description'] == null ? undefined : json['sub-parameter-description'],
        'dbUnitId': json['db-unit-id'] == null ? undefined : json['db-unit-id'],
        'unitLongName': json['unit-long-name'] == null ? undefined : json['unit-long-name'],
        'unitDescription': json['unit-description'] == null ? undefined : json['unit-description'],
    };
}

export function ParameterToJSON(value?: Parameter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'name': value['name'],
        'base-parameter': value['baseParameter'],
        'sub-parameter': value['subParameter'],
        'sub-parameter-description': value['subParameterDescription'],
        'db-unit-id': value['dbUnitId'],
        'unit-long-name': value['unitLongName'],
        'unit-description': value['unitDescription'],
    };
}

