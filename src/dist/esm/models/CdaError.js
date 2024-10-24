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
 * Check if a given object implements the CdaError interface.
 */
export function instanceOfCdaError(value) {
    return true;
}
export function CdaErrorFromJSON(json) {
    return CdaErrorFromJSONTyped(json, false);
}
export function CdaErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
        'incidentIdentifier': json['incidentIdentifier'] == null ? undefined : json['incidentIdentifier'],
        'details': json['details'] == null ? undefined : json['details'],
    };
}
export function CdaErrorToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
        'incidentIdentifier': value['incidentIdentifier'],
        'details': value['details'],
    };
}
