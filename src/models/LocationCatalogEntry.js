"use strict";
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * OpenAPI spec version: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCatalogEntry = void 0;
var LocationCatalogEntry = /** @class */ (function () {
    function LocationCatalogEntry() {
    }
    LocationCatalogEntry.getAttributeTypeMap = function () {
        return LocationCatalogEntry.attributeTypeMap;
    };
    LocationCatalogEntry.discriminator = undefined;
    LocationCatalogEntry.attributeTypeMap = [
        {
            "name": "office",
            "baseName": "office",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nearestCity",
            "baseName": "nearestCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicName",
            "baseName": "publicName",
            "type": "string",
            "format": ""
        },
        {
            "name": "longName",
            "baseName": "longName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string",
            "format": ""
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "publishedLatitude",
            "baseName": "publishedLatitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "publishedLongitude",
            "baseName": "publishedLongitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "horizontalDatum",
            "baseName": "horizontalDatum",
            "type": "string",
            "format": ""
        },
        {
            "name": "elevation",
            "baseName": "elevation",
            "type": "number",
            "format": "double"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "verticalDatum",
            "baseName": "verticalDatum",
            "type": "string",
            "format": ""
        },
        {
            "name": "nation",
            "baseName": "nation",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "string",
            "format": ""
        },
        {
            "name": "boundingOffice",
            "baseName": "boundingOffice",
            "type": "string",
            "format": ""
        },
        {
            "name": "mapLabel",
            "baseName": "mapLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "aliases",
            "baseName": "aliases",
            "type": "Array<LocationAlias>",
            "format": ""
        }
    ];
    return LocationCatalogEntry;
}());
exports.LocationCatalogEntry = LocationCatalogEntry;
