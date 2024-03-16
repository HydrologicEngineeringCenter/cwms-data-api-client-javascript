"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUnitsApi = exports.ObservableTimeseriesGroupsApi = exports.ObservableTimeZonesApi = exports.ObservableTimeSeriesIdentifierApi = exports.ObservableTimeSeriesCategoriesApi = exports.ObservableTimeSeriesApi = exports.ObservableStatesApi = exports.ObservableRatingsApi = exports.ObservablePoolsApi = exports.ObservableParametersApi = exports.ObservableOfficesApi = exports.ObservableLocationsApi = exports.ObservableLocationGroupsApi = exports.ObservableLocationCategoriesApi = exports.ObservableLevelsApi = exports.ObservableDefaultApi = exports.ObservableCountiesApi = exports.ObservableClobApi = exports.ObservableCatalogApi = exports.ObservableBlobApi = exports.ObservableBasinsApi = exports.ObservableAuthorizationApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AuthorizationApi_1 = require("../apis/AuthorizationApi");
var ObservableAuthorizationApi = /** @class */ (function () {
    function ObservableAuthorizationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorizationApi_1.AuthorizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorizationApi_1.AuthorizationApiResponseProcessor();
    }
    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName
     * @param apiKey
     */
    ObservableAuthorizationApi.prototype.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo = function (keyName, apiKey, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataAuthKeysWithKeyName(keyName, apiKey, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName
     * @param apiKey
     */
    ObservableAuthorizationApi.prototype.deleteCwmsDataAuthKeysWithKeyName = function (keyName, apiKey, _options) {
        return this.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, apiKey, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    ObservableAuthorizationApi.prototype.getCwmsDataAuthKeysWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataAuthKeys(_options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataAuthKeysWithHttpInfo(rsp); }));
        }));
    };
    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    ObservableAuthorizationApi.prototype.getCwmsDataAuthKeys = function (_options) {
        return this.getCwmsDataAuthKeysWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    ObservableAuthorizationApi.prototype.getCwmsDataAuthKeysWithKeyNameWithHttpInfo = function (keyName, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataAuthKeysWithKeyName(keyName, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(rsp); }));
        }));
    };
    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    ObservableAuthorizationApi.prototype.getCwmsDataAuthKeysWithKeyName = function (keyName, _options) {
        return this.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey
     */
    ObservableAuthorizationApi.prototype.postCwmsDataAuthKeysWithHttpInfo = function (apiKey, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataAuthKeys(apiKey, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataAuthKeysWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey
     */
    ObservableAuthorizationApi.prototype.postCwmsDataAuthKeys = function (apiKey, _options) {
        return this.postCwmsDataAuthKeysWithHttpInfo(apiKey, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAuthorizationApi;
}());
exports.ObservableAuthorizationApi = ObservableAuthorizationApi;
var BasinsApi_1 = require("../apis/BasinsApi");
var ObservableBasinsApi = /** @class */ (function () {
    function ObservableBasinsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasinsApi_1.BasinsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasinsApi_1.BasinsApiResponseProcessor();
    }
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    ObservableBasinsApi.prototype.getCwmsDataBasinsWithHttpInfo = function (office, unit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataBasins(office, unit, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataBasinsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    ObservableBasinsApi.prototype.getCwmsDataBasins = function (office, unit, _options) {
        return this.getCwmsDataBasinsWithHttpInfo(office, unit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    ObservableBasinsApi.prototype.getCwmsDataBasinsWithBasinIdWithHttpInfo = function (basinId, office, unit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataBasinsWithBasinId(basinId, office, unit, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataBasinsWithBasinIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    ObservableBasinsApi.prototype.getCwmsDataBasinsWithBasinId = function (basinId, office, unit, _options) {
        return this.getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId, office, unit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBasinsApi;
}());
exports.ObservableBasinsApi = ObservableBasinsApi;
var BlobApi_1 = require("../apis/BlobApi");
var ObservableBlobApi = /** @class */ (function () {
    function ObservableBlobApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlobApi_1.BlobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlobApi_1.BlobApiResponseProcessor();
    }
    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    ObservableBlobApi.prototype.getCwmsDataBlobsWithHttpInfo = function (office, page, pageSize, like, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataBlobs(office, page, pageSize, like, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataBlobsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    ObservableBlobApi.prototype.getCwmsDataBlobs = function (office, page, pageSize, like, _options) {
        return this.getCwmsDataBlobsWithHttpInfo(office, page, pageSize, like, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData blobs with blobId
     * @param blobId
     * @param office Specifies the owning office.
     */
    ObservableBlobApi.prototype.getCwmsDataBlobsWithBlobIdWithHttpInfo = function (blobId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataBlobsWithBlobId(blobId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataBlobsWithBlobIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData blobs with blobId
     * @param blobId
     * @param office Specifies the owning office.
     */
    ObservableBlobApi.prototype.getCwmsDataBlobsWithBlobId = function (blobId, office, _options) {
        return this.getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableBlobApi.prototype.postCwmsDataBlobsWithHttpInfo = function (blob, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataBlobs(blob, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataBlobsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableBlobApi.prototype.postCwmsDataBlobs = function (blob, failIfExists, _options) {
        return this.postCwmsDataBlobsWithHttpInfo(blob, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableBlobApi;
}());
exports.ObservableBlobApi = ObservableBlobApi;
var CatalogApi_1 = require("../apis/CatalogApi");
var ObservableCatalogApi = /** @class */ (function () {
    function ObservableCatalogApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CatalogApi_1.CatalogApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CatalogApi_1.CatalogApiResponseProcessor();
    }
    /**
     * Get cwmsData catalog with dataset
     * @param dataset A list of what data? E.g. Timeseries, Locations, Ratings, etc
     * @param page This end point can return a lot of data, this identifies where in the request you are.
     * @param pageSize How many entires per page returned. Default 500.
     * @param unitSystem Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
     * @param office 3-4 letter office name representing the district you want to isolate data to.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     * @param locationGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id
     * @param boundingOfficeLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
     */
    ObservableCatalogApi.prototype.getCwmsDataCatalogWithDatasetWithHttpInfo = function (dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataCatalogWithDataset(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataCatalogWithDatasetWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData catalog with dataset
     * @param dataset A list of what data? E.g. Timeseries, Locations, Ratings, etc
     * @param page This end point can return a lot of data, this identifies where in the request you are.
     * @param pageSize How many entires per page returned. Default 500.
     * @param unitSystem Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
     * @param office 3-4 letter office name representing the district you want to isolate data to.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     * @param locationGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id
     * @param boundingOfficeLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
     */
    ObservableCatalogApi.prototype.getCwmsDataCatalogWithDataset = function (dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options) {
        return this.getCwmsDataCatalogWithDatasetWithHttpInfo(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCatalogApi;
}());
exports.ObservableCatalogApi = ObservableCatalogApi;
var ClobApi_1 = require("../apis/ClobApi");
var ObservableClobApi = /** @class */ (function () {
    function ObservableClobApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClobApi_1.ClobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClobApi_1.ClobApiResponseProcessor();
    }
    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    ObservableClobApi.prototype.deleteCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataClobsWithClobId(clobId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataClobsWithClobIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    ObservableClobApi.prototype.deleteCwmsDataClobsWithClobId = function (clobId, office, _options) {
        return this.deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    ObservableClobApi.prototype.getCwmsDataClobsWithHttpInfo = function (office, page, pageSize, includeValues, like, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataClobs(office, page, pageSize, includeValues, like, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataClobsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    ObservableClobApi.prototype.getCwmsDataClobs = function (office, page, pageSize, includeValues, like, _options) {
        return this.getCwmsDataClobsWithHttpInfo(office, page, pageSize, includeValues, like, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData clobs with clobId
     * @param clobId
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    ObservableClobApi.prototype.getCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, office, clobId2, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataClobsWithClobId(clobId, office, clobId2, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataClobsWithClobIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData clobs with clobId
     * @param clobId
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    ObservableClobApi.prototype.getCwmsDataClobsWithClobId = function (clobId, office, clobId2, _options) {
        return this.getCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, clobId2, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    ObservableClobApi.prototype.patchCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, clob, ignoreNulls, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataClobsWithClobId(clobId, clob, ignoreNulls, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataClobsWithClobIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    ObservableClobApi.prototype.patchCwmsDataClobsWithClobId = function (clobId, clob, ignoreNulls, _options) {
        return this.patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, ignoreNulls, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableClobApi.prototype.postCwmsDataClobsWithHttpInfo = function (clob, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataClobs(clob, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataClobsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableClobApi.prototype.postCwmsDataClobs = function (clob, failIfExists, _options) {
        return this.postCwmsDataClobsWithHttpInfo(clob, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableClobApi;
}());
exports.ObservableClobApi = ObservableClobApi;
var CountiesApi_1 = require("../apis/CountiesApi");
var ObservableCountiesApi = /** @class */ (function () {
    function ObservableCountiesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountiesApi_1.CountiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountiesApi_1.CountiesApiResponseProcessor();
    }
    /**
     * Get cwmsData counties
     */
    ObservableCountiesApi.prototype.getCwmsDataCountiesWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataCounties(_options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataCountiesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData counties
     */
    ObservableCountiesApi.prototype.getCwmsDataCounties = function (_options) {
        return this.getCwmsDataCountiesWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCountiesApi;
}());
exports.ObservableCountiesApi = ObservableCountiesApi;
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = /** @class */ (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    /**
     * Get cwmsData
     */
    ObservableDefaultApi.prototype.getCwmsDataWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsData(_options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData
     */
    ObservableDefaultApi.prototype.getCwmsData = function (_options) {
        return this.getCwmsDataWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId
     */
    ObservableDefaultApi.prototype.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo = function (levelId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLevelsWithLevelIdTimeseries(levelId, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId
     */
    ObservableDefaultApi.prototype.getCwmsDataLevelsWithLevelIdTimeseries = function (levelId, _options) {
        return this.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId
     */
    ObservableDefaultApi.prototype.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo = function (groupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesRecentWithGroupId(groupId, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId
     */
    ObservableDefaultApi.prototype.getCwmsDataTimeseriesRecentWithGroupId = function (groupId, _options) {
        return this.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableDefaultApi;
}());
exports.ObservableDefaultApi = ObservableDefaultApi;
var LevelsApi_1 = require("../apis/LevelsApi");
var ObservableLevelsApi = /** @class */ (function () {
    function ObservableLevelsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LevelsApi_1.LevelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LevelsApi_1.LevelsApiResponseProcessor();
    }
    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be deleted
     * @param cascadeDelete
     * @param office Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
     * @param effectiveDate Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
     * @param timezone Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used.
     */
    ObservableLevelsApi.prototype.deleteCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, cascadeDelete, office, effectiveDate, timezone, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, effectiveDate, timezone, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be deleted
     * @param cascadeDelete
     * @param office Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
     * @param effectiveDate Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
     * @param timezone Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used.
     */
    ObservableLevelsApi.prototype.deleteCwmsDataLevelsWithLevelId = function (levelId, cascadeDelete, office, effectiveDate, timezone, _options) {
        return this.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, cascadeDelete, office, effectiveDate, timezone, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    ObservableLevelsApi.prototype.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo = function (specifiedLevelId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    ObservableLevelsApi.prototype.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId = function (specifiedLevelId, office, _options) {
        return this.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData levels
     * @param levelIdMask Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param format Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)
     * @param page This identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableLevelsApi.prototype.getCwmsDataLevelsWithHttpInfo = function (levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLevels(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLevelsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData levels
     * @param levelIdMask Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param format Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)
     * @param page This identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableLevelsApi.prototype.getCwmsDataLevels = function (levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        return this.getCwmsDataLevelsWithHttpInfo(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param levelId Specifies the requested location level.
     * @param office Specifies the office of the Location Level to be returned
     * @param effectiveDate Specifies the effective date of Location Level to be returned
     * @param timezone Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param unit Desired unit for the values retrieved.
     */
    ObservableLevelsApi.prototype.getCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, office, effectiveDate, timezone, unit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, timezone, unit, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLevelsWithLevelIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param levelId Specifies the requested location level.
     * @param office Specifies the office of the Location Level to be returned
     * @param effectiveDate Specifies the effective date of Location Level to be returned
     * @param timezone Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param unit Desired unit for the values retrieved.
     */
    ObservableLevelsApi.prototype.getCwmsDataLevelsWithLevelId = function (levelId, office, effectiveDate, timezone, unit, _options) {
        return this.getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, office, effectiveDate, timezone, unit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    ObservableLevelsApi.prototype.getCwmsDataSpecifiedLevelsWithHttpInfo = function (office, templateIdMask, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataSpecifiedLevels(office, templateIdMask, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataSpecifiedLevelsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    ObservableLevelsApi.prototype.getCwmsDataSpecifiedLevels = function (office, templateIdMask, _options) {
        return this.getCwmsDataSpecifiedLevelsWithHttpInfo(office, templateIdMask, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    ObservableLevelsApi.prototype.patchCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, locationLevel, effectiveDate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataLevelsWithLevelId(levelId, locationLevel, effectiveDate, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataLevelsWithLevelIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    ObservableLevelsApi.prototype.patchCwmsDataLevelsWithLevelId = function (levelId, locationLevel, effectiveDate, _options) {
        return this.patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, locationLevel, effectiveDate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    ObservableLevelsApi.prototype.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo = function (specifiedLevelId, specifiedLevelId2, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    ObservableLevelsApi.prototype.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId = function (specifiedLevelId, specifiedLevelId2, office, _options) {
        return this.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, specifiedLevelId2, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel
     */
    ObservableLevelsApi.prototype.postCwmsDataLevelsWithHttpInfo = function (locationLevel, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataLevels(locationLevel, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataLevelsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel
     */
    ObservableLevelsApi.prototype.postCwmsDataLevels = function (locationLevel, _options) {
        return this.postCwmsDataLevelsWithHttpInfo(locationLevel, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableLevelsApi.prototype.postCwmsDataSpecifiedLevelsWithHttpInfo = function (specifiedLevel, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataSpecifiedLevels(specifiedLevel, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataSpecifiedLevelsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableLevelsApi.prototype.postCwmsDataSpecifiedLevels = function (specifiedLevel, failIfExists, _options) {
        return this.postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLevelsApi;
}());
exports.ObservableLevelsApi = ObservableLevelsApi;
var LocationCategoriesApi_1 = require("../apis/LocationCategoriesApi");
var ObservableLocationCategoriesApi = /** @class */ (function () {
    function ObservableLocationCategoriesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationCategoriesApi_1.LocationCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationCategoriesApi_1.LocationCategoriesApiResponseProcessor();
    }
    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    ObservableLocationCategoriesApi.prototype.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, cascadeDelete, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    ObservableLocationCategoriesApi.prototype.deleteCwmsDataLocationCategoryWithCategoryId = function (categoryId, office, cascadeDelete, _options) {
        return this.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    ObservableLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithHttpInfo = function (office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocationCategory(office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationCategoryWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    ObservableLocationCategoriesApi.prototype.getCwmsDataLocationCategory = function (office, _options) {
        return this.getCwmsDataLocationCategoryWithHttpInfo(office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    ObservableLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocationCategoryWithCategoryId(categoryId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    ObservableLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithCategoryId = function (categoryId, office, _options) {
        return this.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory
     */
    ObservableLocationCategoriesApi.prototype.postCwmsDataLocationCategoryWithHttpInfo = function (locationCategory, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataLocationCategory(locationCategory, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataLocationCategoryWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory
     */
    ObservableLocationCategoriesApi.prototype.postCwmsDataLocationCategory = function (locationCategory, _options) {
        return this.postCwmsDataLocationCategoryWithHttpInfo(locationCategory, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocationCategoriesApi;
}());
exports.ObservableLocationCategoriesApi = ObservableLocationCategoriesApi;
var LocationGroupsApi_1 = require("../apis/LocationGroupsApi");
var ObservableLocationGroupsApi = /** @class */ (function () {
    function ObservableLocationGroupsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationGroupsApi_1.LocationGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationGroupsApi_1.LocationGroupsApiResponseProcessor();
    }
    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    ObservableLocationGroupsApi.prototype.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, categoryId, office, cascadeDelete, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, cascadeDelete, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    ObservableLocationGroupsApi.prototype.deleteCwmsDataLocationGroupWithGroupId = function (groupId, categoryId, office, cascadeDelete, _options) {
        return this.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, cascadeDelete, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    ObservableLocationGroupsApi.prototype.getCwmsDataLocationGroupWithHttpInfo = function (office, includeAssigned, locationCategoryLike, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocationGroup(office, includeAssigned, locationCategoryLike, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationGroupWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    ObservableLocationGroupsApi.prototype.getCwmsDataLocationGroup = function (office, includeAssigned, locationCategoryLike, _options) {
        return this.getCwmsDataLocationGroupWithHttpInfo(office, includeAssigned, locationCategoryLike, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    ObservableLocationGroupsApi.prototype.getCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, office, categoryId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    ObservableLocationGroupsApi.prototype.getCwmsDataLocationGroupWithGroupId = function (groupId, office, categoryId, _options) {
        return this.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    ObservableLocationGroupsApi.prototype.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, office, locationGroup, replaceAssignedLocs, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, replaceAssignedLocs, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    ObservableLocationGroupsApi.prototype.patchCwmsDataLocationGroupWithGroupId = function (groupId, office, locationGroup, replaceAssignedLocs, _options) {
        return this.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, locationGroup, replaceAssignedLocs, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup
     */
    ObservableLocationGroupsApi.prototype.postCwmsDataLocationGroupWithHttpInfo = function (locationGroup, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataLocationGroup(locationGroup, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataLocationGroupWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup
     */
    ObservableLocationGroupsApi.prototype.postCwmsDataLocationGroup = function (locationGroup, _options) {
        return this.postCwmsDataLocationGroupWithHttpInfo(locationGroup, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocationGroupsApi;
}());
exports.ObservableLocationGroupsApi = ObservableLocationGroupsApi;
var LocationsApi_1 = require("../apis/LocationsApi");
var ObservableLocationsApi = /** @class */ (function () {
    function ObservableLocationsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationsApi_1.LocationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationsApi_1.LocationsApiResponseProcessor();
    }
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    ObservableLocationsApi.prototype.deleteCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataLocationsWithLocationId(locationId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    ObservableLocationsApi.prototype.deleteCwmsDataLocationsWithLocationId = function (locationId, office, _options) {
        return this.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param names Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     */
    ObservableLocationsApi.prototype.getCwmsDataLocationsWithHttpInfo = function (names, office, unit, datum, format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocations(names, office, unit, datum, format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param names Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     */
    ObservableLocationsApi.prototype.getCwmsDataLocations = function (names, office, unit, datum, format, _options) {
        return this.getCwmsDataLocationsWithHttpInfo(names, office, unit, datum, format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    ObservableLocationsApi.prototype.getCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, office, unit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataLocationsWithLocationId(locationId, office, unit, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_79 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_79(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_80 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_80(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataLocationsWithLocationIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    ObservableLocationsApi.prototype.getCwmsDataLocationsWithLocationId = function (locationId, office, unit, _options) {
        return this.getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, unit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId
     * @param location
     */
    ObservableLocationsApi.prototype.patchCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, location, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataLocationsWithLocationId(locationId, location, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_81 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_81(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_82 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_82(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataLocationsWithLocationIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId
     * @param location
     */
    ObservableLocationsApi.prototype.patchCwmsDataLocationsWithLocationId = function (locationId, location, _options) {
        return this.patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location
     */
    ObservableLocationsApi.prototype.postCwmsDataLocationsWithHttpInfo = function (location, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataLocations(location, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_83 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_83(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_84 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_84(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataLocationsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location
     */
    ObservableLocationsApi.prototype.postCwmsDataLocations = function (location, _options) {
        return this.postCwmsDataLocationsWithHttpInfo(location, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLocationsApi;
}());
exports.ObservableLocationsApi = ObservableLocationsApi;
var OfficesApi_1 = require("../apis/OfficesApi");
var ObservableOfficesApi = /** @class */ (function () {
    function ObservableOfficesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OfficesApi_1.OfficesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OfficesApi_1.OfficesApiResponseProcessor();
    }
    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    ObservableOfficesApi.prototype.getCwmsDataOfficesWithHttpInfo = function (format, hasData, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataOffices(format, hasData, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_85 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_85(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_86 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_86(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataOfficesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    ObservableOfficesApi.prototype.getCwmsDataOffices = function (format, hasData, _options) {
        return this.getCwmsDataOfficesWithHttpInfo(format, hasData, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableOfficesApi.prototype.getCwmsDataOfficesWithOfficeWithHttpInfo = function (office, format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataOfficesWithOffice(office, format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_87 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_87(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_88 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_88(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataOfficesWithOfficeWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableOfficesApi.prototype.getCwmsDataOfficesWithOffice = function (office, format, _options) {
        return this.getCwmsDataOfficesWithOfficeWithHttpInfo(office, format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableOfficesApi;
}());
exports.ObservableOfficesApi = ObservableOfficesApi;
var ParametersApi_1 = require("../apis/ParametersApi");
var ObservableParametersApi = /** @class */ (function () {
    function ObservableParametersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ParametersApi_1.ParametersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ParametersApi_1.ParametersApiResponseProcessor();
    }
    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableParametersApi.prototype.getCwmsDataParametersWithHttpInfo = function (format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataParameters(format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_89 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_89(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_90 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_90(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataParametersWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableParametersApi.prototype.getCwmsDataParameters = function (format, _options) {
        return this.getCwmsDataParametersWithHttpInfo(format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableParametersApi;
}());
exports.ObservableParametersApi = ObservableParametersApi;
var PoolsApi_1 = require("../apis/PoolsApi");
var ObservablePoolsApi = /** @class */ (function () {
    function ObservablePoolsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PoolsApi_1.PoolsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PoolsApi_1.PoolsApiResponseProcessor();
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
    ObservablePoolsApi.prototype.getCwmsDataPoolsWithHttpInfo = function (office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_91 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_91(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_92 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_92(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataPoolsWithHttpInfo(rsp); }));
        }));
    };
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
    ObservablePoolsApi.prototype.getCwmsDataPools = function (office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options) {
        return this.getCwmsDataPoolsWithHttpInfo(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
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
    ObservablePoolsApi.prototype.getCwmsDataPoolsWithPoolIdWithHttpInfo = function (poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_93 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_93(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_94 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_94(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataPoolsWithPoolIdWithHttpInfo(rsp); }));
        }));
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
    ObservablePoolsApi.prototype.getCwmsDataPoolsWithPoolId = function (poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options) {
        return this.getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePoolsApi;
}());
exports.ObservablePoolsApi = ObservablePoolsApi;
var RatingsApi_1 = require("../apis/RatingsApi");
var ObservableRatingsApi = /** @class */ (function () {
    function ObservableRatingsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RatingsApi_1.RatingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RatingsApi_1.RatingsApiResponseProcessor();
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (ratingId, office, method, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_95 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_95(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_96 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_96(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsSpecWithRatingId = function (ratingId, office, method, _options) {
        return this.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, method, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (templateId, office, method, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_97 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_97(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_98 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_98(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, method, _options) {
        return this.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, method, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted.
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, office, begin, end, timezone, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_99 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_99(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_100 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_100(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted.
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    ObservableRatingsApi.prototype.deleteCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, _options) {
        return this.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatingsWithHttpInfo = function (name, office, unit, datum, at, end, timezone, format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatings(name, office, unit, datum, at, end, timezone, format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_101 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_101(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_102 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_102(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsWithHttpInfo(rsp); }));
        }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatings = function (name, office, unit, datum, at, end, timezone, format, _options) {
        return this.getCwmsDataRatingsWithHttpInfo(name, office, unit, datum, at, end, timezone, format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatingsMetadataWithHttpInfo = function (office, ratingIdMask, start, end, timezone, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsMetadata(office, ratingIdMask, start, end, timezone, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_103 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_103(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_104 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_104(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsMetadataWithHttpInfo(rsp); }));
        }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatingsMetadata = function (office, ratingIdMask, start, end, timezone, page, pageSize, _options) {
        return this.getCwmsDataRatingsMetadataWithHttpInfo(office, ratingIdMask, start, end, timezone, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsSpecWithHttpInfo = function (office, ratingIdMask, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsSpec(office, ratingIdMask, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_105 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_105(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_106 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_106(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsSpecWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsSpec = function (office, ratingIdMask, page, pageSize, _options) {
        return this.getCwmsDataRatingsSpecWithHttpInfo(office, ratingIdMask, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (ratingId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsSpecWithRatingId(ratingId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_107 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_107(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_108 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_108(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsSpecWithRatingId = function (ratingId, office, _options) {
        return this.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsTemplateWithHttpInfo = function (office, templateIdMask, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsTemplate(office, templateIdMask, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_109 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_109(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_110 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_110(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsTemplateWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsTemplate = function (office, templateIdMask, page, pageSize, _options) {
        return this.getCwmsDataRatingsTemplateWithHttpInfo(office, templateIdMask, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (templateId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsTemplateWithTemplateId(templateId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_111 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_111(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_112 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_112(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    ObservableRatingsApi.prototype.getCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, _options) {
        return this.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, office, begin, end, timezone, method, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, method, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_113 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_113(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_114 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_114(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataRatingsWithRatingIdWithHttpInfo(rsp); }));
        }));
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
    ObservableRatingsApi.prototype.getCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, method, _options) {
        return this.getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, method, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    ObservableRatingsApi.prototype.patchCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, body, storeTemplate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataRatingsWithRatingId(ratingId, body, storeTemplate, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_115 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_115(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_116 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_116(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataRatingsWithRatingIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    ObservableRatingsApi.prototype.patchCwmsDataRatingsWithRatingId = function (ratingId, body, storeTemplate, _options) {
        return this.patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, body, storeTemplate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatingsWithHttpInfo = function (body, storeTemplate, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataRatings(body, storeTemplate, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_117 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_117(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_118 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_118(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataRatingsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatings = function (body, storeTemplate, _options) {
        return this.postCwmsDataRatingsWithHttpInfo(body, storeTemplate, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatingsSpecWithHttpInfo = function (ratingSpec, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataRatingsSpec(ratingSpec, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_119 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_119(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_120 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_120(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataRatingsSpecWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatingsSpec = function (ratingSpec, failIfExists, _options) {
        return this.postCwmsDataRatingsSpecWithHttpInfo(ratingSpec, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatingsTemplateWithHttpInfo = function (ratingTemplate, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataRatingsTemplate(ratingTemplate, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_121 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_121(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_122 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_122(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataRatingsTemplateWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableRatingsApi.prototype.postCwmsDataRatingsTemplate = function (ratingTemplate, failIfExists, _options) {
        return this.postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableRatingsApi;
}());
exports.ObservableRatingsApi = ObservableRatingsApi;
var StatesApi_1 = require("../apis/StatesApi");
var ObservableStatesApi = /** @class */ (function () {
    function ObservableStatesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatesApi_1.StatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatesApi_1.StatesApiResponseProcessor();
    }
    /**
     * Get cwmsData states
     */
    ObservableStatesApi.prototype.getCwmsDataStatesWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataStates(_options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_123 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_123(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_124 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_124(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataStatesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData states
     */
    ObservableStatesApi.prototype.getCwmsDataStates = function (_options) {
        return this.getCwmsDataStatesWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableStatesApi;
}());
exports.ObservableStatesApi = ObservableStatesApi;
var TimeSeriesApi_1 = require("../apis/TimeSeriesApi");
var ObservableTimeSeriesApi = /** @class */ (function () {
    function ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesApi_1.TimeSeriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesApi_1.TimeSeriesApiResponseProcessor();
    }
    /**
     * Delete cwmsData timeseries with timeseries
     * @param timeseries The timeseries-id of the timeseries values to be deleted.
     * @param office Specifies the office of the timeseries to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @param versionDate The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version.
     * @param startTimeInclusive A flag specifying whether any data at the start time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;after&lt;/em&gt;&lt;/b&gt; the start time (\&#39;False\&#39;).  Default value is True
     * @param endTimeInclusive A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether any data at the end time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;before&lt;/em&gt;&lt;/b&gt; the end time (\&#39;False\&#39;). Default value is False
     * @param maxVersion A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to use the earliest (\&#39;False\&#39;) or latest (\&#39;True\&#39;) version date for each time if p_version_date is NULL.  Default is \&#39;True\&#39;
     * @param overrideProtection A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to delete protected data. Default is False
     */
    ObservableTimeSeriesApi.prototype.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo = function (timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_125 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_125(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_126 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_126(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Delete cwmsData timeseries with timeseries
     * @param timeseries The timeseries-id of the timeseries values to be deleted.
     * @param office Specifies the office of the timeseries to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @param versionDate The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version.
     * @param startTimeInclusive A flag specifying whether any data at the start time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;after&lt;/em&gt;&lt;/b&gt; the start time (\&#39;False\&#39;).  Default value is True
     * @param endTimeInclusive A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether any data at the end time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;before&lt;/em&gt;&lt;/b&gt; the end time (\&#39;False\&#39;). Default value is False
     * @param maxVersion A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to use the earliest (\&#39;False\&#39;) or latest (\&#39;True\&#39;) version date for each time if p_version_date is NULL.  Default is \&#39;True\&#39;
     * @param overrideProtection A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to delete protected data. Default is False
     */
    ObservableTimeSeriesApi.prototype.deleteCwmsDataTimeseriesWithTimeseries = function (timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options) {
        return this.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Get cwmsData timeseries
     * @param name Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param office Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    ObservableTimeSeriesApi.prototype.getCwmsDataTimeseriesWithHttpInfo = function (name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_127 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_127(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_128 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_128(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData timeseries
     * @param name Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param office Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    ObservableTimeSeriesApi.prototype.getCwmsDataTimeseries = function (name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        return this.getCwmsDataTimeseriesWithHttpInfo(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param timeseries Full CWMS Timeseries name
     * @param timeSeries
     * @param versionDate Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param createAsLrts
     * @param storeRule The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @param overrideProtection A flag to ignore the protected data quality when storing data.  \&quot;\&#39;true\&#39; or \&#39;false\&#39;\&quot;
     */
    ObservableTimeSeriesApi.prototype.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo = function (timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_129 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_129(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_130 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_130(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param timeseries Full CWMS Timeseries name
     * @param timeSeries
     * @param versionDate Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param createAsLrts
     * @param storeRule The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @param overrideProtection A flag to ignore the protected data quality when storing data.  \&quot;\&#39;true\&#39; or \&#39;false\&#39;\&quot;
     */
    ObservableTimeSeriesApi.prototype.patchCwmsDataTimeseriesWithTimeseries = function (timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        return this.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     * @param timeSeries
     * @param versionDate Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param createAsLrts Flag indicating if timeseries should be created as Local Regular Time Series. \&#39;True\&#39; or \&#39;False\&#39;, default is \&#39;False\&#39;
     * @param storeRule The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @param overrideProtection A flag to ignore the protected data quality when storing data. \&#39;True\&#39; or \&#39;False\&#39;
     */
    ObservableTimeSeriesApi.prototype.postCwmsDataTimeseriesWithHttpInfo = function (timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataTimeseries(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_131 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_131(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_132 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_132(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataTimeseriesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds
     * Post cwmsData timeseries
     * @param timeSeries
     * @param versionDate Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @param createAsLrts Flag indicating if timeseries should be created as Local Regular Time Series. \&#39;True\&#39; or \&#39;False\&#39;, default is \&#39;False\&#39;
     * @param storeRule The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @param overrideProtection A flag to ignore the protected data quality when storing data. \&#39;True\&#39; or \&#39;False\&#39;
     */
    ObservableTimeSeriesApi.prototype.postCwmsDataTimeseries = function (timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        return this.postCwmsDataTimeseriesWithHttpInfo(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTimeSeriesApi;
}());
exports.ObservableTimeSeriesApi = ObservableTimeSeriesApi;
var TimeSeriesCategoriesApi_1 = require("../apis/TimeSeriesCategoriesApi");
var ObservableTimeSeriesCategoriesApi = /** @class */ (function () {
    function ObservableTimeSeriesCategoriesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesCategoriesApi_1.TimeSeriesCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesCategoriesApi_1.TimeSeriesCategoriesApiResponseProcessor();
    }
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    ObservableTimeSeriesCategoriesApi.prototype.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, cascadeDelete, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_133 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_133(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_134 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_134(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    ObservableTimeSeriesCategoriesApi.prototype.deleteCwmsDataTimeseriesCategoryWithCategoryId = function (categoryId, office, cascadeDelete, _options) {
        return this.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    ObservableTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithHttpInfo = function (office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesCategory(office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_135 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_135(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_136 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_136(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesCategoryWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    ObservableTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategory = function (office, _options) {
        return this.getCwmsDataTimeseriesCategoryWithHttpInfo(office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    ObservableTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_137 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_137(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_138 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_138(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    ObservableTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithCategoryId = function (categoryId, office, _options) {
        return this.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeSeriesCategoriesApi.prototype.postCwmsDataTimeseriesCategoryWithHttpInfo = function (timeSeriesCategory, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataTimeseriesCategory(timeSeriesCategory, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_139 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_139(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_140 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_140(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataTimeseriesCategoryWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeSeriesCategoriesApi.prototype.postCwmsDataTimeseriesCategory = function (timeSeriesCategory, failIfExists, _options) {
        return this.postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTimeSeriesCategoriesApi;
}());
exports.ObservableTimeSeriesCategoriesApi = ObservableTimeSeriesCategoriesApi;
var TimeSeriesIdentifierApi_1 = require("../apis/TimeSeriesIdentifierApi");
var ObservableTimeSeriesIdentifierApi = /** @class */ (function () {
    function ObservableTimeSeriesIdentifierApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesIdentifierApi_1.TimeSeriesIdentifierApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesIdentifierApi_1.TimeSeriesIdentifierApiResponseProcessor();
    }
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted.
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableTimeSeriesIdentifierApi.prototype.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, office, method, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_141 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_141(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_142 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_142(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted.
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    ObservableTimeSeriesIdentifierApi.prototype.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, office, method, _options) {
        return this.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    ObservableTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo = function (office, timeseriesIdRegex, page, pageSize, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesIdentifierDescriptor(office, timeseriesIdRegex, page, pageSize, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_143 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_143(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_144 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_144(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    ObservableTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptor = function (office, timeseriesIdRegex, page, pageSize, _options) {
        return this.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office, timeseriesIdRegex, page, pageSize, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    ObservableTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_145 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_145(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_146 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_146(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    ObservableTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, office, _options) {
        return this.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId
     * @param timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param office Specifies the owning office of the timeseries identifier to be updated
     * @param intervalOffset The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param snapForward The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param snapBackward The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param active \&#39;True\&#39; or \&#39;true\&#39; if the time series is active
     */
    ObservableTimeSeriesIdentifierApi.prototype.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_147 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_147(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_148 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_148(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId
     * @param timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param office Specifies the owning office of the timeseries identifier to be updated
     * @param intervalOffset The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param snapForward The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param snapBackward The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param active \&#39;True\&#39; or \&#39;true\&#39; if the time series is active
     */
    ObservableTimeSeriesIdentifierApi.prototype.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options) {
        return this.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeSeriesIdentifierApi.prototype.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo = function (timeSeriesIdentifierDescriptor, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_149 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_149(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_150 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_150(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeSeriesIdentifierApi.prototype.postCwmsDataTimeseriesIdentifierDescriptor = function (timeSeriesIdentifierDescriptor, failIfExists, _options) {
        return this.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTimeSeriesIdentifierApi;
}());
exports.ObservableTimeSeriesIdentifierApi = ObservableTimeSeriesIdentifierApi;
var TimeZonesApi_1 = require("../apis/TimeZonesApi");
var ObservableTimeZonesApi = /** @class */ (function () {
    function ObservableTimeZonesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeZonesApi_1.TimeZonesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeZonesApi_1.TimeZonesApiResponseProcessor();
    }
    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableTimeZonesApi.prototype.getCwmsDataTimezonesWithHttpInfo = function (format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimezones(format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_151 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_151(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_152 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_152(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimezonesWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableTimeZonesApi.prototype.getCwmsDataTimezones = function (format, _options) {
        return this.getCwmsDataTimezonesWithHttpInfo(format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTimeZonesApi;
}());
exports.ObservableTimeZonesApi = ObservableTimeZonesApi;
var TimeseriesGroupsApi_1 = require("../apis/TimeseriesGroupsApi");
var ObservableTimeseriesGroupsApi = /** @class */ (function () {
    function ObservableTimeseriesGroupsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeseriesGroupsApi_1.TimeseriesGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeseriesGroupsApi_1.TimeseriesGroupsApiResponseProcessor();
    }
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    ObservableTimeseriesGroupsApi.prototype.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, categoryId, office, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_153 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_153(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_154 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_154(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    ObservableTimeseriesGroupsApi.prototype.deleteCwmsDataTimeseriesGroupWithGroupId = function (groupId, categoryId, office, _options) {
        return this.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    ObservableTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithHttpInfo = function (office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesGroup(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_155 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_155(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_156 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_156(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesGroupWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    ObservableTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroup = function (office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options) {
        return this.getCwmsDataTimeseriesGroupWithHttpInfo(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    ObservableTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, office, categoryId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_157 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_157(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_158 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_158(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    ObservableTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithGroupId = function (groupId, office, categoryId, _options) {
        return this.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    ObservableTimeseriesGroupsApi.prototype.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, office, timeSeriesGroup, replaceAssignedTs, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_159 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_159(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_160 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_160(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    ObservableTimeseriesGroupsApi.prototype.patchCwmsDataTimeseriesGroupWithGroupId = function (groupId, office, timeSeriesGroup, replaceAssignedTs, _options) {
        return this.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, timeSeriesGroup, replaceAssignedTs, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeseriesGroupsApi.prototype.postCwmsDataTimeseriesGroupWithHttpInfo = function (timeSeriesGroup, failIfExists, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.postCwmsDataTimeseriesGroup(timeSeriesGroup, failIfExists, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_161 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_161(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_162 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_162(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.postCwmsDataTimeseriesGroupWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    ObservableTimeseriesGroupsApi.prototype.postCwmsDataTimeseriesGroup = function (timeSeriesGroup, failIfExists, _options) {
        return this.postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup, failIfExists, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableTimeseriesGroupsApi;
}());
exports.ObservableTimeseriesGroupsApi = ObservableTimeseriesGroupsApi;
var UnitsApi_1 = require("../apis/UnitsApi");
var ObservableUnitsApi = /** @class */ (function () {
    function ObservableUnitsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UnitsApi_1.UnitsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UnitsApi_1.UnitsApiResponseProcessor();
    }
    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableUnitsApi.prototype.getCwmsDataUnitsWithHttpInfo = function (format, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCwmsDataUnits(format, _options);
        // build promise chain
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_163 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_163(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_164 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_164(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCwmsDataUnitsWithHttpInfo(rsp); }));
        }));
    };
    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    ObservableUnitsApi.prototype.getCwmsDataUnits = function (format, _options) {
        return this.getCwmsDataUnitsWithHttpInfo(format, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableUnitsApi;
}());
exports.ObservableUnitsApi = ObservableUnitsApi;
