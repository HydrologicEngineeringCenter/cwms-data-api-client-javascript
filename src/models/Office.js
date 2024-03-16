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
exports.OfficeTypeEnum = exports.Office = void 0;
/**
* A representation of a CWMS office
*/
var Office = /** @class */ (function () {
    function Office() {
    }
    Office.getAttributeTypeMap = function () {
        return Office.attributeTypeMap;
    };
    Office.discriminator = undefined;
    Office.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "type",
            "baseName": "type",
            "type": "OfficeTypeEnum",
            "format": ""
        },
        {
            "name": "reportsTo",
            "baseName": "reportsTo",
            "type": "string",
            "format": ""
        }
    ];
    return Office;
}());
exports.Office = Office;
var OfficeTypeEnum;
(function (OfficeTypeEnum) {
    OfficeTypeEnum["Unknown"] = "unknown";
    OfficeTypeEnum["CorpsHeadquarters"] = "corps headquarters";
    OfficeTypeEnum["DivisionHeadquarters"] = "division headquarters";
    OfficeTypeEnum["DivisionRegional"] = "division regional";
    OfficeTypeEnum["District"] = "district";
    OfficeTypeEnum["FiledOperatingActivity"] = "filed operating activity";
})(OfficeTypeEnum || (exports.OfficeTypeEnum = OfficeTypeEnum = {}));