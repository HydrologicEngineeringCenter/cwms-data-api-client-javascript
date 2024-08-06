"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSeriesIntervalToJSON = exports.TimeSeriesIntervalFromJSONTyped = exports.TimeSeriesIntervalFromJSON = exports.instanceOfTimeSeriesInterval = void 0;
const TimeSeriesIntervalUnitsInner_1 = require("./TimeSeriesIntervalUnitsInner");
/**
 * Check if a given object implements the TimeSeriesInterval interface.
 */
function instanceOfTimeSeriesInterval(value) {
    return true;
}
exports.instanceOfTimeSeriesInterval = instanceOfTimeSeriesInterval;
function TimeSeriesIntervalFromJSON(json) {
    return TimeSeriesIntervalFromJSONTyped(json, false);
}
exports.TimeSeriesIntervalFromJSON = TimeSeriesIntervalFromJSON;
function TimeSeriesIntervalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'seconds': json['seconds'] == null ? undefined : json['seconds'],
        'nano': json['nano'] == null ? undefined : json['nano'],
        'zero': json['zero'] == null ? undefined : json['zero'],
        'units': json['units'] == null ? undefined : (json['units'].map(TimeSeriesIntervalUnitsInner_1.TimeSeriesIntervalUnitsInnerFromJSON)),
        'negative': json['negative'] == null ? undefined : json['negative'],
    };
}
exports.TimeSeriesIntervalFromJSONTyped = TimeSeriesIntervalFromJSONTyped;
function TimeSeriesIntervalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'seconds': value['seconds'],
        'nano': value['nano'],
        'zero': value['zero'],
        'units': value['units'] == null ? undefined : (value['units'].map(TimeSeriesIntervalUnitsInner_1.TimeSeriesIntervalUnitsInnerToJSON)),
        'negative': value['negative'],
    };
}
exports.TimeSeriesIntervalToJSON = TimeSeriesIntervalToJSON;
