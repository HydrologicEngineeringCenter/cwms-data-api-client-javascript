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
  DatabaseLoadMethod,
  DeleteMethod,
  RatingMetadataList,
  RatingSpec,
  RatingSpecs,
  RatingTemplate,
  RatingTemplates,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    DatabaseLoadMethodFromJSON,
    DatabaseLoadMethodToJSON,
    DeleteMethodFromJSON,
    DeleteMethodToJSON,
    RatingMetadataListFromJSON,
    RatingMetadataListToJSON,
    RatingSpecFromJSON,
    RatingSpecToJSON,
    RatingSpecsFromJSON,
    RatingSpecsToJSON,
    RatingTemplateFromJSON,
    RatingTemplateToJSON,
    RatingTemplatesFromJSON,
    RatingTemplatesToJSON,
} from '../models/index';

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
export class RatingsApi extends runtime.BaseAPI {

    /**
     * Deletes requested rating specification
     * Delete swtData ratings spec with ratingId
     */
    async deleteSwtDataRatingsSpecWithRatingIdRaw(requestParameters: DeleteSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ratingId'] == null) {
            throw new runtime.RequiredError(
                'ratingId',
                'Required parameter "ratingId" was null or undefined when calling deleteSwtDataRatingsSpecWithRatingId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataRatingsSpecWithRatingId().'
            );
        }

