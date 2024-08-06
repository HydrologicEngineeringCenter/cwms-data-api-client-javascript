/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { Blob, Blobs } from '../models/index';
export interface GetCwmsDataBlobsRequest {
    office?: string;
    page?: string;
    pageSize?: number;
    like?: string;
}
export interface GetCwmsDataBlobsWithBlobIdRequest {
    blobId: string;
    office?: string;
}
export interface PostCwmsDataBlobsRequest {
    blob: Blob;
    failIfExists?: boolean;
}
/**
 *
 */
export declare class BlobApi extends runtime.BaseAPI {
    /**
     * Get cwmsData blobs
     */
    getCwmsDataBlobsRaw(requestParameters: GetCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blobs>>;
    /**
     * Get cwmsData blobs
     */
    getCwmsDataBlobs(requestParameters?: GetCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blobs>;
    /**
     * Get cwmsData blobs with blobId
     */
    getCwmsDataBlobsWithBlobIdRaw(requestParameters: GetCwmsDataBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Get cwmsData blobs with blobId
     */
    getCwmsDataBlobsWithBlobId(requestParameters: GetCwmsDataBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new Blob
     * Post cwmsData blobs
     */
    postCwmsDataBlobsRaw(requestParameters: PostCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new Blob
     * Post cwmsData blobs
     */
    postCwmsDataBlobs(requestParameters: PostCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
