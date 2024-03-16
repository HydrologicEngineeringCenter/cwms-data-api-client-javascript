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
exports.LocationNationEnum = exports.Location = void 0;
var Location = /** @class */ (function () {
    function Location() {
    }
    Location.getAttributeTypeMap = function () {
        return Location.attributeTypeMap;
    };
    Location.discriminator = undefined;
    Location.attributeTypeMap = [
        {
            "name": "officeId",
            "baseName": "office-id",
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
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicName",
            "baseName": "public-name",
            "type": "string",
            "format": ""
        },
        {
            "name": "longName",
            "baseName": "long-name",
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
            "name": "timezoneName",
            "baseName": "timezone-name",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationType",
            "baseName": "location-type",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationKind",
            "baseName": "location-kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "nation",
            "baseName": "nation",
            "type": "LocationNationEnum",
            "format": ""
        },
        {
            "name": "stateInitial",
            "baseName": "state-initial",
            "type": "string",
            "format": ""
        },
        {
            "name": "countyName",
            "baseName": "county-name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nearestCity",
            "baseName": "nearest-city",
            "type": "string",
            "format": ""
        },
        {
            "name": "horizontalDatum",
            "baseName": "horizontal-datum",
            "type": "string",
            "format": ""
        },
        {
            "name": "publishedLongitude",
            "baseName": "published-longitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "publishedLatitude",
            "baseName": "published-latitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "verticalDatum",
            "baseName": "vertical-datum",
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
            "name": "mapLabel",
            "baseName": "map-label",
            "type": "string",
            "format": ""
        },
        {
            "name": "boundingOfficeId",
            "baseName": "bounding-office-id",
            "type": "string",
            "format": ""
        }
    ];
    return Location;
}());
exports.Location = Location;
var LocationNationEnum;
(function (LocationNationEnum) {
    LocationNationEnum["Us"] = "US";
    LocationNationEnum["Canada"] = "CANADA";
    LocationNationEnum["Mexico"] = "MEXICO";
})(LocationNationEnum || (exports.LocationNationEnum = LocationNationEnum = {}));