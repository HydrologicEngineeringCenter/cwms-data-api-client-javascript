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
import type { VerticalDatumInfo } from './VerticalDatumInfo';
import {
    VerticalDatumInfoFromJSON,
    VerticalDatumInfoFromJSONTyped,
    VerticalDatumInfoToJSON,
} from './VerticalDatumInfo';

/**
 * 
 * @export
 * @interface UsgsStreamRating
 */
export interface UsgsStreamRating {
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    officeId?: string;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    ratingSpecId?: string;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    unitsId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsgsStreamRating
     */
    active?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UsgsStreamRating
     */
    effectiveDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsgsStreamRating
     */
    createDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsgsStreamRating
     */
    transitionDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    description?: string;
    /**
     * 
     * @type {VerticalDatumInfo}
     * @memberof UsgsStreamRating
     */
    verticalDatumInfo?: VerticalDatumInfo;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    inRangeMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    outRangeLowMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof UsgsStreamRating
     */
    outRangeHighMethod?: string;
}

/**
 * Check if a given object implements the UsgsStreamRating interface.
 */
export function instanceOfUsgsStreamRating(value: object): boolean {
    return true;
}

export function UsgsStreamRatingFromJSON(json: any): UsgsStreamRating {
    return UsgsStreamRatingFromJSONTyped(json, false);
}

export function UsgsStreamRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsgsStreamRating {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'] == null ? undefined : json['office-id'],
        'ratingSpecId': json['rating-spec-id'] == null ? undefined : json['rating-spec-id'],
        'unitsId': json['units-id'] == null ? undefined : json['units-id'],
        'active': json['active'] == null ? undefined : json['active'],
        'effectiveDate': json['effective-date'] == null ? undefined : (new Date(json['effective-date'])),
        'createDate': json['create-date'] == null ? undefined : (new Date(json['create-date'])),
        'transitionDate': json['transition-date'] == null ? undefined : (new Date(json['transition-date'])),
        'description': json['description'] == null ? undefined : json['description'],
        'verticalDatumInfo': json['vertical-datum-info'] == null ? undefined : VerticalDatumInfoFromJSON(json['vertical-datum-info']),
        'inRangeMethod': json['in-range-method'] == null ? undefined : json['in-range-method'],
        'outRangeLowMethod': json['out-range-low-method'] == null ? undefined : json['out-range-low-method'],
        'outRangeHighMethod': json['out-range-high-method'] == null ? undefined : json['out-range-high-method'],
    };
}

export function UsgsStreamRatingToJSON(value?: UsgsStreamRating | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'rating-spec-id': value['ratingSpecId'],
        'units-id': value['unitsId'],
        'active': value['active'],
        'effective-date': value['effectiveDate'] == null ? undefined : ((value['effectiveDate']).toISOString()),
        'create-date': value['createDate'] == null ? undefined : ((value['createDate']).toISOString()),
        'transition-date': value['transitionDate'] == null ? undefined : ((value['transitionDate']).toISOString()),
        'description': value['description'],
        'vertical-datum-info': VerticalDatumInfoToJSON(value['verticalDatumInfo']),
        'in-range-method': value['inRangeMethod'],
        'out-range-low-method': value['outRangeLowMethod'],
        'out-range-high-method': value['outRangeHighMethod'],
    };
}

