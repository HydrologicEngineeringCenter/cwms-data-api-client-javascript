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
import { PoolNameTypeFromJSON, PoolNameTypeToJSON, } from './PoolNameType';
/**
 * Check if a given object implements the Pool interface.
 */
export function instanceOfPool(value) {
    return true;
}
export function PoolFromJSON(json) {
    return PoolFromJSONTyped(json, false);
}
export function PoolFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attribute': json['attribute'] == null ? undefined : json['attribute'],
        'description': json['description'] == null ? undefined : json['description'],
        'clobText': json['clobText'] == null ? undefined : json['clobText'],
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'bottomLevelId': json['bottomLevelId'] == null ? undefined : json['bottomLevelId'],
        'topLevelId': json['topLevelId'] == null ? undefined : json['topLevelId'],
        'poolName': json['poolName'] == null ? undefined : PoolNameTypeFromJSON(json['poolName']),
        'implicit': json['implicit'] == null ? undefined : json['implicit'],
    };
}
export function PoolToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'attribute': value['attribute'],
        'description': value['description'],
        'clobText': value['clobText'],
        'projectId': value['projectId'],
        'bottomLevelId': value['bottomLevelId'],
        'topLevelId': value['topLevelId'],
        'poolName': PoolNameTypeToJSON(value['poolName']),
        'implicit': value['implicit'],
    };
}
