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
 * List of retrieved time-series values
 * @export
 * @interface TimeSeriesRecordInner
 */
export interface TimeSeriesRecordInner {
    /**
     * Milliseconds since 1970-01-01 (Unix Epoch), always UTC
     * @type {number}
     * @memberof TimeSeriesRecordInner
     */
    dateTime?: number;
    /**
     * Requested time-series data value
     * @type {number}
     * @memberof TimeSeriesRecordInner
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesRecordInner
     */
    qualityCode?: number;
}

/**
 * Check if a given object implements the TimeSeriesRecordInner interface.
 */
export function instanceOfTimeSeriesRecordInner(value: object): boolean {
    return true;
}

export function TimeSeriesRecordInnerFromJSON(json: any): TimeSeriesRecordInner {
    return TimeSeriesRecordInnerFromJSONTyped(json, false);
}

export function TimeSeriesRecordInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesRecordInner {
    if (json == null) {
        return json;
    }
    return {
        
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}

export function TimeSeriesRecordInnerToJSON(value?: TimeSeriesRecordInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}
