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
exports.RatingSpecToJSON = exports.RatingSpecFromJSONTyped = exports.RatingSpecFromJSON = exports.instanceOfRatingSpec = void 0;
const IndependentRoundingSpec_1 = require("./IndependentRoundingSpec");
/**
 * Check if a given object implements the RatingSpec interface.
 */
function instanceOfRatingSpec(value) {
    if (!('officeId' in value))
        return false;
    return true;
}
exports.instanceOfRatingSpec = instanceOfRatingSpec;
function RatingSpecFromJSON(json) {
    return RatingSpecFromJSONTyped(json, false);
}
exports.RatingSpecFromJSON = RatingSpecFromJSON;
function RatingSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'ratingId': json['rating-id'] == null ? undefined : json['rating-id'],
        'templateId': json['template-id'] == null ? undefined : json['template-id'],
        'locationId': json['location-id'] == null ? undefined : json['location-id'],
        'version': json['version'] == null ? undefined : json['version'],
        'sourceAgency': json['source-agency'] == null ? undefined : json['source-agency'],
        'inRangeMethod': json['in-range-method'] == null ? undefined : json['in-range-method'],
        'outRangeLowMethod': json['out-range-low-method'] == null ? undefined : json['out-range-low-method'],
        'outRangeHighMethod': json['out-range-high-method'] == null ? undefined : json['out-range-high-method'],
        'active': json['active'] == null ? undefined : json['active'],
        'autoUpdate': json['auto-update'] == null ? undefined : json['auto-update'],
        'autoActivate': json['auto-activate'] == null ? undefined : json['auto-activate'],
        'autoMigrateExtension': json['auto-migrate-extension'] == null ? undefined : json['auto-migrate-extension'],
        'independentRoundingSpecs': json['independent-rounding-specs'] == null ? undefined : (json['independent-rounding-specs'].map(IndependentRoundingSpec_1.IndependentRoundingSpecFromJSON)),
        'dependentRoundingSpec': json['dependent-rounding-spec'] == null ? undefined : json['dependent-rounding-spec'],
        'description': json['description'] == null ? undefined : json['description'],
        'effectiveDates': json['effective-dates'] == null ? undefined : json['effective-dates'],
    };
}
exports.RatingSpecFromJSONTyped = RatingSpecFromJSONTyped;
function RatingSpecToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'rating-id': value['ratingId'],
        'template-id': value['templateId'],
        'location-id': value['locationId'],
        'version': value['version'],
        'source-agency': value['sourceAgency'],
        'in-range-method': value['inRangeMethod'],
        'out-range-low-method': value['outRangeLowMethod'],
        'out-range-high-method': value['outRangeHighMethod'],
        'active': value['active'],
        'auto-update': value['autoUpdate'],
        'auto-activate': value['autoActivate'],
        'auto-migrate-extension': value['autoMigrateExtension'],
        'independent-rounding-specs': value['independentRoundingSpecs'] == null ? undefined : (value['independentRoundingSpecs'].map(IndependentRoundingSpec_1.IndependentRoundingSpecToJSON)),
        'dependent-rounding-spec': value['dependentRoundingSpec'],
        'description': value['description'],
        'effective-dates': value['effectiveDates'],
    };
}
exports.RatingSpecToJSON = RatingSpecToJSON;
