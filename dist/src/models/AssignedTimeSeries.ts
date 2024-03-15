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
 * @interface AssignedTimeSeries
 */
export interface AssignedTimeSeries {
    /**
     * 
     * @type {string}
     * @memberof AssignedTimeSeries
     */
    officeId?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignedTimeSeries
     */
    timeseriesId?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignedTimeSeries
     */
    tsCode?: number;
    /**
     * 
     * @type {string}
     * @memberof AssignedTimeSeries
     */
    aliasId?: string;
    /**
     * 
     * @type {string}
     * @memberof AssignedTimeSeries
     */
    refTsId?: string;
    /**
     * 
     * @type {number}
     * @memberof AssignedTimeSeries
     */
    attribute?: number;
}

/**
 * Check if a given object implements the AssignedTimeSeries interface.
 */
export function instanceOfAssignedTimeSeries(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssignedTimeSeriesFromJSON(json: any): AssignedTimeSeries {
    return AssignedTimeSeriesFromJSONTyped(json, false);
}

export function AssignedTimeSeriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignedTimeSeries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'officeId': !exists(json, 'officeId') ? undefined : json['officeId'],
        'timeseriesId': !exists(json, 'timeseriesId') ? undefined : json['timeseriesId'],
        'tsCode': !exists(json, 'tsCode') ? undefined : json['tsCode'],
        'aliasId': !exists(json, 'aliasId') ? undefined : json['aliasId'],
        'refTsId': !exists(json, 'refTsId') ? undefined : json['refTsId'],
        'attribute': !exists(json, 'attribute') ? undefined : json['attribute'],
    };
}

export function AssignedTimeSeriesToJSON(value?: AssignedTimeSeries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'officeId': value.officeId,
        'timeseriesId': value.timeseriesId,
        'tsCode': value.tsCode,
        'aliasId': value.aliasId,
        'refTsId': value.refTsId,
        'attribute': value.attribute,
    };
}

