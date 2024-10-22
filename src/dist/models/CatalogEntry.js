"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogEntryToJSON = exports.CatalogEntryFromJSONTyped = exports.CatalogEntryFromJSON = void 0;
const LocationCatalogEntry_1 = require("./LocationCatalogEntry");
const TimeseriesCatalogEntry_1 = require("./TimeseriesCatalogEntry");
function CatalogEntryFromJSON(json) {
    return CatalogEntryFromJSONTyped(json, false);
}
exports.CatalogEntryFromJSON = CatalogEntryFromJSON;
function CatalogEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, LocationCatalogEntry_1.LocationCatalogEntryFromJSONTyped)(json, true)), (0, TimeseriesCatalogEntry_1.TimeseriesCatalogEntryFromJSONTyped)(json, true));
}
exports.CatalogEntryFromJSONTyped = CatalogEntryFromJSONTyped;
function CatalogEntryToJSON(value) {
    if (value == null) {
        return value;
    }
    if ((0, LocationCatalogEntry_1.instanceOfLocationCatalogEntry)(value)) {
        return (0, LocationCatalogEntry_1.LocationCatalogEntryToJSON)(value);
    }
    if ((0, TimeseriesCatalogEntry_1.instanceOfTimeseriesCatalogEntry)(value)) {
        return (0, TimeseriesCatalogEntry_1.TimeseriesCatalogEntryToJSON)(value);
    }
    return {};
}
exports.CatalogEntryToJSON = CatalogEntryToJSON;
