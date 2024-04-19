/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the County interface.
 */
export function instanceOfCounty(value) {
    return true;
}
export function CountyFromJSON(json) {
    return CountyFromJSONTyped(json, false);
}
export function CountyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'countyId': json['countyId'] == null ? undefined : json['countyId'],
        'stateInitial': json['stateInitial'] == null ? undefined : json['stateInitial'],
    };
}
export function CountyToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'countyId': value['countyId'],
        'stateInitial': value['stateInitial'],
    };
}
