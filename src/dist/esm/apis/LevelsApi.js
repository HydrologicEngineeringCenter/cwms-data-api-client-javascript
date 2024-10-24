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
import { LocationLevelFromJSON, LocationLevelToJSON, SpecifiedLevelFromJSON, SpecifiedLevelToJSON, TimeseriesFromJSON, } from '../models/index';
/**
 *
 */
export class LevelsApi extends runtime.BaseAPI {
    /**
     * Delete CWMS Location Level
     * Delete swtData levels with levelId
     */
    deleteSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['levelId'] == null) {
                throw new runtime.RequiredError('levelId', 'Required parameter "levelId" was null or undefined when calling deleteSwtDataLevelsWithLevelId().');
            }
            const queryParameters = {};
            if (requestParameters['cascadeDelete'] != null) {
                queryParameters['cascade-delete'] = requestParameters['cascadeDelete'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['effectiveDate'] != null) {
                queryParameters['effective-date'] = requestParameters['effectiveDate'];
            }
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete CWMS Location Level
     * Delete swtData levels with levelId
     */
    deleteSwtDataLevelsWithLevelId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Deletes requested specified level id
     * Delete swtData specifiedLevels with specifiedLevelId
     */
    deleteSwtDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['specifiedLevelId'] == null) {
                throw new runtime.RequiredError('specifiedLevelId', 'Required parameter "specifiedLevelId" was null or undefined when calling deleteSwtDataSpecifiedLevelsWithSpecifiedLevelId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteSwtDataSpecifiedLevelsWithSpecifiedLevelId().');
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
                path: `/specified-levels/{specified-level-id}`.replace(`{${"specified-level-id"}}`, encodeURIComponent(String(requestParameters['specifiedLevelId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested specified level id
     * Delete swtData specifiedLevels with specifiedLevelId
     */
    deleteSwtDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSwtDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get swtData levels
     */
    getSwtDataLevelsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['levelIdMask'] != null) {
                queryParameters['level-id-mask'] = requestParameters['levelIdMask'];
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
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get swtData levels
     */
    getSwtDataLevels(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataLevelsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested Location Level
     * Get swtData levels with levelId
     */
    getSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['levelId'] == null) {
                throw new runtime.RequiredError('levelId', 'Required parameter "levelId" was null or undefined when calling getSwtDataLevelsWithLevelId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getSwtDataLevelsWithLevelId().');
            }
            if (requestParameters['effectiveDate'] == null) {
                throw new runtime.RequiredError('effectiveDate', 'Required parameter "effectiveDate" was null or undefined when calling getSwtDataLevelsWithLevelId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['effectiveDate'] != null) {
                queryParameters['effective-date'] = requestParameters['effectiveDate'];
            }
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => LocationLevelFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves requested Location Level
     * Get swtData levels with levelId
     */
    getSwtDataLevelsWithLevelId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves requested Location Level
     * Get swtData levels with levelId timeseries
     */
    getSwtDataLevelsWithLevelIdTimeseriesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['levelId'] == null) {
                throw new runtime.RequiredError('levelId', 'Required parameter "levelId" was null or undefined when calling getSwtDataLevelsWithLevelIdTimeseries().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getSwtDataLevelsWithLevelIdTimeseries().');
            }
            if (requestParameters['unit'] == null) {
                throw new runtime.RequiredError('unit', 'Required parameter "unit" was null or undefined when calling getSwtDataLevelsWithLevelIdTimeseries().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['interval'] != null) {
                queryParameters['interval'] = requestParameters['interval'];
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
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels/{level-id}/timeseries`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TimeseriesFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves requested Location Level
     * Get swtData levels with levelId timeseries
     */
    getSwtDataLevelsWithLevelIdTimeseries(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataLevelsWithLevelIdTimeseriesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get swtData specifiedLevels
     */
    getSwtDataSpecifiedLevelsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['templateIdMask'] != null) {
                queryParameters['template-id-mask'] = requestParameters['templateIdMask'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/specified-levels`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SpecifiedLevelFromJSON(jsonValue));
        });
    }
    /**
     * Get swtData specifiedLevels
     */
    getSwtDataSpecifiedLevels(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSwtDataSpecifiedLevelsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update CWMS Location Level
     * Patch swtData levels with levelId
     */
    patchSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['levelId'] == null) {
                throw new runtime.RequiredError('levelId', 'Required parameter "levelId" was null or undefined when calling patchSwtDataLevelsWithLevelId().');
            }
            if (requestParameters['locationLevel'] == null) {
                throw new runtime.RequiredError('locationLevel', 'Required parameter "locationLevel" was null or undefined when calling patchSwtDataLevelsWithLevelId().');
            }
            const queryParameters = {};
            if (requestParameters['effectiveDate'] != null) {
                queryParameters['effective-date'] = requestParameters['effectiveDate'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: LocationLevelToJSON(requestParameters['locationLevel']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update CWMS Location Level
     * Patch swtData levels with levelId
     */
    patchSwtDataLevelsWithLevelId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchSwtDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Renames the requested specified level id
     * Patch swtData specifiedLevels with specifiedLevelId
     */
    patchSwtDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['specifiedLevelId'] == null) {
                throw new runtime.RequiredError('specifiedLevelId', 'Required parameter "specifiedLevelId" was null or undefined when calling patchSwtDataSpecifiedLevelsWithSpecifiedLevelId().');
            }
            if (requestParameters['specifiedLevelId2'] == null) {
                throw new runtime.RequiredError('specifiedLevelId2', 'Required parameter "specifiedLevelId2" was null or undefined when calling patchSwtDataSpecifiedLevelsWithSpecifiedLevelId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling patchSwtDataSpecifiedLevelsWithSpecifiedLevelId().');
            }
            const queryParameters = {};
            if (requestParameters['specifiedLevelId2'] != null) {
                queryParameters['specified-level-id'] = requestParameters['specifiedLevelId2'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/specified-levels/{specified-level-id}`.replace(`{${"specified-level-id"}}`, encodeURIComponent(String(requestParameters['specifiedLevelId']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Renames the requested specified level id
     * Patch swtData specifiedLevels with specifiedLevelId
     */
    patchSwtDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchSwtDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new CWMS Location Level
     * Post swtData levels
     */
    postSwtDataLevelsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['locationLevel'] == null) {
                throw new runtime.RequiredError('locationLevel', 'Required parameter "locationLevel" was null or undefined when calling postSwtDataLevels().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/levels`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LocationLevelToJSON(requestParameters['locationLevel']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new CWMS Location Level
     * Post swtData levels
     */
    postSwtDataLevels(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postSwtDataLevelsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new SpecifiedLevel
     * Post swtData specifiedLevels
     */
    postSwtDataSpecifiedLevelsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['specifiedLevel'] == null) {
                throw new runtime.RequiredError('specifiedLevel', 'Required parameter "specifiedLevel" was null or undefined when calling postSwtDataSpecifiedLevels().');
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
                path: `/specified-levels`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SpecifiedLevelToJSON(requestParameters['specifiedLevel']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new SpecifiedLevel
     * Post swtData specifiedLevels
     */
    postSwtDataSpecifiedLevels(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postSwtDataSpecifiedLevelsRaw(requestParameters, initOverrides);
        });
    }
}
