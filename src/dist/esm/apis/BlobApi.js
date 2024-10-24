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
import * as runtime from '../runtime';
import { BlobToJSON, BlobsFromJSON, } from '../models/index';
/**
 *
 */
export class BlobApi extends runtime.BaseAPI {
    /**
     * Get swtData blobs
     */
    getSwtDataBlobsRaw(requestParameters, initOverrides) {
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
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/blobs`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => BlobsFromJSON(jsonValue));
        });
    }
    /**
     * Get swtData blobs
     */
    getSwtDataBlobs(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataBlobsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get swtData blobs with blobId
     */
    getSwtDataBlobsWithBlobIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['blobId'] == null) {
                throw new runtime.RequiredError('blobId', 'Required parameter "blobId" was null or undefined when calling getSwtDataBlobsWithBlobId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
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
     * Get swtData blobs with blobId
     */
    getSwtDataBlobsWithBlobId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getSwtDataBlobsWithBlobIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new Blob
     * Post swtData blobs
     */
    postSwtDataBlobsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['blob'] == null) {
                throw new runtime.RequiredError('blob', 'Required parameter "blob" was null or undefined when calling postSwtDataBlobs().');
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
                body: BlobToJSON(requestParameters['blob']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new Blob
     * Post swtData blobs
     */
    postSwtDataBlobs(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postSwtDataBlobsRaw(requestParameters, initOverrides);
        });
    }
}
