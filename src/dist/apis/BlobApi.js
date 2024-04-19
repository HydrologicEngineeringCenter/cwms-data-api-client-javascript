"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class BlobApi extends runtime.BaseAPI {
    /**
     * Get cwmsData blobs
     */
    getCwmsDataBlobsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            if (requestParameters['like'] != null) {
                queryParameters['like'] = requestParameters['like'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/blobs`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.BlobsFromJSON)(jsonValue));
        });
    }
    /**
     * Get cwmsData blobs
     */
    getCwmsDataBlobs(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataBlobsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get cwmsData blobs with blobId
     */
    getCwmsDataBlobsWithBlobIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['blobId'] == null) {
                throw new runtime.RequiredError('blobId', 'Required parameter "blobId" was null or undefined when calling getCwmsDataBlobsWithBlobId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/blobs/{blob-id}`.replace(`{${"blob-id"}}`, encodeURIComponent(String(requestParameters['blobId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Get cwmsData blobs with blobId
     */
    getCwmsDataBlobsWithBlobId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCwmsDataBlobsWithBlobIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new Blob
     * Post cwmsData blobs
     */
    postCwmsDataBlobsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['blob'] == null) {
                throw new runtime.RequiredError('blob', 'Required parameter "blob" was null or undefined when calling postCwmsDataBlobs().');
            }
            const queryParameters = {};
            if (requestParameters['failIfExists'] != null) {
                queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/blobs`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.BlobToJSON)(requestParameters['blob']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new Blob
     * Post cwmsData blobs
     */
    postCwmsDataBlobs(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataBlobsRaw(requestParameters, initOverrides);
        });
    }
}
exports.BlobApi = BlobApi;