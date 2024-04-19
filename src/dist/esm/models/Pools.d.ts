/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Pool } from './Pool';
/**
 *
 * @export
 * @interface Pools
 */
export interface Pools {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof Pools
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof Pools
     */
    readonly total?: number;
    /**
     * List of retrieved pools
     * @type {Array<Pool>}
     * @memberof Pools
     */
    pools?: Array<Pool>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof Pools
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof Pools
     */
    readonly pageSize?: number;
}
/**
 * Check if a given object implements the Pools interface.
 */
export declare function instanceOfPools(value: object): boolean;
export declare function PoolsFromJSON(json: any): Pools;
export declare function PoolsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pools;
export declare function PoolsToJSON(value?: Pools | null): any;
