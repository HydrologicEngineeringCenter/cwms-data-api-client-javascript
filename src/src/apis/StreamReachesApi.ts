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
  StreamReach,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    StreamReachFromJSON,
    StreamReachToJSON,
} from '../models/index';

export interface DeleteCwmsDataStreamReachesWithNameRequest {
    name: string;
    office: string;
}

export interface GetStreamReachesRequest {
    officeMask?: string;
    streamIdMask?: string;
    reachIdMask?: string;
    configurationIdMask?: string;
    stationUnit?: string;
}

export interface GetStreamReachesWithNameRequest {
    name: string;
    office: string;
    streamId: string;
    stationUnit?: string;
}

export interface PatchCwmsDataStreamReachesWithNameRequest {
    name: string;
    name2: string;
    office: string;
}

export interface PostCwmsDataStreamReachesRequest {
    streamReach: StreamReach;
    failIfExists?: boolean;
}

/**
 * 
 */
export class StreamReachesApi extends runtime.BaseAPI {

    /**
     * Delete CWMS Stream Reach
     * Delete CwmsData streamReaches with name
     */
    async deleteCwmsDataStreamReachesWithNameRaw(requestParameters: DeleteCwmsDataStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteCwmsDataStreamReachesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataStreamReachesWithName().'
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
            path: `/stream-reaches/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete CWMS Stream Reach
     * Delete CwmsData streamReaches with name
     */
    async deleteCwmsDataStreamReachesWithName(requestParameters: DeleteCwmsDataStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataStreamReachesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Returns matching CWMS Stream Reach Data for a Reservoir Project.
     * Get CwmsData streamReaches
     */
    async getStreamReachesRaw(requestParameters: GetStreamReachesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StreamReach>>> {
        const queryParameters: any = {};

        if (requestParameters['officeMask'] != null) {
            queryParameters['office-mask'] = requestParameters['officeMask'];
        }

        if (requestParameters['streamIdMask'] != null) {
            queryParameters['stream-id-mask'] = requestParameters['streamIdMask'];
        }

        if (requestParameters['reachIdMask'] != null) {
            queryParameters['reach-id-mask'] = requestParameters['reachIdMask'];
        }

        if (requestParameters['configurationIdMask'] != null) {
            queryParameters['configuration-id-mask'] = requestParameters['configurationIdMask'];
        }

        if (requestParameters['stationUnit'] != null) {
            queryParameters['station-unit'] = requestParameters['stationUnit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stream-reaches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StreamReachFromJSON));
    }

    /**
     * Returns matching CWMS Stream Reach Data for a Reservoir Project.
     * Get CwmsData streamReaches
     */
    async getStreamReaches(requestParameters: GetStreamReachesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StreamReach>> {
        const response = await this.getStreamReachesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns CWMS Stream Reach Data
     * Get CwmsData streamReaches with name
     */
    async getStreamReachesWithNameRaw(requestParameters: GetStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StreamReach>>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getStreamReachesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getStreamReachesWithName().'
            );
        }

        if (requestParameters['streamId'] == null) {
            throw new runtime.RequiredError(
                'streamId',
                'Required parameter "streamId" was null or undefined when calling getStreamReachesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['streamId'] != null) {
            queryParameters['stream-id'] = requestParameters['streamId'];
        }

        if (requestParameters['stationUnit'] != null) {
            queryParameters['station-unit'] = requestParameters['stationUnit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stream-reaches/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StreamReachFromJSON));
    }

    /**
     * Returns CWMS Stream Reach Data
     * Get CwmsData streamReaches with name
     */
    async getStreamReachesWithName(requestParameters: GetStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StreamReach>> {
        const response = await this.getStreamReachesWithNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rename CWMS Stream Reach
     * Patch CwmsData streamReaches with name
     */
    async patchCwmsDataStreamReachesWithNameRaw(requestParameters: PatchCwmsDataStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchCwmsDataStreamReachesWithName().'
            );
        }

        if (requestParameters['name2'] == null) {
            throw new runtime.RequiredError(
                'name2',
                'Required parameter "name2" was null or undefined when calling patchCwmsDataStreamReachesWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling patchCwmsDataStreamReachesWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name2'] != null) {
            queryParameters['name'] = requestParameters['name2'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stream-reaches/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Rename CWMS Stream Reach
     * Patch CwmsData streamReaches with name
     */
    async patchCwmsDataStreamReachesWithName(requestParameters: PatchCwmsDataStreamReachesWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataStreamReachesWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Create CWMS Stream Reach
     * Post CwmsData streamReaches
     */
    async postCwmsDataStreamReachesRaw(requestParameters: PostCwmsDataStreamReachesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['streamReach'] == null) {
            throw new runtime.RequiredError(
                'streamReach',
                'Required parameter "streamReach" was null or undefined when calling postCwmsDataStreamReaches().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=1';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stream-reaches`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StreamReachToJSON(requestParameters['streamReach']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create CWMS Stream Reach
     * Post CwmsData streamReaches
     */
    async postCwmsDataStreamReaches(requestParameters: PostCwmsDataStreamReachesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataStreamReachesRaw(requestParameters, initOverrides);
    }

}
