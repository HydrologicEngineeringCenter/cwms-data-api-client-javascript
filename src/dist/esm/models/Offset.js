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
 * Check if a given object implements the Offset interface.
 */
export function instanceOfOffset(value) {
    return true;
}
export function OffsetFromJSON(json) {
    return OffsetFromJSONTyped(json, false);
}
export function OffsetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'estimate': json['estimate'] == null ? undefined : json['estimate'],
        'toDatum': json['toDatum'] == null ? undefined : json['toDatum'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}
export function OffsetToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'estimate': value['estimate'],
        'toDatum': value['toDatum'],
        'value': value['value'],
    };
}
