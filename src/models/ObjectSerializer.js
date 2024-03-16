"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AbstractRatingMetadata"), exports);
__exportStar(require("../models/ApiKey"), exports);
__exportStar(require("../models/AssignedLocation"), exports);
__exportStar(require("../models/AssignedTimeSeries"), exports);
__exportStar(require("../models/Basin"), exports);
__exportStar(require("../models/Blob"), exports);
__exportStar(require("../models/Blobs"), exports);
__exportStar(require("../models/Catalog"), exports);
__exportStar(require("../models/CatalogEntry"), exports);
__exportStar(require("../models/CatalogableEndpoint"), exports);
__exportStar(require("../models/CdaError"), exports);
__exportStar(require("../models/Clob"), exports);
__exportStar(require("../models/Clobs"), exports);
__exportStar(require("../models/County"), exports);
__exportStar(require("../models/CsvV1Office"), exports);
__exportStar(require("../models/DatabaseLoadMethod"), exports);
__exportStar(require("../models/DeleteMethod"), exports);
__exportStar(require("../models/ExpressionRating"), exports);
__exportStar(require("../models/IndependentRoundingSpec"), exports);
__exportStar(require("../models/Location"), exports);
__exportStar(require("../models/LocationAlias"), exports);
__exportStar(require("../models/LocationCatalogEntry"), exports);
__exportStar(require("../models/LocationCategory"), exports);
__exportStar(require("../models/LocationGroup"), exports);
__exportStar(require("../models/LocationLevel"), exports);
__exportStar(require("../models/LocationLevels"), exports);
__exportStar(require("../models/Office"), exports);
__exportStar(require("../models/OfficeCSV"), exports);
__exportStar(require("../models/OfficeFormatV1"), exports);
__exportStar(require("../models/OfficeTabulation"), exports);
__exportStar(require("../models/OfficesFMT"), exports);
__exportStar(require("../models/Offset"), exports);
__exportStar(require("../models/ParameterSpec"), exports);
__exportStar(require("../models/Pool"), exports);
__exportStar(require("../models/PoolNameType"), exports);
__exportStar(require("../models/Pools"), exports);
__exportStar(require("../models/RatingMetadata"), exports);
__exportStar(require("../models/RatingMetadataList"), exports);
__exportStar(require("../models/RatingSpec"), exports);
__exportStar(require("../models/RatingSpecs"), exports);
__exportStar(require("../models/RatingTemplate"), exports);
__exportStar(require("../models/RatingTemplates"), exports);
__exportStar(require("../models/SeasonalValueBean"), exports);
__exportStar(require("../models/SpecifiedLevel"), exports);
__exportStar(require("../models/State"), exports);
__exportStar(require("../models/StoreRule"), exports);
__exportStar(require("../models/Stream"), exports);
__exportStar(require("../models/StreamLocation"), exports);
__exportStar(require("../models/StreamReach"), exports);
__exportStar(require("../models/TabV1Office"), exports);
__exportStar(require("../models/TableRating"), exports);
__exportStar(require("../models/TimeSeries"), exports);
__exportStar(require("../models/TimeSeriesCategory"), exports);
__exportStar(require("../models/TimeSeriesColumn"), exports);
__exportStar(require("../models/TimeSeriesExtents"), exports);
__exportStar(require("../models/TimeSeriesGroup"), exports);
__exportStar(require("../models/TimeSeriesIdentifierDescriptor"), exports);
__exportStar(require("../models/TimeSeriesIdentifierDescriptors"), exports);
__exportStar(require("../models/TimeSeriesInterval"), exports);
__exportStar(require("../models/TimeSeriesIntervalUnitsInner"), exports);
__exportStar(require("../models/TimeSeriesIntervalUnitsInnerDuration"), exports);
__exportStar(require("../models/TimeSeriesRecord"), exports);
__exportStar(require("../models/TimeSeriesValuesInnerInner"), exports);
__exportStar(require("../models/TimeseriesCatalogEntry"), exports);
__exportStar(require("../models/TransitionalRating"), exports);
__exportStar(require("../models/UnitSystem"), exports);
__exportStar(require("../models/UsgsStreamRating"), exports);
__exportStar(require("../models/VerticalDatumInfo"), exports);
__exportStar(require("../models/VirtualRating"), exports);
var AbstractRatingMetadata_1 = require("../models/AbstractRatingMetadata");
var ApiKey_1 = require("../models/ApiKey");
var AssignedLocation_1 = require("../models/AssignedLocation");
var AssignedTimeSeries_1 = require("../models/AssignedTimeSeries");
var Basin_1 = require("../models/Basin");
var Blob_1 = require("../models/Blob");
var Blobs_1 = require("../models/Blobs");
var Catalog_1 = require("../models/Catalog");
var CatalogEntry_1 = require("../models/CatalogEntry");
var CdaError_1 = require("../models/CdaError");
var Clob_1 = require("../models/Clob");
var Clobs_1 = require("../models/Clobs");
var County_1 = require("../models/County");
var CsvV1Office_1 = require("../models/CsvV1Office");
var ExpressionRating_1 = require("../models/ExpressionRating");
var IndependentRoundingSpec_1 = require("../models/IndependentRoundingSpec");
var Location_1 = require("../models/Location");
var LocationAlias_1 = require("../models/LocationAlias");
var LocationCatalogEntry_1 = require("../models/LocationCatalogEntry");
var LocationCategory_1 = require("../models/LocationCategory");
var LocationGroup_1 = require("../models/LocationGroup");
var LocationLevel_1 = require("../models/LocationLevel");
var LocationLevels_1 = require("../models/LocationLevels");
var Office_1 = require("../models/Office");
var OfficeCSV_1 = require("../models/OfficeCSV");
var OfficeFormatV1_1 = require("../models/OfficeFormatV1");
var OfficeTabulation_1 = require("../models/OfficeTabulation");
var OfficesFMT_1 = require("../models/OfficesFMT");
var Offset_1 = require("../models/Offset");
var ParameterSpec_1 = require("../models/ParameterSpec");
var Pool_1 = require("../models/Pool");
var PoolNameType_1 = require("../models/PoolNameType");
var Pools_1 = require("../models/Pools");
var RatingMetadata_1 = require("../models/RatingMetadata");
var RatingMetadataList_1 = require("../models/RatingMetadataList");
var RatingSpec_1 = require("../models/RatingSpec");
var RatingSpecs_1 = require("../models/RatingSpecs");
var RatingTemplate_1 = require("../models/RatingTemplate");
var RatingTemplates_1 = require("../models/RatingTemplates");
var SeasonalValueBean_1 = require("../models/SeasonalValueBean");
var SpecifiedLevel_1 = require("../models/SpecifiedLevel");
var State_1 = require("../models/State");
var Stream_1 = require("../models/Stream");
var StreamLocation_1 = require("../models/StreamLocation");
var StreamReach_1 = require("../models/StreamReach");
var TabV1Office_1 = require("../models/TabV1Office");
var TableRating_1 = require("../models/TableRating");
var TimeSeries_1 = require("../models/TimeSeries");
var TimeSeriesCategory_1 = require("../models/TimeSeriesCategory");
var TimeSeriesColumn_1 = require("../models/TimeSeriesColumn");
var TimeSeriesExtents_1 = require("../models/TimeSeriesExtents");
var TimeSeriesGroup_1 = require("../models/TimeSeriesGroup");
var TimeSeriesIdentifierDescriptor_1 = require("../models/TimeSeriesIdentifierDescriptor");
var TimeSeriesIdentifierDescriptors_1 = require("../models/TimeSeriesIdentifierDescriptors");
var TimeSeriesInterval_1 = require("../models/TimeSeriesInterval");
var TimeSeriesIntervalUnitsInner_1 = require("../models/TimeSeriesIntervalUnitsInner");
var TimeSeriesIntervalUnitsInnerDuration_1 = require("../models/TimeSeriesIntervalUnitsInnerDuration");
var TimeSeriesRecord_1 = require("../models/TimeSeriesRecord");
var TimeSeriesValuesInnerInner_1 = require("../models/TimeSeriesValuesInnerInner");
var TimeseriesCatalogEntry_1 = require("../models/TimeseriesCatalogEntry");
var TransitionalRating_1 = require("../models/TransitionalRating");
var UsgsStreamRating_1 = require("../models/UsgsStreamRating");
var VerticalDatumInfo_1 = require("../models/VerticalDatumInfo");
var VirtualRating_1 = require("../models/VirtualRating");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = new Set([
    "CatalogableEndpoint",
    "DatabaseLoadMethod",
    "DeleteMethod",
    "LocationNationEnum",
    "LocationLevelParameterTypeIdEnum",
    "LocationLevelInterpolateStringEnum",
    "OfficeTypeEnum",
    "StoreRule",
    "UnitSystem",
]);
var typeMap = {
    "AbstractRatingMetadata": AbstractRatingMetadata_1.AbstractRatingMetadata,
    "ApiKey": ApiKey_1.ApiKey,
    "AssignedLocation": AssignedLocation_1.AssignedLocation,
    "AssignedTimeSeries": AssignedTimeSeries_1.AssignedTimeSeries,
    "Basin": Basin_1.Basin,
    "Blob": Blob_1.Blob,
    "Blobs": Blobs_1.Blobs,
    "Catalog": Catalog_1.Catalog,
    "CatalogEntry": CatalogEntry_1.CatalogEntry,
    "CdaError": CdaError_1.CdaError,
    "Clob": Clob_1.Clob,
    "Clobs": Clobs_1.Clobs,
    "County": County_1.County,
    "CsvV1Office": CsvV1Office_1.CsvV1Office,
    "ExpressionRating": ExpressionRating_1.ExpressionRating,
    "IndependentRoundingSpec": IndependentRoundingSpec_1.IndependentRoundingSpec,
    "Location": Location_1.Location,
    "LocationAlias": LocationAlias_1.LocationAlias,
    "LocationCatalogEntry": LocationCatalogEntry_1.LocationCatalogEntry,
    "LocationCategory": LocationCategory_1.LocationCategory,
    "LocationGroup": LocationGroup_1.LocationGroup,
    "LocationLevel": LocationLevel_1.LocationLevel,
    "LocationLevels": LocationLevels_1.LocationLevels,
    "Office": Office_1.Office,
    "OfficeCSV": OfficeCSV_1.OfficeCSV,
    "OfficeFormatV1": OfficeFormatV1_1.OfficeFormatV1,
    "OfficeTabulation": OfficeTabulation_1.OfficeTabulation,
    "OfficesFMT": OfficesFMT_1.OfficesFMT,
    "Offset": Offset_1.Offset,
    "ParameterSpec": ParameterSpec_1.ParameterSpec,
    "Pool": Pool_1.Pool,
    "PoolNameType": PoolNameType_1.PoolNameType,
    "Pools": Pools_1.Pools,
    "RatingMetadata": RatingMetadata_1.RatingMetadata,
    "RatingMetadataList": RatingMetadataList_1.RatingMetadataList,
    "RatingSpec": RatingSpec_1.RatingSpec,
    "RatingSpecs": RatingSpecs_1.RatingSpecs,
    "RatingTemplate": RatingTemplate_1.RatingTemplate,
    "RatingTemplates": RatingTemplates_1.RatingTemplates,
    "SeasonalValueBean": SeasonalValueBean_1.SeasonalValueBean,
    "SpecifiedLevel": SpecifiedLevel_1.SpecifiedLevel,
    "State": State_1.State,
    "Stream": Stream_1.Stream,
    "StreamLocation": StreamLocation_1.StreamLocation,
    "StreamReach": StreamReach_1.StreamReach,
    "TabV1Office": TabV1Office_1.TabV1Office,
    "TableRating": TableRating_1.TableRating,
    "TimeSeries": TimeSeries_1.TimeSeries,
    "TimeSeriesCategory": TimeSeriesCategory_1.TimeSeriesCategory,
    "TimeSeriesColumn": TimeSeriesColumn_1.TimeSeriesColumn,
    "TimeSeriesExtents": TimeSeriesExtents_1.TimeSeriesExtents,
    "TimeSeriesGroup": TimeSeriesGroup_1.TimeSeriesGroup,
    "TimeSeriesIdentifierDescriptor": TimeSeriesIdentifierDescriptor_1.TimeSeriesIdentifierDescriptor,
    "TimeSeriesIdentifierDescriptors": TimeSeriesIdentifierDescriptors_1.TimeSeriesIdentifierDescriptors,
    "TimeSeriesInterval": TimeSeriesInterval_1.TimeSeriesInterval,
    "TimeSeriesIntervalUnitsInner": TimeSeriesIntervalUnitsInner_1.TimeSeriesIntervalUnitsInner,
    "TimeSeriesIntervalUnitsInnerDuration": TimeSeriesIntervalUnitsInnerDuration_1.TimeSeriesIntervalUnitsInnerDuration,
    "TimeSeriesRecord": TimeSeriesRecord_1.TimeSeriesRecord,
    "TimeSeriesValuesInnerInner": TimeSeriesValuesInnerInner_1.TimeSeriesValuesInnerInner,
    "TimeseriesCatalogEntry": TimeseriesCatalogEntry_1.TimeseriesCatalogEntry,
    "TransitionalRating": TransitionalRating_1.TransitionalRating,
    "UsgsStreamRating": UsgsStreamRating_1.UsgsStreamRating,
    "VerticalDatumInfo": VerticalDatumInfo_1.VerticalDatumInfo,
    "VirtualRating": VirtualRating_1.VirtualRating,
};
/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
var parseMimeType = function (mimeType) {
    var _a = mimeType.split('/'), type = _a[0], subtype = _a[1];
    return {
        type: type,
        subtype: subtype,
        subtypeTokens: subtype.split('+'),
    };
};
// This factory creates a predicate function that checks a string mime-type against defined rules.
var mimeTypePredicateFactory = function (predicate) { return function (mimeType) { return predicate(parseMimeType(mimeType)); }; };
// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
var mimeTypeSimplePredicateFactory = function (type, subtype) { return mimeTypePredicateFactory(function (descriptor) {
    if (descriptor.type !== type)
        return false;
    if (subtype != null && descriptor.subtype !== subtype)
        return false;
    return true;
}); };
// Creating a set of named predicates that will help us determine how to handle different mime-types
var isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
var isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
var isJsonLikeMimeType = mimeTypePredicateFactory(function (descriptor) { return descriptor.type === 'application' && descriptor.subtypeTokens.some(function (item) { return item === 'json'; }); });
var isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
var isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');
// Defining a list of mime-types in the order of prioritization for handling.
var supportedMimeTypePredicatesWithPriority = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        for (var _i = 0, supportedMimeTypePredicatesWithPriority_1 = supportedMimeTypePredicatesWithPriority; _i < supportedMimeTypePredicatesWithPriority_1.length; _i++) {
            var predicate = supportedMimeTypePredicatesWithPriority_1[_i];
            for (var _a = 0, normalMediaTypes_1 = normalMediaTypes; _a < normalMediaTypes_1.length; _a++) {
                var mediaType = normalMediaTypes_1[_a];
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }
        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }
        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
