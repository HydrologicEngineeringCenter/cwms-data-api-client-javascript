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
  CdaError,
  Clob,
  Clobs,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    ClobFromJSON,
    ClobToJSON,
    ClobsFromJSON,
    ClobsToJSON,
} from '../models/index';

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
export class ClobApi extends runtime.BaseAPI {

    /**
     * Delete clob
     * Delete CwmsData clobs with clobId
     */
    async deleteCwmsDataClobsWithClobIdRaw(requestParameters: DeleteCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['clobId'] == null) {
            throw new runtime.RequiredError(
                'clobId',
                'Required parameter "clobId" was null or undefined when calling deleteCwmsDataClobsWithClobId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataClobsWithClobId().'
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
            path: `/clobs/{clob-id}`.replace(`{${"clob-id"}}`, encodeURIComponent(String(requestParameters['clobId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete clob
     * Delete CwmsData clobs with clobId
     */
    async deleteCwmsDataClobsWithClobId(requestParameters: DeleteCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataClobsWithClobIdRaw(requestParameters, initOverrides);
    }

    /**
     * Get CwmsData clobs
     */
    async getClobsRaw(requestParameters: GetClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Clobs>> {
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

        if (requestParameters['includeValues'] != null) {
            queryParameters['include-values'] = requestParameters['includeValues'];
        }

        if (requestParameters['like'] != null) {
            queryParameters['like'] = requestParameters['like'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/clobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClobsFromJSON(jsonValue));
    }

    /**
     * Get CwmsData clobs
     */
    async getClobs(requestParameters: GetClobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Clobs> {
        const response = await this.getClobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single clob.  If the accept header is set to text/plain, the raw value is returned as the response body. Responses to text/plain requests are streamed and support the Range header.  When the accept header is set to application/json;version=2 the clob will be returned as a serialized Clob object with fields for office-id, id, description and value.
     * Get CwmsData clobs with clobId
     */
    async getClobsWithClobIdRaw(requestParameters: GetClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Clob>> {
        if (requestParameters['clobId'] == null) {
            throw new runtime.RequiredError(
                'clobId',
                'Required parameter "clobId" was null or undefined when calling getClobsWithClobId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['clobId2'] != null) {
            queryParameters['clob-id'] = requestParameters['clobId2'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/clobs/{clob-id}`.replace(`{${"clob-id"}}`, encodeURIComponent(String(requestParameters['clobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ClobFromJSON(jsonValue));
    }

    /**
     * Get a single clob.  If the accept header is set to text/plain, the raw value is returned as the response body. Responses to text/plain requests are streamed and support the Range header.  When the accept header is set to application/json;version=2 the clob will be returned as a serialized Clob object with fields for office-id, id, description and value.
     * Get CwmsData clobs with clobId
     */
    async getClobsWithClobId(requestParameters: GetClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Clob> {
        const response = await this.getClobsWithClobIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update clob
     * Patch CwmsData clobs with clobId
     */
    async patchCwmsDataClobsWithClobIdRaw(requestParameters: PatchCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['clobId'] == null) {
            throw new runtime.RequiredError(
                'clobId',
                'Required parameter "clobId" was null or undefined when calling patchCwmsDataClobsWithClobId().'
            );
        }

        if (requestParameters['clob'] == null) {
            throw new runtime.RequiredError(
                'clob',
                'Required parameter "clob" was null or undefined when calling patchCwmsDataClobsWithClobId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ignoreNulls'] != null) {
            queryParameters['ignore-nulls'] = requestParameters['ignoreNulls'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/clobs/{clob-id}`.replace(`{${"clob-id"}}`, encodeURIComponent(String(requestParameters['clobId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ClobToJSON(requestParameters['clob']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update clob
     * Patch CwmsData clobs with clobId
     */
    async patchCwmsDataClobsWithClobId(requestParameters: PatchCwmsDataClobsWithClobIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataClobsWithClobIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new Clob
     * Post CwmsData clobs
     */
    async postCwmsDataClobsRaw(requestParameters: PostCwmsDataClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['clob'] == null) {
            throw new runtime.RequiredError(
                'clob',
                'Required parameter "clob" was null or undefined when calling postCwmsDataClobs().'
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
            path: `/clobs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ClobToJSON(requestParameters['clob']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new Clob
     * Post CwmsData clobs
     */
    async postCwmsDataClobs(requestParameters: PostCwmsDataClobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataClobsRaw(requestParameters, initOverrides);
    }

}
