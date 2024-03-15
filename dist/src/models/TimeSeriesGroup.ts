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

import { mapValues } from '../runtime';
import type { AssignedTimeSeries } from './AssignedTimeSeries';
import {
    AssignedTimeSeriesFromJSON,
    AssignedTimeSeriesFromJSONTyped,
    AssignedTimeSeriesToJSON,
} from './AssignedTimeSeries';
import type { TimeSeriesCategory } from './TimeSeriesCategory';
import {
    TimeSeriesCategoryFromJSON,
    TimeSeriesCategoryFromJSONTyped,
    TimeSeriesCategoryToJSON,
} from './TimeSeriesCategory';

/**
 * A representation of a timeseries group
 * @export
 * @interface TimeSeriesGroup
 */
export interface TimeSeriesGroup {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof TimeSeriesGroup
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesGroup
     */
    id?: string;
    /**
     * 
     * @type {TimeSeriesCategory}
     * @memberof TimeSeriesGroup
     */
    timeSeriesCategory?: TimeSeriesCategory;
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesGroup
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesGroup
     */
    sharedAliasId?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeSeriesGroup
     */
    sharedRefTsId?: string;
    /**
     * 
     * @type {Array<AssignedTimeSeries>}
     * @memberof TimeSeriesGroup
     */
    assignedTimeSeries?: Array<AssignedTimeSeries>;
}

/**
 * Check if a given object implements the TimeSeriesGroup interface.
 */
export function instanceOfTimeSeriesGroup(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function TimeSeriesGroupFromJSON(json: any): TimeSeriesGroup {
    return TimeSeriesGroupFromJSONTyped(json, false);
}

export function TimeSeriesGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'timeSeriesCategory': json['time-series-category'] == null ? undefined : TimeSeriesCategoryFromJSON(json['time-series-category']),
        'description': json['description'] == null ? undefined : json['description'],
        'sharedAliasId': json['shared-alias-id'] == null ? undefined : json['shared-alias-id'],
        'sharedRefTsId': json['shared-ref-ts-id'] == null ? undefined : json['shared-ref-ts-id'],
        'assignedTimeSeries': json['assigned-time-series'] == null ? undefined : ((json['assigned-time-series'] as Array<any>).map(AssignedTimeSeriesFromJSON)),
    };
}

export function TimeSeriesGroupToJSON(value?: TimeSeriesGroup | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'time-series-category': TimeSeriesCategoryToJSON(value['timeSeriesCategory']),
        'description': value['description'],
        'shared-alias-id': value['sharedAliasId'],
        'shared-ref-ts-id': value['sharedRefTsId'],
        'assigned-time-series': value['assignedTimeSeries'] == null ? undefined : ((value['assignedTimeSeries'] as Array<any>).map(AssignedTimeSeriesToJSON)),
    };
}

