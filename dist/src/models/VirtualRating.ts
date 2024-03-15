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
import type { AbstractRatingMetadata } from './AbstractRatingMetadata';
import {
    AbstractRatingMetadataFromJSON,
    AbstractRatingMetadataFromJSONTyped,
    AbstractRatingMetadataToJSON,
} from './AbstractRatingMetadata';

/**
 * 
 * @export
 * @interface VirtualRating
 */
export interface VirtualRating extends AbstractRatingMetadata {
    /**
     * 
     * @type {Array<object>}
     * @memberof VirtualRating
     */
    sourceRatings?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof VirtualRating
     */
    connections?: string;
}

/**
 * Check if a given object implements the VirtualRating interface.
 */
export function instanceOfVirtualRating(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VirtualRatingFromJSON(json: any): VirtualRating {
    return VirtualRatingFromJSONTyped(json, false);
}

export function VirtualRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualRating {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...AbstractRatingMetadataFromJSONTyped(json, ignoreDiscriminator),
        'sourceRatings': !exists(json, 'source-ratings') ? undefined : json['source-ratings'],
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
    };
}

export function VirtualRatingToJSON(value?: VirtualRating | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...AbstractRatingMetadataToJSON(value),
        'source-ratings': value.sourceRatings,
        'connections': value.connections,
    };
}

