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
import { OffsetFromJSON, OffsetToJSON, } from './Offset';
/**
 * Check if a given object implements the VerticalDatumInfo interface.
 */
export function instanceOfVerticalDatumInfo(value) {
    return true;
}
export function VerticalDatumInfoFromJSON(json) {
    return VerticalDatumInfoFromJSONTyped(json, false);
}
export function VerticalDatumInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['office'] == null ? undefined : json['office'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'location': json['location'] == null ? undefined : json['location'],
        'nativeDatum': json['native-datum'] == null ? undefined : json['native-datum'],
        'elevation': json['elevation'] == null ? undefined : json['elevation'],
        'offsets': json['offsets'] == null ? undefined : (json['offsets'].map(OffsetFromJSON)),
    };
}
export function VerticalDatumInfoToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office': value['office'],
        'unit': value['unit'],
        'location': value['location'],
        'native-datum': value['nativeDatum'],
        'elevation': value['elevation'],
        'offsets': value['offsets'] == null ? undefined : (value['offsets'].map(OffsetToJSON)),
    };
}
