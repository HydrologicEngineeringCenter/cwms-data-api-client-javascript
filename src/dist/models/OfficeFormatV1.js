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
exports.OfficeFormatV1ToJSON = exports.OfficeFormatV1FromJSONTyped = exports.OfficeFormatV1FromJSON = exports.instanceOfOfficeFormatV1 = void 0;
const OfficesFMT_1 = require("./OfficesFMT");
/**
 * Check if a given object implements the OfficeFormatV1 interface.
 */
function instanceOfOfficeFormatV1(value) {
    return true;
}
exports.instanceOfOfficeFormatV1 = instanceOfOfficeFormatV1;
function OfficeFormatV1FromJSON(json) {
    return OfficeFormatV1FromJSONTyped(json, false);
}
exports.OfficeFormatV1FromJSON = OfficeFormatV1FromJSON;
function OfficeFormatV1FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'offices': json['offices'] == null ? undefined : (0, OfficesFMT_1.OfficesFMTFromJSON)(json['offices']),
    };
}
exports.OfficeFormatV1FromJSONTyped = OfficeFormatV1FromJSONTyped;
function OfficeFormatV1ToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'offices': (0, OfficesFMT_1.OfficesFMTToJSON)(value['offices']),
    };
}
exports.OfficeFormatV1ToJSON = OfficeFormatV1ToJSON;
