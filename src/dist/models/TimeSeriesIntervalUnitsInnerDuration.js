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
exports.TimeseriesIntervalUnitsInnerDurationToJSON = exports.TimeseriesIntervalUnitsInnerDurationFromJSONTyped = exports.TimeseriesIntervalUnitsInnerDurationFromJSON = exports.instanceOfTimeseriesIntervalUnitsInnerDuration = void 0;
/**
 * Check if a given object implements the TimeseriesIntervalUnitsInnerDuration interface.
 */
function instanceOfTimeseriesIntervalUnitsInnerDuration(value) {
    return true;
}
exports.instanceOfTimeseriesIntervalUnitsInnerDuration = instanceOfTimeseriesIntervalUnitsInnerDuration;
function TimeseriesIntervalUnitsInnerDurationFromJSON(json) {
    return TimeseriesIntervalUnitsInnerDurationFromJSONTyped(json, false);
}
exports.TimeseriesIntervalUnitsInnerDurationFromJSON = TimeseriesIntervalUnitsInnerDurationFromJSON;
function TimeseriesIntervalUnitsInnerDurationFromJSONTyped(json, ignoreDiscriminator) {
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
exports.TimeseriesIntervalUnitsInnerDurationFromJSONTyped = TimeseriesIntervalUnitsInnerDurationFromJSONTyped;
function TimeseriesIntervalUnitsInnerDurationToJSON(value) {
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
exports.TimeseriesIntervalUnitsInnerDurationToJSON = TimeseriesIntervalUnitsInnerDurationToJSON;
