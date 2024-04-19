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
exports.TimeSeriesIntervalUnitsInnerDurationToJSON = exports.TimeSeriesIntervalUnitsInnerDurationFromJSONTyped = exports.TimeSeriesIntervalUnitsInnerDurationFromJSON = exports.instanceOfTimeSeriesIntervalUnitsInnerDuration = void 0;
/**
 * Check if a given object implements the TimeSeriesIntervalUnitsInnerDuration interface.
 */
function instanceOfTimeSeriesIntervalUnitsInnerDuration(value) {
    return true;
}
exports.instanceOfTimeSeriesIntervalUnitsInnerDuration = instanceOfTimeSeriesIntervalUnitsInnerDuration;
function TimeSeriesIntervalUnitsInnerDurationFromJSON(json) {
    return TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json, false);
}
exports.TimeSeriesIntervalUnitsInnerDurationFromJSON = TimeSeriesIntervalUnitsInnerDurationFromJSON;
function TimeSeriesIntervalUnitsInnerDurationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'seconds': json['seconds'] == null ? undefined : json['seconds'],
        'nano': json['nano'] == null ? undefined : json['nano'],
        'zero': json['zero'] == null ? undefined : json['zero'],
        'negative': json['negative'] == null ? undefined : json['negative'],
    };
}
exports.TimeSeriesIntervalUnitsInnerDurationFromJSONTyped = TimeSeriesIntervalUnitsInnerDurationFromJSONTyped;
function TimeSeriesIntervalUnitsInnerDurationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'seconds': value['seconds'],
        'nano': value['nano'],
        'zero': value['zero'],
        'negative': value['negative'],
    };
}
exports.TimeSeriesIntervalUnitsInnerDurationToJSON = TimeSeriesIntervalUnitsInnerDurationToJSON;