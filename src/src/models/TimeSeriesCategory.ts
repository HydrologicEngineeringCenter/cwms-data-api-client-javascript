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
 * A representation of a Timeseries category
 * @export
 * @interface TimeseriesCategory
 */
export interface TimeseriesCategory {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof TimeseriesCategory
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCategory
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesCategory
     */
    description?: string;
}

/**
 * Check if a given object implements the TimeseriesCategory interface.
 */
export function instanceOfTimeseriesCategory(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function TimeseriesCategoryFromJSON(json: any): TimeseriesCategory {
    return TimeseriesCategoryFromJSONTyped(json, false);
}

export function TimeseriesCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function TimeseriesCategoryToJSON(value?: TimeseriesCategory | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
    };
}

