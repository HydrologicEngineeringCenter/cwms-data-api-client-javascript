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
import { ParameterSpecFromJSON, ParameterSpecToJSON, } from './ParameterSpec';
/**
 * Check if a given object implements the RatingTemplate interface.
 */
export function instanceOfRatingTemplate(value) {
    if (!('officeId' in value))
        return false;
    return true;
}
export function RatingTemplateFromJSON(json) {
    return RatingTemplateFromJSONTyped(json, false);
}
export function RatingTemplateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
        'description': json['description'] == null ? undefined : json['description'],
        'dependentParameter': json['dependent-parameter'] == null ? undefined : json['dependent-parameter'],
        'independentParameterSpecs': json['independent-parameter-specs'] == null ? undefined : (json['independent-parameter-specs'].map(ParameterSpecFromJSON)),
        'ratingIds': json['rating-ids'] == null ? undefined : json['rating-ids'],
    };
}
export function RatingTemplateToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'id': value['id'],
        'version': value['version'],
        'description': value['description'],
        'dependent-parameter': value['dependentParameter'],
        'independent-parameter-specs': value['independentParameterSpecs'] == null ? undefined : (value['independentParameterSpecs'].map(ParameterSpecToJSON)),
        'rating-ids': value['ratingIds'],
    };
}
