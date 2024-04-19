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
exports.LocationAliasToJSON = exports.LocationAliasFromJSONTyped = exports.LocationAliasFromJSON = exports.instanceOfLocationAlias = void 0;
/**
 * Check if a given object implements the LocationAlias interface.
 */
function instanceOfLocationAlias(value) {
    return true;
}
exports.instanceOfLocationAlias = instanceOfLocationAlias;
function LocationAliasFromJSON(json) {
    return LocationAliasFromJSONTyped(json, false);
}
exports.LocationAliasFromJSON = LocationAliasFromJSON;
function LocationAliasFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}
exports.LocationAliasFromJSONTyped = LocationAliasFromJSONTyped;
function LocationAliasToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'value': value['value'],
    };
}
exports.LocationAliasToJSON = LocationAliasToJSON;
