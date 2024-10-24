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
 * Check if a given object implements the ApiKey interface.
 */
export function instanceOfApiKey(value) {
    if (!('userId' in value))
        return false;
    if (!('keyName' in value))
        return false;
    return true;
}
export function ApiKeyFromJSON(json) {
    return ApiKeyFromJSONTyped(json, false);
}
export function ApiKeyFromJSONTyped(json, ignoreDiscriminator) {
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
export function ApiKeyToJSON(value) {
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
