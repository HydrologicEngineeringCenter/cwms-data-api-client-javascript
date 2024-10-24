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
/**
 * Check if a given object implements the County interface.
 */
export function instanceOfCounty(value) {
    if (!('name' in value))
        return false;
    if (!('countyId' in value))
        return false;
    if (!('stateInitial' in value))
        return false;
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
        'name': json['name'],
        'countyId': json['county-id'],
        'stateInitial': json['state-initial'],
    };
}
export function CountyToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'county-id': value['countyId'],
        'state-initial': value['stateInitial'],
    };
}
