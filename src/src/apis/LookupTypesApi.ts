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
  LookupType,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    LookupTypeFromJSON,
    LookupTypeToJSON,
} from '../models/index';

export interface DeleteSwtDataLookupTypesWithNameRequest {
    name: string;
    category: string;
    prefix: string;
    office: string;
}

export interface GetSwtDataLookupTypesRequest {
    category: string;
    prefix: string;
    office: string;
}

export interface PatchSwtDataLookupTypesWithNameRequest {
    name: string;
    category: string;
    prefix: string;
    lookupType: LookupType;
}

export interface PostSwtDataLookupTypesRequest {
    category: string;
    prefix: string;
    lookupType: LookupType;
}

/**
 * 
 */
export class LookupTypesApi extends runtime.BaseAPI {

    /**
     * Delete CWMS Lookup Type
     * Delete swtData lookupTypes with name
     */
    async deleteSwtDataLookupTypesWithNameRaw(requestParameters: DeleteSwtDataLookupTypesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['category'] == null) {
            throw new runtime.RequiredError(
                'category',
                'Required parameter "category" was null or undefined when calling deleteSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['prefix'] == null) {
            throw new runtime.RequiredError(
                'prefix',
                'Required parameter "prefix" was null or undefined when calling deleteSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataLookupTypesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['prefix'] != null) {
            queryParameters['prefix'] = requestParameters['prefix'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/lookup-types/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete CWMS Lookup Type
     * Delete swtData lookupTypes with name
     */
    async deleteSwtDataLookupTypesWithName(requestParameters: DeleteSwtDataLookupTypesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataLookupTypesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Returns matching CWMS Lookup Type Data.
     * Get swtData lookupTypes
     */
    async getSwtDataLookupTypesRaw(requestParameters: GetSwtDataLookupTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LookupType>>> {
        if (requestParameters['category'] == null) {
            throw new runtime.RequiredError(
                'category',
                'Required parameter "category" was null or undefined when calling getSwtDataLookupTypes().'
            );
        }

        if (requestParameters['prefix'] == null) {
            throw new runtime.RequiredError(
                'prefix',
                'Required parameter "prefix" was null or undefined when calling getSwtDataLookupTypes().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataLookupTypes().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['prefix'] != null) {
            queryParameters['prefix'] = requestParameters['prefix'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/lookup-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LookupTypeFromJSON));
    }

    /**
     * Returns matching CWMS Lookup Type Data.
     * Get swtData lookupTypes
     */
    async getSwtDataLookupTypes(requestParameters: GetSwtDataLookupTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LookupType>> {
        const response = await this.getSwtDataLookupTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update CWMS Lookup Type
     * Patch swtData lookupTypes with name
     */
    async patchSwtDataLookupTypesWithNameRaw(requestParameters: PatchSwtDataLookupTypesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['category'] == null) {
            throw new runtime.RequiredError(
                'category',
                'Required parameter "category" was null or undefined when calling patchSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['prefix'] == null) {
            throw new runtime.RequiredError(
                'prefix',
                'Required parameter "prefix" was null or undefined when calling patchSwtDataLookupTypesWithName().'
            );
        }

        if (requestParameters['lookupType'] == null) {
            throw new runtime.RequiredError(
                'lookupType',
                'Required parameter "lookupType" was null or undefined when calling patchSwtDataLookupTypesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['prefix'] != null) {
            queryParameters['prefix'] = requestParameters['prefix'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/lookup-types/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LookupTypeToJSON(requestParameters['lookupType']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update CWMS Lookup Type
     * Patch swtData lookupTypes with name
     */
    async patchSwtDataLookupTypesWithName(requestParameters: PatchSwtDataLookupTypesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchSwtDataLookupTypesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Create CWMS Lookup Type
     * Post swtData lookupTypes
     */
    async postSwtDataLookupTypesRaw(requestParameters: PostSwtDataLookupTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['category'] == null) {
            throw new runtime.RequiredError(
                'category',
                'Required parameter "category" was null or undefined when calling postSwtDataLookupTypes().'
            );
        }

        if (requestParameters['prefix'] == null) {
            throw new runtime.RequiredError(
                'prefix',
                'Required parameter "prefix" was null or undefined when calling postSwtDataLookupTypes().'
            );
        }

        if (requestParameters['lookupType'] == null) {
            throw new runtime.RequiredError(
                'lookupType',
                'Required parameter "lookupType" was null or undefined when calling postSwtDataLookupTypes().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['prefix'] != null) {
            queryParameters['prefix'] = requestParameters['prefix'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/lookup-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LookupTypeToJSON(requestParameters['lookupType']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create CWMS Lookup Type
     * Post swtData lookupTypes
     */
    async postSwtDataLookupTypes(requestParameters: PostSwtDataLookupTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataLookupTypesRaw(requestParameters, initOverrides);
    }

}
