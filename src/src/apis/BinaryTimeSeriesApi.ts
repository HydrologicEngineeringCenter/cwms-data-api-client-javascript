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
  BinaryTimeseries,
  CdaError,
} from '../models/index';
import {
    BinaryTimeseriesFromJSON,
    BinaryTimeseriesToJSON,
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

export interface DeleteSwtDataTimeseriesBinaryWithNameRequest {
    name: string;
    office: string;
    begin: string;
    end: string;
    binaryTypeMask?: string;
    timezone?: string;
    versionDate?: string;
}

export interface GetSwtDataTimeseriesBinaryRequest {
    office: string;
    name: string;
    begin: string;
    end: string;
    binaryTypeMask?: string;
    timezone?: string;
    versionDate?: string;
}

export interface GetSwtDataTimeseriesBinaryWithNameValueRequest {
    name: string;
    office: string;
    date: string;
    timezone?: string;
    versionDate?: string;
    blobId?: string;
}

export interface PatchSwtDataTimeseriesBinaryWithNameRequest {
    name: string;
    binaryTimeseries: BinaryTimeseries;
    replaceAll?: boolean;
}

export interface PostSwtDataTimeseriesBinaryRequest {
    binaryTimeseries: BinaryTimeseries;
    replaceAll?: boolean;
}

/**
 * 
 */
export class BinaryTimeseriesApi extends runtime.BaseAPI {

    /**
     * Deletes requested binary timeseries id
     * Delete swtData timeseries binary with name
     */
    async deleteSwtDataTimeseriesBinaryWithNameRaw(requestParameters: DeleteSwtDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteSwtDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling deleteSwtDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling deleteSwtDataTimeseriesBinaryWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['binaryTypeMask'] != null) {
            queryParameters['binary-type-mask'] = requestParameters['binaryTypeMask'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['begin'] != null) {
            queryParameters['begin'] = requestParameters['begin'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/binary/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested binary timeseries id
     * Delete swtData timeseries binary with name
     */
    async deleteSwtDataTimeseriesBinaryWithName(requestParameters: DeleteSwtDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataTimeseriesBinaryWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve binary time series values for a provided time window and date version.If individual values exceed 64 kilobytes, a URL to a separate download is provided instead of being included in the returned payload from this request.
     */
    async getSwtDataTimeseriesBinaryRaw(requestParameters: GetSwtDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinaryTimeseries>> {
        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataTimeseriesBinary().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getSwtDataTimeseriesBinary().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling getSwtDataTimeseriesBinary().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling getSwtDataTimeseriesBinary().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['binaryTypeMask'] != null) {
            queryParameters['binary-type-mask'] = requestParameters['binaryTypeMask'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['begin'] != null) {
            queryParameters['begin'] = requestParameters['begin'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/binary`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BinaryTimeseriesFromJSON(jsonValue));
    }

    /**
     * Retrieve binary time series values for a provided time window and date version.If individual values exceed 64 kilobytes, a URL to a separate download is provided instead of being included in the returned payload from this request.
     */
    async getSwtDataTimeseriesBinary(requestParameters: GetSwtDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinaryTimeseries> {
        const response = await this.getSwtDataTimeseriesBinaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData timeseries binary with name value
     */
    async getSwtDataTimeseriesBinaryWithNameValueRaw(requestParameters: GetSwtDataTimeseriesBinaryWithNameValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getSwtDataTimeseriesBinaryWithNameValue().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataTimeseriesBinaryWithNameValue().'
            );
        }

        if (requestParameters['date'] == null) {
            throw new runtime.RequiredError(
                'date',
                'Required parameter "date" was null or undefined when calling getSwtDataTimeseriesBinaryWithNameValue().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        if (requestParameters['blobId'] != null) {
            queryParameters['blob-id'] = requestParameters['blobId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/binary/{name}/value`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get swtData timeseries binary with name value
     */
    async getSwtDataTimeseriesBinaryWithNameValue(requestParameters: GetSwtDataTimeseriesBinaryWithNameValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getSwtDataTimeseriesBinaryWithNameValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a binary timeseries
     * Patch swtData timeseries binary with name
     */
    async patchSwtDataTimeseriesBinaryWithNameRaw(requestParameters: PatchSwtDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchSwtDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['binaryTimeseries'] == null) {
            throw new runtime.RequiredError(
                'binaryTimeseries',
                'Required parameter "binaryTimeseries" was null or undefined when calling patchSwtDataTimeseriesBinaryWithName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['replaceAll'] != null) {
            queryParameters['replace-all'] = requestParameters['replaceAll'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/binary/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BinaryTimeseriesToJSON(requestParameters['binaryTimeseries']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a binary timeseries
     * Patch swtData timeseries binary with name
     */
    async patchSwtDataTimeseriesBinaryWithName(requestParameters: PatchSwtDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchSwtDataTimeseriesBinaryWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Create new BinaryTimeseries
     * Post swtData timeseries binary
     */
    async postSwtDataTimeseriesBinaryRaw(requestParameters: PostSwtDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['binaryTimeseries'] == null) {
            throw new runtime.RequiredError(
                'binaryTimeseries',
                'Required parameter "binaryTimeseries" was null or undefined when calling postSwtDataTimeseriesBinary().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['replaceAll'] != null) {
            queryParameters['replace-all'] = requestParameters['replaceAll'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/binary`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BinaryTimeseriesToJSON(requestParameters['binaryTimeseries']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new BinaryTimeseries
     * Post swtData timeseries binary
     */
    async postSwtDataTimeseriesBinary(requestParameters: PostSwtDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataTimeseriesBinaryRaw(requestParameters, initOverrides);
    }

}
