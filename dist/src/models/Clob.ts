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
 * @interface Clob
 */
export interface Clob {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Clob
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof Clob
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Clob
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Clob
     */
    value?: string;
}

/**
 * Check if a given object implements the Clob interface.
 */
export function instanceOfClob(value: object): boolean {
    if (!('officeId' in value)) return false;
    if (!('id' in value)) return false;
    return true;
}

export function ClobFromJSON(json: any): Clob {
    return ClobFromJSONTyped(json, false);
}

export function ClobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Clob {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function ClobToJSON(value?: Clob | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
        'value': value['value'],
    };
}

