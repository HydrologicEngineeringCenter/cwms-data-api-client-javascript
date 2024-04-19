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
import { TimeSeriesCategoryFromJSON, TimeSeriesCategoryToJSON, } from '../models/index';
/**
 *
 */
export class TimeSeriesCategoriesApi extends runtime.BaseAPI {
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     */
    deleteCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['categoryId'] == null) {
                throw new runtime.RequiredError('categoryId', 'Required parameter "categoryId" was null or undefined when calling deleteCwmsDataTimeseriesCategoryWithCategoryId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataTimeseriesCategoryWithCategoryId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['cascadeDelete'] != null) {
                queryParameters['cascade-delete'] = requestParameters['cascadeDelete'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/category/{category-id}`.replace(`{${"category-id"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     */
    deleteCwmsDataTimeseriesCategoryWithCategoryId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     */
    getCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/timeseries/category`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TimeSeriesCategoryFromJSON));
        });
    }
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     */
    getCwmsDataTimeseriesCategory(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     */
    getCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['categoryId'] == null) {
                throw new runtime.RequiredError('categoryId', 'Required parameter "categoryId" was null or undefined when calling getCwmsDataTimeseriesCategoryWithCategoryId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataTimeseriesCategoryWithCategoryId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/timeseries/category/{category-id}`.replace(`{${"category-id"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TimeSeriesCategoryFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     */
    getCwmsDataTimeseriesCategoryWithCategoryId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataTimeseriesCategoryWithCategoryIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     */
    postCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['timeSeriesCategory'] == null) {
                throw new runtime.RequiredError('timeSeriesCategory', 'Required parameter "timeSeriesCategory" was null or undefined when calling postCwmsDataTimeseriesCategory().');
            }
            const queryParameters = {};
            if (requestParameters['failIfExists'] != null) {
                queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/timeseries/category`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: TimeSeriesCategoryToJSON(requestParameters['timeSeriesCategory']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     */
    postCwmsDataTimeseriesCategory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataTimeseriesCategoryRaw(requestParameters, initOverrides);
        });
    }
}
