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
  TimeSeriesCategory,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    TimeSeriesCategoryFromJSON,
    TimeSeriesCategoryToJSON,
} from '../models/index';

export interface DeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest {
    categoryId: string;
    office: string;
    cascadeDelete?: boolean;
}

export interface GetCwmsDataTimeseriesCategoryRequest {
    office?: string;
}

export interface GetCwmsDataTimeseriesCategoryWithCategoryIdRequest {
    categoryId: string;
    office: string;
}

export interface PostCwmsDataTimeseriesCategoryRequest {
    timeSeriesCategory: TimeSeriesCategory;
    failIfExists?: boolean;
}

/**
 * 
 */
export class TimeSeriesCategoriesApi extends runtime.BaseAPI {

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     */
    async deleteCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters: DeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling deleteCwmsDataTimeseriesCategoryWithCategoryId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesCategoryWithCategoryId().'
            );
        }

        const queryParameters: any = {};

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
            path: `/timeseries/category/{category-id}`.replace(`{${"category-id"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     */
    async deleteCwmsDataTimeseriesCategoryWithCategoryId(requestParameters: DeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     */
    async getCwmsDataTimeseriesCategoryRaw(requestParameters: GetCwmsDataTimeseriesCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TimeSeriesCategory>>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeseries/category`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TimeSeriesCategoryFromJSON));
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     */
    async getCwmsDataTimeseriesCategory(requestParameters: GetCwmsDataTimeseriesCategoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TimeSeriesCategory>> {
        const response = await this.getCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     */
    async getCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters: GetCwmsDataTimeseriesCategoryWithCategoryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeSeriesCategory>> {
        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling getCwmsDataTimeseriesCategoryWithCategoryId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesCategoryWithCategoryId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeseries/category/{category-id}`.replace(`{${"category-id"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimeSeriesCategoryFromJSON(jsonValue));
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     */
    async getCwmsDataTimeseriesCategoryWithCategoryId(requestParameters: GetCwmsDataTimeseriesCategoryWithCategoryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeSeriesCategory> {
        const response = await this.getCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     */
    async postCwmsDataTimeseriesCategoryRaw(requestParameters: PostCwmsDataTimeseriesCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['timeSeriesCategory'] == null) {
            throw new runtime.RequiredError(
                'timeSeriesCategory',
                'Required parameter "timeSeriesCategory" was null or undefined when calling postCwmsDataTimeseriesCategory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/timeseries/category`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeSeriesCategoryToJSON(requestParameters['timeSeriesCategory']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     */
    async postCwmsDataTimeseriesCategory(requestParameters: PostCwmsDataTimeseriesCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides);
    }

}
