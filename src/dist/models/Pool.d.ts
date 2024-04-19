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
import type { PoolNameType } from './PoolNameType';
/**
 * List of retrieved pools
 * @export
 * @interface Pool
 */
export interface Pool {
    /**
     *
     * @type {number}
     * @memberof Pool
     */
    attribute?: number;
    /**
     *
     * @type {string}
     * @memberof Pool
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Pool
     */
    clobText?: string;
    /**
     *
     * @type {string}
     * @memberof Pool
     */
    projectId?: string;
    /**
     *
     * @type {string}
     * @memberof Pool
     */
    bottomLevelId?: string;
    /**
     *
     * @type {string}
     * @memberof Pool
     */
    topLevelId?: string;
    /**
     *
     * @type {PoolNameType}
     * @memberof Pool
     */
    poolName?: PoolNameType;
    /**
     *
     * @type {boolean}
     * @memberof Pool
     */
    implicit?: boolean;
}
/**
 * Check if a given object implements the Pool interface.
 */
export declare function instanceOfPool(value: object): boolean;
export declare function PoolFromJSON(json: any): Pool;
export declare function PoolFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pool;
export declare function PoolToJSON(value?: Pool | null): any;
