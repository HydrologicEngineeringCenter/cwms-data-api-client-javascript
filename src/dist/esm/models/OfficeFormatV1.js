/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OfficesFMTFromJSON, OfficesFMTToJSON, } from './OfficesFMT';
/**
 * Check if a given object implements the OfficeFormatV1 interface.
 */
export function instanceOfOfficeFormatV1(value) {
    return true;
}
export function OfficeFormatV1FromJSON(json) {
    return OfficeFormatV1FromJSONTyped(json, false);
}
export function OfficeFormatV1FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'offices': json['offices'] == null ? undefined : OfficesFMTFromJSON(json['offices']),
    };
}
export function OfficeFormatV1ToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'offices': OfficesFMTToJSON(value['offices']),
    };
}
