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
import { PoolFromJSON, PoolsFromJSON, } from '../models/index';
/**
 *
 */
export class PoolsApi extends runtime.BaseAPI {
    /**
     * Returns Pools Data
     * Get cwmsData pools
     */
    getCwmsDataPoolsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['idMask'] != null) {
                queryParameters['id-mask'] = requestParameters['idMask'];
            }
            if (requestParameters['nameMask'] != null) {
                queryParameters['name-mask'] = requestParameters['nameMask'];
            }
            if (requestParameters['bottomMask'] != null) {
                queryParameters['bottom-mask'] = requestParameters['bottomMask'];
            }
            if (requestParameters['topMask'] != null) {
                queryParameters['top-mask'] = requestParameters['topMask'];
            }
            if (requestParameters['includeExplicit'] != null) {
                queryParameters['include-explicit'] = requestParameters['includeExplicit'];
            }
            if (requestParameters['includeImplicit'] != null) {
                queryParameters['include-implicit'] = requestParameters['includeImplicit'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/pools`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => PoolsFromJSON(jsonValue));
        });
    }
    /**
     * Returns Pools Data
     * Get cwmsData pools
     */
    getCwmsDataPools(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataPoolsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     */
    getCwmsDataPoolsWithPoolIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['poolId'] == null) {
                throw new runtime.RequiredError('poolId', 'Required parameter "poolId" was null or undefined when calling getCwmsDataPoolsWithPoolId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataPoolsWithPoolId().');
            }
            if (requestParameters['projectId'] == null) {
                throw new runtime.RequiredError('projectId', 'Required parameter "projectId" was null or undefined when calling getCwmsDataPoolsWithPoolId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['projectId'] != null) {
                queryParameters['project-id'] = requestParameters['projectId'];
            }
            if (requestParameters['bottomMask'] != null) {
                queryParameters['bottom-mask'] = requestParameters['bottomMask'];
            }
            if (requestParameters['topMask'] != null) {
                queryParameters['top-mask'] = requestParameters['topMask'];
            }
            if (requestParameters['includeExplicit'] != null) {
                queryParameters['include-explicit'] = requestParameters['includeExplicit'];
            }
            if (requestParameters['includeImplicit'] != null) {
                queryParameters['include-implicit'] = requestParameters['includeImplicit'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/pools/{pool-id}`.replace(`{${"pool-id"}}`, encodeURIComponent(String(requestParameters['poolId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     */
    getCwmsDataPoolsWithPoolId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataPoolsWithPoolIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
