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
exports.VerticalDatumInfo = void 0;
var VerticalDatumInfo = /** @class */ (function () {
    function VerticalDatumInfo() {
    }
    VerticalDatumInfo.getAttributeTypeMap = function () {
        return VerticalDatumInfo.attributeTypeMap;
    };
    VerticalDatumInfo.discriminator = undefined;
    VerticalDatumInfo.attributeTypeMap = [
        {
            "name": "office",
            "baseName": "office",
            "type": "string",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "nativeDatum",
            "baseName": "native-datum",
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
            "name": "offsets",
            "baseName": "offsets",
            "type": "Array<Offset>",
            "format": ""
        }
    ];
    return VerticalDatumInfo;
}());
exports.VerticalDatumInfo = VerticalDatumInfo;
