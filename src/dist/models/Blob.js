"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobToJSON = exports.BlobFromJSONTyped = exports.BlobFromJSON = exports.instanceOfBlob = void 0;
/**
 * Check if a given object implements the Blob interface.
 */
function instanceOfBlob(value) {
    if (!('officeId' in value))
        return false;
    if (!('id' in value))
        return false;
    return true;
}
exports.instanceOfBlob = instanceOfBlob;
function BlobFromJSON(json) {
    return BlobFromJSONTyped(json, false);
}
exports.BlobFromJSON = BlobFromJSON;
function BlobFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'mediaTypeId': json['media-type-id'] == null ? undefined : json['media-type-id'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}
exports.BlobFromJSONTyped = BlobFromJSONTyped;
function BlobToJSON(value) {
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
exports.BlobToJSON = BlobToJSON;
