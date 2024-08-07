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
 * List of retrieved time-series values
 * @export
 * @interface TimeSeriesValuesInnerInner
 */
export interface TimeSeriesValuesInnerInner {
    /**
     * Milliseconds since 1970-01-01 (Unix Epoch), always UTC
     * @type {number}
     * @memberof TimeSeriesValuesInnerInner
     */
    dateTime?: number;
    /**
     * Requested time-series data value
     * @type {number}
     * @memberof TimeSeriesValuesInnerInner
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesValuesInnerInner
     */
    qualityCode?: number;
}

/**
 * Check if a given object implements the TimeSeriesValuesInnerInner interface.
 */
export function instanceOfTimeSeriesValuesInnerInner(value: object): boolean {
    return true;
}

export function TimeSeriesValuesInnerInnerFromJSON(json: any): TimeSeriesValuesInnerInner {
    return TimeSeriesValuesInnerInnerFromJSONTyped(json, false);
}

export function TimeSeriesValuesInnerInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesValuesInnerInner {
    if (json == null) {
        return json;
    }
    return {
        
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}

export function TimeSeriesValuesInnerInnerToJSON(value?: TimeSeriesValuesInnerInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}

