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
exports.PoolNameTypeToJSON = exports.PoolNameTypeFromJSONTyped = exports.PoolNameTypeFromJSON = exports.instanceOfPoolNameType = void 0;
/**
 * Check if a given object implements the PoolNameType interface.
 */
function instanceOfPoolNameType(value) {
    return true;
}
exports.instanceOfPoolNameType = instanceOfPoolNameType;
function PoolNameTypeFromJSON(json) {
    return PoolNameTypeFromJSONTyped(json, false);
}
exports.PoolNameTypeFromJSON = PoolNameTypeFromJSON;
function PoolNameTypeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['officeId'] == null ? undefined : json['officeId'],
        'poolName': json['poolName'] == null ? undefined : json['poolName'],
    };
}
exports.PoolNameTypeFromJSONTyped = PoolNameTypeFromJSONTyped;
function PoolNameTypeToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'officeId': value['officeId'],
        'poolName': value['poolName'],
    };
}
exports.PoolNameTypeToJSON = PoolNameTypeToJSON;