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
exports.TabV1OfficeToJSON = exports.TabV1OfficeFromJSONTyped = exports.TabV1OfficeFromJSON = exports.instanceOfTabV1Office = void 0;
/**
 * Check if a given object implements the TabV1Office interface.
 */
function instanceOfTabV1Office(value) {
    return true;
}
exports.instanceOfTabV1Office = instanceOfTabV1Office;
function TabV1OfficeFromJSON(json) {
    return TabV1OfficeFromJSONTyped(json, false);
}
exports.TabV1OfficeFromJSON = TabV1OfficeFromJSON;
function TabV1OfficeFromJSONTyped(json, ignoreDiscriminator) {
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
exports.TabV1OfficeFromJSONTyped = TabV1OfficeFromJSONTyped;
function TabV1OfficeToJSON(value) {
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
exports.TabV1OfficeToJSON = TabV1OfficeToJSON;