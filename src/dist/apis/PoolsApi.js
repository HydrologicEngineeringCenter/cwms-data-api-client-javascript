"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PoolsApi extends runtime.BaseAPI {
    /**
     * Returns Pools Data
     * Get CwmsData pools
     */
    getPoolsRaw(requestParameters, initOverrides) {
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
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/pools`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PoolsFromJSON)(jsonValue));
        });
    }
    /**
     * Returns Pools Data
     * Get CwmsData pools
     */
    getPools(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPoolsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested Pool
     * Get CwmsData pools with poolId
     */
    getPoolsWithPoolIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['poolId'] == null) {
                throw new runtime.RequiredError('poolId', 'Required parameter "poolId" was null or undefined when calling getPoolsWithPoolId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getPoolsWithPoolId().');
            }
            if (requestParameters['projectId'] == null) {
                throw new runtime.RequiredError('projectId', 'Required parameter "projectId" was null or undefined when calling getPoolsWithPoolId().');
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
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/pools/{pool-id}`.replace(`{${"pool-id"}}`, encodeURIComponent(String(requestParameters['poolId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PoolFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves requested Pool
     * Get CwmsData pools with poolId
     */
    getPoolsWithPoolId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPoolsWithPoolIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PoolsApi = PoolsApi;
