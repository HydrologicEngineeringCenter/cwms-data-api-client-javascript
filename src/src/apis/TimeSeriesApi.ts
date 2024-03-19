/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CdaError,
  StoreRule,
  TimeSeries,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    StoreRuleFromJSON,
    StoreRuleToJSON,
    TimeSeriesFromJSON,
    TimeSeriesToJSON,
} from '../models/index';

export interface DeleteCwmsDataTimeseriesWithTimeseriesRequest {
    timeseries: string;
    office: string;
    begin: string;
    end: string;
    timezone?: string;
    versionDate?: string;
    startTimeInclusive?: boolean;
    endTimeInclusive?: boolean;
    maxVersion?: boolean;
    overrideProtection?: boolean;
}

export interface GetCwmsDataTimeseriesRequest {
    name: string;
    office?: string;
    unit?: string;
    datum?: string;
    begin?: string;
    end?: string;
    timezone?: string;
    format?: string;
    page?: string;
    pageSize?: number;
}

export interface PatchCwmsDataTimeseriesWithTimeseriesRequest {
    timeseries: string;
    timeSeries: TimeSeries;
    versionDate?: string;
    timezone?: string;
    createAsLrts?: boolean;
    storeRule?: StoreRule;
    overrideProtection?: boolean;
}

export interface PostCwmsDataTimeseriesRequest {
    timeSeries: TimeSeries;
    versionDate?: string;
    timezone?: string;
    createAsLrts?: boolean;
    storeRule?: StoreRule;
    overrideProtection?: boolean;
}

/**
 * 
 */
export class TimeSeriesApi extends runtime.BaseAPI {

    /**
     * Delete cwmsData timeseries with timeseries
     */
    async deleteCwmsDataTimeseriesWithTimeseriesRaw(requestParameters: DeleteCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['timeseries'] == null) {
            throw new runtime.RequiredError(
                'timeseries',
                'Required parameter "timeseries" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['begin'] != null) {
            queryParameters['begin'] = requestParameters['begin'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        if (requestParameters['startTimeInclusive'] != null) {
            queryParameters['start-time-inclusive'] = requestParameters['startTimeInclusive'];
        }

        if (requestParameters['endTimeInclusive'] != null) {
            queryParameters['end-time-inclusive'] = requestParameters['endTimeInclusive'];
        }

        if (requestParameters['maxVersion'] != null) {
            queryParameters['max-version'] = requestParameters['maxVersion'];
        }

        if (requestParameters['overrideProtection'] != null) {
            queryParameters['override-protection'] = requestParameters['overrideProtection'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete cwmsData timeseries with timeseries
     */
    async deleteCwmsDataTimeseriesWithTimeseries(requestParameters: DeleteCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
    }

    /**
     * Get cwmsData timeseries
     */
    async getCwmsDataTimeseriesRaw(requestParameters: GetCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeSeries>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling getCwmsDataTimeseries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['unit'] != null) {
            queryParameters['unit'] = requestParameters['unit'];
        }

        if (requestParameters['datum'] != null) {
            queryParameters['datum'] = requestParameters['datum'];
        }

        if (requestParameters['begin'] != null) {
            queryParameters['begin'] = requestParameters['begin'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeseries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeSeriesFromJSON(jsonValue));
    }

    /**
     * Get cwmsData timeseries
     */
    async getCwmsDataTimeseries(requestParameters: GetCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeSeries> {
        const response = await this.getCwmsDataTimeseriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    async patchCwmsDataTimeseriesWithTimeseriesRaw(requestParameters: PatchCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['timeseries'] == null) {
            throw new runtime.RequiredError(
                'timeseries',
                'Required parameter "timeseries" was null or undefined when calling patchCwmsDataTimeseriesWithTimeseries().'
            );
        }

        if (requestParameters['timeSeries'] == null) {
            throw new runtime.RequiredError(
                'timeSeries',
                'Required parameter "timeSeries" was null or undefined when calling patchCwmsDataTimeseriesWithTimeseries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['createAsLrts'] != null) {
            queryParameters['create-as-lrts'] = requestParameters['createAsLrts'];
        }

        if (requestParameters['storeRule'] != null) {
            queryParameters['store-rule'] = requestParameters['storeRule'];
        }

        if (requestParameters['overrideProtection'] != null) {
            queryParameters['override-protection'] = requestParameters['overrideProtection'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TimeSeriesToJSON(requestParameters['timeSeries']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    async patchCwmsDataTimeseriesWithTimeseries(requestParameters: PatchCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
    }

    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds 
     * Post cwmsData timeseries
     */
    async postCwmsDataTimeseriesRaw(requestParameters: PostCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['timeSeries'] == null) {
            throw new runtime.RequiredError(
                'timeSeries',
                'Required parameter "timeSeries" was null or undefined when calling postCwmsDataTimeseries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['versionDate'] != null) {
            queryParameters['version-date'] = requestParameters['versionDate'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['createAsLrts'] != null) {
            queryParameters['create-as-lrts'] = requestParameters['createAsLrts'];
        }

        if (requestParameters['storeRule'] != null) {
            queryParameters['store-rule'] = requestParameters['storeRule'];
        }

        if (requestParameters['overrideProtection'] != null) {
            queryParameters['override-protection'] = requestParameters['overrideProtection'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeSeriesToJSON(requestParameters['timeSeries']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds 
     * Post cwmsData timeseries
     */
    async postCwmsDataTimeseries(requestParameters: PostCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataTimeseriesRaw(requestParameters, initOverrides);
    }

}
