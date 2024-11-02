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
import type { Clob, Clobs } from '../models/index';
export interface DeleteCwmsDataClobsWithClobIdRequest {
    clobId: string;
    office: string;
}
export interface GetClobsRequest {
    office?: string;
    page?: string;
    pageSize?: number;
    includeValues?: boolean;
    like?: string;
}
export interface GetClobsWithClobIdRequest {
    clobId: string;
    office?: string;
    clobId2?: string;
}
export interface PatchCwmsDataClobsWithClobIdRequest {
    clobId: string;
    clob: Clob;
    ignoreNulls?: boolean;
}
export interface PostCwmsDataClobsRequest {
    clob: Clob;
    failIfExists?: boolean;
}
/**
 *
 */
export declare class ClobApi extends runtime.BaseAPI {
    /**
     * Delete clob
     * Delete CwmsData clobs with clobId
     */
    deleteCwmsDataClobsWithClobIdRaw(requestParameters: DeleteCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete clob
     * Delete CwmsData clobs with clobId
     */
    deleteCwmsDataClobsWithClobId(requestParameters: DeleteCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get CwmsData clobs
     */
    getClobsRaw(requestParameters: GetClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Clobs>>;
    /**
     * Get CwmsData clobs
     */
    getClobs(requestParameters?: GetClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Clobs>;
    /**
     * Get a single clob.  If the accept header is set to text/plain, the raw value is returned as the response body. Responses to text/plain requests are streamed and support the Range header.  When the accept header is set to application/json;version=2 the clob will be returned as a serialized Clob object with fields for office-id, id, description and value.
     * Get CwmsData clobs with clobId
     */
    getClobsWithClobIdRaw(requestParameters: GetClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Clob>>;
    /**
     * Get a single clob.  If the accept header is set to text/plain, the raw value is returned as the response body. Responses to text/plain requests are streamed and support the Range header.  When the accept header is set to application/json;version=2 the clob will be returned as a serialized Clob object with fields for office-id, id, description and value.
     * Get CwmsData clobs with clobId
     */
    getClobsWithClobId(requestParameters: GetClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Clob>;
    /**
     * Update clob
     * Patch CwmsData clobs with clobId
     */
    patchCwmsDataClobsWithClobIdRaw(requestParameters: PatchCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update clob
     * Patch CwmsData clobs with clobId
     */
    patchCwmsDataClobsWithClobId(requestParameters: PatchCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new Clob
     * Post CwmsData clobs
     */
    postCwmsDataClobsRaw(requestParameters: PostCwmsDataClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new Clob
     * Post CwmsData clobs
     */
    postCwmsDataClobs(requestParameters: PostCwmsDataClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
