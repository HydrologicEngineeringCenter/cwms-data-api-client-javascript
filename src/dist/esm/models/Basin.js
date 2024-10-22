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
import { CwmsIdFromJSON, CwmsIdToJSON, } from './CwmsId';
/**
 * Check if a given object implements the Basin interface.
 */
export function instanceOfBasin(value) {
    if (!('basinId' in value))
        return false;
    return true;
}
export function BasinFromJSON(json) {
    return BasinFromJSONTyped(json, false);
}
export function BasinFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'basinId': CwmsIdFromJSON(json['basin-id']),
        'sortOrder': json['sort-order'] == null ? undefined : json['sort-order'],
        'totalDrainageArea': json['total-drainage-area'] == null ? undefined : json['total-drainage-area'],
        'contributingDrainageArea': json['contributing-drainage-area'] == null ? undefined : json['contributing-drainage-area'],
        'parentBasinId': json['parent-basin-id'] == null ? undefined : CwmsIdFromJSON(json['parent-basin-id']),
        'areaUnit': json['area-unit'] == null ? undefined : json['area-unit'],
        'primaryStreamId': json['primary-stream-id'] == null ? undefined : CwmsIdFromJSON(json['primary-stream-id']),
    };
}
export function BasinToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'basin-id': CwmsIdToJSON(value['basinId']),
        'sort-order': value['sortOrder'],
        'total-drainage-area': value['totalDrainageArea'],
        'contributing-drainage-area': value['contributingDrainageArea'],
        'parent-basin-id': CwmsIdToJSON(value['parentBasinId']),
        'area-unit': value['areaUnit'],
        'primary-stream-id': CwmsIdToJSON(value['primaryStreamId']),
    };
}
