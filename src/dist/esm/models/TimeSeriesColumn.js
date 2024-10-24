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
 * Check if a given object implements the TimeseriesColumn interface.
 */
export function instanceOfTimeseriesColumn(value) {
    return true;
}
export function TimeseriesColumnFromJSON(json) {
    return TimeseriesColumnFromJSONTyped(json, false);
}
export function TimeseriesColumnFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'ordinal': json['ordinal'] == null ? undefined : json['ordinal'],
        'datatype': json['datatype'] == null ? undefined : json['datatype'],
    };
}
export function TimeseriesColumnToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'ordinal': value['ordinal'],
        'datatype': value['datatype'],
    };
}
