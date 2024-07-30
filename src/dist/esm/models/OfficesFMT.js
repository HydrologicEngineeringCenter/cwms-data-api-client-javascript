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
import { OfficeFromJSON, OfficeToJSON, } from './Office';
/**
 * Check if a given object implements the OfficesFMT interface.
 */
export function instanceOfOfficesFMT(value) {
    return true;
}
export function OfficesFMTFromJSON(json) {
    return OfficesFMTFromJSONTyped(json, false);
}
export function OfficesFMTFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'offices': json['offices'] == null ? undefined : (json['offices'].map(OfficeFromJSON)),
    };
}
export function OfficesFMTToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'offices': value['offices'] == null ? undefined : (value['offices'].map(OfficeToJSON)),
    };
}
