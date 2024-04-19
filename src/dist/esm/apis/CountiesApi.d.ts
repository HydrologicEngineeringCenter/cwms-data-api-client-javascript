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
import type { County } from '../models/index';
/**
 *
 */
export declare class CountiesApi extends runtime.BaseAPI {
    /**
     * Get cwmsData counties
     */
    getCwmsDataCountiesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<County>>>;
    /**
     * Get cwmsData counties
     */
    getCwmsDataCounties(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<County>>;
}
