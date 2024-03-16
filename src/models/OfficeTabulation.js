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
exports.OfficeTabulation = void 0;
/**
* Single Office or List of Offices in tab separated format
*/
var OfficeTabulation = /** @class */ (function () {
    function OfficeTabulation() {
    }
    OfficeTabulation.getAttributeTypeMap = function () {
        return OfficeTabulation.attributeTypeMap;
    };
    OfficeTabulation.discriminator = undefined;
    OfficeTabulation.attributeTypeMap = [
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
    return OfficeTabulation;
}());
exports.OfficeTabulation = OfficeTabulation;
