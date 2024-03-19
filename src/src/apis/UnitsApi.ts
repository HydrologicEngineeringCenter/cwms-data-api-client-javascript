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
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

export interface GetCwmsDataUnitsRequest {
    format?: string;
}

/**
 * 
 */
export class UnitsApi extends runtime.BaseAPI {

    /**
     * Get cwmsData units
     */
    async getCwmsDataUnitsRaw(requestParameters: GetCwmsDataUnitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/units`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get cwmsData units
     */
    async getCwmsDataUnits(requestParameters: GetCwmsDataUnitsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCwmsDataUnitsRaw(requestParameters, initOverrides);
    }

}
