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
import type { TimeseriesIntervalUnitsInner } from './TimeseriesIntervalUnitsInner';
/**
 * The interval of the time-series, in ISO-8601 duration format
 * @export
 * @interface TimeseriesInterval
 */
export interface TimeseriesInterval {
    /**
     *
     * @type {number}
     * @memberof TimeseriesInterval
     */
    seconds?: number;
    /**
     *
     * @type {Array<TimeseriesIntervalUnitsInner>}
     * @memberof TimeseriesInterval
     */
    units?: Array<TimeseriesIntervalUnitsInner>;
    /**
     *
     * @type {number}
     * @memberof TimeseriesInterval
     */
    nano?: number;
    /**
     *
     * @type {boolean}
     * @memberof TimeseriesInterval
     */
    zero?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TimeseriesInterval
     */
    negative?: boolean;
}
/**
 * Check if a given object implements the TimeseriesInterval interface.
 */
export declare function instanceOfTimeseriesInterval(value: object): boolean;
export declare function TimeseriesIntervalFromJSON(json: any): TimeseriesInterval;
export declare function TimeseriesIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesInterval;
export declare function TimeseriesIntervalToJSON(value?: TimeseriesInterval | null): any;
