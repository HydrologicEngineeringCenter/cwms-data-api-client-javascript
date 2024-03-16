"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsApi = exports.TimeseriesGroupsApi = exports.TimeZonesApi = exports.TimeSeriesIdentifierApi = exports.TimeSeriesCategoriesApi = exports.TimeSeriesApi = exports.StatesApi = exports.RatingsApi = exports.PoolsApi = exports.ParametersApi = exports.OfficesApi = exports.LocationsApi = exports.LocationGroupsApi = exports.LocationCategoriesApi = exports.LevelsApi = exports.DefaultApi = exports.CountiesApi = exports.ClobApi = exports.CatalogApi = exports.BlobApi = exports.BasinsApi = exports.AuthorizationApi = exports.RequiredError = exports.createConfiguration = void 0;
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
__exportStar(require("./models/all"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var baseapi_1 = require("./apis/baseapi");
Object.defineProperty(exports, "RequiredError", { enumerable: true, get: function () { return baseapi_1.RequiredError; } });
var PromiseAPI_1 = require("./types/PromiseAPI");
Object.defineProperty(exports, "AuthorizationApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseAuthorizationApi; } });
Object.defineProperty(exports, "BasinsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseBasinsApi; } });
Object.defineProperty(exports, "BlobApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseBlobApi; } });
Object.defineProperty(exports, "CatalogApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseCatalogApi; } });
Object.defineProperty(exports, "ClobApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseClobApi; } });
Object.defineProperty(exports, "CountiesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseCountiesApi; } });
Object.defineProperty(exports, "DefaultApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseDefaultApi; } });
Object.defineProperty(exports, "LevelsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLevelsApi; } });
Object.defineProperty(exports, "LocationCategoriesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLocationCategoriesApi; } });
Object.defineProperty(exports, "LocationGroupsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLocationGroupsApi; } });
Object.defineProperty(exports, "LocationsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseLocationsApi; } });
Object.defineProperty(exports, "OfficesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseOfficesApi; } });
Object.defineProperty(exports, "ParametersApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseParametersApi; } });
Object.defineProperty(exports, "PoolsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromisePoolsApi; } });
Object.defineProperty(exports, "RatingsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseRatingsApi; } });
Object.defineProperty(exports, "StatesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseStatesApi; } });
Object.defineProperty(exports, "TimeSeriesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTimeSeriesApi; } });
Object.defineProperty(exports, "TimeSeriesCategoriesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTimeSeriesCategoriesApi; } });
Object.defineProperty(exports, "TimeSeriesIdentifierApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTimeSeriesIdentifierApi; } });
Object.defineProperty(exports, "TimeZonesApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTimeZonesApi; } });
Object.defineProperty(exports, "TimeseriesGroupsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseTimeseriesGroupsApi; } });
Object.defineProperty(exports, "UnitsApi", { enumerable: true, get: function () { return PromiseAPI_1.PromiseUnitsApi; } });
