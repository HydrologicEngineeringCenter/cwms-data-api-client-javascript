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
import type { RatingSpec } from './RatingSpec';
/**
 *
 * @export
 * @interface RatingSpecs
 */
export interface RatingSpecs {
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof RatingSpecs
     */
    readonly nextPage?: string;
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof RatingSpecs
     */
    readonly page?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof RatingSpecs
     */
    readonly pageSize?: number;
    /**
     *
     * @type {Array<RatingSpec>}
     * @memberof RatingSpecs
     */
    specs?: Array<RatingSpec>;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof RatingSpecs
     */
    readonly total?: number;
}
/**
 * Check if a given object implements the RatingSpecs interface.
 */
export declare function instanceOfRatingSpecs(value: object): boolean;
export declare function RatingSpecsFromJSON(json: any): RatingSpecs;
export declare function RatingSpecsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingSpecs;
export declare function RatingSpecsToJSON(value?: RatingSpecs | null): any;
