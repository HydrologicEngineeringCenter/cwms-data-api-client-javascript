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
import { LocationLevelFromJSON, LocationLevelToJSON, } from './LocationLevel';
/**
 * Check if a given object implements the LocationLevels interface.
 */
export function instanceOfLocationLevels(value) {
    return true;
}
export function LocationLevelsFromJSON(json) {
    return LocationLevelsFromJSONTyped(json, false);
}
export function LocationLevelsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'levels': json['levels'] == null ? undefined : (json['levels'].map(LocationLevelFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}
export function LocationLevelsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'levels': value['levels'] == null ? undefined : (value['levels'].map(LocationLevelToJSON)),
    };
}
