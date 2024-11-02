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
import * as runtime from '../runtime';
import type { Blob, Blobs } from '../models/index';
export interface GetBlobsRequest {
    office?: string;
    page?: string;
    pageSize?: number;
    like?: string;
}
export interface GetBlobsWithBlobIdRequest {
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
     * Get CwmsData blobs
     */
    getBlobsRaw(requestParameters: GetBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blobs>>;
    /**
     * Get CwmsData blobs
     */
    getBlobs(requestParameters?: GetBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blobs>;
    /**
     * Get CwmsData blobs with blobId
     */
    getBlobsWithBlobIdRaw(requestParameters: GetBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Get CwmsData blobs with blobId
     */
    getBlobsWithBlobId(requestParameters: GetBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new Blob
     * Post CwmsData blobs
     */
    postCwmsDataBlobsRaw(requestParameters: PostCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new Blob
     * Post CwmsData blobs
     */
    postCwmsDataBlobs(requestParameters: PostCwmsDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
