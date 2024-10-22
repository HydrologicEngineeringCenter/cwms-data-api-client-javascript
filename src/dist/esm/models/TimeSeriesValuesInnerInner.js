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
/**
 * Check if a given object implements the TimeseriesValuesInnerInner interface.
 */
export function instanceOfTimeseriesValuesInnerInner(value) {
    return true;
}
export function TimeseriesValuesInnerInnerFromJSON(json) {
    return TimeseriesValuesInnerInnerFromJSONTyped(json, false);
}
export function TimeseriesValuesInnerInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dateTime': json['date-time'] == null ? undefined : json['date-time'],
        'value': json['value'] == null ? undefined : json['value'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
    };
}
export function TimeseriesValuesInnerInnerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'date-time': value['dateTime'],
        'value': value['value'],
        'quality-code': value['qualityCode'],
    };
}
