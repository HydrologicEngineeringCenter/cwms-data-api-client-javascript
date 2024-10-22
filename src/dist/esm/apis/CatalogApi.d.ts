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
import type { Catalog, CatalogableEndpoint, UnitSystem } from '../models/index';
export interface GetSwtDataCatalogWithDatasetRequest {
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
export declare class CatalogApi extends runtime.BaseAPI {
    /**
     * Get swtData catalog with dataset
     */
    getSwtDataCatalogWithDatasetRaw(requestParameters: GetSwtDataCatalogWithDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Catalog>>;
    /**
     * Get swtData catalog with dataset
     */
    getSwtDataCatalogWithDataset(requestParameters: GetSwtDataCatalogWithDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Catalog>;
}
