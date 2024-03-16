export * from '../models/AbstractRatingMetadata';
export * from '../models/ApiKey';
export * from '../models/AssignedLocation';
export * from '../models/AssignedTimeSeries';
export * from '../models/Basin';
export * from '../models/Blob';
export * from '../models/Blobs';
export * from '../models/Catalog';
export * from '../models/CatalogEntry';
export * from '../models/CatalogableEndpoint';
export * from '../models/CdaError';
export * from '../models/Clob';
export * from '../models/Clobs';
export * from '../models/County';
export * from '../models/CsvV1Office';
export * from '../models/DatabaseLoadMethod';
export * from '../models/DeleteMethod';
export * from '../models/ExpressionRating';
export * from '../models/IndependentRoundingSpec';
export * from '../models/Location';
export * from '../models/LocationAlias';
export * from '../models/LocationCatalogEntry';
export * from '../models/LocationCategory';
export * from '../models/LocationGroup';
export * from '../models/LocationLevel';
export * from '../models/LocationLevels';
export * from '../models/Office';
export * from '../models/OfficeCSV';
export * from '../models/OfficeFormatV1';
export * from '../models/OfficeTabulation';
export * from '../models/OfficesFMT';
export * from '../models/Offset';
export * from '../models/ParameterSpec';
export * from '../models/Pool';
export * from '../models/PoolNameType';
export * from '../models/Pools';
export * from '../models/RatingMetadata';
export * from '../models/RatingMetadataList';
export * from '../models/RatingSpec';
export * from '../models/RatingSpecs';
export * from '../models/RatingTemplate';
export * from '../models/RatingTemplates';
export * from '../models/SeasonalValueBean';
export * from '../models/SpecifiedLevel';
export * from '../models/State';
export * from '../models/StoreRule';
export * from '../models/Stream';
export * from '../models/StreamLocation';
export * from '../models/StreamReach';
export * from '../models/TabV1Office';
export * from '../models/TableRating';
export * from '../models/TimeSeries';
export * from '../models/TimeSeriesCategory';
export * from '../models/TimeSeriesColumn';
export * from '../models/TimeSeriesExtents';
export * from '../models/TimeSeriesGroup';
export * from '../models/TimeSeriesIdentifierDescriptor';
export * from '../models/TimeSeriesIdentifierDescriptors';
export * from '../models/TimeSeriesInterval';
export * from '../models/TimeSeriesIntervalUnitsInner';
export * from '../models/TimeSeriesIntervalUnitsInnerDuration';
export * from '../models/TimeSeriesRecord';
export * from '../models/TimeSeriesValuesInnerInner';
export * from '../models/TimeseriesCatalogEntry';
export * from '../models/TransitionalRating';
export * from '../models/UnitSystem';
export * from '../models/UsgsStreamRating';
export * from '../models/VerticalDatumInfo';
export * from '../models/VirtualRating';

import { AbstractRatingMetadata } from '../models/AbstractRatingMetadata';
import { ApiKey } from '../models/ApiKey';
import { AssignedLocation } from '../models/AssignedLocation';
import { AssignedTimeSeries } from '../models/AssignedTimeSeries';
import { Basin } from '../models/Basin';
import { Blob } from '../models/Blob';
import { Blobs } from '../models/Blobs';
import { Catalog } from '../models/Catalog';
import { CatalogEntry } from '../models/CatalogEntry';
import { CatalogableEndpoint } from '../models/CatalogableEndpoint';
import { CdaError } from '../models/CdaError';
import { Clob } from '../models/Clob';
import { Clobs } from '../models/Clobs';
import { County } from '../models/County';
import { CsvV1Office } from '../models/CsvV1Office';
import { DatabaseLoadMethod } from '../models/DatabaseLoadMethod';
import { DeleteMethod } from '../models/DeleteMethod';
import { ExpressionRating } from '../models/ExpressionRating';
import { IndependentRoundingSpec } from '../models/IndependentRoundingSpec';
import { Location           , LocationNationEnum             } from '../models/Location';
import { LocationAlias } from '../models/LocationAlias';
import { LocationCatalogEntry } from '../models/LocationCatalogEntry';
import { LocationCategory } from '../models/LocationCategory';
import { LocationGroup } from '../models/LocationGroup';
import { LocationLevel     , LocationLevelParameterTypeIdEnum          , LocationLevelInterpolateStringEnum          } from '../models/LocationLevel';
import { LocationLevels } from '../models/LocationLevels';
import { Office  , OfficeTypeEnum    } from '../models/Office';
import { OfficeCSV } from '../models/OfficeCSV';
import { OfficeFormatV1 } from '../models/OfficeFormatV1';
import { OfficeTabulation } from '../models/OfficeTabulation';
import { OfficesFMT } from '../models/OfficesFMT';
import { Offset } from '../models/Offset';
import { ParameterSpec } from '../models/ParameterSpec';
import { Pool } from '../models/Pool';
import { PoolNameType } from '../models/PoolNameType';
import { Pools } from '../models/Pools';
import { RatingMetadata } from '../models/RatingMetadata';
import { RatingMetadataList } from '../models/RatingMetadataList';
import { RatingSpec } from '../models/RatingSpec';
import { RatingSpecs } from '../models/RatingSpecs';
import { RatingTemplate } from '../models/RatingTemplate';
import { RatingTemplates } from '../models/RatingTemplates';
import { SeasonalValueBean } from '../models/SeasonalValueBean';
import { SpecifiedLevel } from '../models/SpecifiedLevel';
import { State } from '../models/State';
import { StoreRule } from '../models/StoreRule';
import { Stream } from '../models/Stream';
import { StreamLocation } from '../models/StreamLocation';
import { StreamReach } from '../models/StreamReach';
import { TabV1Office } from '../models/TabV1Office';
import { TableRating } from '../models/TableRating';
import { TimeSeries } from '../models/TimeSeries';
import { TimeSeriesCategory } from '../models/TimeSeriesCategory';
import { TimeSeriesColumn } from '../models/TimeSeriesColumn';
import { TimeSeriesExtents } from '../models/TimeSeriesExtents';
import { TimeSeriesGroup } from '../models/TimeSeriesGroup';
import { TimeSeriesIdentifierDescriptor } from '../models/TimeSeriesIdentifierDescriptor';
import { TimeSeriesIdentifierDescriptors } from '../models/TimeSeriesIdentifierDescriptors';
import { TimeSeriesInterval } from '../models/TimeSeriesInterval';
import { TimeSeriesIntervalUnitsInner } from '../models/TimeSeriesIntervalUnitsInner';
import { TimeSeriesIntervalUnitsInnerDuration } from '../models/TimeSeriesIntervalUnitsInnerDuration';
import { TimeSeriesRecord } from '../models/TimeSeriesRecord';
import { TimeSeriesValuesInnerInner } from '../models/TimeSeriesValuesInnerInner';
import { TimeseriesCatalogEntry } from '../models/TimeseriesCatalogEntry';
import { TransitionalRating } from '../models/TransitionalRating';
import { UnitSystem } from '../models/UnitSystem';
import { UsgsStreamRating } from '../models/UsgsStreamRating';
import { VerticalDatumInfo } from '../models/VerticalDatumInfo';
import { VirtualRating } from '../models/VirtualRating';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
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

