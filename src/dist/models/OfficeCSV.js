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
exports.OfficeCSVToJSON = exports.OfficeCSVFromJSONTyped = exports.OfficeCSVFromJSON = exports.instanceOfOfficeCSV = void 0;
/**
 * Check if a given object implements the OfficeCSV interface.
 */
function instanceOfOfficeCSV(value) {
    return true;
}
exports.instanceOfOfficeCSV = instanceOfOfficeCSV;
function OfficeCSVFromJSON(json) {
    return OfficeCSVFromJSONTyped(json, false);
}
exports.OfficeCSVFromJSON = OfficeCSVFromJSON;
function OfficeCSVFromJSONTyped(json, ignoreDiscriminator) {
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
exports.OfficeCSVFromJSONTyped = OfficeCSVFromJSONTyped;
function OfficeCSVToJSON(value) {
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
exports.OfficeCSVToJSON = OfficeCSVToJSON;
