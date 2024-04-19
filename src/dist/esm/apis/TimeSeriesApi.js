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
import { TimeSeriesFromJSON, TimeSeriesToJSON, } from '../models/index';
/**
 *
 */
export class TimeSeriesApi extends runtime.BaseAPI {
    /**
     * Delete cwmsData timeseries with timeseries
     */
    deleteCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseries'] == null) {
                throw new runtime.RequiredError('timeseries', 'Required parameter "timeseries" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['begin'] == null) {
                throw new runtime.RequiredError('begin', 'Required parameter "begin" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['end'] == null) {
                throw new runtime.RequiredError('end', 'Required parameter "end" was null or undefined when calling deleteCwmsDataTimeseriesWithTimeseries().');
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
     * Delete cwmsData timeseries with timeseries
     */
    deleteCwmsDataTimeseriesWithTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get cwmsData timeseries
     */
    getCwmsDataTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['name'] == null) {
                throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling getCwmsDataTimeseries().');
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
            const response = yield this.request({
                path: `/timeseries`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TimeSeriesFromJSON(jsonValue));
        });
    }
    /**
     * Get cwmsData timeseries
     */
    getCwmsDataTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataTimeseriesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    patchCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeseries'] == null) {
                throw new runtime.RequiredError('timeseries', 'Required parameter "timeseries" was null or undefined when calling patchCwmsDataTimeseriesWithTimeseries().');
            }
            if (requestParameters['timeSeries'] == null) {
                throw new runtime.RequiredError('timeSeries', 'Required parameter "timeSeries" was null or undefined when calling patchCwmsDataTimeseriesWithTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['versionDate'] != null) {
                queryParameters['version-date'] = requestParameters['versionDate'];
            }
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
                body: TimeSeriesToJSON(requestParameters['timeSeries']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     */
    patchCwmsDataTimeseriesWithTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchCwmsDataTimeseriesWithTimeseriesRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     */
    postCwmsDataTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeSeries'] == null) {
                throw new runtime.RequiredError('timeSeries', 'Required parameter "timeSeries" was null or undefined when calling postCwmsDataTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['versionDate'] != null) {
                queryParameters['version-date'] = requestParameters['versionDate'];
            }
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
                body: TimeSeriesToJSON(requestParameters['timeSeries']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     */
    postCwmsDataTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataTimeseriesRaw(requestParameters, initOverrides);
        });
    }
}