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
    let isInstance = true;

    return isInstance;
}

export function TimeSeriesIntervalUnitsInnerDurationFromJSON(json: any): TimeSeriesIntervalUnitsInnerDuration {
    return TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json, false);
}

export function TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesIntervalUnitsInnerDuration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seconds': !exists(json, 'seconds') ? undefined : json['seconds'],
        'nano': !exists(json, 'nano') ? undefined : json['nano'],
        'zero': !exists(json, 'zero') ? undefined : json['zero'],
        'negative': !exists(json, 'negative') ? undefined : json['negative'],
    };
}

export function TimeSeriesIntervalUnitsInnerDurationToJSON(value?: TimeSeriesIntervalUnitsInnerDuration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seconds': value.seconds,
        'nano': value.nano,
        'zero': value.zero,
        'negative': value.negative,
    };
}