let typeMap: {[index: string]: any} = {
    "AbstractRatingMetadata": AbstractRatingMetadata,
    "ApiKey": ApiKey,
    "AssignedLocation": AssignedLocation,
    "AssignedTimeSeries": AssignedTimeSeries,
    "Basin": Basin,
    "Blob": Blob,
    "Blobs": Blobs,
    "Catalog": Catalog,
    "CatalogEntry": CatalogEntry,
    "CdaError": CdaError,
    "Clob": Clob,
    "Clobs": Clobs,
    "County": County,
    "CsvV1Office": CsvV1Office,
    "ExpressionRating": ExpressionRating,
    "IndependentRoundingSpec": IndependentRoundingSpec,
    "Location": Location,
    "LocationAlias": LocationAlias,
    "LocationCatalogEntry": LocationCatalogEntry,
    "LocationCategory": LocationCategory,
    "LocationGroup": LocationGroup,
    "LocationLevel": LocationLevel,
    "LocationLevels": LocationLevels,
    "Office": Office,
    "OfficeCSV": OfficeCSV,
    "OfficeFormatV1": OfficeFormatV1,
    "OfficeTabulation": OfficeTabulation,
    "OfficesFMT": OfficesFMT,
    "Offset": Offset,
    "ParameterSpec": ParameterSpec,
    "Pool": Pool,
    "PoolNameType": PoolNameType,
    "Pools": Pools,
    "RatingMetadata": RatingMetadata,
    "RatingMetadataList": RatingMetadataList,
    "RatingSpec": RatingSpec,
    "RatingSpecs": RatingSpecs,
    "RatingTemplate": RatingTemplate,
    "RatingTemplates": RatingTemplates,
    "SeasonalValueBean": SeasonalValueBean,
    "SpecifiedLevel": SpecifiedLevel,
    "State": State,
    "Stream": Stream,
    "StreamLocation": StreamLocation,
    "StreamReach": StreamReach,
    "TabV1Office": TabV1Office,
    "TableRating": TableRating,
    "TimeSeries": TimeSeries,
    "TimeSeriesCategory": TimeSeriesCategory,
    "TimeSeriesColumn": TimeSeriesColumn,
    "TimeSeriesExtents": TimeSeriesExtents,
    "TimeSeriesGroup": TimeSeriesGroup,
    "TimeSeriesIdentifierDescriptor": TimeSeriesIdentifierDescriptor,
    "TimeSeriesIdentifierDescriptors": TimeSeriesIdentifierDescriptors,
    "TimeSeriesInterval": TimeSeriesInterval,
    "TimeSeriesIntervalUnitsInner": TimeSeriesIntervalUnitsInner,
    "TimeSeriesIntervalUnitsInnerDuration": TimeSeriesIntervalUnitsInnerDuration,
    "TimeSeriesRecord": TimeSeriesRecord,
    "TimeSeriesValuesInnerInner": TimeSeriesValuesInnerInner,
    "TimeseriesCatalogEntry": TimeseriesCatalogEntry,
    "TransitionalRating": TransitionalRating,
    "UsgsStreamRating": UsgsStreamRating,
    "VerticalDatumInfo": VerticalDatumInfo,
    "VirtualRating": VirtualRating,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
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
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
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
    }
}
