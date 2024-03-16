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
exports.LocationLevelInterpolateStringEnum = exports.LocationLevelParameterTypeIdEnum = exports.LocationLevel = void 0;
var LocationLevel = /** @class */ (function () {
    function LocationLevel() {
    }
    LocationLevel.getAttributeTypeMap = function () {
        return LocationLevel.attributeTypeMap;
    };
    LocationLevel.discriminator = undefined;
    LocationLevel.attributeTypeMap = [
        {
            "name": "officeId",
            "baseName": "office-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationLevelId",
            "baseName": "location-level-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "seasonalTimeSeriesId",
            "baseName": "seasonal-time-series-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "seasonalValues",
            "baseName": "seasonal-values",
            "type": "Array<SeasonalValueBean>",
            "format": ""
        },
        {
            "name": "specifiedLevelId",
            "baseName": "specified-level-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameterTypeId",
            "baseName": "parameter-type-id",
            "type": "LocationLevelParameterTypeIdEnum",
            "format": ""
        },
        {
            "name": "parameterId",
            "baseName": "parameter-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "constantValue",
            "baseName": "constant-value",
            "type": "number",
            "format": "double"
        },
        {
            "name": "levelUnitsId",
            "baseName": "level-units-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "levelDate",
            "baseName": "level-date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "levelComment",
            "baseName": "level-comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "intervalOrigin",
            "baseName": "interval-origin",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "intervalMonths",
            "baseName": "interval-months",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "intervalMinutes",
            "baseName": "interval-minutes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "interpolateString",
            "baseName": "interpolate-string",
            "type": "LocationLevelInterpolateStringEnum",
            "format": ""
        },
        {
            "name": "durationId",
            "baseName": "duration-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeValue",
            "baseName": "attribute-value",
            "type": "number",
            "format": ""
        },
        {
            "name": "attributeUnitsId",
            "baseName": "attribute-units-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeParameterTypeId",
            "baseName": "attribute-parameter-type-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeParameterId",
            "baseName": "attribute-parameter-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeDurationId",
            "baseName": "attribute-duration-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributeComment",
            "baseName": "attribute-comment",
            "type": "string",
            "format": ""
        }
    ];
    return LocationLevel;
}());
exports.LocationLevel = LocationLevel;
var LocationLevelParameterTypeIdEnum;
(function (LocationLevelParameterTypeIdEnum) {
    LocationLevelParameterTypeIdEnum["Inst"] = "Inst";
    LocationLevelParameterTypeIdEnum["Ave"] = "Ave";
    LocationLevelParameterTypeIdEnum["Min"] = "Min";
    LocationLevelParameterTypeIdEnum["Max"] = "Max";
    LocationLevelParameterTypeIdEnum["Total"] = "Total";
})(LocationLevelParameterTypeIdEnum || (exports.LocationLevelParameterTypeIdEnum = LocationLevelParameterTypeIdEnum = {}));
var LocationLevelInterpolateStringEnum;
(function (LocationLevelInterpolateStringEnum) {
    LocationLevelInterpolateStringEnum["T"] = "T";
    LocationLevelInterpolateStringEnum["F"] = "F";
})(LocationLevelInterpolateStringEnum || (exports.LocationLevelInterpolateStringEnum = LocationLevelInterpolateStringEnum = {}));