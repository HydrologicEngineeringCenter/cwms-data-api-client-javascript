"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecifiedLevelToJSON = exports.SpecifiedLevelFromJSONTyped = exports.SpecifiedLevelFromJSON = exports.instanceOfSpecifiedLevel = void 0;
/**
 * Check if a given object implements the SpecifiedLevel interface.
 */
function instanceOfSpecifiedLevel(value) {
    if (!('officeId' in value))
        return false;
    return true;
}
exports.instanceOfSpecifiedLevel = instanceOfSpecifiedLevel;
function SpecifiedLevelFromJSON(json) {
    return SpecifiedLevelFromJSONTyped(json, false);
}
exports.SpecifiedLevelFromJSON = SpecifiedLevelFromJSON;
function SpecifiedLevelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}
exports.SpecifiedLevelFromJSONTyped = SpecifiedLevelFromJSONTyped;
function SpecifiedLevelToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
    };
}
exports.SpecifiedLevelToJSON = SpecifiedLevelToJSON;
