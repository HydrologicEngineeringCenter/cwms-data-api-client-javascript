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
exports.TimeseriesIntervalUnitsInnerToJSON = exports.TimeseriesIntervalUnitsInnerFromJSONTyped = exports.TimeseriesIntervalUnitsInnerFromJSON = exports.instanceOfTimeseriesIntervalUnitsInner = void 0;
const TimeseriesIntervalUnitsInnerDuration_1 = require("./TimeseriesIntervalUnitsInnerDuration");
/**
 * Check if a given object implements the TimeseriesIntervalUnitsInner interface.
 */
function instanceOfTimeseriesIntervalUnitsInner(value) {
    return true;
}
exports.instanceOfTimeseriesIntervalUnitsInner = instanceOfTimeseriesIntervalUnitsInner;
function TimeseriesIntervalUnitsInnerFromJSON(json) {
    return TimeseriesIntervalUnitsInnerFromJSONTyped(json, false);
}
exports.TimeseriesIntervalUnitsInnerFromJSON = TimeseriesIntervalUnitsInnerFromJSON;
function TimeseriesIntervalUnitsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dateBased': json['dateBased'] == null ? undefined : json['dateBased'],
        'duration': json['duration'] == null ? undefined : (0, TimeseriesIntervalUnitsInnerDuration_1.TimeseriesIntervalUnitsInnerDurationFromJSON)(json['duration']),
        'durationEstimated': json['durationEstimated'] == null ? undefined : json['durationEstimated'],
        'timeBased': json['timeBased'] == null ? undefined : json['timeBased'],
    };
}
exports.TimeseriesIntervalUnitsInnerFromJSONTyped = TimeseriesIntervalUnitsInnerFromJSONTyped;
function TimeseriesIntervalUnitsInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dateBased': value['dateBased'],
        'duration': (0, TimeseriesIntervalUnitsInnerDuration_1.TimeseriesIntervalUnitsInnerDurationToJSON)(value['duration']),
        'durationEstimated': value['durationEstimated'],
        'timeBased': value['timeBased'],
    };
}
exports.TimeseriesIntervalUnitsInnerToJSON = TimeseriesIntervalUnitsInnerToJSON;
