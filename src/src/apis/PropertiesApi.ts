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
  Property,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    PropertyFromJSON,
    PropertyToJSON,
} from '../models/index';

export interface DeleteSwtDataPropertiesWithNameRequest {
    name: string;
    office: string;
    categoryId: string;
}

export interface GetSwtDataPropertiesRequest {
    officeMask?: string;
    categoryId?: string;
    nameMask?: string;
}

export interface GetSwtDataPropertiesWithNameRequest {
    name: string;
    office: string;
    categoryId: string;
    defaultValue?: string;
}

export interface PatchSwtDataPropertiesWithNameRequest {
    name: string;
    property: Property;
}

export interface PostSwtDataPropertiesRequest {
    property: Property;
}

/**
 * 
 */
export class PropertiesApi extends runtime.BaseAPI {

    /**
     * Delete CWMS Property
     * Delete swtData properties with name
     */
    async deleteSwtDataPropertiesWithNameRaw(requestParameters: DeleteSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteSwtDataPropertiesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataPropertiesWithName().'
            );
        }

        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling deleteSwtDataPropertiesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['categoryId'] != null) {
            queryParameters['category-id'] = requestParameters['categoryId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/properties/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete CWMS Property
     * Delete swtData properties with name
     */
    async deleteSwtDataPropertiesWithName(requestParameters: DeleteSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataPropertiesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Returns matching CWMS Property Data.
     * Get swtData properties
     */
    async getSwtDataPropertiesRaw(requestParameters: GetSwtDataPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Property>>> {
        const queryParameters: any = {};

        if (requestParameters['officeMask'] != null) {
            queryParameters['office-mask'] = requestParameters['officeMask'];
        }

        if (requestParameters['categoryId'] != null) {
            queryParameters['category-id'] = requestParameters['categoryId'];
        }

        if (requestParameters['nameMask'] != null) {
            queryParameters['name-mask'] = requestParameters['nameMask'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/properties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PropertyFromJSON));
    }

    /**
     * Returns matching CWMS Property Data.
     * Get swtData properties
     */
    async getSwtDataProperties(requestParameters: GetSwtDataPropertiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Property>> {
        const response = await this.getSwtDataPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns CWMS Property Data
     * Get swtData properties with name
     */
    async getSwtDataPropertiesWithNameRaw(requestParameters: GetSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Property>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getSwtDataPropertiesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataPropertiesWithName().'
            );
        }

        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling getSwtDataPropertiesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['categoryId'] != null) {
            queryParameters['category-id'] = requestParameters['categoryId'];
        }

        if (requestParameters['defaultValue'] != null) {
            queryParameters['default-value'] = requestParameters['defaultValue'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/properties/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PropertyFromJSON(jsonValue));
    }

    /**
     * Returns CWMS Property Data
     * Get swtData properties with name
     */
    async getSwtDataPropertiesWithName(requestParameters: GetSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Property> {
        const response = await this.getSwtDataPropertiesWithNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update CWMS Property
     * Patch swtData properties with name
     */
    async patchSwtDataPropertiesWithNameRaw(requestParameters: PatchSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchSwtDataPropertiesWithName().'
            );
        }

        if (requestParameters['property'] == null) {
            throw new runtime.RequiredError(
                'property',
                'Required parameter "property" was null or undefined when calling patchSwtDataPropertiesWithName().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/properties/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PropertyToJSON(requestParameters['property']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update CWMS Property
     * Patch swtData properties with name
     */
    async patchSwtDataPropertiesWithName(requestParameters: PatchSwtDataPropertiesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchSwtDataPropertiesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Create CWMS Property
     * Post swtData properties
     */
    async postSwtDataPropertiesRaw(requestParameters: PostSwtDataPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['property'] == null) {
            throw new runtime.RequiredError(
                'property',
                'Required parameter "property" was null or undefined when calling postSwtDataProperties().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/properties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PropertyToJSON(requestParameters['property']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create CWMS Property
     * Post swtData properties
     */
    async postSwtDataProperties(requestParameters: PostSwtDataPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataPropertiesRaw(requestParameters, initOverrides);
    }

}
