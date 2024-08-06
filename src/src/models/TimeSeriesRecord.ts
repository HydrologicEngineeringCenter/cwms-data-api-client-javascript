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
 * @interface TimeSeriesRecord
 */
export interface TimeSeriesRecord {
    /**
     * Milliseconds since 1970-01-01 (Unix Epoch), always UTC
     * @type {number}
     * @memberof TimeSeriesRecord
     */
    dateTime?: number;
    /**
     * Requested time-series data value
     * @type {number}
     * @memberof TimeSeriesRecord
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesRecord
     */
    qualityCode?: number;
}

/**
 * Check if a given object implements the TimeSeriesRecord interface.
 */
export function instanceOfTimeSeriesRecord(value: object): boolean {
    return true;
}

export function TimeSeriesRecordFromJSON(json: any): TimeSeriesRecord {
    return TimeSeriesRecordFromJSONTyped(json, false);
}

export function TimeSeriesRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}

export function TimeSeriesRecordToJSON(value?: TimeSeriesRecord | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}

