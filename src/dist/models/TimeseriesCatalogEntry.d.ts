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
import type { Extents } from './Extents';
/**
 *
 * @export
 * @interface TimeseriesCatalogEntry
 */
export interface TimeseriesCatalogEntry {
    /**
     *
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    office?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    units?: string;
    /**
     *
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    interval?: string;
    /**
     * Offset from top of interval
     * @type {number}
     * @memberof TimeseriesCatalogEntry
     */
    intervalOffset?: number;
    /**
     * Only on 21.1.1 Database. The timezone the Interval Offset is from.
     * @type {string}
     * @memberof TimeseriesCatalogEntry
     */
    timeZone?: string;
    /**
     *
     * @type {Array<Extents>}
     * @memberof TimeseriesCatalogEntry
     */
    extents?: Array<Extents>;
}
/**
 * Check if a given object implements the TimeseriesCatalogEntry interface.
 */
export declare function instanceOfTimeseriesCatalogEntry(value: object): boolean;
export declare function TimeseriesCatalogEntryFromJSON(json: any): TimeseriesCatalogEntry;
export declare function TimeseriesCatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesCatalogEntry;
export declare function TimeseriesCatalogEntryToJSON(value?: TimeseriesCatalogEntry | null): any;
