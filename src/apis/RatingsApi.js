"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsApiResponseProcessor = exports.RatingsApiRequestFactory = void 0;
// TODO: better import syntax?
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
/**
 * no description
 */
var RatingsApiRequestFactory = /** @class */ (function (_super) {
    __extends(RatingsApiRequestFactory, _super);
    function RatingsApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    RatingsApiRequestFactory.prototype.deleteCwmsDataRatingsSpecWithRatingId = function (ratingId, office, method, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingId' is not null or undefined
                        if (ratingId === null || ratingId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsSpecWithRatingId", "ratingId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsSpecWithRatingId", "office");
                        }
                        // verify required parameter 'method' is not null or undefined
                        if (method === null || method === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsSpecWithRatingId", "method");
                        }
                        localVarPath = '/cwms-data/ratings/spec/{rating-id}'
                            .replace('{' + 'rating-id' + '}', encodeURIComponent(String(ratingId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (method !== undefined) {
                            requestContext.setQueryParam("method", ObjectSerializer_1.ObjectSerializer.serialize(method, "DeleteMethod", ""));
                        }
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    RatingsApiRequestFactory.prototype.deleteCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, method, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'templateId' is not null or undefined
                        if (templateId === null || templateId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsTemplateWithTemplateId", "templateId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsTemplateWithTemplateId", "office");
                        }
                        // verify required parameter 'method' is not null or undefined
                        if (method === null || method === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsTemplateWithTemplateId", "method");
                        }
                        localVarPath = '/cwms-data/ratings/template/{template-id}'
                            .replace('{' + 'template-id' + '}', encodeURIComponent(String(templateId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (method !== undefined) {
                            requestContext.setQueryParam("method", ObjectSerializer_1.ObjectSerializer.serialize(method, "DeleteMethod", ""));
                        }
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted.
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    RatingsApiRequestFactory.prototype.deleteCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingId' is not null or undefined
                        if (ratingId === null || ratingId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsWithRatingId", "ratingId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsWithRatingId", "office");
                        }
                        // verify required parameter 'begin' is not null or undefined
                        if (begin === null || begin === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsWithRatingId", "begin");
                        }
                        // verify required parameter 'end' is not null or undefined
                        if (end === null || end === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "deleteCwmsDataRatingsWithRatingId", "end");
                        }
                        localVarPath = '/cwms-data/ratings/{rating-id}'
                            .replace('{' + 'rating-id' + '}', encodeURIComponent(String(ratingId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (begin !== undefined) {
                            requestContext.setQueryParam("begin", ObjectSerializer_1.ObjectSerializer.serialize(begin, "string", ""));
                        }
                        // Query Params
                        if (end !== undefined) {
                            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "string", ""));
                        }
                        // Query Params
                        if (timezone !== undefined) {
                            requestContext.setQueryParam("timezone", ObjectSerializer_1.ObjectSerializer.serialize(timezone, "string", ""));
                        }
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings
     * @param name Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param office Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param at Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default)
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatings = function (name, office, unit, datum, at, end, timezone, format, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/cwms-data/ratings';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (name !== undefined) {
                            requestContext.setQueryParam("name", ObjectSerializer_1.ObjectSerializer.serialize(name, "string", ""));
                        }
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (unit !== undefined) {
                            requestContext.setQueryParam("unit", ObjectSerializer_1.ObjectSerializer.serialize(unit, "string", ""));
                        }
                        // Query Params
                        if (datum !== undefined) {
                            requestContext.setQueryParam("datum", ObjectSerializer_1.ObjectSerializer.serialize(datum, "string", ""));
                        }
                        // Query Params
                        if (at !== undefined) {
                            requestContext.setQueryParam("at", ObjectSerializer_1.ObjectSerializer.serialize(at, "string", ""));
                        }
                        // Query Params
                        if (end !== undefined) {
                            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "string", ""));
                        }
                        // Query Params
                        if (timezone !== undefined) {
                            requestContext.setQueryParam("timezone", ObjectSerializer_1.ObjectSerializer.serialize(timezone, "string", ""));
                        }
                        // Query Params
                        if (format !== undefined) {
                            requestContext.setQueryParam("format", ObjectSerializer_1.ObjectSerializer.serialize(format, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings metadata
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param start Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used.
     * @param end Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used.
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 50.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsMetadata = function (office, ratingIdMask, start, end, timezone, page, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/cwms-data/ratings/metadata';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (ratingIdMask !== undefined) {
                            requestContext.setQueryParam("rating-id-mask", ObjectSerializer_1.ObjectSerializer.serialize(ratingIdMask, "string", ""));
                        }
                        // Query Params
                        if (start !== undefined) {
                            requestContext.setQueryParam("start", ObjectSerializer_1.ObjectSerializer.serialize(start, "string", ""));
                        }
                        // Query Params
                        if (end !== undefined) {
                            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "string", ""));
                        }
                        // Query Params
                        if (timezone !== undefined) {
                            requestContext.setQueryParam("timezone", ObjectSerializer_1.ObjectSerializer.serialize(timezone, "string", ""));
                        }
                        // Query Params
                        if (page !== undefined) {
                            requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "string", ""));
                        }
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page-size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsSpec = function (office, ratingIdMask, page, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/cwms-data/ratings/spec';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (ratingIdMask !== undefined) {
                            requestContext.setQueryParam("rating-id-mask", ObjectSerializer_1.ObjectSerializer.serialize(ratingIdMask, "string", ""));
                        }
                        // Query Params
                        if (page !== undefined) {
                            requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "string", ""));
                        }
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page-size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsSpecWithRatingId = function (ratingId, office, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingId' is not null or undefined
                        if (ratingId === null || ratingId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsSpecWithRatingId", "ratingId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsSpecWithRatingId", "office");
                        }
                        localVarPath = '/cwms-data/ratings/spec/{rating-id}'
                            .replace('{' + 'rating-id' + '}', encodeURIComponent(String(ratingId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsTemplate = function (office, templateIdMask, page, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/cwms-data/ratings/template';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (templateIdMask !== undefined) {
                            requestContext.setQueryParam("template-id-mask", ObjectSerializer_1.ObjectSerializer.serialize(templateIdMask, "string", ""));
                        }
                        // Query Params
                        if (page !== undefined) {
                            requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "string", ""));
                        }
                        // Query Params
                        if (pageSize !== undefined) {
                            requestContext.setQueryParam("page-size", ObjectSerializer_1.ObjectSerializer.serialize(pageSize, "number", "int32"));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'templateId' is not null or undefined
                        if (templateId === null || templateId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsTemplateWithTemplateId", "templateId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsTemplateWithTemplateId", "office");
                        }
                        localVarPath = '/cwms-data/ratings/template/{template-id}'
                            .replace('{' + 'template-id' + '}', encodeURIComponent(String(templateId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Returns CWMS Rating Data
     * Get cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be retrieve.
     * @param office Specifies the owning office of the ratingset to be included in the response.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param method Specifies the retrieval method used.  If no method is provided EAGER will be used.
     */
    RatingsApiRequestFactory.prototype.getCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, method, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingId' is not null or undefined
                        if (ratingId === null || ratingId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsWithRatingId", "ratingId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "getCwmsDataRatingsWithRatingId", "office");
                        }
                        localVarPath = '/cwms-data/ratings/{rating-id}'
                            .replace('{' + 'rating-id' + '}', encodeURIComponent(String(ratingId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (begin !== undefined) {
                            requestContext.setQueryParam("begin", ObjectSerializer_1.ObjectSerializer.serialize(begin, "string", ""));
                        }
                        // Query Params
                        if (end !== undefined) {
                            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "string", ""));
                        }
                        // Query Params
                        if (timezone !== undefined) {
                            requestContext.setQueryParam("timezone", ObjectSerializer_1.ObjectSerializer.serialize(timezone, "string", ""));
                        }
                        // Query Params
                        if (method !== undefined) {
                            requestContext.setQueryParam("method", ObjectSerializer_1.ObjectSerializer.serialize(method, "DatabaseLoadMethod", ""));
                        }
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    RatingsApiRequestFactory.prototype.patchCwmsDataRatingsWithRatingId = function (ratingId, body, storeTemplate, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingId' is not null or undefined
                        if (ratingId === null || ratingId === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "patchCwmsDataRatingsWithRatingId", "ratingId");
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "patchCwmsDataRatingsWithRatingId", "body");
                        }
                        localVarPath = '/cwms-data/ratings/{rating-id}'
                            .replace('{' + 'rating-id' + '}', encodeURIComponent(String(ratingId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (storeTemplate !== undefined) {
                            requestContext.setQueryParam("store-template", ObjectSerializer_1.ObjectSerializer.serialize(storeTemplate, "boolean", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/xml;version=2",
                            "application/json;version=2"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "any", ""), contentType);
                        requestContext.setBody(serializedBody);
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    RatingsApiRequestFactory.prototype.postCwmsDataRatings = function (body, storeTemplate, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "postCwmsDataRatings", "body");
                        }
                        localVarPath = '/cwms-data/ratings';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (storeTemplate !== undefined) {
                            requestContext.setQueryParam("store-template", ObjectSerializer_1.ObjectSerializer.serialize(storeTemplate, "boolean", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/xml;version=2",
                            "application/json;version=2"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "any", ""), contentType);
                        requestContext.setBody(serializedBody);
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    RatingsApiRequestFactory.prototype.postCwmsDataRatingsSpec = function (ratingSpec, failIfExists, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingSpec' is not null or undefined
                        if (ratingSpec === null || ratingSpec === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "postCwmsDataRatingsSpec", "ratingSpec");
                        }
                        localVarPath = '/cwms-data/ratings/spec';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (failIfExists !== undefined) {
                            requestContext.setQueryParam("fail-if-exists", ObjectSerializer_1.ObjectSerializer.serialize(failIfExists, "boolean", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/xml;version=2"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(ratingSpec, "RatingSpec", ""), contentType);
                        requestContext.setBody(serializedBody);
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    RatingsApiRequestFactory.prototype.postCwmsDataRatingsTemplate = function (ratingTemplate, failIfExists, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, contentType, serializedBody, authMethod, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'ratingTemplate' is not null or undefined
                        if (ratingTemplate === null || ratingTemplate === undefined) {
                            throw new baseapi_1.RequiredError("RatingsApi", "postCwmsDataRatingsTemplate", "ratingTemplate");
                        }
                        localVarPath = '/cwms-data/ratings/template';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (failIfExists !== undefined) {
                            requestContext.setQueryParam("fail-if-exists", ObjectSerializer_1.ObjectSerializer.serialize(failIfExists, "boolean", ""));
                        }
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/xml;version=2"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(ratingTemplate, "RatingTemplate", ""), contentType);
                        requestContext.setBody(serializedBody);
                        // Apply auth methods
                        authMethod = _config.authMethods["ApiKey"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        // Apply auth methods
                        authMethod = _config.authMethods["CwmsAAACacAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3 /*break*/, 6];
                        return [4 /*yield*/, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    return RatingsApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.RatingsApiRequestFactory = RatingsApiRequestFactory;
var RatingsApiResponseProcessor = /** @class */ (function () {
    function RatingsApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataRatingsSpecWithRatingId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataRatingsTemplateWithTemplateId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataRatingsWithRatingId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.deleteCwmsDataRatingsWithRatingIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatings
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "The provided combination of parameters did not find a rating table.", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "any", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if ((0, util_1.isCodeInRange)("501", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "Requested format is not implemented", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "any", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsMetadataWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "RatingMetadataList", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "RatingMetadataList", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsSpecWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "RatingSpecs", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "RatingSpecs", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsSpecWithRatingId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "RatingSpec", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "RatingSpec", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsTemplateWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "RatingTemplates", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "RatingTemplates", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsTemplateWithTemplateId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "Array<RatingTemplate>", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "Array<RatingTemplate>", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataRatingsWithRatingId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.getCwmsDataRatingsWithRatingIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, body, _w, _x, _y, _z, body, _0, _1, _2, _3, _4, _5;
            return __generator(this, function (_6) {
                switch (_6.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_6.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "any", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "any", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 14:
                        _4 = exception_1.ApiException.bind;
                        _5 = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 15: throw new (_4.apply(exception_1.ApiException, _5.concat([_6.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchCwmsDataRatingsWithRatingId
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.patchCwmsDataRatingsWithRatingIdWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCwmsDataRatings
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.postCwmsDataRatingsWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCwmsDataRatingsSpec
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.postCwmsDataRatingsSpecWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCwmsDataRatingsTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
    RatingsApiResponseProcessor.prototype.postCwmsDataRatingsTemplateWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, body, _o, _p, _q, _r, body, _s, _t, _u, _v, _w, _x;
            return __generator(this, function (_y) {
                switch (_y.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("500", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Server Error", body, response.headers);
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", body, response.headers);
                    case 4:
                        if (!(0, util_1.isCodeInRange)("401", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", body, response.headers);
                    case 6:
                        if (!(0, util_1.isCodeInRange)("403", response.httpStatusCode)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body = _p.apply(_o, [_r.apply(_q, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Forbidden", body, response.headers);
                    case 8:
                        if (!(0, util_1.isCodeInRange)("404", response.httpStatusCode)) return [3 /*break*/, 10];
                        _t = (_s = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _v = (_u = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 9:
                        body = _t.apply(_s, [_v.apply(_u, [_y.sent(), contentType]),
                            "CdaError", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Not Found", body, response.headers);
                    case 10:
                        // Work around for missing responses in specification, e.g. for petstore.yaml
                        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                            return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, undefined)];
                        }
                        _w = exception_1.ApiException.bind;
                        _x = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4 /*yield*/, response.getBodyAsAny()];
                    case 11: throw new (_w.apply(exception_1.ApiException, _x.concat([_y.sent(), response.headers])))();
                }
            });
        });
    };
    return RatingsApiResponseProcessor;
}());
exports.RatingsApiResponseProcessor = RatingsApiResponseProcessor;
