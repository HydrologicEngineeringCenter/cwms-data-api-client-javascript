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
import type { TimeSeriesGroup } from '../models/index';
export interface DeleteCwmsDataTimeseriesGroupWithGroupIdRequest {
    groupId: string;
    categoryId: string;
    office: string;
}
export interface GetCwmsDataTimeseriesGroupRequest {
    office?: string;
    includeAssigned?: boolean;
    timeseriesCategoryLike?: string;
    timeseriesGroupLike?: string;
}
export interface GetCwmsDataTimeseriesGroupWithGroupIdRequest {
    groupId: string;
    office: string;
    categoryId: string;
}
export interface PatchCwmsDataTimeseriesGroupWithGroupIdRequest {
    groupId: string;
    office: string;
    timeSeriesGroup: TimeSeriesGroup;
    replaceAssignedTs?: boolean;
}
export interface PostCwmsDataTimeseriesGroupRequest {
    timeSeriesGroup: TimeSeriesGroup;
    failIfExists?: boolean;
}
/**
 *
 */
export declare class TimeseriesGroupsApi extends runtime.BaseAPI {
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     */
    deleteCwmsDataTimeseriesGroupWithGroupIdRaw(requestParameters: DeleteCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     */
    deleteCwmsDataTimeseriesGroupWithGroupId(requestParameters: DeleteCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     */
    getCwmsDataTimeseriesGroupRaw(requestParameters: GetCwmsDataTimeseriesGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TimeSeriesGroup>>>;
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     */
    getCwmsDataTimeseriesGroup(requestParameters?: GetCwmsDataTimeseriesGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TimeSeriesGroup>>;
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     */
    getCwmsDataTimeseriesGroupWithGroupIdRaw(requestParameters: GetCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeSeriesGroup>>;
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     */
    getCwmsDataTimeseriesGroupWithGroupId(requestParameters: GetCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeSeriesGroup>;
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     */
    patchCwmsDataTimeseriesGroupWithGroupIdRaw(requestParameters: PatchCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     */
    patchCwmsDataTimeseriesGroupWithGroupId(requestParameters: PatchCwmsDataTimeseriesGroupWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     */
    postCwmsDataTimeseriesGroupRaw(requestParameters: PostCwmsDataTimeseriesGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     */
    postCwmsDataTimeseriesGroup(requestParameters: PostCwmsDataTimeseriesGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
