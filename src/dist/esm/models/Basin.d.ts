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
import type { CwmsId } from './CwmsId';
/**
 *
 * @export
 * @interface Basin
 */
export interface Basin {
    /**
     *
     * @type {CwmsId}
     * @memberof Basin
     */
    basinId: CwmsId;
    /**
     *
     * @type {number}
     * @memberof Basin
     */
    sortOrder?: number;
    /**
     *
     * @type {number}
     * @memberof Basin
     */
    totalDrainageArea?: number;
    /**
     *
     * @type {number}
     * @memberof Basin
     */
    contributingDrainageArea?: number;
    /**
     *
     * @type {CwmsId}
     * @memberof Basin
     */
    parentBasinId?: CwmsId;
    /**
     *
     * @type {string}
     * @memberof Basin
     */
    areaUnit?: string;
    /**
     *
     * @type {CwmsId}
     * @memberof Basin
     */
    primaryStreamId?: CwmsId;
}
/**
 * Check if a given object implements the Basin interface.
 */
export declare function instanceOfBasin(value: object): boolean;
export declare function BasinFromJSON(json: any): Basin;
export declare function BasinFromJSONTyped(json: any, ignoreDiscriminator: boolean): Basin;
export declare function BasinToJSON(value?: Basin | null): any;
