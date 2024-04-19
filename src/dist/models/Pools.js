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
exports.PoolsToJSON = exports.PoolsFromJSONTyped = exports.PoolsFromJSON = exports.instanceOfPools = void 0;
const Pool_1 = require("./Pool");
/**
 * Check if a given object implements the Pools interface.
 */
function instanceOfPools(value) {
    return true;
}
exports.instanceOfPools = instanceOfPools;
function PoolsFromJSON(json) {
    return PoolsFromJSONTyped(json, false);
}
exports.PoolsFromJSON = PoolsFromJSON;
function PoolsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'pools': json['pools'] == null ? undefined : (json['pools'].map(Pool_1.PoolFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}
exports.PoolsFromJSONTyped = PoolsFromJSONTyped;
function PoolsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'pools': value['pools'] == null ? undefined : (value['pools'].map(Pool_1.PoolToJSON)),
    };
}
exports.PoolsToJSON = PoolsToJSON;