        if (requestParameters['method'] == null) {
            throw new runtime.RequiredError(
                'method',
                'Required parameter "method" was null or undefined when calling deleteSwtDataRatingsSpecWithRatingId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/spec/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested rating specification
     * Delete swtData ratings spec with ratingId
     */
    async deleteSwtDataRatingsSpecWithRatingId(requestParameters: DeleteSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes requested rating specification
     * Delete swtData ratings template with templateId
     */
    async deleteSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters: DeleteSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['templateId'] == null) {
            throw new runtime.RequiredError(
                'templateId',
                'Required parameter "templateId" was null or undefined when calling deleteSwtDataRatingsTemplateWithTemplateId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataRatingsTemplateWithTemplateId().'
            );
        }

        if (requestParameters['method'] == null) {
            throw new runtime.RequiredError(
                'method',
                'Required parameter "method" was null or undefined when calling deleteSwtDataRatingsTemplateWithTemplateId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/template/{template-id}`.replace(`{${"template-id"}}`, encodeURIComponent(String(requestParameters['templateId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested rating specification
     * Delete swtData ratings template with templateId
     */
    async deleteSwtDataRatingsTemplateWithTemplateId(requestParameters: DeleteSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides);
    }

    /**
     * Delete swtData ratings with ratingId
     */
    async deleteSwtDataRatingsWithRatingIdRaw(requestParameters: DeleteSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ratingId'] == null) {
            throw new runtime.RequiredError(
                'ratingId',
                'Required parameter "ratingId" was null or undefined when calling deleteSwtDataRatingsWithRatingId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteSwtDataRatingsWithRatingId().'
            );
        }

        if (requestParameters['begin'] == null) {
            throw new runtime.RequiredError(
                'begin',
                'Required parameter "begin" was null or undefined when calling deleteSwtDataRatingsWithRatingId().'
            );
        }

        if (requestParameters['end'] == null) {
            throw new runtime.RequiredError(
                'end',
                'Required parameter "end" was null or undefined when calling deleteSwtDataRatingsWithRatingId().'
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete swtData ratings with ratingId
     */
    async deleteSwtDataRatingsWithRatingId(requestParameters: DeleteSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSwtDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
    }

    /**
     * Get swtData ratings
     */
    async getSwtDataRatingsRaw(requestParameters: GetSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
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

        if (requestParameters['at'] != null) {
            queryParameters['at'] = requestParameters['at'];
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get swtData ratings
     */
    async getSwtDataRatings(requestParameters: GetSwtDataRatingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getSwtDataRatingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData ratings metadata
     */
    async getSwtDataRatingsMetadataRaw(requestParameters: GetSwtDataRatingsMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingMetadataList>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['ratingIdMask'] != null) {
            queryParameters['rating-id-mask'] = requestParameters['ratingIdMask'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/metadata`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RatingMetadataListFromJSON(jsonValue));
    }

    /**
     * Get swtData ratings metadata
     */
    async getSwtDataRatingsMetadata(requestParameters: GetSwtDataRatingsMetadataRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingMetadataList> {
        const response = await this.getSwtDataRatingsMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData ratings spec
     */
    async getSwtDataRatingsSpecRaw(requestParameters: GetSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingSpecs>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['ratingIdMask'] != null) {
            queryParameters['rating-id-mask'] = requestParameters['ratingIdMask'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/spec`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RatingSpecsFromJSON(jsonValue));
    }

    /**
     * Get swtData ratings spec
     */
    async getSwtDataRatingsSpec(requestParameters: GetSwtDataRatingsSpecRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingSpecs> {
        const response = await this.getSwtDataRatingsSpecRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData ratings spec with ratingId
     */
    async getSwtDataRatingsSpecWithRatingIdRaw(requestParameters: GetSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingSpec>> {
        if (requestParameters['ratingId'] == null) {
            throw new runtime.RequiredError(
                'ratingId',
                'Required parameter "ratingId" was null or undefined when calling getSwtDataRatingsSpecWithRatingId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataRatingsSpecWithRatingId().'
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
            path: `/ratings/spec/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RatingSpecFromJSON(jsonValue));
    }

    /**
     * Get swtData ratings spec with ratingId
     */
    async getSwtDataRatingsSpecWithRatingId(requestParameters: GetSwtDataRatingsSpecWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingSpec> {
        const response = await this.getSwtDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData ratings template
     */
    async getSwtDataRatingsTemplateRaw(requestParameters: GetSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RatingTemplates>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['templateIdMask'] != null) {
            queryParameters['template-id-mask'] = requestParameters['templateIdMask'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/template`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RatingTemplatesFromJSON(jsonValue));
    }

    /**
     * Get swtData ratings template
     */
    async getSwtDataRatingsTemplate(requestParameters: GetSwtDataRatingsTemplateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RatingTemplates> {
        const response = await this.getSwtDataRatingsTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData ratings template with templateId
     */
    async getSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters: GetSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RatingTemplate>>> {
        if (requestParameters['templateId'] == null) {
            throw new runtime.RequiredError(
                'templateId',
                'Required parameter "templateId" was null or undefined when calling getSwtDataRatingsTemplateWithTemplateId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataRatingsTemplateWithTemplateId().'
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
            path: `/ratings/template/{template-id}`.replace(`{${"template-id"}}`, encodeURIComponent(String(requestParameters['templateId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RatingTemplateFromJSON));
    }

    /**
     * Get swtData ratings template with templateId
     */
    async getSwtDataRatingsTemplateWithTemplateId(requestParameters: GetSwtDataRatingsTemplateWithTemplateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RatingTemplate>> {
        const response = await this.getSwtDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns CWMS Rating Data
     * Get swtData ratings with ratingId
     */
    async getSwtDataRatingsWithRatingIdRaw(requestParameters: GetSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['ratingId'] == null) {
            throw new runtime.RequiredError(
                'ratingId',
                'Required parameter "ratingId" was null or undefined when calling getSwtDataRatingsWithRatingId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataRatingsWithRatingId().'
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

        if (requestParameters['method'] != null) {
            queryParameters['method'] = requestParameters['method'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns CWMS Rating Data
     * Get swtData ratings with ratingId
     */
    async getSwtDataRatingsWithRatingId(requestParameters: GetSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getSwtDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a RatingSet
     * Patch swtData ratings with ratingId
     */
    async patchSwtDataRatingsWithRatingIdRaw(requestParameters: PatchSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ratingId'] == null) {
            throw new runtime.RequiredError(
                'ratingId',
                'Required parameter "ratingId" was null or undefined when calling patchSwtDataRatingsWithRatingId().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling patchSwtDataRatingsWithRatingId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['storeTemplate'] != null) {
            queryParameters['store-template'] = requestParameters['storeTemplate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/xml;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update a RatingSet
     * Patch swtData ratings with ratingId
     */
    async patchSwtDataRatingsWithRatingId(requestParameters: PatchSwtDataRatingsWithRatingIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchSwtDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new RatingSet
     * Post swtData ratings
     */
    async postSwtDataRatingsRaw(requestParameters: PostSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling postSwtDataRatings().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['storeTemplate'] != null) {
            queryParameters['store-template'] = requestParameters['storeTemplate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/xml;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new RatingSet
     * Post swtData ratings
     */
    async postSwtDataRatings(requestParameters: PostSwtDataRatingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataRatingsRaw(requestParameters, initOverrides);
    }

    /**
     * Create new Rating Specification
     * Post swtData ratings spec
     */
    async postSwtDataRatingsSpecRaw(requestParameters: PostSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ratingSpec'] == null) {
            throw new runtime.RequiredError(
                'ratingSpec',
                'Required parameter "ratingSpec" was null or undefined when calling postSwtDataRatingsSpec().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/xml;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/spec`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RatingSpecToJSON(requestParameters['ratingSpec']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new Rating Specification
     * Post swtData ratings spec
     */
    async postSwtDataRatingsSpec(requestParameters: PostSwtDataRatingsSpecRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataRatingsSpecRaw(requestParameters, initOverrides);
    }

    /**
     * Create new Rating Template
     * Post swtData ratings template
     */
    async postSwtDataRatingsTemplateRaw(requestParameters: PostSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['ratingTemplate'] == null) {
            throw new runtime.RequiredError(
                'ratingTemplate',
                'Required parameter "ratingTemplate" was null or undefined when calling postSwtDataRatingsTemplate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/xml;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/ratings/template`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RatingTemplateToJSON(requestParameters['ratingTemplate']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new Rating Template
     * Post swtData ratings template
     */
    async postSwtDataRatingsTemplate(requestParameters: PostSwtDataRatingsTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSwtDataRatingsTemplateRaw(requestParameters, initOverrides);
    }

}
