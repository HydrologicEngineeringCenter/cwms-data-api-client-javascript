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
exports.BasinsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class BasinsApi extends runtime.BaseAPI {
    /**
     * Renames CWMS Basin
     * Delete CwmsData basins with name
     */
    deleteCwmsDataBasinsWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling deleteCwmsDataBasinsWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataBasinsWithName().');
            }
            if (requestParameters['method'] == null) {
                throw new runtime.RequiredError('method', 'Required parameter "method" was null or undefined when calling deleteCwmsDataBasinsWithName().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['method'] != null) {
                queryParameters['method'] = requestParameters['method'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/basins/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Renames CWMS Basin
     * Delete CwmsData basins with name
     */
    deleteCwmsDataBasinsWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataBasinsWithNameRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns CWMS Basin Data
     * Get CwmsData basins
     */
    getBasinsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/basins`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BasinFromJSON)(jsonValue));
        });
    }
    /**
     * Returns CWMS Basin Data
     * Get CwmsData basins
     */
    getBasins(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBasinsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns CWMS Basin Data
     * Get CwmsData basins with name
     */
    getBasinsWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling getBasinsWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getBasinsWithName().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/basins/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BasinFromJSON)(jsonValue));
        });
    }
    /**
     * Returns CWMS Basin Data
     * Get CwmsData basins with name
     */
    getBasinsWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBasinsWithNameRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Renames CWMS Basin
     * Patch CwmsData basins with name
     */
    patchCwmsDataBasinsWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling patchCwmsDataBasinsWithName().');
            }
            if (requestParameters['name2'] == null) {
                throw new runtime.RequiredError('name2', 'Required parameter "name2" was null or undefined when calling patchCwmsDataBasinsWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling patchCwmsDataBasinsWithName().');
            }
            const queryParameters = {};
            if (requestParameters['name2'] != null) {
                queryParameters['name'] = requestParameters['name2'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/basins/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Renames CWMS Basin
     * Patch CwmsData basins with name
     */
    patchCwmsDataBasinsWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchCwmsDataBasinsWithNameRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Creates CWMS Basin
     * Post CwmsData basins
     */
    postCwmsDataBasinsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/basins`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Creates CWMS Basin
     * Post CwmsData basins
     */
    postCwmsDataBasins(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataBasinsRaw(initOverrides);
        });
    }
}
exports.BasinsApi = BasinsApi;
