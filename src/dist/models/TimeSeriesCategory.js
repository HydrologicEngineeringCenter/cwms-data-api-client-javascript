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
exports.TimeseriesCategoryToJSON = exports.TimeseriesCategoryFromJSONTyped = exports.TimeseriesCategoryFromJSON = exports.instanceOfTimeseriesCategory = void 0;
/**
 * Check if a given object implements the TimeseriesCategory interface.
 */
function instanceOfTimeseriesCategory(value) {
    if (!('officeId' in value))
        return false;
    return true;
}
exports.instanceOfTimeseriesCategory = instanceOfTimeseriesCategory;
function TimeseriesCategoryFromJSON(json) {
    return TimeseriesCategoryFromJSONTyped(json, false);
}
exports.TimeseriesCategoryFromJSON = TimeseriesCategoryFromJSON;
function TimeseriesCategoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}
exports.TimeseriesCategoryFromJSONTyped = TimeseriesCategoryFromJSONTyped;
function TimeseriesCategoryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
    };
}
exports.TimeseriesCategoryToJSON = TimeseriesCategoryToJSON;
