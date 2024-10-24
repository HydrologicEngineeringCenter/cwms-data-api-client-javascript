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
import type { TimeseriesIntervalUnitsInner } from './TimeseriesIntervalUnitsInner';
import {
    TimeseriesIntervalUnitsInnerFromJSON,
    TimeseriesIntervalUnitsInnerFromJSONTyped,
    TimeseriesIntervalUnitsInnerToJSON,
} from './TimeseriesIntervalUnitsInner';

/**
 * The interval of the time-series, in ISO-8601 duration format
 * @export
 * @interface TimeseriesInterval
 */
export interface TimeseriesInterval {
    /**
     * 
     * @type {number}
     * @memberof TimeseriesInterval
     */
    seconds?: number;
    /**
     * 
     * @type {Array<TimeseriesIntervalUnitsInner>}
     * @memberof TimeseriesInterval
     */
    units?: Array<TimeseriesIntervalUnitsInner>;
    /**
     * 
     * @type {number}
     * @memberof TimeseriesInterval
     */
    nano?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeseriesInterval
     */
    zero?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimeseriesInterval
     */
    negative?: boolean;
}

/**
 * Check if a given object implements the TimeseriesInterval interface.
 */
export function instanceOfTimeseriesInterval(value: object): boolean {
    return true;
}

export function TimeseriesIntervalFromJSON(json: any): TimeseriesInterval {
    return TimeseriesIntervalFromJSONTyped(json, false);
}

export function TimeseriesIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesInterval {
    if (json == null) {
        return json;
    }
    return {
        
        'seconds': json['seconds'] == null ? undefined : json['seconds'],
        'units': json['units'] == null ? undefined : ((json['units'] as Array<any>).map(TimeseriesIntervalUnitsInnerFromJSON)),
        'nano': json['nano'] == null ? undefined : json['nano'],
        'zero': json['zero'] == null ? undefined : json['zero'],
        'negative': json['negative'] == null ? undefined : json['negative'],
    };
}

export function TimeseriesIntervalToJSON(value?: TimeseriesInterval | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'seconds': value['seconds'],
        'units': value['units'] == null ? undefined : ((value['units'] as Array<any>).map(TimeseriesIntervalUnitsInnerToJSON)),
        'nano': value['nano'],
        'zero': value['zero'],
        'negative': value['negative'],
    };
}

