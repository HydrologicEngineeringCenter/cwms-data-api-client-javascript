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
import type { TimeSeriesIntervalUnitsInnerDuration } from './TimeSeriesIntervalUnitsInnerDuration';
import {
    TimeSeriesIntervalUnitsInnerDurationFromJSON,
    TimeSeriesIntervalUnitsInnerDurationFromJSONTyped,
    TimeSeriesIntervalUnitsInnerDurationToJSON,
} from './TimeSeriesIntervalUnitsInnerDuration';

/**
 * 
 * @export
 * @interface TimeSeriesIntervalUnitsInner
 */
export interface TimeSeriesIntervalUnitsInner {
    /**
     * 
     * @type {TimeSeriesIntervalUnitsInnerDuration}
     * @memberof TimeSeriesIntervalUnitsInner
     */
    duration?: TimeSeriesIntervalUnitsInnerDuration;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesIntervalUnitsInner
     */
    durationEstimated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesIntervalUnitsInner
     */
    dateBased?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeSeriesIntervalUnitsInner
     */
    timeBased?: boolean;
}

/**
 * Check if a given object implements the TimeSeriesIntervalUnitsInner interface.
 */
export function instanceOfTimeSeriesIntervalUnitsInner(value: object): boolean {
    return true;
}

export function TimeSeriesIntervalUnitsInnerFromJSON(json: any): TimeSeriesIntervalUnitsInner {
    return TimeSeriesIntervalUnitsInnerFromJSONTyped(json, false);
}

export function TimeSeriesIntervalUnitsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesIntervalUnitsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'duration': json['duration'] == null ? undefined : TimeSeriesIntervalUnitsInnerDurationFromJSON(json['duration']),
        'durationEstimated': json['durationEstimated'] == null ? undefined : json['durationEstimated'],
        'dateBased': json['dateBased'] == null ? undefined : json['dateBased'],
        'timeBased': json['timeBased'] == null ? undefined : json['timeBased'],
    };
}

export function TimeSeriesIntervalUnitsInnerToJSON(value?: TimeSeriesIntervalUnitsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'duration': TimeSeriesIntervalUnitsInnerDurationToJSON(value['duration']),
        'durationEstimated': value['durationEstimated'],
        'dateBased': value['dateBased'],
        'timeBased': value['timeBased'],
    };
}

