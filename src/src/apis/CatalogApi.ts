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
  Catalog,
  CatalogableEndpoint,
  CdaError,
  UnitSystem,
} from '../models/index';
import {
    CatalogFromJSON,
    CatalogToJSON,
    CatalogableEndpointFromJSON,
    CatalogableEndpointToJSON,
    CdaErrorFromJSON,
    CdaErrorToJSON,
    UnitSystemFromJSON,
    UnitSystemToJSON,
} from '../models/index';

export interface GetCwmsDataCatalogWithDatasetRequest {
    dataset: CatalogableEndpoint;
    page?: string;
    pageSize?: number;
    unitSystem?: UnitSystem;
    office?: string;
    like?: string;
    timeseriesCategoryLike?: string;
    timeseriesGroupLike?: string;
    locationCategoryLike?: string;
    locationGroupLike?: string;
    boundingOfficeLike?: string;
    includeExtents?: boolean;
    excludeEmpty?: boolean;
    locationKindLike?: string;
    locationTypeLike?: string;
}

/**
 * 
 */
export class CatalogApi extends runtime.BaseAPI {

    /**
     * Get cwmsData catalog with dataset
     */
    async getCwmsDataCatalogWithDatasetRaw(requestParameters: GetCwmsDataCatalogWithDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Catalog>> {
        if (requestParameters['dataset'] == null) {
            throw new runtime.RequiredError(
                'dataset',
                'Required parameter "dataset" was null or undefined when calling getCwmsDataCatalogWithDataset().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        if (requestParameters['unitSystem'] != null) {
            queryParameters['unit-system'] = requestParameters['unitSystem'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['like'] != null) {
            queryParameters['like'] = requestParameters['like'];
        }

        if (requestParameters['timeseriesCategoryLike'] != null) {
            queryParameters['timeseries-category-like'] = requestParameters['timeseriesCategoryLike'];
        }

        if (requestParameters['timeseriesGroupLike'] != null) {
            queryParameters['timeseries-group-like'] = requestParameters['timeseriesGroupLike'];
        }

        if (requestParameters['locationCategoryLike'] != null) {
            queryParameters['location-category-like'] = requestParameters['locationCategoryLike'];
        }

        if (requestParameters['locationGroupLike'] != null) {
            queryParameters['location-group-like'] = requestParameters['locationGroupLike'];
        }

        if (requestParameters['boundingOfficeLike'] != null) {
            queryParameters['bounding-office-like'] = requestParameters['boundingOfficeLike'];
        }

        if (requestParameters['includeExtents'] != null) {
            queryParameters['include-extents'] = requestParameters['includeExtents'];
        }

        if (requestParameters['excludeEmpty'] != null) {
            queryParameters['exclude-empty'] = requestParameters['excludeEmpty'];
        }

        if (requestParameters['locationKindLike'] != null) {
            queryParameters['location-kind-like'] = requestParameters['locationKindLike'];
        }

        if (requestParameters['locationTypeLike'] != null) {
            queryParameters['location-type-like'] = requestParameters['locationTypeLike'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/catalog/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters['dataset']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogFromJSON(jsonValue));
    }

    /**
     * Get cwmsData catalog with dataset
     */
    async getCwmsDataCatalogWithDataset(requestParameters: GetCwmsDataCatalogWithDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Catalog> {
        const response = await this.getCwmsDataCatalogWithDatasetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
