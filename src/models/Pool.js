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
exports.Pool = void 0;
/**
* List of retrieved pools
*/
var Pool = /** @class */ (function () {
    function Pool() {
    }
    Pool.getAttributeTypeMap = function () {
        return Pool.attributeTypeMap;
    };
    Pool.discriminator = undefined;
    Pool.attributeTypeMap = [
        {
            "name": "attribute",
            "baseName": "attribute",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "clobText",
            "baseName": "clobText",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "bottomLevelId",
            "baseName": "bottomLevelId",
            "type": "string",
            "format": ""
        },
        {
            "name": "topLevelId",
            "baseName": "topLevelId",
            "type": "string",
            "format": ""
        },
        {
            "name": "poolName",
            "baseName": "poolName",
            "type": "PoolNameType",
            "format": ""
        },
        {
            "name": "implicit",
            "baseName": "implicit",
            "type": "boolean",
            "format": ""
        }
    ];
    return Pool;
}());
exports.Pool = Pool;
