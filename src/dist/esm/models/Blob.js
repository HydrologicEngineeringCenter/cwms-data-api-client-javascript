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
 * Check if a given object implements the Blob interface.
 */
export function instanceOfBlob(value) {
    if (!('officeId' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('value' in value))
        return false;
    return true;
}
export function BlobFromJSON(json) {
    return BlobFromJSONTyped(json, false);
}
export function BlobFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'mediaTypeId': json['media-type-id'] == null ? undefined : json['media-type-id'],
        'value': json['value'],
    };
}
export function BlobToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
        'media-type-id': value['mediaTypeId'],
        'value': value['value'],
    };
}
