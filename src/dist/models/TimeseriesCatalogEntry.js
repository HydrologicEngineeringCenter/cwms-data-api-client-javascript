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
exports.TimeSeriesCatalogEntryToJSON = exports.TimeSeriesCatalogEntryFromJSONTyped = exports.TimeSeriesCatalogEntryFromJSON = exports.instanceOfTimeSeriesCatalogEntry = void 0;
const Extents_1 = require("./Extents");
/**
 * Check if a given object implements the TimeSeriesCatalogEntry interface.
 */
function instanceOfTimeSeriesCatalogEntry(value) {
    return true;
}
exports.instanceOfTimeSeriesCatalogEntry = instanceOfTimeSeriesCatalogEntry;
function TimeSeriesCatalogEntryFromJSON(json) {
    return TimeSeriesCatalogEntryFromJSONTyped(json, false);
}
exports.TimeSeriesCatalogEntryFromJSON = TimeSeriesCatalogEntryFromJSON;
function TimeSeriesCatalogEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['office'] == null ? undefined : json['office'],
        'name': json['name'] == null ? undefined : json['name'],
        'units': json['units'] == null ? undefined : json['units'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'intervalOffset': json['interval-offset'] == null ? undefined : json['interval-offset'],
        'timeZone': json['time-zone'] == null ? undefined : json['time-zone'],
        'extents': json['extents'] == null ? undefined : (json['extents'].map(Extents_1.ExtentsFromJSON)),
    };
}
exports.TimeSeriesCatalogEntryFromJSONTyped = TimeSeriesCatalogEntryFromJSONTyped;
function TimeSeriesCatalogEntryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office': value['office'],
        'name': value['name'],
        'units': value['units'],
        'interval': value['interval'],
        'interval-offset': value['intervalOffset'],
        'time-zone': value['timeZone'],
        'extents': value['extents'] == null ? undefined : (value['extents'].map(Extents_1.ExtentsToJSON)),
    };
}
exports.TimeSeriesCatalogEntryToJSON = TimeSeriesCatalogEntryToJSON;
