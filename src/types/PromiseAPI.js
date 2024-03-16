"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUnitsApi = exports.PromiseTimeseriesGroupsApi = exports.PromiseTimeZonesApi = exports.PromiseTimeSeriesIdentifierApi = exports.PromiseTimeSeriesCategoriesApi = exports.PromiseTimeSeriesApi = exports.PromiseStatesApi = exports.PromiseRatingsApi = exports.PromisePoolsApi = exports.PromiseParametersApi = exports.PromiseOfficesApi = exports.PromiseLocationsApi = exports.PromiseLocationGroupsApi = exports.PromiseLocationCategoriesApi = exports.PromiseLevelsApi = exports.PromiseDefaultApi = exports.PromiseCountiesApi = exports.PromiseClobApi = exports.PromiseCatalogApi = exports.PromiseBlobApi = exports.PromiseBasinsApi = exports.PromiseAuthorizationApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAuthorizationApi = /** @class */ (function () {
    function PromiseAuthorizationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName
     * @param apiKey
     */
    PromiseAuthorizationApi.prototype.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo = function (keyName, apiKey, _options) {
        var result = this.api.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, apiKey, _options);
        return result.toPromise();
    };
    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName
     * @param apiKey
     */
    PromiseAuthorizationApi.prototype.deleteCwmsDataAuthKeysWithKeyName = function (keyName, apiKey, _options) {
        var result = this.api.deleteCwmsDataAuthKeysWithKeyName(keyName, apiKey, _options);
        return result.toPromise();
    };
    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    PromiseAuthorizationApi.prototype.getCwmsDataAuthKeysWithHttpInfo = function (_options) {
        var result = this.api.getCwmsDataAuthKeysWithHttpInfo(_options);
        return result.toPromise();
    };
    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    PromiseAuthorizationApi.prototype.getCwmsDataAuthKeys = function (_options) {
        var result = this.api.getCwmsDataAuthKeys(_options);
        return result.toPromise();
    };
    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    PromiseAuthorizationApi.prototype.getCwmsDataAuthKeysWithKeyNameWithHttpInfo = function (keyName, _options) {
        var result = this.api.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, _options);
        return result.toPromise();
    };
    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    PromiseAuthorizationApi.prototype.getCwmsDataAuthKeysWithKeyName = function (keyName, _options) {
        var result = this.api.getCwmsDataAuthKeysWithKeyName(keyName, _options);
        return result.toPromise();
    };
    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey
     */
    PromiseAuthorizationApi.prototype.postCwmsDataAuthKeysWithHttpInfo = function (apiKey, _options) {
        var result = this.api.postCwmsDataAuthKeysWithHttpInfo(apiKey, _options);
        return result.toPromise();
    };
    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey
     */
    PromiseAuthorizationApi.prototype.postCwmsDataAuthKeys = function (apiKey, _options) {
        var result = this.api.postCwmsDataAuthKeys(apiKey, _options);
        return result.toPromise();
    };
    return PromiseAuthorizationApi;
}());
exports.PromiseAuthorizationApi = PromiseAuthorizationApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseBasinsApi = /** @class */ (function () {
    function PromiseBasinsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBasinsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    PromiseBasinsApi.prototype.getCwmsDataBasinsWithHttpInfo = function (office, unit, _options) {
        var result = this.api.getCwmsDataBasinsWithHttpInfo(office, unit, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    PromiseBasinsApi.prototype.getCwmsDataBasins = function (office, unit, _options) {
        var result = this.api.getCwmsDataBasins(office, unit, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    PromiseBasinsApi.prototype.getCwmsDataBasinsWithBasinIdWithHttpInfo = function (basinId, office, unit, _options) {
        var result = this.api.getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId, office, unit, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    PromiseBasinsApi.prototype.getCwmsDataBasinsWithBasinId = function (basinId, office, unit, _options) {
        var result = this.api.getCwmsDataBasinsWithBasinId(basinId, office, unit, _options);
        return result.toPromise();
    };
    return PromiseBasinsApi;
}());
exports.PromiseBasinsApi = PromiseBasinsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseBlobApi = /** @class */ (function () {
    function PromiseBlobApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBlobApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    PromiseBlobApi.prototype.getCwmsDataBlobsWithHttpInfo = function (office, page, pageSize, like, _options) {
        var result = this.api.getCwmsDataBlobsWithHttpInfo(office, page, pageSize, like, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    PromiseBlobApi.prototype.getCwmsDataBlobs = function (office, page, pageSize, like, _options) {
        var result = this.api.getCwmsDataBlobs(office, page, pageSize, like, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData blobs with blobId
     * @param blobId
     * @param office Specifies the owning office.
     */
    PromiseBlobApi.prototype.getCwmsDataBlobsWithBlobIdWithHttpInfo = function (blobId, office, _options) {
        var result = this.api.getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId, office, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData blobs with blobId
     * @param blobId
     * @param office Specifies the owning office.
     */
    PromiseBlobApi.prototype.getCwmsDataBlobsWithBlobId = function (blobId, office, _options) {
        var result = this.api.getCwmsDataBlobsWithBlobId(blobId, office, _options);
        return result.toPromise();
    };
    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseBlobApi.prototype.postCwmsDataBlobsWithHttpInfo = function (blob, failIfExists, _options) {
        var result = this.api.postCwmsDataBlobsWithHttpInfo(blob, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseBlobApi.prototype.postCwmsDataBlobs = function (blob, failIfExists, _options) {
        var result = this.api.postCwmsDataBlobs(blob, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseBlobApi;
}());
exports.PromiseBlobApi = PromiseBlobApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseCatalogApi = /** @class */ (function () {
    function PromiseCatalogApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableCatalogApi(configuration, requestFactory, responseProcessor);
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
    PromiseCatalogApi.prototype.getCwmsDataCatalogWithDatasetWithHttpInfo = function (dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options) {
        var result = this.api.getCwmsDataCatalogWithDatasetWithHttpInfo(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);
        return result.toPromise();
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
    PromiseCatalogApi.prototype.getCwmsDataCatalogWithDataset = function (dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options) {
        var result = this.api.getCwmsDataCatalogWithDataset(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);
        return result.toPromise();
    };
    return PromiseCatalogApi;
}());
exports.PromiseCatalogApi = PromiseCatalogApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseClobApi = /** @class */ (function () {
    function PromiseClobApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableClobApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    PromiseClobApi.prototype.deleteCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, office, _options) {
        var result = this.api.deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, _options);
        return result.toPromise();
    };
    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    PromiseClobApi.prototype.deleteCwmsDataClobsWithClobId = function (clobId, office, _options) {
        var result = this.api.deleteCwmsDataClobsWithClobId(clobId, office, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    PromiseClobApi.prototype.getCwmsDataClobsWithHttpInfo = function (office, page, pageSize, includeValues, like, _options) {
        var result = this.api.getCwmsDataClobsWithHttpInfo(office, page, pageSize, includeValues, like, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    PromiseClobApi.prototype.getCwmsDataClobs = function (office, page, pageSize, includeValues, like, _options) {
        var result = this.api.getCwmsDataClobs(office, page, pageSize, includeValues, like, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData clobs with clobId
     * @param clobId
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    PromiseClobApi.prototype.getCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, office, clobId2, _options) {
        var result = this.api.getCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, clobId2, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData clobs with clobId
     * @param clobId
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    PromiseClobApi.prototype.getCwmsDataClobsWithClobId = function (clobId, office, clobId2, _options) {
        var result = this.api.getCwmsDataClobsWithClobId(clobId, office, clobId2, _options);
        return result.toPromise();
    };
    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    PromiseClobApi.prototype.patchCwmsDataClobsWithClobIdWithHttpInfo = function (clobId, clob, ignoreNulls, _options) {
        var result = this.api.patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, ignoreNulls, _options);
        return result.toPromise();
    };
    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    PromiseClobApi.prototype.patchCwmsDataClobsWithClobId = function (clobId, clob, ignoreNulls, _options) {
        var result = this.api.patchCwmsDataClobsWithClobId(clobId, clob, ignoreNulls, _options);
        return result.toPromise();
    };
    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseClobApi.prototype.postCwmsDataClobsWithHttpInfo = function (clob, failIfExists, _options) {
        var result = this.api.postCwmsDataClobsWithHttpInfo(clob, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseClobApi.prototype.postCwmsDataClobs = function (clob, failIfExists, _options) {
        var result = this.api.postCwmsDataClobs(clob, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseClobApi;
}());
exports.PromiseClobApi = PromiseClobApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseCountiesApi = /** @class */ (function () {
    function PromiseCountiesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableCountiesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData counties
     */
    PromiseCountiesApi.prototype.getCwmsDataCountiesWithHttpInfo = function (_options) {
        var result = this.api.getCwmsDataCountiesWithHttpInfo(_options);
        return result.toPromise();
    };
    /**
     * Get cwmsData counties
     */
    PromiseCountiesApi.prototype.getCwmsDataCounties = function (_options) {
        var result = this.api.getCwmsDataCounties(_options);
        return result.toPromise();
    };
    return PromiseCountiesApi;
}());
exports.PromiseCountiesApi = PromiseCountiesApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseDefaultApi = /** @class */ (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData
     */
    PromiseDefaultApi.prototype.getCwmsDataWithHttpInfo = function (_options) {
        var result = this.api.getCwmsDataWithHttpInfo(_options);
        return result.toPromise();
    };
    /**
     * Get cwmsData
     */
    PromiseDefaultApi.prototype.getCwmsData = function (_options) {
        var result = this.api.getCwmsData(_options);
        return result.toPromise();
    };
    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId
     */
    PromiseDefaultApi.prototype.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo = function (levelId, _options) {
        var result = this.api.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId
     */
    PromiseDefaultApi.prototype.getCwmsDataLevelsWithLevelIdTimeseries = function (levelId, _options) {
        var result = this.api.getCwmsDataLevelsWithLevelIdTimeseries(levelId, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId
     */
    PromiseDefaultApi.prototype.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo = function (groupId, _options) {
        var result = this.api.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId
     */
    PromiseDefaultApi.prototype.getCwmsDataTimeseriesRecentWithGroupId = function (groupId, _options) {
        var result = this.api.getCwmsDataTimeseriesRecentWithGroupId(groupId, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseLevelsApi = /** @class */ (function () {
    function PromiseLevelsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableLevelsApi(configuration, requestFactory, responseProcessor);
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
    PromiseLevelsApi.prototype.deleteCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, cascadeDelete, office, effectiveDate, timezone, _options) {
        var result = this.api.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, cascadeDelete, office, effectiveDate, timezone, _options);
        return result.toPromise();
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
    PromiseLevelsApi.prototype.deleteCwmsDataLevelsWithLevelId = function (levelId, cascadeDelete, office, effectiveDate, timezone, _options) {
        var result = this.api.deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, effectiveDate, timezone, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    PromiseLevelsApi.prototype.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo = function (specifiedLevelId, office, _options) {
        var result = this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, office, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    PromiseLevelsApi.prototype.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId = function (specifiedLevelId, office, _options) {
        var result = this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office, _options);
        return result.toPromise();
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
    PromiseLevelsApi.prototype.getCwmsDataLevelsWithHttpInfo = function (levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var result = this.api.getCwmsDataLevelsWithHttpInfo(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    PromiseLevelsApi.prototype.getCwmsDataLevels = function (levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var result = this.api.getCwmsDataLevels(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    PromiseLevelsApi.prototype.getCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, office, effectiveDate, timezone, unit, _options) {
        var result = this.api.getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, office, effectiveDate, timezone, unit, _options);
        return result.toPromise();
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
    PromiseLevelsApi.prototype.getCwmsDataLevelsWithLevelId = function (levelId, office, effectiveDate, timezone, unit, _options) {
        var result = this.api.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, timezone, unit, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    PromiseLevelsApi.prototype.getCwmsDataSpecifiedLevelsWithHttpInfo = function (office, templateIdMask, _options) {
        var result = this.api.getCwmsDataSpecifiedLevelsWithHttpInfo(office, templateIdMask, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    PromiseLevelsApi.prototype.getCwmsDataSpecifiedLevels = function (office, templateIdMask, _options) {
        var result = this.api.getCwmsDataSpecifiedLevels(office, templateIdMask, _options);
        return result.toPromise();
    };
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    PromiseLevelsApi.prototype.patchCwmsDataLevelsWithLevelIdWithHttpInfo = function (levelId, locationLevel, effectiveDate, _options) {
        var result = this.api.patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, locationLevel, effectiveDate, _options);
        return result.toPromise();
    };
    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    PromiseLevelsApi.prototype.patchCwmsDataLevelsWithLevelId = function (levelId, locationLevel, effectiveDate, _options) {
        var result = this.api.patchCwmsDataLevelsWithLevelId(levelId, locationLevel, effectiveDate, _options);
        return result.toPromise();
    };
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    PromiseLevelsApi.prototype.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo = function (specifiedLevelId, specifiedLevelId2, office, _options) {
        var result = this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, specifiedLevelId2, office, _options);
        return result.toPromise();
    };
    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    PromiseLevelsApi.prototype.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId = function (specifiedLevelId, specifiedLevelId2, office, _options) {
        var result = this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office, _options);
        return result.toPromise();
    };
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel
     */
    PromiseLevelsApi.prototype.postCwmsDataLevelsWithHttpInfo = function (locationLevel, _options) {
        var result = this.api.postCwmsDataLevelsWithHttpInfo(locationLevel, _options);
        return result.toPromise();
    };
    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel
     */
    PromiseLevelsApi.prototype.postCwmsDataLevels = function (locationLevel, _options) {
        var result = this.api.postCwmsDataLevels(locationLevel, _options);
        return result.toPromise();
    };
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseLevelsApi.prototype.postCwmsDataSpecifiedLevelsWithHttpInfo = function (specifiedLevel, failIfExists, _options) {
        var result = this.api.postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseLevelsApi.prototype.postCwmsDataSpecifiedLevels = function (specifiedLevel, failIfExists, _options) {
        var result = this.api.postCwmsDataSpecifiedLevels(specifiedLevel, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseLevelsApi;
}());
exports.PromiseLevelsApi = PromiseLevelsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseLocationCategoriesApi = /** @class */ (function () {
    function PromiseLocationCategoriesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableLocationCategoriesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    PromiseLocationCategoriesApi.prototype.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    PromiseLocationCategoriesApi.prototype.deleteCwmsDataLocationCategoryWithCategoryId = function (categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    PromiseLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithHttpInfo = function (office, _options) {
        var result = this.api.getCwmsDataLocationCategoryWithHttpInfo(office, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    PromiseLocationCategoriesApi.prototype.getCwmsDataLocationCategory = function (office, _options) {
        var result = this.api.getCwmsDataLocationCategory(office, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    PromiseLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, _options) {
        var result = this.api.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    PromiseLocationCategoriesApi.prototype.getCwmsDataLocationCategoryWithCategoryId = function (categoryId, office, _options) {
        var result = this.api.getCwmsDataLocationCategoryWithCategoryId(categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory
     */
    PromiseLocationCategoriesApi.prototype.postCwmsDataLocationCategoryWithHttpInfo = function (locationCategory, _options) {
        var result = this.api.postCwmsDataLocationCategoryWithHttpInfo(locationCategory, _options);
        return result.toPromise();
    };
    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory
     */
    PromiseLocationCategoriesApi.prototype.postCwmsDataLocationCategory = function (locationCategory, _options) {
        var result = this.api.postCwmsDataLocationCategory(locationCategory, _options);
        return result.toPromise();
    };
    return PromiseLocationCategoriesApi;
}());
exports.PromiseLocationCategoriesApi = PromiseLocationCategoriesApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseLocationGroupsApi = /** @class */ (function () {
    function PromiseLocationGroupsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableLocationGroupsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    PromiseLocationGroupsApi.prototype.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    PromiseLocationGroupsApi.prototype.deleteCwmsDataLocationGroupWithGroupId = function (groupId, categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    PromiseLocationGroupsApi.prototype.getCwmsDataLocationGroupWithHttpInfo = function (office, includeAssigned, locationCategoryLike, _options) {
        var result = this.api.getCwmsDataLocationGroupWithHttpInfo(office, includeAssigned, locationCategoryLike, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    PromiseLocationGroupsApi.prototype.getCwmsDataLocationGroup = function (office, includeAssigned, locationCategoryLike, _options) {
        var result = this.api.getCwmsDataLocationGroup(office, includeAssigned, locationCategoryLike, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    PromiseLocationGroupsApi.prototype.getCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, office, categoryId, _options) {
        var result = this.api.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    PromiseLocationGroupsApi.prototype.getCwmsDataLocationGroupWithGroupId = function (groupId, office, categoryId, _options) {
        var result = this.api.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, _options);
        return result.toPromise();
    };
    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    PromiseLocationGroupsApi.prototype.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo = function (groupId, office, locationGroup, replaceAssignedLocs, _options) {
        var result = this.api.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, locationGroup, replaceAssignedLocs, _options);
        return result.toPromise();
    };
    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    PromiseLocationGroupsApi.prototype.patchCwmsDataLocationGroupWithGroupId = function (groupId, office, locationGroup, replaceAssignedLocs, _options) {
        var result = this.api.patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, replaceAssignedLocs, _options);
        return result.toPromise();
    };
    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup
     */
    PromiseLocationGroupsApi.prototype.postCwmsDataLocationGroupWithHttpInfo = function (locationGroup, _options) {
        var result = this.api.postCwmsDataLocationGroupWithHttpInfo(locationGroup, _options);
        return result.toPromise();
    };
    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup
     */
    PromiseLocationGroupsApi.prototype.postCwmsDataLocationGroup = function (locationGroup, _options) {
        var result = this.api.postCwmsDataLocationGroup(locationGroup, _options);
        return result.toPromise();
    };
    return PromiseLocationGroupsApi;
}());
exports.PromiseLocationGroupsApi = PromiseLocationGroupsApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseLocationsApi = /** @class */ (function () {
    function PromiseLocationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    PromiseLocationsApi.prototype.deleteCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, office, _options) {
        var result = this.api.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, _options);
        return result.toPromise();
    };
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    PromiseLocationsApi.prototype.deleteCwmsDataLocationsWithLocationId = function (locationId, office, _options) {
        var result = this.api.deleteCwmsDataLocationsWithLocationId(locationId, office, _options);
        return result.toPromise();
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
    PromiseLocationsApi.prototype.getCwmsDataLocationsWithHttpInfo = function (names, office, unit, datum, format, _options) {
        var result = this.api.getCwmsDataLocationsWithHttpInfo(names, office, unit, datum, format, _options);
        return result.toPromise();
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
    PromiseLocationsApi.prototype.getCwmsDataLocations = function (names, office, unit, datum, format, _options) {
        var result = this.api.getCwmsDataLocations(names, office, unit, datum, format, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    PromiseLocationsApi.prototype.getCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, office, unit, _options) {
        var result = this.api.getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, unit, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    PromiseLocationsApi.prototype.getCwmsDataLocationsWithLocationId = function (locationId, office, unit, _options) {
        var result = this.api.getCwmsDataLocationsWithLocationId(locationId, office, unit, _options);
        return result.toPromise();
    };
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId
     * @param location
     */
    PromiseLocationsApi.prototype.patchCwmsDataLocationsWithLocationIdWithHttpInfo = function (locationId, location, _options) {
        var result = this.api.patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location, _options);
        return result.toPromise();
    };
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId
     * @param location
     */
    PromiseLocationsApi.prototype.patchCwmsDataLocationsWithLocationId = function (locationId, location, _options) {
        var result = this.api.patchCwmsDataLocationsWithLocationId(locationId, location, _options);
        return result.toPromise();
    };
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location
     */
    PromiseLocationsApi.prototype.postCwmsDataLocationsWithHttpInfo = function (location, _options) {
        var result = this.api.postCwmsDataLocationsWithHttpInfo(location, _options);
        return result.toPromise();
    };
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location
     */
    PromiseLocationsApi.prototype.postCwmsDataLocations = function (location, _options) {
        var result = this.api.postCwmsDataLocations(location, _options);
        return result.toPromise();
    };
    return PromiseLocationsApi;
}());
exports.PromiseLocationsApi = PromiseLocationsApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseOfficesApi = /** @class */ (function () {
    function PromiseOfficesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableOfficesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    PromiseOfficesApi.prototype.getCwmsDataOfficesWithHttpInfo = function (format, hasData, _options) {
        var result = this.api.getCwmsDataOfficesWithHttpInfo(format, hasData, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    PromiseOfficesApi.prototype.getCwmsDataOffices = function (format, hasData, _options) {
        var result = this.api.getCwmsDataOffices(format, hasData, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseOfficesApi.prototype.getCwmsDataOfficesWithOfficeWithHttpInfo = function (office, format, _options) {
        var result = this.api.getCwmsDataOfficesWithOfficeWithHttpInfo(office, format, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseOfficesApi.prototype.getCwmsDataOfficesWithOffice = function (office, format, _options) {
        var result = this.api.getCwmsDataOfficesWithOffice(office, format, _options);
        return result.toPromise();
    };
    return PromiseOfficesApi;
}());
exports.PromiseOfficesApi = PromiseOfficesApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromiseParametersApi = /** @class */ (function () {
    function PromiseParametersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableParametersApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseParametersApi.prototype.getCwmsDataParametersWithHttpInfo = function (format, _options) {
        var result = this.api.getCwmsDataParametersWithHttpInfo(format, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseParametersApi.prototype.getCwmsDataParameters = function (format, _options) {
        var result = this.api.getCwmsDataParameters(format, _options);
        return result.toPromise();
    };
    return PromiseParametersApi;
}());
exports.PromiseParametersApi = PromiseParametersApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromisePoolsApi = /** @class */ (function () {
    function PromisePoolsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservablePoolsApi(configuration, requestFactory, responseProcessor);
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
    PromisePoolsApi.prototype.getCwmsDataPoolsWithHttpInfo = function (office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options) {
        var result = this.api.getCwmsDataPoolsWithHttpInfo(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);
        return result.toPromise();
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
    PromisePoolsApi.prototype.getCwmsDataPools = function (office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options) {
        var result = this.api.getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);
        return result.toPromise();
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
    PromisePoolsApi.prototype.getCwmsDataPoolsWithPoolIdWithHttpInfo = function (poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options) {
        var result = this.api.getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);
        return result.toPromise();
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
    PromisePoolsApi.prototype.getCwmsDataPoolsWithPoolId = function (poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options) {
        var result = this.api.getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);
        return result.toPromise();
    };
    return PromisePoolsApi;
}());
exports.PromisePoolsApi = PromisePoolsApi;
var ObservableAPI_15 = require("./ObservableAPI");
var PromiseRatingsApi = /** @class */ (function () {
    function PromiseRatingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableRatingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (ratingId, office, method, _options) {
        var result = this.api.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsSpecWithRatingId = function (ratingId, office, method, _options) {
        var result = this.api.deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (templateId, office, method, _options) {
        var result = this.api.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, method, _options) {
        var result = this.api.deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted.
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, office, begin, end, timezone, _options) {
        var result = this.api.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, _options);
        return result.toPromise();
    };
    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted.
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    PromiseRatingsApi.prototype.deleteCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, _options) {
        var result = this.api.deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatingsWithHttpInfo = function (name, office, unit, datum, at, end, timezone, format, _options) {
        var result = this.api.getCwmsDataRatingsWithHttpInfo(name, office, unit, datum, at, end, timezone, format, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatings = function (name, office, unit, datum, at, end, timezone, format, _options) {
        var result = this.api.getCwmsDataRatings(name, office, unit, datum, at, end, timezone, format, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatingsMetadataWithHttpInfo = function (office, ratingIdMask, start, end, timezone, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsMetadataWithHttpInfo(office, ratingIdMask, start, end, timezone, page, pageSize, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatingsMetadata = function (office, ratingIdMask, start, end, timezone, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsMetadata(office, ratingIdMask, start, end, timezone, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsSpecWithHttpInfo = function (office, ratingIdMask, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsSpecWithHttpInfo(office, ratingIdMask, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsSpec = function (office, ratingIdMask, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsSpec(office, ratingIdMask, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo = function (ratingId, office, _options) {
        var result = this.api.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsSpecWithRatingId = function (ratingId, office, _options) {
        var result = this.api.getCwmsDataRatingsSpecWithRatingId(ratingId, office, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsTemplateWithHttpInfo = function (office, templateIdMask, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsTemplateWithHttpInfo(office, templateIdMask, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsTemplate = function (office, templateIdMask, page, pageSize, _options) {
        var result = this.api.getCwmsDataRatingsTemplate(office, templateIdMask, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo = function (templateId, office, _options) {
        var result = this.api.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    PromiseRatingsApi.prototype.getCwmsDataRatingsTemplateWithTemplateId = function (templateId, office, _options) {
        var result = this.api.getCwmsDataRatingsTemplateWithTemplateId(templateId, office, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, office, begin, end, timezone, method, _options) {
        var result = this.api.getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, method, _options);
        return result.toPromise();
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
    PromiseRatingsApi.prototype.getCwmsDataRatingsWithRatingId = function (ratingId, office, begin, end, timezone, method, _options) {
        var result = this.api.getCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, method, _options);
        return result.toPromise();
    };
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    PromiseRatingsApi.prototype.patchCwmsDataRatingsWithRatingIdWithHttpInfo = function (ratingId, body, storeTemplate, _options) {
        var result = this.api.patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, body, storeTemplate, _options);
        return result.toPromise();
    };
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    PromiseRatingsApi.prototype.patchCwmsDataRatingsWithRatingId = function (ratingId, body, storeTemplate, _options) {
        var result = this.api.patchCwmsDataRatingsWithRatingId(ratingId, body, storeTemplate, _options);
        return result.toPromise();
    };
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatingsWithHttpInfo = function (body, storeTemplate, _options) {
        var result = this.api.postCwmsDataRatingsWithHttpInfo(body, storeTemplate, _options);
        return result.toPromise();
    };
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatings = function (body, storeTemplate, _options) {
        var result = this.api.postCwmsDataRatings(body, storeTemplate, _options);
        return result.toPromise();
    };
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatingsSpecWithHttpInfo = function (ratingSpec, failIfExists, _options) {
        var result = this.api.postCwmsDataRatingsSpecWithHttpInfo(ratingSpec, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatingsSpec = function (ratingSpec, failIfExists, _options) {
        var result = this.api.postCwmsDataRatingsSpec(ratingSpec, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatingsTemplateWithHttpInfo = function (ratingTemplate, failIfExists, _options) {
        var result = this.api.postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseRatingsApi.prototype.postCwmsDataRatingsTemplate = function (ratingTemplate, failIfExists, _options) {
        var result = this.api.postCwmsDataRatingsTemplate(ratingTemplate, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseRatingsApi;
}());
exports.PromiseRatingsApi = PromiseRatingsApi;
var ObservableAPI_16 = require("./ObservableAPI");
var PromiseStatesApi = /** @class */ (function () {
    function PromiseStatesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableStatesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData states
     */
    PromiseStatesApi.prototype.getCwmsDataStatesWithHttpInfo = function (_options) {
        var result = this.api.getCwmsDataStatesWithHttpInfo(_options);
        return result.toPromise();
    };
    /**
     * Get cwmsData states
     */
    PromiseStatesApi.prototype.getCwmsDataStates = function (_options) {
        var result = this.api.getCwmsDataStates(_options);
        return result.toPromise();
    };
    return PromiseStatesApi;
}());
exports.PromiseStatesApi = PromiseStatesApi;
var ObservableAPI_17 = require("./ObservableAPI");
var PromiseTimeSeriesApi = /** @class */ (function () {
    function PromiseTimeSeriesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor);
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
    PromiseTimeSeriesApi.prototype.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo = function (timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options) {
        var result = this.api.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.deleteCwmsDataTimeseriesWithTimeseries = function (timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options) {
        var result = this.api.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.getCwmsDataTimeseriesWithHttpInfo = function (name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var result = this.api.getCwmsDataTimeseriesWithHttpInfo(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.getCwmsDataTimeseries = function (name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options) {
        var result = this.api.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo = function (timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var result = this.api.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.patchCwmsDataTimeseriesWithTimeseries = function (timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var result = this.api.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.postCwmsDataTimeseriesWithHttpInfo = function (timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var result = this.api.postCwmsDataTimeseriesWithHttpInfo(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    PromiseTimeSeriesApi.prototype.postCwmsDataTimeseries = function (timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options) {
        var result = this.api.postCwmsDataTimeseries(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
    };
    return PromiseTimeSeriesApi;
}());
exports.PromiseTimeSeriesApi = PromiseTimeSeriesApi;
var ObservableAPI_18 = require("./ObservableAPI");
var PromiseTimeSeriesCategoriesApi = /** @class */ (function () {
    function PromiseTimeSeriesCategoriesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableTimeSeriesCategoriesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    PromiseTimeSeriesCategoriesApi.prototype.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    PromiseTimeSeriesCategoriesApi.prototype.deleteCwmsDataTimeseriesCategoryWithCategoryId = function (categoryId, office, cascadeDelete, _options) {
        var result = this.api.deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    PromiseTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithHttpInfo = function (office, _options) {
        var result = this.api.getCwmsDataTimeseriesCategoryWithHttpInfo(office, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    PromiseTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategory = function (office, _options) {
        var result = this.api.getCwmsDataTimeseriesCategory(office, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    PromiseTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo = function (categoryId, office, _options) {
        var result = this.api.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    PromiseTimeSeriesCategoriesApi.prototype.getCwmsDataTimeseriesCategoryWithCategoryId = function (categoryId, office, _options) {
        var result = this.api.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeSeriesCategoriesApi.prototype.postCwmsDataTimeseriesCategoryWithHttpInfo = function (timeSeriesCategory, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeSeriesCategoriesApi.prototype.postCwmsDataTimeseriesCategory = function (timeSeriesCategory, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesCategory(timeSeriesCategory, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseTimeSeriesCategoriesApi;
}());
exports.PromiseTimeSeriesCategoriesApi = PromiseTimeSeriesCategoriesApi;
var ObservableAPI_19 = require("./ObservableAPI");
var PromiseTimeSeriesIdentifierApi = /** @class */ (function () {
    function PromiseTimeSeriesIdentifierApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableTimeSeriesIdentifierApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted.
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseTimeSeriesIdentifierApi.prototype.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, office, method, _options) {
        var result = this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted.
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    PromiseTimeSeriesIdentifierApi.prototype.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, office, method, _options) {
        var result = this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    PromiseTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo = function (office, timeseriesIdRegex, page, pageSize, _options) {
        var result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office, timeseriesIdRegex, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    PromiseTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptor = function (office, timeseriesIdRegex, page, pageSize, _options) {
        var result = this.api.getCwmsDataTimeseriesIdentifierDescriptor(office, timeseriesIdRegex, page, pageSize, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    PromiseTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, office, _options) {
        var result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    PromiseTimeSeriesIdentifierApi.prototype.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, office, _options) {
        var result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, _options);
        return result.toPromise();
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
    PromiseTimeSeriesIdentifierApi.prototype.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo = function (timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options) {
        var result = this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);
        return result.toPromise();
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
    PromiseTimeSeriesIdentifierApi.prototype.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId = function (timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options) {
        var result = this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeSeriesIdentifierApi.prototype.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo = function (timeSeriesIdentifierDescriptor, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeSeriesIdentifierApi.prototype.postCwmsDataTimeseriesIdentifierDescriptor = function (timeSeriesIdentifierDescriptor, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseTimeSeriesIdentifierApi;
}());
exports.PromiseTimeSeriesIdentifierApi = PromiseTimeSeriesIdentifierApi;
var ObservableAPI_20 = require("./ObservableAPI");
var PromiseTimeZonesApi = /** @class */ (function () {
    function PromiseTimeZonesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableTimeZonesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseTimeZonesApi.prototype.getCwmsDataTimezonesWithHttpInfo = function (format, _options) {
        var result = this.api.getCwmsDataTimezonesWithHttpInfo(format, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseTimeZonesApi.prototype.getCwmsDataTimezones = function (format, _options) {
        var result = this.api.getCwmsDataTimezones(format, _options);
        return result.toPromise();
    };
    return PromiseTimeZonesApi;
}());
exports.PromiseTimeZonesApi = PromiseTimeZonesApi;
var ObservableAPI_21 = require("./ObservableAPI");
var PromiseTimeseriesGroupsApi = /** @class */ (function () {
    function PromiseTimeseriesGroupsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableTimeseriesGroupsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    PromiseTimeseriesGroupsApi.prototype.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, categoryId, office, _options) {
        var result = this.api.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    PromiseTimeseriesGroupsApi.prototype.deleteCwmsDataTimeseriesGroupWithGroupId = function (groupId, categoryId, office, _options) {
        var result = this.api.deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    PromiseTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithHttpInfo = function (office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options) {
        var result = this.api.getCwmsDataTimeseriesGroupWithHttpInfo(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);
        return result.toPromise();
    };
    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    PromiseTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroup = function (office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options) {
        var result = this.api.getCwmsDataTimeseriesGroup(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    PromiseTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, office, categoryId, _options) {
        var result = this.api.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options);
        return result.toPromise();
    };
    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    PromiseTimeseriesGroupsApi.prototype.getCwmsDataTimeseriesGroupWithGroupId = function (groupId, office, categoryId, _options) {
        var result = this.api.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, _options);
        return result.toPromise();
    };
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    PromiseTimeseriesGroupsApi.prototype.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo = function (groupId, office, timeSeriesGroup, replaceAssignedTs, _options) {
        var result = this.api.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);
        return result.toPromise();
    };
    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    PromiseTimeseriesGroupsApi.prototype.patchCwmsDataTimeseriesGroupWithGroupId = function (groupId, office, timeSeriesGroup, replaceAssignedTs, _options) {
        var result = this.api.patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeseriesGroupsApi.prototype.postCwmsDataTimeseriesGroupWithHttpInfo = function (timeSeriesGroup, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup, failIfExists, _options);
        return result.toPromise();
    };
    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    PromiseTimeseriesGroupsApi.prototype.postCwmsDataTimeseriesGroup = function (timeSeriesGroup, failIfExists, _options) {
        var result = this.api.postCwmsDataTimeseriesGroup(timeSeriesGroup, failIfExists, _options);
        return result.toPromise();
    };
    return PromiseTimeseriesGroupsApi;
}());
exports.PromiseTimeseriesGroupsApi = PromiseTimeseriesGroupsApi;
var ObservableAPI_22 = require("./ObservableAPI");
var PromiseUnitsApi = /** @class */ (function () {
    function PromiseUnitsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableUnitsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseUnitsApi.prototype.getCwmsDataUnitsWithHttpInfo = function (format, _options) {
        var result = this.api.getCwmsDataUnitsWithHttpInfo(format, _options);
        return result.toPromise();
    };
    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    PromiseUnitsApi.prototype.getCwmsDataUnits = function (format, _options) {
        var result = this.api.getCwmsDataUnits(format, _options);
        return result.toPromise();
    };
    return PromiseUnitsApi;
}());
exports.PromiseUnitsApi = PromiseUnitsApi;
