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
import { PoolFromJSON, PoolToJSON, } from './Pool';
/**
 * Check if a given object implements the Pools interface.
 */
export function instanceOfPools(value) {
    return true;
}
export function PoolsFromJSON(json) {
    return PoolsFromJSONTyped(json, false);
}
export function PoolsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'pools': json['pools'] == null ? undefined : (json['pools'].map(PoolFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}
export function PoolsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'pools': value['pools'] == null ? undefined : (value['pools'].map(PoolToJSON)),
    };
}