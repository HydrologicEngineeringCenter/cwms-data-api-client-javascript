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
import type { AssignedTimeseries } from './AssignedTimeseries';
import type { TimeseriesCategory } from './TimeseriesCategory';
/**
 * A representation of a timeseries group
 * @export
 * @interface TimeseriesGroup
 */
export interface TimeseriesGroup {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof TimeseriesGroup
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesGroup
     */
    id?: string;
    /**
     *
     * @type {TimeseriesCategory}
     * @memberof TimeseriesGroup
     */
    timeSeriesCategory?: TimeseriesCategory;
    /**
     *
     * @type {string}
     * @memberof TimeseriesGroup
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesGroup
     */
    sharedAliasId?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesGroup
     */
    sharedRefTsId?: string;
    /**
     *
     * @type {Array<AssignedTimeseries>}
     * @memberof TimeseriesGroup
     */
    assignedTimeSeries?: Array<AssignedTimeseries>;
}
/**
 * Check if a given object implements the TimeseriesGroup interface.
 */
export declare function instanceOfTimeseriesGroup(value: object): boolean;
export declare function TimeseriesGroupFromJSON(json: any): TimeseriesGroup;
export declare function TimeseriesGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesGroup;
export declare function TimeseriesGroupToJSON(value?: TimeseriesGroup | null): any;
