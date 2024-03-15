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
import type { CdaError, TimeSeriesGroup } from "../models/index";
import {
  CdaErrorFromJSON,
  CdaErrorToJSON,
  TimeSeriesGroupFromJSON,
  TimeSeriesGroupToJSON,
} from "../models/index";

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
export class TimeseriesGroupsApi extends runtime.BaseAPI {
  /**
   * Deletes requested time series group
   * Delete cwmsData timeseries group with groupId
   */
  async deleteCwmsDataTimeseriesGroupWithGroupIdRaw(
    requestParameters: DeleteCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["groupId"] == null) {
      throw new runtime.RequiredError(
        "groupId",
        'Required parameter "groupId" was null or undefined when calling deleteCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["categoryId"] == null) {
      throw new runtime.RequiredError(
        "categoryId",
        'Required parameter "categoryId" was null or undefined when calling deleteCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["office"] == null) {
      throw new runtime.RequiredError(
        "office",
        'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["categoryId"] != null) {
      queryParameters["category-id"] = requestParameters["categoryId"];
    }

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = await this.configuration.apiKey(
        "Authorization"
      ); // ApiKey authentication
    }

    const response = await this.request(
      {
        path: `/cwms-data/timeseries/group/{group-id}`.replace(
          `{${"group-id"}}`,
          encodeURIComponent(String(requestParameters["groupId"]))
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
   * Deletes requested time series group
   * Delete cwmsData timeseries group with groupId
   */
  async deleteCwmsDataTimeseriesGroupWithGroupId(
    requestParameters: DeleteCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteCwmsDataTimeseriesGroupWithGroupIdRaw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Returns CWMS Timeseries Groups Data
   * Get cwmsData timeseries group
   */
  async getCwmsDataTimeseriesGroupRaw(
    requestParameters: GetCwmsDataTimeseriesGroupRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<TimeSeriesGroup>>> {
    const queryParameters: any = {};

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    if (requestParameters["includeAssigned"] != null) {
      queryParameters["include-assigned"] =
        requestParameters["includeAssigned"];
    }

    if (requestParameters["timeseriesCategoryLike"] != null) {
      queryParameters["timeseries-category-like"] =
        requestParameters["timeseriesCategoryLike"];
    }

    if (requestParameters["timeseriesGroupLike"] != null) {
      queryParameters["timeseries-group-like"] =
        requestParameters["timeseriesGroupLike"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cwms-data/timeseries/group`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(TimeSeriesGroupFromJSON)
    );
  }

  /**
   * Returns CWMS Timeseries Groups Data
   * Get cwmsData timeseries group
   */
  async getCwmsDataTimeseriesGroup(
    requestParameters: GetCwmsDataTimeseriesGroupRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<TimeSeriesGroup>> {
    const response = await this.getCwmsDataTimeseriesGroupRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Retrieves requested timeseries group
   * Get cwmsData timeseries group with groupId
   */
  async getCwmsDataTimeseriesGroupWithGroupIdRaw(
    requestParameters: GetCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<TimeSeriesGroup>> {
    if (requestParameters["groupId"] == null) {
      throw new runtime.RequiredError(
        "groupId",
        'Required parameter "groupId" was null or undefined when calling getCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["office"] == null) {
      throw new runtime.RequiredError(
        "office",
        'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["categoryId"] == null) {
      throw new runtime.RequiredError(
        "categoryId",
        'Required parameter "categoryId" was null or undefined when calling getCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    if (requestParameters["categoryId"] != null) {
      queryParameters["category-id"] = requestParameters["categoryId"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/cwms-data/timeseries/group/{group-id}`.replace(
          `{${"group-id"}}`,
          encodeURIComponent(String(requestParameters["groupId"]))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TimeSeriesGroupFromJSON(jsonValue)
    );
  }

  /**
   * Retrieves requested timeseries group
   * Get cwmsData timeseries group with groupId
   */
  async getCwmsDataTimeseriesGroupWithGroupId(
    requestParameters: GetCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<TimeSeriesGroup> {
    const response = await this.getCwmsDataTimeseriesGroupWithGroupIdRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update existing TimeSeriesGroup
   * Patch cwmsData timeseries group with groupId
   */
  async patchCwmsDataTimeseriesGroupWithGroupIdRaw(
    requestParameters: PatchCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["groupId"] == null) {
      throw new runtime.RequiredError(
        "groupId",
        'Required parameter "groupId" was null or undefined when calling patchCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["office"] == null) {
      throw new runtime.RequiredError(
        "office",
        'Required parameter "office" was null or undefined when calling patchCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    if (requestParameters["timeSeriesGroup"] == null) {
      throw new runtime.RequiredError(
        "timeSeriesGroup",
        'Required parameter "timeSeriesGroup" was null or undefined when calling patchCwmsDataTimeseriesGroupWithGroupId().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["replaceAssignedTs"] != null) {
      queryParameters["replace-assigned-ts"] =
        requestParameters["replaceAssignedTs"];
    }

    if (requestParameters["office"] != null) {
      queryParameters["office"] = requestParameters["office"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = await this.configuration.apiKey(
        "Authorization"
      ); // ApiKey authentication
    }

    const response = await this.request(
      {
        path: `/cwms-data/timeseries/group/{group-id}`.replace(
          `{${"group-id"}}`,
          encodeURIComponent(String(requestParameters["groupId"]))
        ),
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters,
        body: TimeSeriesGroupToJSON(requestParameters["timeSeriesGroup"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update existing TimeSeriesGroup
   * Patch cwmsData timeseries group with groupId
   */
  async patchCwmsDataTimeseriesGroupWithGroupId(
    requestParameters: PatchCwmsDataTimeseriesGroupWithGroupIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.patchCwmsDataTimeseriesGroupWithGroupIdRaw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Create new TimeSeriesGroup
   * Post cwmsData timeseries group
   */
  async postCwmsDataTimeseriesGroupRaw(
    requestParameters: PostCwmsDataTimeseriesGroupRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters["timeSeriesGroup"] == null) {
      throw new runtime.RequiredError(
        "timeSeriesGroup",
        'Required parameter "timeSeriesGroup" was null or undefined when calling postCwmsDataTimeseriesGroup().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters["failIfExists"] != null) {
      queryParameters["fail-if-exists"] = requestParameters["failIfExists"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = await this.configuration.apiKey(
        "Authorization"
      ); // ApiKey authentication
    }

    const response = await this.request(
      {
        path: `/cwms-data/timeseries/group`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: TimeSeriesGroupToJSON(requestParameters["timeSeriesGroup"]),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Create new TimeSeriesGroup
   * Post cwmsData timeseries group
   */
  async postCwmsDataTimeseriesGroup(
    requestParameters: PostCwmsDataTimeseriesGroupRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.postCwmsDataTimeseriesGroupRaw(requestParameters, initOverrides);
  }
}
