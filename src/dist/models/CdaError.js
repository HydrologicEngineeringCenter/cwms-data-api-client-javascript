"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdaErrorToJSON = exports.CdaErrorFromJSONTyped = exports.CdaErrorFromJSON = exports.instanceOfCdaError = void 0;
/**
 * Check if a given object implements the CdaError interface.
 */
function instanceOfCdaError(value) {
    return true;
}
exports.instanceOfCdaError = instanceOfCdaError;
function CdaErrorFromJSON(json) {
    return CdaErrorFromJSONTyped(json, false);
}
exports.CdaErrorFromJSON = CdaErrorFromJSON;
function CdaErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
        'incidentIdentifier': json['incidentIdentifier'] == null ? undefined : json['incidentIdentifier'],
        'details': json['details'] == null ? undefined : json['details'],
    };
}
exports.CdaErrorFromJSONTyped = CdaErrorFromJSONTyped;
function CdaErrorToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
        'incidentIdentifier': value['incidentIdentifier'],
        'details': value['details'],
    };
}
exports.CdaErrorToJSON = CdaErrorToJSON;