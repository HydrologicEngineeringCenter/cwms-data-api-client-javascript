"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSpecsToJSON = exports.RatingSpecsFromJSONTyped = exports.RatingSpecsFromJSON = exports.instanceOfRatingSpecs = void 0;
const RatingSpec_1 = require("./RatingSpec");
/**
 * Check if a given object implements the RatingSpecs interface.
 */
function instanceOfRatingSpecs(value) {
    return true;
}
exports.instanceOfRatingSpecs = instanceOfRatingSpecs;
function RatingSpecsFromJSON(json) {
    return RatingSpecsFromJSONTyped(json, false);
}
exports.RatingSpecsFromJSON = RatingSpecsFromJSON;
function RatingSpecsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
        'specs': json['specs'] == null ? undefined : (json['specs'].map(RatingSpec_1.RatingSpecFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
    };
}
exports.RatingSpecsFromJSONTyped = RatingSpecsFromJSONTyped;
function RatingSpecsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'specs': value['specs'] == null ? undefined : (value['specs'].map(RatingSpec_1.RatingSpecToJSON)),
    };
}
exports.RatingSpecsToJSON = RatingSpecsToJSON;
