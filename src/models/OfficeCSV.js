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
exports.OfficeCSV = void 0;
/**
* Single Office or List of Offices in comma separated format
*/
var OfficeCSV = /** @class */ (function () {
    function OfficeCSV() {
    }
    OfficeCSV.getAttributeTypeMap = function () {
        return OfficeCSV.attributeTypeMap;
    };
    OfficeCSV.discriminator = undefined;
    OfficeCSV.attributeTypeMap = [
        {
            "name": "office",
            "baseName": "Office",
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
            "name": "officeType",
            "baseName": "officeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportsToOffice",
            "baseName": "reportsToOffice",
            "type": "string",
            "format": ""
        }
    ];
    return OfficeCSV;
}());
exports.OfficeCSV = OfficeCSV;
