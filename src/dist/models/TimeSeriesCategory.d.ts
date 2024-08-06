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
/**
 * A representation of a TimeSeries category
 * @export
 * @interface TimeSeriesCategory
 */
export interface TimeSeriesCategory {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof TimeSeriesCategory
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof TimeSeriesCategory
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof TimeSeriesCategory
     */
    description?: string;
}
/**
 * Check if a given object implements the TimeSeriesCategory interface.
 */
export declare function instanceOfTimeSeriesCategory(value: object): boolean;
export declare function TimeSeriesCategoryFromJSON(json: any): TimeSeriesCategory;
export declare function TimeSeriesCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSeriesCategory;
export declare function TimeSeriesCategoryToJSON(value?: TimeSeriesCategory | null): any;
