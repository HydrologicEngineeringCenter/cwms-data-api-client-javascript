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
import type { TableRating } from './TableRating';
import {
    TableRatingFromJSON,
    TableRatingFromJSONTyped,
    TableRatingToJSON,
} from './TableRating';
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
export interface UsgsStreamRating extends TableRating {
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
    return json;
}

export function UsgsStreamRatingToJSON(value?: UsgsStreamRating | null): any {
    return value;
}

