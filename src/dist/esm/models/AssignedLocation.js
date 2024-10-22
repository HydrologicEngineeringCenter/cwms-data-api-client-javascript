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
 * Check if a given object implements the AssignedLocation interface.
 */
export function instanceOfAssignedLocation(value) {
    return true;
}
export function AssignedLocationFromJSON(json) {
    return AssignedLocationFromJSONTyped(json, false);
}
export function AssignedLocationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'locationId': json['location-id'] == null ? undefined : json['location-id'],
        'officeId': json['office-id'] == null ? undefined : json['office-id'],
        'aliasId': json['alias-id'] == null ? undefined : json['alias-id'],
        'attribute': json['attribute'] == null ? undefined : json['attribute'],
        'refLocationId': json['ref-location-id'] == null ? undefined : json['ref-location-id'],
    };
}
export function AssignedLocationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'location-id': value['locationId'],
        'office-id': value['officeId'],
        'alias-id': value['aliasId'],
        'attribute': value['attribute'],
        'ref-location-id': value['refLocationId'],
    };
}
