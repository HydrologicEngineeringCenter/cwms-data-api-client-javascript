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
import type { State } from '../models/index';
/**
 *
 */
export declare class StatesApi extends runtime.BaseAPI {
    /**
     * Get cwmsData states
     */
    getCwmsDataStatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<State>>>;
    /**
     * Get cwmsData states
     */
    getCwmsDataStates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<State>>;
}
