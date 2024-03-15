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
 * @interface TimeSeriesColumn
 */
export interface TimeSeriesColumn {
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesColumn
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesColumn
     */
    ordinal?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesColumn
     */
    datatype?: string;
}

/**
 * Check if a given object implements the TimeSeriesColumn interface.
 */
export function instanceOfTimeSeriesColumn(value: object): boolean {
    return true;
}

export function TimeSeriesColumnFromJSON(json: any): TimeSeriesColumn {
    return TimeSeriesColumnFromJSONTyped(json, false);
}

export function TimeSeriesColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesColumn {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'ordinal': json['ordinal'] == null ? undefined : json['ordinal'],
        'datatype': json['datatype'] == null ? undefined : json['datatype'],
    };
}

export function TimeSeriesColumnToJSON(value?: TimeSeriesColumn | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'ordinal': value['ordinal'],
        'datatype': value['datatype'],
    };
}

