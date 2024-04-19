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
exports.LocationCatalogEntryToJSON = exports.LocationCatalogEntryFromJSONTyped = exports.LocationCatalogEntryFromJSON = exports.instanceOfLocationCatalogEntry = void 0;
const LocationAlias_1 = require("./LocationAlias");
/**
 * Check if a given object implements the LocationCatalogEntry interface.
 */
function instanceOfLocationCatalogEntry(value) {
    return true;
}
exports.instanceOfLocationCatalogEntry = instanceOfLocationCatalogEntry;
function LocationCatalogEntryFromJSON(json) {
    return LocationCatalogEntryFromJSONTyped(json, false);
}
exports.LocationCatalogEntryFromJSON = LocationCatalogEntryFromJSON;
function LocationCatalogEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['office'] == null ? undefined : json['office'],
        'name': json['name'] == null ? undefined : json['name'],
        'nearestCity': json['nearestCity'] == null ? undefined : json['nearestCity'],
        'publicName': json['publicName'] == null ? undefined : json['publicName'],
        'longName': json['longName'] == null ? undefined : json['longName'],
        'description': json['description'] == null ? undefined : json['description'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'type': json['type'] == null ? undefined : json['type'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'publishedLatitude': json['publishedLatitude'] == null ? undefined : json['publishedLatitude'],
        'publishedLongitude': json['publishedLongitude'] == null ? undefined : json['publishedLongitude'],
        'horizontalDatum': json['horizontalDatum'] == null ? undefined : json['horizontalDatum'],
        'elevation': json['elevation'] == null ? undefined : json['elevation'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'verticalDatum': json['verticalDatum'] == null ? undefined : json['verticalDatum'],
        'nation': json['nation'] == null ? undefined : json['nation'],
        'state': json['state'] == null ? undefined : json['state'],
        'county': json['county'] == null ? undefined : json['county'],
        'boundingOffice': json['boundingOffice'] == null ? undefined : json['boundingOffice'],
        'mapLabel': json['mapLabel'] == null ? undefined : json['mapLabel'],
        'active': json['active'] == null ? undefined : json['active'],
        'aliases': json['aliases'] == null ? undefined : (json['aliases'].map(LocationAlias_1.LocationAliasFromJSON)),
    };
}
exports.LocationCatalogEntryFromJSONTyped = LocationCatalogEntryFromJSONTyped;
function LocationCatalogEntryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office': value['office'],
        'name': value['name'],
        'nearestCity': value['nearestCity'],
        'publicName': value['publicName'],
        'longName': value['longName'],
        'description': value['description'],
        'kind': value['kind'],
        'type': value['type'],
        'timeZone': value['timeZone'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'publishedLatitude': value['publishedLatitude'],
        'publishedLongitude': value['publishedLongitude'],
        'horizontalDatum': value['horizontalDatum'],
        'elevation': value['elevation'],
        'unit': value['unit'],
        'verticalDatum': value['verticalDatum'],
        'nation': value['nation'],
        'state': value['state'],
        'county': value['county'],
        'boundingOffice': value['boundingOffice'],
        'mapLabel': value['mapLabel'],
        'active': value['active'],
        'aliases': value['aliases'] == null ? undefined : (value['aliases'].map(LocationAlias_1.LocationAliasToJSON)),
    };
}
exports.LocationCatalogEntryToJSON = LocationCatalogEntryToJSON;
