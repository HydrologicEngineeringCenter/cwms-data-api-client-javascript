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
exports.TimeSeriesInterval = void 0;
/**
* The interval of the time-series, in ISO-8601 duration format
*/
var TimeSeriesInterval = /** @class */ (function () {
    function TimeSeriesInterval() {
    }
    TimeSeriesInterval.getAttributeTypeMap = function () {
        return TimeSeriesInterval.attributeTypeMap;
    };
    TimeSeriesInterval.discriminator = undefined;
    TimeSeriesInterval.attributeTypeMap = [
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nano",
            "baseName": "nano",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "zero",
            "baseName": "zero",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "Array<TimeSeriesIntervalUnitsInner>",
            "format": ""
        },
        {
            "name": "negative",
            "baseName": "negative",
            "type": "boolean",
            "format": ""
        }
    ];
    return TimeSeriesInterval;
}());
exports.TimeSeriesInterval = TimeSeriesInterval;
