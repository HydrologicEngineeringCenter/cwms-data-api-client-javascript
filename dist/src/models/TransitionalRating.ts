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
import type { AbstractRatingMetadata } from './AbstractRatingMetadata';
import {
    AbstractRatingMetadataFromJSON,
    AbstractRatingMetadataFromJSONTyped,
    AbstractRatingMetadataToJSON,
} from './AbstractRatingMetadata';
import type { VerticalDatumInfo } from './VerticalDatumInfo';
import {
    VerticalDatumInfoFromJSON,
    VerticalDatumInfoFromJSONTyped,
    VerticalDatumInfoToJSON,
} from './VerticalDatumInfo';

/**
 * 
 * @export
 * @interface TransitionalRating
 */
export interface TransitionalRating extends AbstractRatingMetadata {
    /**
     * 
     * @type {Array<string>}
     * @memberof TransitionalRating
     */
    sourceRatings?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransitionalRating
     */
    conditions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransitionalRating
     */
    evaluations?: Array<string>;
}

/**
 * Check if a given object implements the TransitionalRating interface.
 */
export function instanceOfTransitionalRating(value: object): boolean {
    return true;
}

export function TransitionalRatingFromJSON(json: any): TransitionalRating {
    return TransitionalRatingFromJSONTyped(json, false);
}

export function TransitionalRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitionalRating {
    if (json == null) {
        return json;
    }
    return {
        ...AbstractRatingMetadataFromJSONTyped(json, ignoreDiscriminator),
        'sourceRatings': json['source-ratings'] == null ? undefined : json['source-ratings'],
        'conditions': json['conditions'] == null ? undefined : json['conditions'],
        'evaluations': json['evaluations'] == null ? undefined : json['evaluations'],
    };
}

export function TransitionalRatingToJSON(value?: TransitionalRating | null): any {
    if (value == null) {
        return value;
    }
    return {
        ...AbstractRatingMetadataToJSON(value),
        'source-ratings': value['sourceRatings'],
        'conditions': value['conditions'],
        'evaluations': value['evaluations'],
    };
}

