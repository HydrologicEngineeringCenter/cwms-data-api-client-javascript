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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
/**
 *
 */
export class ParametersApi extends runtime.BaseAPI {
    /**
     * Get cwmsData parameters
     */
    getCwmsDataParametersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['format'] != null) {
                queryParameters['format'] = requestParameters['format'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/parameters`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Get cwmsData parameters
     */
    getCwmsDataParameters(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCwmsDataParametersRaw(requestParameters, initOverrides);
        });
    }
}
