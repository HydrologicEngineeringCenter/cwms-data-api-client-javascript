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
import type { Office } from './Office';
import {
    OfficeFromJSON,
    OfficeFromJSONTyped,
    OfficeToJSON,
} from './Office';

/**
 * 
 * @export
 * @interface OfficesFMT
 */
export interface OfficesFMT {
    /**
     * 
     * @type {Array<Office>}
     * @memberof OfficesFMT
     */
    offices?: Array<Office>;
}

/**
 * Check if a given object implements the OfficesFMT interface.
 */
export function instanceOfOfficesFMT(value: object): boolean {
    return true;
}

export function OfficesFMTFromJSON(json: any): OfficesFMT {
    return OfficesFMTFromJSONTyped(json, false);
}

export function OfficesFMTFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficesFMT {
    if (json == null) {
        return json;
    }
    return {
        
        'offices': json['offices'] == null ? undefined : ((json['offices'] as Array<any>).map(OfficeFromJSON)),
    };
}

export function OfficesFMTToJSON(value?: OfficesFMT | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'offices': value['offices'] == null ? undefined : ((value['offices'] as Array<any>).map(OfficeToJSON)),
    };
}

