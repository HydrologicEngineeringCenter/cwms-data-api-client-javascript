/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TimeSeriesIdentifierDescriptor } from './TimeSeriesIdentifierDescriptor';
/**
 *
 * @export
 * @interface TimeSeriesIdentifierDescriptors
 */
export interface TimeSeriesIdentifierDescriptors {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof TimeSeriesIdentifierDescriptors
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof TimeSeriesIdentifierDescriptors
     */
    readonly total?: number;
    /**
     *
     * @type {Array<TimeSeriesIdentifierDescriptor>}
     * @memberof TimeSeriesIdentifierDescriptors
     */
    descriptors?: Array<TimeSeriesIdentifierDescriptor>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof TimeSeriesIdentifierDescriptors
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof TimeSeriesIdentifierDescriptors
     */
    readonly pageSize?: number;
}
/**
 * Check if a given object implements the TimeSeriesIdentifierDescriptors interface.
 */
export declare function instanceOfTimeSeriesIdentifierDescriptors(value: object): boolean;
export declare function TimeSeriesIdentifierDescriptorsFromJSON(json: any): TimeSeriesIdentifierDescriptors;
export declare function TimeSeriesIdentifierDescriptorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesIdentifierDescriptors;
export declare function TimeSeriesIdentifierDescriptorsToJSON(value?: TimeSeriesIdentifierDescriptors | null): any;
