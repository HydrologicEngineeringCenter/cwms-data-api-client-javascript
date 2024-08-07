"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogToJSON = exports.CatalogFromJSONTyped = exports.CatalogFromJSON = exports.instanceOfCatalog = void 0;
const CatalogEntry_1 = require("./CatalogEntry");
/**
 * Check if a given object implements the Catalog interface.
 */
function instanceOfCatalog(value) {
    return true;
}
exports.instanceOfCatalog = instanceOfCatalog;
function CatalogFromJSON(json) {
    return CatalogFromJSONTyped(json, false);
}
exports.CatalogFromJSON = CatalogFromJSON;
function CatalogFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'page': json['page'] == null ? undefined : json['page'],
        'total': json['total'] == null ? undefined : json['total'],
        'entries': json['entries'] == null ? undefined : (json['entries'].map(CatalogEntry_1.CatalogEntryFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
    };
}
exports.CatalogFromJSONTyped = CatalogFromJSONTyped;
function CatalogToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'entries': value['entries'] == null ? undefined : (value['entries'].map(CatalogEntry_1.CatalogEntryToJSON)),
    };
}
exports.CatalogToJSON = CatalogToJSON;
