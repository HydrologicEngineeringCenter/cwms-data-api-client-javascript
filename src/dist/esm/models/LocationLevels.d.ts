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
import type { LocationLevel } from './LocationLevel';
/**
 *
 * @export
 * @interface LocationLevels
 */
export interface LocationLevels {
    /**
     * List of retrieved location levels
     * @type {Array<LocationLevel>}
     * @memberof LocationLevels
     */
    levels?: Array<LocationLevel>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof LocationLevels
     */
    readonly nextPage?: string;
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof LocationLevels
     */
    readonly page?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof LocationLevels
     */
    readonly pageSize?: number;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof LocationLevels
     */
    readonly total?: number;
}
/**
 * Check if a given object implements the LocationLevels interface.
 */
export declare function instanceOfLocationLevels(value: object): boolean;
export declare function LocationLevelsFromJSON(json: any): LocationLevels;
export declare function LocationLevelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationLevels;
export declare function LocationLevelsToJSON(value?: LocationLevels | null): any;
