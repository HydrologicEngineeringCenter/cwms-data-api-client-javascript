/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { StoreRule, TimeSeries } from '../models/index';
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
export declare class TimeSeriesApi extends runtime.BaseAPI {
    /**
     * Delete cwmsData timeseries with timeseries
     */
    deleteCwmsDataTimeseriesWithTimeseriesRaw(requestParameters: DeleteCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete cwmsData timeseries with timeseries
     */
    deleteCwmsDataTimeseriesWithTimeseries(requestParameters: DeleteCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get cwmsData timeseries
     */
    getCwmsDataTimeseriesRaw(requestParameters: GetCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeSeries>>;
    /**
     * Get cwmsData timeseries
     */
    getCwmsDataTimeseries(requestParameters: GetCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeSeries>;
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    patchCwmsDataTimeseriesWithTimeseriesRaw(requestParameters: PatchCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    patchCwmsDataTimeseriesWithTimeseries(requestParameters: PatchCwmsDataTimeseriesWithTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     */
    postCwmsDataTimeseriesRaw(requestParameters: PostCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     */
    postCwmsDataTimeseries(requestParameters: PostCwmsDataTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
