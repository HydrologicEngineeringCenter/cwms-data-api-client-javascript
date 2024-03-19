/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TimeSeriesIntervalUnitsInner } from './TimeSeriesIntervalUnitsInner';
import {
    TimeSeriesIntervalUnitsInnerFromJSON,
    TimeSeriesIntervalUnitsInnerFromJSONTyped,
    TimeSeriesIntervalUnitsInnerToJSON,
} from './TimeSeriesIntervalUnitsInner';

/**
 * The interval of the time-series, in ISO-8601 duration format
 * @export
 * @interface TimeSeriesInterval
 */
export interface TimeSeriesInterval {
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesInterval
     */
    seconds?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeSeriesInterval
     */
    nano?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesInterval
     */
    zero?: boolean;
    /**
     * 
     * @type {Array<TimeSeriesIntervalUnitsInner>}
     * @memberof TimeSeriesInterval
     */
    units?: Array<TimeSeriesIntervalUnitsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesInterval
     */
    negative?: boolean;
}

/**
 * Check if a given object implements the TimeSeriesInterval interface.
 */
export function instanceOfTimeSeriesInterval(value: object): boolean {
    return true;
}

export function TimeSeriesIntervalFromJSON(json: any): TimeSeriesInterval {
    return TimeSeriesIntervalFromJSONTyped(json, false);
}

export function TimeSeriesIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'seconds': json['seconds'] == null ? undefined : json['seconds'],
        'nano': json['nano'] == null ? undefined : json['nano'],
        'zero': json['zero'] == null ? undefined : json['zero'],
        'units': json['units'] == null ? undefined : ((json['units'] as Array<any>).map(TimeSeriesIntervalUnitsInnerFromJSON)),
        'negative': json['negative'] == null ? undefined : json['negative'],
    };
}

export function TimeSeriesIntervalToJSON(value?: TimeSeriesInterval | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'seconds': value['seconds'],
        'nano': value['nano'],
        'zero': value['zero'],
        'units': value['units'] == null ? undefined : ((value['units'] as Array<any>).map(TimeSeriesIntervalUnitsInnerToJSON)),
        'negative': value['negative'],
    };
}

