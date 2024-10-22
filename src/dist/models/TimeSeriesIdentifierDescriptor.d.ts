/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface TimeseriesIdentifierDescriptor
 */
export interface TimeseriesIdentifierDescriptor {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof TimeseriesIdentifierDescriptor
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesIdentifierDescriptor
     */
    timeSeriesId?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesIdentifierDescriptor
     */
    timezoneName?: string;
    /**
     *
     * @type {number}
     * @memberof TimeseriesIdentifierDescriptor
     */
    intervalOffsetMinutes?: number;
    /**
     *
     * @type {boolean}
     * @memberof TimeseriesIdentifierDescriptor
     */
    active?: boolean;
}
/**
 * Check if a given object implements the TimeseriesIdentifierDescriptor interface.
 */
export declare function instanceOfTimeseriesIdentifierDescriptor(value: object): boolean;
export declare function TimeseriesIdentifierDescriptorFromJSON(json: any): TimeseriesIdentifierDescriptor;
export declare function TimeseriesIdentifierDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesIdentifierDescriptor;
export declare function TimeseriesIdentifierDescriptorToJSON(value?: TimeseriesIdentifierDescriptor | null): any;
