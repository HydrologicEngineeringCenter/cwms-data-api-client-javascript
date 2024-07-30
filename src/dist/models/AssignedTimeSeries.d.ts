/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface AssignedTimeseries
 */
export interface AssignedTimeseries {
    /**
     *
     * @type {string}
     * @memberof AssignedTimeseries
     */
    officeId?: string;
    /**
     *
     * @type {string}
     * @memberof AssignedTimeseries
     */
    timeseriesId?: string;
    /**
     *
     * @type {number}
     * @memberof AssignedTimeseries
     */
    tsCode?: number;
    /**
     *
     * @type {string}
     * @memberof AssignedTimeseries
     */
    aliasId?: string;
    /**
     *
     * @type {string}
     * @memberof AssignedTimeseries
     */
    refTsId?: string;
    /**
     *
     * @type {number}
     * @memberof AssignedTimeseries
     */
    attribute?: number;
}
/**
 * Check if a given object implements the AssignedTimeseries interface.
 */
export declare function instanceOfAssignedTimeseries(value: object): boolean;
export declare function AssignedTimeseriesFromJSON(json: any): AssignedTimeseries;
export declare function AssignedTimeseriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignedTimeseries;
export declare function AssignedTimeseriesToJSON(value?: AssignedTimeseries | null): any;
