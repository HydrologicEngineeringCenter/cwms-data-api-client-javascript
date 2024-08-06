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
import { TimeSeriesIntervalUnitsInnerDurationFromJSON, TimeSeriesIntervalUnitsInnerDurationToJSON, } from './TimeSeriesIntervalUnitsInnerDuration';
/**
 * Check if a given object implements the TimeSeriesIntervalUnitsInner interface.
 */
export function instanceOfTimeSeriesIntervalUnitsInner(value) {
    return true;
}
export function TimeSeriesIntervalUnitsInnerFromJSON(json) {
    return TimeSeriesIntervalUnitsInnerFromJSONTyped(json, false);
}
export function TimeSeriesIntervalUnitsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'duration': json['duration'] == null ? undefined : TimeSeriesIntervalUnitsInnerDurationFromJSON(json['duration']),
        'durationEstimated': json['durationEstimated'] == null ? undefined : json['durationEstimated'],
        'dateBased': json['dateBased'] == null ? undefined : json['dateBased'],
        'timeBased': json['timeBased'] == null ? undefined : json['timeBased'],
    };
}
export function TimeSeriesIntervalUnitsInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'duration': TimeSeriesIntervalUnitsInnerDurationToJSON(value['duration']),
        'durationEstimated': value['durationEstimated'],
        'dateBased': value['dateBased'],
        'timeBased': value['timeBased'],
    };
}
