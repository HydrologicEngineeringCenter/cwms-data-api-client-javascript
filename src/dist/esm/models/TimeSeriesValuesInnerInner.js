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
/**
 * Check if a given object implements the TimeSeriesValuesInnerInner interface.
 */
export function instanceOfTimeSeriesValuesInnerInner(value) {
    return true;
}
export function TimeSeriesValuesInnerInnerFromJSON(json) {
    return TimeSeriesValuesInnerInnerFromJSONTyped(json, false);
}
export function TimeSeriesValuesInnerInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}
export function TimeSeriesValuesInnerInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}
