/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RatingTemplate } from './RatingTemplate';
import {
    RatingTemplateFromJSON,
    RatingTemplateFromJSONTyped,
    RatingTemplateToJSON,
} from './RatingTemplate';

/**
 * 
 * @export
 * @interface RatingTemplates
 */
export interface RatingTemplates {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof RatingTemplates
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof RatingTemplates
     */
    readonly total?: number;
    /**
     * 
     * @type {Array<RatingTemplate>}
     * @memberof RatingTemplates
     */
    templates?: Array<RatingTemplate>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof RatingTemplates
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof RatingTemplates
     */
    readonly pageSize?: number;
}

/**
 * Check if a given object implements the RatingTemplates interface.
 */
export function instanceOfRatingTemplates(value: object): boolean {
    return true;
}

export function RatingTemplatesFromJSON(json: any): RatingTemplates {
    return RatingTemplatesFromJSONTyped(json, false);
}

export function RatingTemplatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingTemplates {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'templates': json['templates'] == null ? undefined : ((json['templates'] as Array<any>).map(RatingTemplateFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}

export function RatingTemplatesToJSON(value?: RatingTemplates | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'templates': value['templates'] == null ? undefined : ((value['templates'] as Array<any>).map(RatingTemplateToJSON)),
    };
}

