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
import type { DatabaseLoadMethod, DeleteMethod, RatingMetadataList, RatingSpec, RatingSpecs, RatingTemplate, RatingTemplates } from '../models/index';
export interface DeleteSwtDataRatingsSpecWithRatingIdRequest {
    ratingId: string;
    office: string;
    method: DeleteMethod;
}
export interface DeleteSwtDataRatingsTemplateWithTemplateIdRequest {
    templateId: string;
    office: string;
    method: DeleteMethod;
}
export interface DeleteSwtDataRatingsWithRatingIdRequest {
    ratingId: string;
    office: string;
    begin: string;
    end: string;
    timezone?: string;
}
export interface GetSwtDataRatingsRequest {
    name?: string;
    office?: string;
    unit?: string;
    datum?: string;
    at?: string;
    end?: string;
    timezone?: string;
    format?: string;
}
export interface GetSwtDataRatingsMetadataRequest {
    office?: string;
    ratingIdMask?: string;
    start?: string;
    end?: string;
    timezone?: string;
    page?: string;
    pageSize?: number;
}
export interface GetSwtDataRatingsSpecRequest {
    office?: string;
    ratingIdMask?: string;
    page?: string;
    pageSize?: number;
}
export interface GetSwtDataRatingsSpecWithRatingIdRequest {
    ratingId: string;
    office: string;
}
export interface GetSwtDataRatingsTemplateRequest {
    office?: string;
    templateIdMask?: string;
    page?: string;
    pageSize?: number;
}
export interface GetSwtDataRatingsTemplateWithTemplateIdRequest {
    templateId: string;
    office: string;
}
export interface GetSwtDataRatingsWithRatingIdRequest {
    ratingId: string;
    office: string;
    begin?: string;
    end?: string;
    timezone?: string;
    method?: DatabaseLoadMethod;
}
export interface PatchSwtDataRatingsWithRatingIdRequest {
    ratingId: string;
    body: object;
    storeTemplate?: boolean;
}
export interface PostSwtDataRatingsRequest {
    body: object;
    storeTemplate?: boolean;
}
export interface PostSwtDataRatingsSpecRequest {
    ratingSpec: RatingSpec;
    failIfExists?: boolean;
}
export interface PostSwtDataRatingsTemplateRequest {
    ratingTemplate: RatingTemplate;
    failIfExists?: boolean;
}
/**
 *
 */
export declare class RatingsApi extends runtime.BaseAPI {
    /**
     * Deletes requested rating specification
     * Delete swtData ratings spec with ratingId
     */
    deleteSwtDataRatingsSpecWithRatingIdRaw(requestParameters: DeleteSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes requested rating specification
     * Delete swtData ratings spec with ratingId
     */
    deleteSwtDataRatingsSpecWithRatingId(requestParameters: DeleteSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Deletes requested rating specification
     * Delete swtData ratings template with templateId
     */
    deleteSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters: DeleteSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes requested rating specification
     * Delete swtData ratings template with templateId
     */
    deleteSwtDataRatingsTemplateWithTemplateId(requestParameters: DeleteSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Delete swtData ratings with ratingId
     */
    deleteSwtDataRatingsWithRatingIdRaw(requestParameters: DeleteSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete swtData ratings with ratingId
     */
    deleteSwtDataRatingsWithRatingId(requestParameters: DeleteSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get swtData ratings
     */
    getSwtDataRatingsRaw(requestParameters: GetSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Get swtData ratings
     */
    getSwtDataRatings(requestParameters?: GetSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Get swtData ratings metadata
     */
    getSwtDataRatingsMetadataRaw(requestParameters: GetSwtDataRatingsMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingMetadataList>>;
    /**
     * Get swtData ratings metadata
     */
    getSwtDataRatingsMetadata(requestParameters?: GetSwtDataRatingsMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingMetadataList>;
    /**
     * Get swtData ratings spec
     */
    getSwtDataRatingsSpecRaw(requestParameters: GetSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingSpecs>>;
    /**
     * Get swtData ratings spec
     */
    getSwtDataRatingsSpec(requestParameters?: GetSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingSpecs>;
    /**
     * Get swtData ratings spec with ratingId
     */
    getSwtDataRatingsSpecWithRatingIdRaw(requestParameters: GetSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingSpec>>;
    /**
     * Get swtData ratings spec with ratingId
     */
    getSwtDataRatingsSpecWithRatingId(requestParameters: GetSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingSpec>;
    /**
     * Get swtData ratings template
     */
    getSwtDataRatingsTemplateRaw(requestParameters: GetSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingTemplates>>;
    /**
     * Get swtData ratings template
     */
    getSwtDataRatingsTemplate(requestParameters?: GetSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingTemplates>;
    /**
     * Get swtData ratings template with templateId
     */
    getSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters: GetSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RatingTemplate>>>;
    /**
     * Get swtData ratings template with templateId
     */
    getSwtDataRatingsTemplateWithTemplateId(requestParameters: GetSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RatingTemplate>>;
    /**
     * Returns CWMS Rating Data
     * Get swtData ratings with ratingId
     */
    getSwtDataRatingsWithRatingIdRaw(requestParameters: GetSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Returns CWMS Rating Data
     * Get swtData ratings with ratingId
     */
    getSwtDataRatingsWithRatingId(requestParameters: GetSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Update a RatingSet
     * Patch swtData ratings with ratingId
     */
    patchSwtDataRatingsWithRatingIdRaw(requestParameters: PatchSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Update a RatingSet
     * Patch swtData ratings with ratingId
     */
    patchSwtDataRatingsWithRatingId(requestParameters: PatchSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new RatingSet
     * Post swtData ratings
     */
    postSwtDataRatingsRaw(requestParameters: PostSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new RatingSet
     * Post swtData ratings
     */
    postSwtDataRatings(requestParameters: PostSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new Rating Specification
     * Post swtData ratings spec
     */
    postSwtDataRatingsSpecRaw(requestParameters: PostSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new Rating Specification
     * Post swtData ratings spec
     */
    postSwtDataRatingsSpec(requestParameters: PostSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Create new Rating Template
     * Post swtData ratings template
     */
    postSwtDataRatingsTemplateRaw(requestParameters: PostSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create new Rating Template
     * Post swtData ratings template
     */
    postSwtDataRatingsTemplate(requestParameters: PostSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
