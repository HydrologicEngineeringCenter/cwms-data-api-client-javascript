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
exports.ClobToJSON = exports.ClobFromJSONTyped = exports.ClobFromJSON = exports.instanceOfClob = void 0;
/**
 * Check if a given object implements the Clob interface.
 */
function instanceOfClob(value) {
    if (!('officeId' in value))
        return false;
    if (!('id' in value))
        return false;
    return true;
}
exports.instanceOfClob = instanceOfClob;
function ClobFromJSON(json) {
    return ClobFromJSONTyped(json, false);
}
exports.ClobFromJSON = ClobFromJSON;
function ClobFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'id': json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}
exports.ClobFromJSONTyped = ClobFromJSONTyped;
function ClobToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
        'value': value['value'],
    };
}
exports.ClobToJSON = ClobToJSON;
