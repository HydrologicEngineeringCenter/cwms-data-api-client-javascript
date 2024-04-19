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
import type { LocationLevel, SpecifiedLevel } from '../models/index';
export interface DeleteCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    cascadeDelete?: boolean;
    office?: string;
    effectiveDate?: string;
    timezone?: string;
}
export interface DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    specifiedLevelId: string;
    office: string;
}
export interface GetCwmsDataLevelsRequest {
    levelIdMask?: string;
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
export interface GetCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    office: string;
    effectiveDate: string;
    timezone?: string;
    unit?: string;
}
export interface GetCwmsDataSpecifiedLevelsRequest {
    office?: string;
    templateIdMask?: string;
}
export interface PatchCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    locationLevel: LocationLevel;
    effectiveDate?: string;
}
export interface PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    specifiedLevelId: string;
    specifiedLevelId2: string;
    office: string;
}
export interface PostCwmsDataLevelsRequest {
    locationLevel: LocationLevel;
}
export interface PostCwmsDataSpecifiedLevelsRequest {
    specifiedLevel: SpecifiedLevel;
    failIfExists?: boolean;
}
/**
 *
 */
export declare class LevelsApi extends runtime.BaseAPI {
    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     */
    deleteCwmsDataLevelsWithLevelIdRaw(requestParameters: DeleteCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     */
    deleteCwmsDataLevelsWithLevelId(requestParameters: DeleteCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     */
    deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters: DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     */
    deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters: DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get cwmsData levels
     */
    getCwmsDataLevelsRaw(requestParameters: GetCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Get cwmsData levels
     */
    getCwmsDataLevels(requestParameters?: GetCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     */
    getCwmsDataLevelsWithLevelIdRaw(requestParameters: GetCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLevel>>;
    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     */
    getCwmsDataLevelsWithLevelId(requestParameters: GetCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLevel>;
    /**
     * Get cwmsData specifiedLevels
     */
    getCwmsDataSpecifiedLevelsRaw(requestParameters: GetCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpecifiedLevel>>;
    /**
     * Get cwmsData specifiedLevels
     */
    getCwmsDataSpecifiedLevels(requestParameters?: GetCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpecifiedLevel>;
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     */
    patchCwmsDataLevelsWithLevelIdRaw(requestParameters: PatchCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     */
    patchCwmsDataLevelsWithLevelId(requestParameters: PatchCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     */
    patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters: PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     */
    patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters: PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     */
    postCwmsDataLevelsRaw(requestParameters: PostCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     */
    postCwmsDataLevels(requestParameters: PostCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     */
    postCwmsDataSpecifiedLevelsRaw(requestParameters: PostCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     */
    postCwmsDataSpecifiedLevels(requestParameters: PostCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
