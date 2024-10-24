/* tslint:disable */
/* eslint-disable */
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
import type {
  Blob,
  Blobs,
  CdaError,
} from '../models/index';
import {
    BlobFromJSON,
    BlobToJSON,
    BlobsFromJSON,
    BlobsToJSON,
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

export interface GetSwtDataBlobsRequest {
    office?: string;
    page?: string;
    pageSize?: number;
    like?: string;
}

export interface GetSwtDataBlobsWithBlobIdRequest {
    blobId: string;
    office?: string;
}

export interface PostSwtDataBlobsRequest {
    blob: Blob;
    failIfExists?: boolean;
}

/**
 * 
 */
export class BlobApi extends runtime.BaseAPI {

    /**
     * Get swtData blobs
     */
    async getSwtDataBlobsRaw(requestParameters: GetSwtDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blobs>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        if (requestParameters['like'] != null) {
            queryParameters['like'] = requestParameters['like'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/blobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlobsFromJSON(jsonValue));
    }

    /**
     * Get swtData blobs
     */
    async getSwtDataBlobs(requestParameters: GetSwtDataBlobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blobs> {
        const response = await this.getSwtDataBlobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData blobs with blobId
     */
    async getSwtDataBlobsWithBlobIdRaw(requestParameters: GetSwtDataBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['blobId'] == null) {
            throw new runtime.RequiredError(
                'blobId',
                'Required parameter "blobId" was null or undefined when calling getSwtDataBlobsWithBlobId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/blobs/{blob-id}`.replace(`{${"blob-id"}}`, encodeURIComponent(String(requestParameters['blobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get swtData blobs with blobId
     */
    async getSwtDataBlobsWithBlobId(requestParameters: GetSwtDataBlobsWithBlobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getSwtDataBlobsWithBlobIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new Blob
     * Post swtData blobs
     */
    async postSwtDataBlobsRaw(requestParameters: PostSwtDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['blob'] == null) {
            throw new runtime.RequiredError(
                'blob',
                'Required parameter "blob" was null or undefined when calling postSwtDataBlobs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/blobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BlobToJSON(requestParameters['blob']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new Blob
     * Post swtData blobs
     */
    async postSwtDataBlobs(requestParameters: PostSwtDataBlobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataBlobsRaw(requestParameters, initOverrides);
    }

}
