/* tslint:disable */
/* eslint-disable */
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
import type {
  CdaError,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

export interface GetCwmsDataLevelsWithLevelIdTimeseriesRequest {
    levelId: string;
}

export interface GetCwmsDataTimeseriesRecentWithGroupIdRequest {
    groupId: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get cwmsData
     */
    async getCwmsDataRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get cwmsData
     */
    async getCwmsData(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCwmsDataRaw(initOverrides);
    }

    /**
     * Get cwmsData levels with levelId timeseries
     */
    async getCwmsDataLevelsWithLevelIdTimeseriesRaw(requestParameters: GetCwmsDataLevelsWithLevelIdTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['levelId'] == null) {
            throw new runtime.RequiredError(
                'levelId',
                'Required parameter "levelId" was null or undefined when calling getCwmsDataLevelsWithLevelIdTimeseries().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/levels/{level-id}/timeseries`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get cwmsData levels with levelId timeseries
     */
    async getCwmsDataLevelsWithLevelIdTimeseries(requestParameters: GetCwmsDataLevelsWithLevelIdTimeseriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCwmsDataLevelsWithLevelIdTimeseriesRaw(requestParameters, initOverrides);
    }

    /**
     * Get cwmsData timeseries recent with groupId
     */
    async getCwmsDataTimeseriesRecentWithGroupIdRaw(requestParameters: GetCwmsDataTimeseriesRecentWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getCwmsDataTimeseriesRecentWithGroupId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timeseries/recent/{group-id}`.replace(`{${"group-id"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get cwmsData timeseries recent with groupId
     */
    async getCwmsDataTimeseriesRecentWithGroupId(requestParameters: GetCwmsDataTimeseriesRecentWithGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCwmsDataTimeseriesRecentWithGroupIdRaw(requestParameters, initOverrides);
    }

}
