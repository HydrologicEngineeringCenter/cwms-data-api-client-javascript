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
exports.TimeseriesApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class TimeseriesApi extends runtime.BaseAPI {
    /**
     * Delete swtData timeseries with timeseries
     */
    deleteSwtDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseries'] == null) {
                throw new runtime.RequiredError('timeseries', 'Required parameter "timeseries" was null or undefined when calling deleteSwtDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteSwtDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['begin'] == null) {
                throw new runtime.RequiredError('begin', 'Required parameter "begin" was null or undefined when calling deleteSwtDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['end'] == null) {
                throw new runtime.RequiredError('end', 'Required parameter "end" was null or undefined when calling deleteSwtDataTimeseriesWithTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['begin'] != null) {
                queryParameters['begin'] = requestParameters['begin'];
            }
            if (requestParameters['end'] != null) {
                queryParameters['end'] = requestParameters['end'];
            }
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['versionDate'] != null) {
                queryParameters['version-date'] = requestParameters['versionDate'];
            }
            if (requestParameters['startTimeInclusive'] != null) {
                queryParameters['start-time-inclusive'] = requestParameters['startTimeInclusive'];
            }
            if (requestParameters['endTimeInclusive'] != null) {
                queryParameters['end-time-inclusive'] = requestParameters['endTimeInclusive'];
            }
            if (requestParameters['maxVersion'] != null) {
                queryParameters['max-version'] = requestParameters['maxVersion'];
            }
            if (requestParameters['overrideProtection'] != null) {
                queryParameters['override-protection'] = requestParameters['overrideProtection'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete swtData timeseries with timeseries
     */
    deleteSwtDataTimeseriesWithTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSwtDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get swtData timeseries
     */
    getSwtDataTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling getSwtDataTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['name'] != null) {
                queryParameters['name'] = requestParameters['name'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            if (requestParameters['versionDate'] != null) {
                queryParameters['version-date'] = requestParameters['versionDate'];
            }
            if (requestParameters['datum'] != null) {
                queryParameters['datum'] = requestParameters['datum'];
            }
            if (requestParameters['begin'] != null) {
                queryParameters['begin'] = requestParameters['begin'];
            }
            if (requestParameters['end'] != null) {
                queryParameters['end'] = requestParameters['end'];
            }
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['trim'] != null) {
                queryParameters['trim'] = requestParameters['trim'];
            }
            if (requestParameters['format'] != null) {
                queryParameters['format'] = requestParameters['format'];
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
                path: `/timeseries`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TimeseriesFromJSON)(jsonValue));
        });
    }
    /**
     * Get swtData timeseries
     */
    getSwtDataTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataTimeseriesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns CWMS Timeseries Groups Data
     * Get swtData timeseries recent
     */
    getSwtDataTimeseriesRecentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['categoryId'] != null) {
                queryParameters['category-id'] = requestParameters['categoryId'];
            }
            if (requestParameters['groupId'] != null) {
                queryParameters['group-id'] = requestParameters['groupId'];
            }
            if (requestParameters['tsIds'] != null) {
                queryParameters['ts-ids'] = requestParameters['tsIds'];
            }
            if (requestParameters['unitSystem'] != null) {
                queryParameters['unit-system'] = requestParameters['unitSystem'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/recent`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.TsvFromJSON));
        });
    }
    /**
     * Returns CWMS Timeseries Groups Data
     * Get swtData timeseries recent
     */
    getSwtDataTimeseriesRecent(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataTimeseriesRecentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a Timeseries with provided values
     * Patch swtData timeseries with timeseries
     */
    patchSwtDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseries'] == null) {
                throw new runtime.RequiredError('timeseries', 'Required parameter "timeseries" was null or undefined when calling patchSwtDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['timeseries2'] == null) {
                throw new runtime.RequiredError('timeseries2', 'Required parameter "timeseries2" was null or undefined when calling patchSwtDataTimeseriesWithTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['createAsLrts'] != null) {
                queryParameters['create-as-lrts'] = requestParameters['createAsLrts'];
            }
            if (requestParameters['storeRule'] != null) {
                queryParameters['store-rule'] = requestParameters['storeRule'];
            }
            if (requestParameters['overrideProtection'] != null) {
                queryParameters['override-protection'] = requestParameters['overrideProtection'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/{timeseries}`.replace(`{${"timeseries"}}`, encodeURIComponent(String(requestParameters['timeseries']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TimeseriesToJSON)(requestParameters['timeseries2']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update a Timeseries with provided values
     * Patch swtData timeseries with timeseries
     */
    patchSwtDataTimeseriesWithTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchSwtDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post swtData timeseries
     */
    postSwtDataTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseries'] == null) {
                throw new runtime.RequiredError('timeseries', 'Required parameter "timeseries" was null or undefined when calling postSwtDataTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['createAsLrts'] != null) {
                queryParameters['create-as-lrts'] = requestParameters['createAsLrts'];
            }
            if (requestParameters['storeRule'] != null) {
                queryParameters['store-rule'] = requestParameters['storeRule'];
            }
            if (requestParameters['overrideProtection'] != null) {
                queryParameters['override-protection'] = requestParameters['overrideProtection'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.TimeseriesToJSON)(requestParameters['timeseries']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post swtData timeseries
     */
    postSwtDataTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postSwtDataTimeseriesRaw(requestParameters, initOverrides);
        });
    }
}
exports.TimeseriesApi = TimeseriesApi;
