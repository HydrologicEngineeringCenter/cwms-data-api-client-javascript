/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
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

export interface DeleteCwmsDataTimeseriesBinaryWithNameRequest {
    name: string;
    timeseries: string;
    office: string;
    begin: string;
    end: string;
    binaryTypeMask?: string;
    timezone?: string;
    versionDate?: string;
}

export interface GetCwmsDataTimeseriesBinaryRequest {
    office: string;
    name: string;
    begin: string;
    end: string;
    binaryTypeMask?: string;
    timezone?: string;
    versionDate?: string;
}

export interface GetCwmsDataTimeseriesBinaryWithNameValueRequest {
    name: string;
    office: string;
    date: string;
    timezone?: string;
    versionDate?: string;
    blobId?: string;
}

export interface PatchCwmsDataTimeseriesBinaryWithNameRequest {
    name: string;
    timeseries: string;
    binaryTimeseries: BinaryTimeseries;
    replaceAll?: boolean;
}

export interface PostCwmsDataTimeseriesBinaryRequest {
    binaryTimeseries: BinaryTimeseries;
    replaceAll?: boolean;
}

/**
 * 
 */
export class BinaryTimeseriesApi extends runtime.BaseAPI {

    /**
     * Deletes requested binary timeseries id
     * Delete cwmsData timeseries binary with name
     */
    async deleteCwmsDataTimeseriesBinaryWithNameRaw(requestParameters: DeleteCwmsDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling deleteCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['timeseries'] == null) {
            throw new runtime.RequiredError(
                'timeseries',
                'Required parameter "timeseries" was null or undefined when calling deleteCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling deleteCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling deleteCwmsDataTimeseriesBinaryWithName().'
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
            path: `/timeseries/binary/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested binary timeseries id
     * Delete cwmsData timeseries binary with name
     */
    async deleteCwmsDataTimeseriesBinaryWithName(requestParameters: DeleteCwmsDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataTimeseriesBinaryWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve binary time series values for a provided time window and date version.If individual values exceed 64 kilobytes, a URL to a separate download is provided instead of being included in the returned payload from this request.
     */
    async getCwmsDataTimeseriesBinaryRaw(requestParameters: GetCwmsDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BinaryTimeseries>> {
        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesBinary().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getCwmsDataTimeseriesBinary().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling getCwmsDataTimeseriesBinary().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling getCwmsDataTimeseriesBinary().'
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
    async getCwmsDataTimeseriesBinary(requestParameters: GetCwmsDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BinaryTimeseries> {
        const response = await this.getCwmsDataTimeseriesBinaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get cwmsData timeseries binary with name value
     */
    async getCwmsDataTimeseriesBinaryWithNameValueRaw(requestParameters: GetCwmsDataTimeseriesBinaryWithNameValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getCwmsDataTimeseriesBinaryWithNameValue().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesBinaryWithNameValue().'
            );
        }

        if (requestParameters['date'] == null) {
            throw new runtime.RequiredError(
                'date',
                'Required parameter "date" was null or undefined when calling getCwmsDataTimeseriesBinaryWithNameValue().'
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

        const response = await this.request({
            path: `/timeseries/binary/{name}/value`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Get cwmsData timeseries binary with name value
     */
    async getCwmsDataTimeseriesBinaryWithNameValue(requestParameters: GetCwmsDataTimeseriesBinaryWithNameValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getCwmsDataTimeseriesBinaryWithNameValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a binary timeseries
     * Patch cwmsData timeseries binary with name
     */
    async patchCwmsDataTimeseriesBinaryWithNameRaw(requestParameters: PatchCwmsDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling patchCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['timeseries'] == null) {
            throw new runtime.RequiredError(
                'timeseries',
                'Required parameter "timeseries" was null or undefined when calling patchCwmsDataTimeseriesBinaryWithName().'
            );
        }

        if (requestParameters['binaryTimeseries'] == null) {
            throw new runtime.RequiredError(
                'binaryTimeseries',
                'Required parameter "binaryTimeseries" was null or undefined when calling patchCwmsDataTimeseriesBinaryWithName().'
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
            path: `/timeseries/binary/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BinaryTimeseriesToJSON(requestParameters['binaryTimeseries']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a binary timeseries
     * Patch cwmsData timeseries binary with name
     */
    async patchCwmsDataTimeseriesBinaryWithName(requestParameters: PatchCwmsDataTimeseriesBinaryWithNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataTimeseriesBinaryWithNameRaw(requestParameters, initOverrides);
    }

    /**
     * Create new BinaryTimeseries
     * Post cwmsData timeseries binary
     */
    async postCwmsDataTimeseriesBinaryRaw(requestParameters: PostCwmsDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['binaryTimeseries'] == null) {
            throw new runtime.RequiredError(
                'binaryTimeseries',
                'Required parameter "binaryTimeseries" was null or undefined when calling postCwmsDataTimeseriesBinary().'
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
     * Post cwmsData timeseries binary
     */
    async postCwmsDataTimeseriesBinary(requestParameters: PostCwmsDataTimeseriesBinaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataTimeseriesBinaryRaw(requestParameters, initOverrides);
    }

}