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
exports.ApiKeyToJSON = exports.ApiKeyFromJSONTyped = exports.ApiKeyFromJSON = exports.instanceOfApiKey = void 0;
/**
 * Check if a given object implements the ApiKey interface.
 */
function instanceOfApiKey(value) {
    if (!('userId' in value))
        return false;
    if (!('keyName' in value))
        return false;
    return true;
}
exports.instanceOfApiKey = instanceOfApiKey;
function ApiKeyFromJSON(json) {
    return ApiKeyFromJSONTyped(json, false);
}
exports.ApiKeyFromJSON = ApiKeyFromJSON;
function ApiKeyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'userId': json['user-id'],
        'keyName': json['key-name'],
        'apiKey': json['api-key'] == null ? undefined : json['api-key'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'expires': json['expires'] == null ? undefined : (new Date(json['expires'])),
    };
}
exports.ApiKeyFromJSONTyped = ApiKeyFromJSONTyped;
function ApiKeyToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'user-id': value['userId'],
        'key-name': value['keyName'],
        'api-key': value['apiKey'],
        'expires': value['expires'] == null ? undefined : ((value['expires']).toISOString()),
    };
}
exports.ApiKeyToJSON = ApiKeyToJSON;