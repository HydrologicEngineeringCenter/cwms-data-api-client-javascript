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
  LocationGroup,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    LocationGroupFromJSON,
    LocationGroupToJSON,
} from '../models/index';

export interface DeleteCwmsDataLocationGroupWithGroupIdRequest {
    groupId: string;
    categoryId: string;
    office: string;
    cascadeDelete?: boolean;
}

export interface GetLocationGroupRequest {
    office?: string;
    includeAssigned?: boolean;
    locationCategoryLike?: string;
}

export interface GetLocationGroupWithGroupIdRequest {
    groupId: string;
    office: string;
    categoryId: string;
}

export interface PatchCwmsDataLocationGroupWithGroupIdRequest {
    groupId: string;
    office: string;
    locationGroup: LocationGroup;
    replaceAssignedLocs?: boolean;
}

export interface PostCwmsDataLocationGroupRequest {
    locationGroup: LocationGroup;
}

/**
 * 
 */
export class LocationGroupsApi extends runtime.BaseAPI {

    /**
     * Deletes requested location group
     * Delete CwmsData location group with groupId
     */
    async deleteCwmsDataLocationGroupWithGroupIdRaw(requestParameters: DeleteCwmsDataLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteCwmsDataLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling deleteCwmsDataLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataLocationGroupWithGroupId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['categoryId'] != null) {
            queryParameters['category-id'] = requestParameters['categoryId'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['cascadeDelete'] != null) {
            queryParameters['cascade-delete'] = requestParameters['cascadeDelete'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/location/group/{group-id}`.replace(`{${"group-id"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested location group
     * Delete CwmsData location group with groupId
     */
    async deleteCwmsDataLocationGroupWithGroupId(requestParameters: DeleteCwmsDataLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataLocationGroupWithGroupIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns CWMS Location Groups Data
     * Get CwmsData location group
     */
    async getLocationGroupRaw(requestParameters: GetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LocationGroup>>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['includeAssigned'] != null) {
            queryParameters['include-assigned'] = requestParameters['includeAssigned'];
        }

        if (requestParameters['locationCategoryLike'] != null) {
            queryParameters['location-category-like'] = requestParameters['locationCategoryLike'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/location/group`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocationGroupFromJSON));
    }

    /**
     * Returns CWMS Location Groups Data
     * Get CwmsData location group
     */
    async getLocationGroup(requestParameters: GetLocationGroupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LocationGroup>> {
        const response = await this.getLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves requested Location Group
     * Get CwmsData location group with groupId
     */
    async getLocationGroupWithGroupIdRaw(requestParameters: GetLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling getLocationGroupWithGroupId().'
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
            path: `/location/group/{group-id}`.replace(`{${"group-id"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * Retrieves requested Location Group
     * Get CwmsData location group with groupId
     */
    async getLocationGroupWithGroupId(requestParameters: GetLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.getLocationGroupWithGroupIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update existing LocationGroup. Allows for renaming group, assigning new locations, and unassigning all locations from the group.
     * Patch CwmsData location group with groupId
     */
    async patchCwmsDataLocationGroupWithGroupIdRaw(requestParameters: PatchCwmsDataLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling patchCwmsDataLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling patchCwmsDataLocationGroupWithGroupId().'
            );
        }

        if (requestParameters['locationGroup'] == null) {
            throw new runtime.RequiredError(
                'locationGroup',
                'Required parameter "locationGroup" was null or undefined when calling patchCwmsDataLocationGroupWithGroupId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['replaceAssignedLocs'] != null) {
            queryParameters['replace-assigned-locs'] = requestParameters['replaceAssignedLocs'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/location/group/{group-id}`.replace(`{${"group-id"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LocationGroupToJSON(requestParameters['locationGroup']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update existing LocationGroup. Allows for renaming group, assigning new locations, and unassigning all locations from the group.
     * Patch CwmsData location group with groupId
     */
    async patchCwmsDataLocationGroupWithGroupId(requestParameters: PatchCwmsDataLocationGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataLocationGroupWithGroupIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new LocationGroup
     * Post CwmsData location group
     */
    async postCwmsDataLocationGroupRaw(requestParameters: PostCwmsDataLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['locationGroup'] == null) {
            throw new runtime.RequiredError(
                'locationGroup',
                'Required parameter "locationGroup" was null or undefined when calling postCwmsDataLocationGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/location/group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationGroupToJSON(requestParameters['locationGroup']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new LocationGroup
     * Post CwmsData location group
     */
    async postCwmsDataLocationGroup(requestParameters: PostCwmsDataLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataLocationGroupRaw(requestParameters, initOverrides);
    }

}
