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
import { RatingSpecFromJSON, RatingSpecToJSON, } from './RatingSpec';
/**
 * Check if a given object implements the RatingSpecs interface.
 */
export function instanceOfRatingSpecs(value) {
    return true;
}
export function RatingSpecsFromJSON(json) {
    return RatingSpecsFromJSONTyped(json, false);
}
export function RatingSpecsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'specs': json['specs'] == null ? undefined : (json['specs'].map(RatingSpecFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}
export function RatingSpecsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'specs': value['specs'] == null ? undefined : (value['specs'].map(RatingSpecToJSON)),
    };
}
