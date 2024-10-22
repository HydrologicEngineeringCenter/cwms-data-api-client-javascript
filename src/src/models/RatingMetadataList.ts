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
import type { RatingMetadata } from './RatingMetadata';
import {
    RatingMetadataFromJSON,
    RatingMetadataFromJSONTyped,
    RatingMetadataToJSON,
} from './RatingMetadata';

/**
 * 
 * @export
 * @interface RatingMetadataList
 */
export interface RatingMetadataList {
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof RatingMetadataList
     */
    readonly nextPage?: string;
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof RatingMetadataList
     */
    readonly page?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof RatingMetadataList
     */
    readonly pageSize?: number;
    /**
     * 
     * @type {Array<RatingMetadata>}
     * @memberof RatingMetadataList
     */
    ratingMetadata?: Array<RatingMetadata>;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof RatingMetadataList
     */
    readonly total?: number;
}

/**
 * Check if a given object implements the RatingMetadataList interface.
 */
export function instanceOfRatingMetadataList(value: object): boolean {
    return true;
}

export function RatingMetadataListFromJSON(json: any): RatingMetadataList {
    return RatingMetadataListFromJSONTyped(json, false);
}

export function RatingMetadataListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingMetadataList {
    if (json == null) {
        return json;
    }
    return {
        
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
        'ratingMetadata': json['rating-metadata'] == null ? undefined : ((json['rating-metadata'] as Array<any>).map(RatingMetadataFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function RatingMetadataListToJSON(value?: RatingMetadataList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'rating-metadata': value['ratingMetadata'] == null ? undefined : ((value['ratingMetadata'] as Array<any>).map(RatingMetadataToJSON)),
    };
}
