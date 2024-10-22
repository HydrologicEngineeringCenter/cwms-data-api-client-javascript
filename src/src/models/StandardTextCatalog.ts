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
import type { StandardTextValue } from './StandardTextValue';
import {
    StandardTextValueFromJSON,
    StandardTextValueFromJSONTyped,
    StandardTextValueToJSON,
} from './StandardTextValue';

/**
 * 
 * @export
 * @interface StandardTextCatalog
 */
export interface StandardTextCatalog {
    /**
     * 
     * @type {Array<StandardTextValue>}
     * @memberof StandardTextCatalog
     */
    values?: Array<StandardTextValue>;
}

/**
 * Check if a given object implements the StandardTextCatalog interface.
 */
export function instanceOfStandardTextCatalog(value: object): boolean {
    return true;
}

export function StandardTextCatalogFromJSON(json: any): StandardTextCatalog {
    return StandardTextCatalogFromJSONTyped(json, false);
}

export function StandardTextCatalogFromJSONTyped(json: any, ignoreDiscriminator: boolean): StandardTextCatalog {
    if (json == null) {
        return json;
    }
    return {
        
        'values': json['values'] == null ? undefined : ((json['values'] as Array<any>).map(StandardTextValueFromJSON)),
    };
}

export function StandardTextCatalogToJSON(value?: StandardTextCatalog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'values': value['values'] == null ? undefined : ((value['values'] as Array<any>).map(StandardTextValueToJSON)),
    };
}

