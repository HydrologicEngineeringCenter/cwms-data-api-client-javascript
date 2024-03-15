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

import * as runtime from "../runtime";
import type { CdaError, LocationCategory } from "../models/index";
import {
  CdaErrorFromJSON,
  CdaErrorToJSON,
  LocationCategoryFromJSON,
  LocationCategoryToJSON,
} from "../models/index";

export interface DeleteCwmsDataLocationCategoryWithCategoryIdRequest {
  categoryId: string;
  office: string;
  cascadeDelete?: boolean;
}

export interface GetCwmsDataLocationCategoryRequest {
  office?: string;
}

export interface GetCwmsDataLocationCategoryWithCategoryIdRequest {
  categoryId: string;
  office: string;
}

export interface PostCwmsDataLocationCategoryRequest {
  locationCategory: LocationCategory;
}

/**
 *
 */
export class LocationCategoriesApi extends runtime.BaseAPI {
  /**
   * Deletes requested location category
   * Delete cwmsData location category with categoryId
   */
  async deleteCwmsDataLocationCategoryWithCategoryIdRaw(
    requestParameters: DeleteCwmsDataLocationCategoryWithCategoryIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["categoryId"] == null) {
      throw new runtime.RequiredError(
        "categoryId",
        'Required parameter "categoryId" was null or undefined when calling deleteCwmsDataLocationCategoryWithCategoryId().'
      );
    }

    if (requestParameters["office"] == null) {
      throw new runtime.RequiredError(
        "office",
        'Required parameter "office" was null or undefined when calling deleteCwmsDataLocationCategoryWithCategoryId().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    if (requestParameters["cascadeDelete"] != null) {
      queryParameters["cascade-delete"] = requestParameters["cascadeDelete"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = await this.configuration.apiKey(
        "Authorization"
      ); // ApiKey authentication
    }

    const response = await this.request(
      {
        path: `/cwms-data/location/category/{category-id}`.replace(
          `{${"category-id"}}`,
          encodeURIComponent(String(requestParameters["categoryId"]))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Deletes requested location category
   * Delete cwmsData location category with categoryId
   */
  async deleteCwmsDataLocationCategoryWithCategoryId(
    requestParameters: DeleteCwmsDataLocationCategoryWithCategoryIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteCwmsDataLocationCategoryWithCategoryIdRaw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Returns CWMS Location Category Data
   * Get cwmsData location category
   */
  async getCwmsDataLocationCategoryRaw(
    requestParameters: GetCwmsDataLocationCategoryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<LocationCategory>>> {
    const queryParameters: any = {};

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cwms-data/location/category`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(LocationCategoryFromJSON)
    );
  }

  /**
   * Returns CWMS Location Category Data
   * Get cwmsData location category
   */
  async getCwmsDataLocationCategory(
    requestParameters: GetCwmsDataLocationCategoryRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<LocationCategory>> {
    const response = await this.getCwmsDataLocationCategoryRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Retrieves requested Location Category
   * Get cwmsData location category with categoryId
   */
  async getCwmsDataLocationCategoryWithCategoryIdRaw(
    requestParameters: GetCwmsDataLocationCategoryWithCategoryIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<LocationCategory>> {
    if (requestParameters["categoryId"] == null) {
      throw new runtime.RequiredError(
        "categoryId",
        'Required parameter "categoryId" was null or undefined when calling getCwmsDataLocationCategoryWithCategoryId().'
      );
    }

    if (requestParameters["office"] == null) {
      throw new runtime.RequiredError(
        "office",
        'Required parameter "office" was null or undefined when calling getCwmsDataLocationCategoryWithCategoryId().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cwms-data/location/category/{category-id}`.replace(
          `{${"category-id"}}`,
          encodeURIComponent(String(requestParameters["categoryId"]))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LocationCategoryFromJSON(jsonValue)
    );
  }

  /**
   * Retrieves requested Location Category
   * Get cwmsData location category with categoryId
   */
  async getCwmsDataLocationCategoryWithCategoryId(
    requestParameters: GetCwmsDataLocationCategoryWithCategoryIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<LocationCategory> {
    const response = await this.getCwmsDataLocationCategoryWithCategoryIdRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Create new LocationCategory
   * Post cwmsData location category
   */
  async postCwmsDataLocationCategoryRaw(
    requestParameters: PostCwmsDataLocationCategoryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["locationCategory"] == null) {
      throw new runtime.RequiredError(
        "locationCategory",
        'Required parameter "locationCategory" was null or undefined when calling postCwmsDataLocationCategory().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = await this.configuration.apiKey(
        "Authorization"
      ); // ApiKey authentication
    }

    const response = await this.request(
      {
        path: `/cwms-data/location/category`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: LocationCategoryToJSON(requestParameters["locationCategory"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Create new LocationCategory
   * Post cwmsData location category
   */
  async postCwmsDataLocationCategory(
    requestParameters: PostCwmsDataLocationCategoryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.postCwmsDataLocationCategoryRaw(
      requestParameters,
      initOverrides
    );
  }
}
