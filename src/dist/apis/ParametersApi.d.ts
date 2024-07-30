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
export interface GetCwmsDataParametersRequest {
    format?: string;
    office?: string;
}
/**
 *
 */
export declare class ParametersApi extends runtime.BaseAPI {
    /**
     * Get cwmsData parameters
     */
    getCwmsDataParametersRaw(requestParameters: GetCwmsDataParametersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Get cwmsData parameters
     */
    getCwmsDataParameters(requestParameters?: GetCwmsDataParametersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
