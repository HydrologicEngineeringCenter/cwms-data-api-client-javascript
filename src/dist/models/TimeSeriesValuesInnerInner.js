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
exports.TimeseriesValuesInnerInnerToJSON = exports.TimeseriesValuesInnerInnerFromJSONTyped = exports.TimeseriesValuesInnerInnerFromJSON = exports.instanceOfTimeseriesValuesInnerInner = void 0;
/**
 * Check if a given object implements the TimeseriesValuesInnerInner interface.
 */
function instanceOfTimeseriesValuesInnerInner(value) {
    return true;
}
exports.instanceOfTimeseriesValuesInnerInner = instanceOfTimeseriesValuesInnerInner;
function TimeseriesValuesInnerInnerFromJSON(json) {
    return TimeseriesValuesInnerInnerFromJSONTyped(json, false);
}
exports.TimeseriesValuesInnerInnerFromJSON = TimeseriesValuesInnerInnerFromJSON;
function TimeseriesValuesInnerInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}
exports.TimeseriesValuesInnerInnerFromJSONTyped = TimeseriesValuesInnerInnerFromJSONTyped;
function TimeseriesValuesInnerInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}
exports.TimeseriesValuesInnerInnerToJSON = TimeseriesValuesInnerInnerToJSON;
