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
exports.PoolsApiResponseProcessor = exports.PoolsApiRequestFactory = void 0;
// TODO: better import syntax?
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
/**
 * no description
 */
var PoolsApiRequestFactory = /** @class */ (function (_super) {
    __extends(PoolsApiRequestFactory, _super);
    function PoolsApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns Pools Data
     * Get cwmsData pools
     * @param office Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
     * @param idMask Project Id mask. Default value:*
     * @param nameMask Name mask. Default value:*
     * @param bottomMask Bottom level mask. Default value:*
     * @param topMask Top level mask. Default value:*
     * @param includeExplicit Specifies if the results should include explicit Pools. Default value:false
     * @param includeImplicit Specifies if the results should include implicit Pools. Default value:true
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    PoolsApiRequestFactory.prototype.getCwmsDataPools = function (office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        localVarPath = '/cwms-data/pools';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (idMask !== undefined) {
                            requestContext.setQueryParam("id-mask", ObjectSerializer_1.ObjectSerializer.serialize(idMask, "string", ""));
                        }
                        // Query Params
                        if (nameMask !== undefined) {
                            requestContext.setQueryParam("name-mask", ObjectSerializer_1.ObjectSerializer.serialize(nameMask, "string", ""));
                        }
                        // Query Params
                        if (bottomMask !== undefined) {
                            requestContext.setQueryParam("bottom-mask", ObjectSerializer_1.ObjectSerializer.serialize(bottomMask, "string", ""));
                        }
                        // Query Params
                        if (topMask !== undefined) {
                            requestContext.setQueryParam("top-mask", ObjectSerializer_1.ObjectSerializer.serialize(topMask, "string", ""));
                        }
                        // Query Params
                        if (includeExplicit !== undefined) {
                            requestContext.setQueryParam("include-explicit", ObjectSerializer_1.ObjectSerializer.serialize(includeExplicit, "string", ""));
                        }
                        // Query Params
                        if (includeImplicit !== undefined) {
                            requestContext.setQueryParam("include-implicit", ObjectSerializer_1.ObjectSerializer.serialize(includeImplicit, "string", ""));
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
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     * @param poolId Specifies the pool whose data is to be included in the response.
     * @param office Specifies the owning office of the Pool whose data is to be included in the response.
     * @param projectId Specifies the project-id of the Pool whose data is to be included in the response.
     * @param bottomMask Bottom level mask. Default value:*
     * @param topMask Top level mask. Default value:*
     * @param includeExplicit Specifies if the results should include explicit Pools. Default value:false
     * @param includeImplicit Specifies if the results should include implicit Pools. Default value:true
     */
    PoolsApiRequestFactory.prototype.getCwmsDataPoolsWithPoolId = function (poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options) {
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, defaultAuth;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        // verify required parameter 'poolId' is not null or undefined
                        if (poolId === null || poolId === undefined) {
                            throw new baseapi_1.RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "poolId");
                        }
                        // verify required parameter 'office' is not null or undefined
                        if (office === null || office === undefined) {
                            throw new baseapi_1.RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "office");
                        }
                        // verify required parameter 'projectId' is not null or undefined
                        if (projectId === null || projectId === undefined) {
                            throw new baseapi_1.RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "projectId");
                        }
                        localVarPath = '/cwms-data/pools/{pool-id}'
                            .replace('{' + 'pool-id' + '}', encodeURIComponent(String(poolId)));
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        // Query Params
                        if (office !== undefined) {
                            requestContext.setQueryParam("office", ObjectSerializer_1.ObjectSerializer.serialize(office, "string", ""));
                        }
                        // Query Params
                        if (projectId !== undefined) {
                            requestContext.setQueryParam("project-id", ObjectSerializer_1.ObjectSerializer.serialize(projectId, "string", ""));
                        }
                        // Query Params
                        if (bottomMask !== undefined) {
                            requestContext.setQueryParam("bottom-mask", ObjectSerializer_1.ObjectSerializer.serialize(bottomMask, "string", ""));
                        }
                        // Query Params
                        if (topMask !== undefined) {
                            requestContext.setQueryParam("top-mask", ObjectSerializer_1.ObjectSerializer.serialize(topMask, "string", ""));
                        }
                        // Query Params
                        if (includeExplicit !== undefined) {
                            requestContext.setQueryParam("include-explicit", ObjectSerializer_1.ObjectSerializer.serialize(includeExplicit, "string", ""));
                        }
                        // Query Params
                        if (includeImplicit !== undefined) {
                            requestContext.setQueryParam("include-implicit", ObjectSerializer_1.ObjectSerializer.serialize(includeImplicit, "string", ""));
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
    return PoolsApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.PoolsApiRequestFactory = PoolsApiRequestFactory;
var PoolsApiResponseProcessor = /** @class */ (function () {
    function PoolsApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataPools
     * @throws ApiException if the response code was not in [200, 299]
     */
    PoolsApiResponseProcessor.prototype.getCwmsDataPoolsWithHttpInfo = function (response) {
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
                        throw new exception_1.ApiException(response.httpStatusCode, "Based on the combination of inputs provided the pools were not found.", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "Pools", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if ((0, util_1.isCodeInRange)("501", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "Pools", ""]);
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
     * @params response Response returned by the server for a request to getCwmsDataPoolsWithPoolId
     * @throws ApiException if the response code was not in [200, 299]
     */
    PoolsApiResponseProcessor.prototype.getCwmsDataPoolsWithPoolIdWithHttpInfo = function (response) {
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
                        throw new exception_1.ApiException(response.httpStatusCode, "Based on the combination of inputs provided the Location Category was not found.", body, response.headers);
                    case 10:
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3 /*break*/, 12];
                        _x = (_w = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _z = (_y = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 11:
                        body = _x.apply(_w, [_z.apply(_y, [_6.sent(), contentType]),
                            "Pool", ""]);
                        return [2 /*return*/, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 12:
                        if ((0, util_1.isCodeInRange)("501", response.httpStatusCode)) {
                            throw new exception_1.ApiException(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
                        }
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 14];
                        _1 = (_0 = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _3 = (_2 = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 13:
                        body = _1.apply(_0, [_3.apply(_2, [_6.sent(), contentType]),
                            "Pool", ""]);
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
    return PoolsApiResponseProcessor;
}());
exports.PoolsApiResponseProcessor = PoolsApiResponseProcessor;
