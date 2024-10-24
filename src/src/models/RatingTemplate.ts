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
import type { ParameterSpec } from './ParameterSpec';
import {
    ParameterSpecFromJSON,
    ParameterSpecFromJSONTyped,
    ParameterSpecToJSON,
} from './ParameterSpec';

/**
 * 
 * @export
 * @interface RatingTemplate
 */
export interface RatingTemplate {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof RatingTemplate
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof RatingTemplate
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingTemplate
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingTemplate
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingTemplate
     */
    dependentParameter?: string;
    /**
     * 
     * @type {Array<ParameterSpec>}
     * @memberof RatingTemplate
     */
    independentParameterSpecs?: Array<ParameterSpec>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RatingTemplate
     */
    ratingIds?: Array<string>;
}

/**
 * Check if a given object implements the RatingTemplate interface.
 */
export function instanceOfRatingTemplate(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function RatingTemplateFromJSON(json: any): RatingTemplate {
    return RatingTemplateFromJSONTyped(json, false);
}

export function RatingTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
        'description': json['description'] == null ? undefined : json['description'],
        'dependentParameter': json['dependent-parameter'] == null ? undefined : json['dependent-parameter'],
        'independentParameterSpecs': json['independent-parameter-specs'] == null ? undefined : ((json['independent-parameter-specs'] as Array<any>).map(ParameterSpecFromJSON)),
        'ratingIds': json['rating-ids'] == null ? undefined : json['rating-ids'],
    };
}

export function RatingTemplateToJSON(value?: RatingTemplate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'version': value['version'],
        'description': value['description'],
        'dependent-parameter': value['dependentParameter'],
        'independent-parameter-specs': value['independentParameterSpecs'] == null ? undefined : ((value['independentParameterSpecs'] as Array<any>).map(ParameterSpecToJSON)),
        'rating-ids': value['ratingIds'],
    };
}

