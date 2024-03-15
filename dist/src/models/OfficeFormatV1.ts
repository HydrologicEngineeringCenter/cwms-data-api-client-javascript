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
import type { OfficesFMT } from './OfficesFMT';
import {
    OfficesFMTFromJSON,
    OfficesFMTFromJSONTyped,
    OfficesFMTToJSON,
} from './OfficesFMT';

/**
 * 
 * @export
 * @interface OfficeFormatV1
 */
export interface OfficeFormatV1 {
    /**
     * 
     * @type {OfficesFMT}
     * @memberof OfficeFormatV1
     */
    offices?: OfficesFMT;
}

/**
 * Check if a given object implements the OfficeFormatV1 interface.
 */
export function instanceOfOfficeFormatV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OfficeFormatV1FromJSON(json: any): OfficeFormatV1 {
    return OfficeFormatV1FromJSONTyped(json, false);
}

export function OfficeFormatV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficeFormatV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offices': !exists(json, 'offices') ? undefined : OfficesFMTFromJSON(json['offices']),
    };
}

export function OfficeFormatV1ToJSON(value?: OfficeFormatV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offices': OfficesFMTToJSON(value.offices),
    };
}

