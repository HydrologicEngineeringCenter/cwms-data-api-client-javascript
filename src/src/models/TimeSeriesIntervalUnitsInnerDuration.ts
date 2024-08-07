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
 * 
 * @export
 * @interface TimeSeriesIntervalUnitsInnerDuration
 */
export interface TimeSeriesIntervalUnitsInnerDuration {
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesIntervalUnitsInnerDuration
     */
    seconds?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesIntervalUnitsInnerDuration
     */
    nano?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesIntervalUnitsInnerDuration
     */
    zero?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesIntervalUnitsInnerDuration
     */
    negative?: boolean;
}

/**
 * Check if a given object implements the TimeSeriesIntervalUnitsInnerDuration interface.
 */
export function instanceOfTimeSeriesIntervalUnitsInnerDuration(value: object): boolean {
    return true;
}

export function TimeSeriesIntervalUnitsInnerDurationFromJSON(json: any): TimeSeriesIntervalUnitsInnerDuration {
    return TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json, false);
}

export function TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesIntervalUnitsInnerDuration {
    if (json == null) {
        return json;
    }
    return {
        
        'seconds': json['seconds'] == null ? undefined : json['seconds'],
        'nano': json['nano'] == null ? undefined : json['nano'],
        'zero': json['zero'] == null ? undefined : json['zero'],
        'negative': json['negative'] == null ? undefined : json['negative'],
    };
}

export function TimeSeriesIntervalUnitsInnerDurationToJSON(value?: TimeSeriesIntervalUnitsInnerDuration | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'seconds': value['seconds'],
        'nano': value['nano'],
        'zero': value['zero'],
        'negative': value['negative'],
    };
}

