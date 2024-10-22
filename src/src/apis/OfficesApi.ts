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
  Office,
  OfficeFormatV1,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    OfficeFromJSON,
    OfficeToJSON,
    OfficeFormatV1FromJSON,
    OfficeFormatV1ToJSON,
} from '../models/index';

export interface GetSwtDataOfficesRequest {
    format?: string;
    hasData?: boolean;
}

export interface GetSwtDataOfficesWithOfficeRequest {
    office: string;
    format?: string;
}

/**
 * 
 */
export class OfficesApi extends runtime.BaseAPI {

    /**
     * Get swtData offices
     */
    async getSwtDataOfficesRaw(requestParameters: GetSwtDataOfficesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OfficeFormatV1>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['hasData'] != null) {
            queryParameters['has-data'] = requestParameters['hasData'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/offices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OfficeFormatV1FromJSON(jsonValue));
    }

    /**
     * Get swtData offices
     */
    async getSwtDataOffices(requestParameters: GetSwtDataOfficesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OfficeFormatV1> {
        const response = await this.getSwtDataOfficesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swtData offices with office
     */
    async getSwtDataOfficesWithOfficeRaw(requestParameters: GetSwtDataOfficesWithOfficeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OfficeFormatV1>> {
        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getSwtDataOfficesWithOffice().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/offices/{office}`.replace(`{${"office"}}`, encodeURIComponent(String(requestParameters['office']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OfficeFormatV1FromJSON(jsonValue));
    }

    /**
     * Get swtData offices with office
     */
    async getSwtDataOfficesWithOffice(requestParameters: GetSwtDataOfficesWithOfficeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OfficeFormatV1> {
        const response = await this.getSwtDataOfficesWithOfficeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
