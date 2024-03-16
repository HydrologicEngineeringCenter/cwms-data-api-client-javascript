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
exports.Offset = void 0;
var Offset = /** @class */ (function () {
    function Offset() {
    }
    Offset.getAttributeTypeMap = function () {
        return Offset.attributeTypeMap;
    };
    Offset.discriminator = undefined;
    Offset.attributeTypeMap = [
        {
            "name": "estimate",
            "baseName": "estimate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "toDatum",
            "baseName": "toDatum",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "double"
        }
    ];
    return Offset;
}());
exports.Offset = Offset;