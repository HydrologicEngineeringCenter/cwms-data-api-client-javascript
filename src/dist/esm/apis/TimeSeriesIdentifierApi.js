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
import { TimeseriesIdentifierDescriptorFromJSON, TimeseriesIdentifierDescriptorToJSON, TimeseriesIdentifierDescriptorsFromJSON, } from '../models/index';
/**
 *
 */
export class TimeseriesIdentifierApi extends runtime.BaseAPI {
    /**
     * Deletes requested timeseries identifier
     * Delete swtData timeseries identifierDescriptor with name
     */
    deleteSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling deleteSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['timeseriesId'] == null) {
                throw new runtime.RequiredError('timeseriesId', 'Required parameter "timeseriesId" was null or undefined when calling deleteSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['method'] == null) {
                throw new runtime.RequiredError('method', 'Required parameter "method" was null or undefined when calling deleteSwtDataTimeseriesIdentifierDescriptorWithName().');
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
                path: `/timeseries/identifier-descriptor/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"timeseries-id"}}`, encodeURIComponent(String(requestParameters['timeseriesId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested timeseries identifier
     * Delete swtData timeseries identifierDescriptor with name
     */
    deleteSwtDataTimeseriesIdentifierDescriptorWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get swtData timeseries identifierDescriptor
     */
    getSwtDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides) {
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
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/identifier-descriptor`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TimeseriesIdentifierDescriptorsFromJSON(jsonValue));
        });
    }
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get swtData timeseries identifierDescriptor
     */
    getSwtDataTimeseriesIdentifierDescriptor(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get swtData timeseries identifierDescriptor with name
     */
    getSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling getSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['timeseriesId'] == null) {
                throw new runtime.RequiredError('timeseriesId', 'Required parameter "timeseriesId" was null or undefined when calling getSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getSwtDataTimeseriesIdentifierDescriptorWithName().');
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
                path: `/timeseries/identifier-descriptor/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))).replace(`{${"timeseries-id"}}`, encodeURIComponent(String(requestParameters['timeseriesId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TimeseriesIdentifierDescriptorFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get swtData timeseries identifierDescriptor with name
     */
    getSwtDataTimeseriesIdentifierDescriptorWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Patch swtData timeseries identifierDescriptor with name
     */
    patchSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling patchSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling patchSwtDataTimeseriesIdentifierDescriptorWithName().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['timeseriesId'] != null) {
                queryParameters['timeseries-id'] = requestParameters['timeseriesId'];
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
                path: `/timeseries/identifier-descriptor/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Patch swtData timeseries identifierDescriptor with name
     */
    patchSwtDataTimeseriesIdentifierDescriptorWithName(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchSwtDataTimeseriesIdentifierDescriptorWithNameRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new TimeseriesIdentifierDescriptor
     * Post swtData timeseries identifierDescriptor
     */
    postSwtDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseriesIdentifierDescriptor'] == null) {
                throw new runtime.RequiredError('timeseriesIdentifierDescriptor', 'Required parameter "timeseriesIdentifierDescriptor" was null or undefined when calling postSwtDataTimeseriesIdentifierDescriptor().');
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
                body: TimeseriesIdentifierDescriptorToJSON(requestParameters['timeseriesIdentifierDescriptor']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new TimeseriesIdentifierDescriptor
     * Post swtData timeseries identifierDescriptor
     */
    postSwtDataTimeseriesIdentifierDescriptor(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postSwtDataTimeseriesIdentifierDescriptorRaw(requestParameters, initOverrides);
        });
    }
}
