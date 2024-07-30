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
  CdaError,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
} from '../models/index';

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

}
