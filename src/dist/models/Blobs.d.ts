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
import type { Blob } from './Blob';
/**
 *
 * @export
 * @interface Blobs
 */
export interface Blobs {
    /**
     * The cursor to the current page of data
     * @type {string}
     * @memberof Blobs
     */
    readonly page?: string;
    /**
     * The total number of records retrieved; null or not present if not supported or unknown
     * @type {number}
     * @memberof Blobs
     */
    readonly total?: number;
    /**
     * List of retrieved blobs
     * @type {Array<Blob>}
     * @memberof Blobs
     */
    blobs?: Array<Blob>;
    /**
     * The cursor to the next page of data; null if there is no more data
     * @type {string}
     * @memberof Blobs
     */
    readonly nextPage?: string;
    /**
     * The number of records fetched per-page; this may be larger than the number of records actually retrieved
     * @type {number}
     * @memberof Blobs
     */
    readonly pageSize?: number;
}
/**
 * Check if a given object implements the Blobs interface.
 */
export declare function instanceOfBlobs(value: object): boolean;
export declare function BlobsFromJSON(json: any): Blobs;
export declare function BlobsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Blobs;
export declare function BlobsToJSON(value?: Blobs | null): any;