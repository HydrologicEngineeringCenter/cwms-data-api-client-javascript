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
/**
 * Check if a given object implements the OfficeCSV interface.
 */
export function instanceOfOfficeCSV(value) {
    return true;
}
export function OfficeCSVFromJSON(json) {
    return OfficeCSVFromJSONTyped(json, false);
}
export function OfficeCSVFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['Office'] == null ? undefined : json['Office'],
        'longName': json['longName'] == null ? undefined : json['longName'],
        'officeType': json['officeType'] == null ? undefined : json['officeType'],
        'reportsToOffice': json['reportsToOffice'] == null ? undefined : json['reportsToOffice'],
    };
}
export function OfficeCSVToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'Office': value['office'],
        'longName': value['longName'],
        'officeType': value['officeType'],
        'reportsToOffice': value['reportsToOffice'],
    };
}
