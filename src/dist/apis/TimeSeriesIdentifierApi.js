"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
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
exports.TimeSeriesIdentifierApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class TimeSeriesIdentifierApi extends runtime.BaseAPI {
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     */
    deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseriesId'] == null) {
                throw new runtime.RequiredError('timeseriesId', 'Required parameter "timeseriesId" was null or undefined when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            if (requestParameters['method'] == null) {
                throw new runtime.RequiredError('method', 'Required parameter "method" was null or undefined when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
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
                path: `/timeseries/identifier-descriptor/{timeseries-id}`.replace(`{${"timeseries-id"}}`, encodeURIComponent(String(requestParameters['timeseriesId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     */
    deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     */
    getCwmsDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['timeseriesIdRegex'] != null) {
                queryParameters['timeseries-id-regex'] = requestParameters['timeseriesIdRegex'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/timeseries/identifier-descriptor`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TimeSeriesIdentifierDescriptorsFromJSON)(jsonValue));
        });
    }
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     */
    getCwmsDataTimeseriesIdentifierDescriptor(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     */
    getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseriesId'] == null) {
                throw new runtime.RequiredError('timeseriesId', 'Required parameter "timeseriesId" was null or undefined when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/timeseries/identifier-descriptor/{timeseries-id}`.replace(`{${"timeseries-id"}}`, encodeURIComponent(String(requestParameters['timeseriesId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TimeSeriesIdentifierDescriptorFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     */
    getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     */
    patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseriesId'] == null) {
                throw new runtime.RequiredError('timeseriesId', 'Required parameter "timeseriesId" was null or undefined when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            if (requestParameters['timeseriesId2'] == null) {
                throw new runtime.RequiredError('timeseriesId2', 'Required parameter "timeseriesId2" was null or undefined when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId().');
            }
            const queryParameters = {};
            if (requestParameters['timeseriesId2'] != null) {
                queryParameters['timeseries-id'] = requestParameters['timeseriesId2'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['intervalOffset'] != null) {
                queryParameters['interval-offset'] = requestParameters['intervalOffset'];
            }
            if (requestParameters['snapForward'] != null) {
                queryParameters['snap-forward'] = requestParameters['snapForward'];
            }
            if (requestParameters['snapBackward'] != null) {
                queryParameters['snap-backward'] = requestParameters['snapBackward'];
            }
            if (requestParameters['active'] != null) {
                queryParameters['active'] = requestParameters['active'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/identifier-descriptor/{timeseries-id}`.replace(`{${"timeseries-id"}}`, encodeURIComponent(String(requestParameters['timeseriesId']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     */
    patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     */
    postCwmsDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeSeriesIdentifierDescriptor'] == null) {
                throw new runtime.RequiredError('timeSeriesIdentifierDescriptor', 'Required parameter "timeSeriesIdentifierDescriptor" was null or undefined when calling postCwmsDataTimeseriesIdentifierDescriptor().');
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
                path: `/timeseries/identifier-descriptor`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TimeSeriesIdentifierDescriptorToJSON)(requestParameters['timeSeriesIdentifierDescriptor']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     */
    postCwmsDataTimeseriesIdentifierDescriptor(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides);
        });
    }
}
exports.TimeSeriesIdentifierApi = TimeSeriesIdentifierApi;
