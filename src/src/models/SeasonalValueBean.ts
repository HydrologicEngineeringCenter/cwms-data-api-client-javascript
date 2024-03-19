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
/**
 * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
 * @export
 * @interface SeasonalValueBean
 */
export interface SeasonalValueBean {
    /**
     * 
     * @type {number}
     * @memberof SeasonalValueBean
     */
    value?: number;
    /**
     * 
     * @type {number}
     * @memberof SeasonalValueBean
     */
    offsetMonths?: number;
    /**
     * 
     * @type {number}
     * @memberof SeasonalValueBean
     */
    offsetMinutes?: number;
}

/**
 * Check if a given object implements the SeasonalValueBean interface.
 */
export function instanceOfSeasonalValueBean(value: object): boolean {
    return true;
}

export function SeasonalValueBeanFromJSON(json: any): SeasonalValueBean {
    return SeasonalValueBeanFromJSONTyped(json, false);
}

export function SeasonalValueBeanFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeasonalValueBean {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'] == null ? undefined : json['value'],
        'offsetMonths': json['offset-months'] == null ? undefined : json['offset-months'],
        'offsetMinutes': json['offset-minutes'] == null ? undefined : json['offset-minutes'],
    };
}

export function SeasonalValueBeanToJSON(value?: SeasonalValueBean | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'offset-months': value['offsetMonths'],
        'offset-minutes': value['offsetMinutes'],
    };
}
