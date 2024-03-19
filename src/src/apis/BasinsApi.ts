/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Basin,
  CdaError,
} from '../models/index';
import {
    BasinFromJSON,
    BasinToJSON,
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

export interface GetCwmsDataBasinsRequest {
    office?: string;
    unit?: string;
}

export interface GetCwmsDataBasinsWithBasinIdRequest {
    basinId: string;
    office?: string;
    unit?: string;
}

/**
 * 
 */
export class BasinsApi extends runtime.BaseAPI {

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     */
    async getCwmsDataBasinsRaw(requestParameters: GetCwmsDataBasinsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Basin>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['unit'] != null) {
            queryParameters['unit'] = requestParameters['unit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data/basins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasinFromJSON(jsonValue));
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     */
    async getCwmsDataBasins(requestParameters: GetCwmsDataBasinsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Basin> {
        const response = await this.getCwmsDataBasinsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     */
    async getCwmsDataBasinsWithBasinIdRaw(requestParameters: GetCwmsDataBasinsWithBasinIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Basin>> {
        if (requestParameters['basinId'] == null) {
            throw new runtime.RequiredError(
                'basinId',
                'Required parameter "basinId" was null or undefined when calling getCwmsDataBasinsWithBasinId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['unit'] != null) {
            queryParameters['unit'] = requestParameters['unit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data/basins/{basin-id}`.replace(`{${"basin-id"}}`, encodeURIComponent(String(requestParameters['basinId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BasinFromJSON(jsonValue));
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     */
    async getCwmsDataBasinsWithBasinId(requestParameters: GetCwmsDataBasinsWithBasinIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Basin> {
        const response = await this.getCwmsDataBasinsWithBasinIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
