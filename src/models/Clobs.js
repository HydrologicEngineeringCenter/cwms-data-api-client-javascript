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
exports.Clobs = void 0;
var Clobs = /** @class */ (function () {
    function Clobs() {
    }
    Clobs.getAttributeTypeMap = function () {
        return Clobs.attributeTypeMap;
    };
    Clobs.discriminator = undefined;
    Clobs.attributeTypeMap = [
        {
            "name": "page",
            "baseName": "page",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "clobs",
            "baseName": "clobs",
            "type": "Array<Clob>",
            "format": ""
        },
        {
            "name": "nextPage",
            "baseName": "next-page",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page-size",
            "type": "number",
            "format": "int32"
        }
    ];
    return Clobs;
}());
exports.Clobs = Clobs;