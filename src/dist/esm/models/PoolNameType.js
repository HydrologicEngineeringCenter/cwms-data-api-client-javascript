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
 * Check if a given object implements the PoolNameType interface.
 */
export function instanceOfPoolNameType(value) {
    return true;
}
export function PoolNameTypeFromJSON(json) {
    return PoolNameTypeFromJSONTyped(json, false);
}
export function PoolNameTypeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['officeId'] == null ? undefined : json['officeId'],
        'poolName': json['poolName'] == null ? undefined : json['poolName'],
    };
}
export function PoolNameTypeToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'officeId': value['officeId'],
        'poolName': value['poolName'],
    };
}
