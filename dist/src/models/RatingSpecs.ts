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
import type { RatingSpec } from './RatingSpec';
import {
    RatingSpecFromJSON,
    RatingSpecFromJSONTyped,
    RatingSpecToJSON,
} from './RatingSpec';

/**
 * 
 * @export
 * @interface RatingSpecs
 */
export interface RatingSpecs {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof RatingSpecs
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof RatingSpecs
     */
    readonly total?: number;
    /**
     * 
     * @type {Array<RatingSpec>}
     * @memberof RatingSpecs
     */
    specs?: Array<RatingSpec>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof RatingSpecs
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof RatingSpecs
     */
    readonly pageSize?: number;
}

/**
 * Check if a given object implements the RatingSpecs interface.
 */
export function instanceOfRatingSpecs(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatingSpecsFromJSON(json: any): RatingSpecs {
    return RatingSpecsFromJSONTyped(json, false);
}

export function RatingSpecsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingSpecs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'specs': !exists(json, 'specs') ? undefined : ((json['specs'] as Array<any>).map(RatingSpecFromJSON)),
        'nextPage': !exists(json, 'next-page') ? undefined : json['next-page'],
        'pageSize': !exists(json, 'page-size') ? undefined : json['page-size'],
    };
}

export function RatingSpecsToJSON(value?: RatingSpecs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'specs': value.specs === undefined ? undefined : ((value.specs as Array<any>).map(RatingSpecToJSON)),
    };
}

