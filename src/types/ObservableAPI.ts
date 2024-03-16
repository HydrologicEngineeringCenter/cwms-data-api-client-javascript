import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AbstractRatingMetadata } from '../models/AbstractRatingMetadata';
import { ApiKey } from '../models/ApiKey';
import { AssignedLocation } from '../models/AssignedLocation';
import { AssignedTimeSeries } from '../models/AssignedTimeSeries';
import { Basin } from '../models/Basin';
import { Blob } from '../models/Blob';
import { Blobs } from '../models/Blobs';
import { Catalog } from '../models/Catalog';
import { CatalogEntry } from '../models/CatalogEntry';
import { CatalogableEndpoint } from '../models/CatalogableEndpoint';
import { CdaError } from '../models/CdaError';
import { Clob } from '../models/Clob';
import { Clobs } from '../models/Clobs';
import { County } from '../models/County';
import { CsvV1Office } from '../models/CsvV1Office';
import { DatabaseLoadMethod } from '../models/DatabaseLoadMethod';
import { DeleteMethod } from '../models/DeleteMethod';
import { ExpressionRating } from '../models/ExpressionRating';
import { IndependentRoundingSpec } from '../models/IndependentRoundingSpec';
import { Location } from '../models/Location';
import { LocationAlias } from '../models/LocationAlias';
import { LocationCatalogEntry } from '../models/LocationCatalogEntry';
import { LocationCategory } from '../models/LocationCategory';
import { LocationGroup } from '../models/LocationGroup';
import { LocationLevel } from '../models/LocationLevel';
import { LocationLevels } from '../models/LocationLevels';
import { Office } from '../models/Office';
import { OfficeCSV } from '../models/OfficeCSV';
import { OfficeFormatV1 } from '../models/OfficeFormatV1';
import { OfficeTabulation } from '../models/OfficeTabulation';
import { OfficesFMT } from '../models/OfficesFMT';
import { Offset } from '../models/Offset';
import { ParameterSpec } from '../models/ParameterSpec';
import { Pool } from '../models/Pool';
import { PoolNameType } from '../models/PoolNameType';
import { Pools } from '../models/Pools';
import { RatingMetadata } from '../models/RatingMetadata';
import { RatingMetadataList } from '../models/RatingMetadataList';
import { RatingSpec } from '../models/RatingSpec';
import { RatingSpecs } from '../models/RatingSpecs';
import { RatingTemplate } from '../models/RatingTemplate';
import { RatingTemplates } from '../models/RatingTemplates';
import { SeasonalValueBean } from '../models/SeasonalValueBean';
import { SpecifiedLevel } from '../models/SpecifiedLevel';
import { State } from '../models/State';
import { StoreRule } from '../models/StoreRule';
import { Stream } from '../models/Stream';
import { StreamLocation } from '../models/StreamLocation';
import { StreamReach } from '../models/StreamReach';
import { TabV1Office } from '../models/TabV1Office';
import { TableRating } from '../models/TableRating';
import { TimeSeries } from '../models/TimeSeries';
import { TimeSeriesCategory } from '../models/TimeSeriesCategory';
import { TimeSeriesColumn } from '../models/TimeSeriesColumn';
import { TimeSeriesExtents } from '../models/TimeSeriesExtents';
import { TimeSeriesGroup } from '../models/TimeSeriesGroup';
import { TimeSeriesIdentifierDescriptor } from '../models/TimeSeriesIdentifierDescriptor';
import { TimeSeriesIdentifierDescriptors } from '../models/TimeSeriesIdentifierDescriptors';
import { TimeSeriesInterval } from '../models/TimeSeriesInterval';
import { TimeSeriesIntervalUnitsInner } from '../models/TimeSeriesIntervalUnitsInner';
import { TimeSeriesIntervalUnitsInnerDuration } from '../models/TimeSeriesIntervalUnitsInnerDuration';
import { TimeSeriesRecord } from '../models/TimeSeriesRecord';
import { TimeSeriesValuesInnerInner } from '../models/TimeSeriesValuesInnerInner';
import { TimeseriesCatalogEntry } from '../models/TimeseriesCatalogEntry';
import { TransitionalRating } from '../models/TransitionalRating';
import { UnitSystem } from '../models/UnitSystem';
import { UsgsStreamRating } from '../models/UsgsStreamRating';
import { VerticalDatumInfo } from '../models/VerticalDatumInfo';
import { VirtualRating } from '../models/VirtualRating';

import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";
export class ObservableAuthorizationApi {
    private requestFactory: AuthorizationApiRequestFactory;
    private responseProcessor: AuthorizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorizationApiRequestFactory,
        responseProcessor?: AuthorizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthorizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthorizationApiResponseProcessor();
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName 
     * @param apiKey 
     */
    public deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName: string, apiKey?: ApiKey, _options?: Configuration): Observable<HttpInfo<ApiKey>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataAuthKeysWithKeyName(keyName, apiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName 
     * @param apiKey 
     */
    public deleteCwmsDataAuthKeysWithKeyName(keyName: string, apiKey?: ApiKey, _options?: Configuration): Observable<ApiKey> {
        return this.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, apiKey, _options).pipe(map((apiResponse: HttpInfo<ApiKey>) => apiResponse.data));
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    public getCwmsDataAuthKeysWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ApiKey>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataAuthKeys(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataAuthKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    public getCwmsDataAuthKeys(_options?: Configuration): Observable<Array<ApiKey>> {
        return this.getCwmsDataAuthKeysWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ApiKey>>) => apiResponse.data));
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    public getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName: string, _options?: Configuration): Observable<HttpInfo<ApiKey>> {
        const requestContextPromise = this.requestFactory.getCwmsDataAuthKeysWithKeyName(keyName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    public getCwmsDataAuthKeysWithKeyName(keyName: string, _options?: Configuration): Observable<ApiKey> {
        return this.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, _options).pipe(map((apiResponse: HttpInfo<ApiKey>) => apiResponse.data));
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey 
     */
    public postCwmsDataAuthKeysWithHttpInfo(apiKey?: ApiKey, _options?: Configuration): Observable<HttpInfo<ApiKey>> {
        const requestContextPromise = this.requestFactory.postCwmsDataAuthKeys(apiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataAuthKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey 
     */
    public postCwmsDataAuthKeys(apiKey?: ApiKey, _options?: Configuration): Observable<ApiKey> {
        return this.postCwmsDataAuthKeysWithHttpInfo(apiKey, _options).pipe(map((apiResponse: HttpInfo<ApiKey>) => apiResponse.data));
    }

}

import { BasinsApiRequestFactory, BasinsApiResponseProcessor} from "../apis/BasinsApi";
export class ObservableBasinsApi {
    private requestFactory: BasinsApiRequestFactory;
    private responseProcessor: BasinsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasinsApiRequestFactory,
        responseProcessor?: BasinsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasinsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasinsApiResponseProcessor();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithHttpInfo(office?: string, unit?: string, _options?: Configuration): Observable<HttpInfo<Basin>> {
        const requestContextPromise = this.requestFactory.getCwmsDataBasins(office, unit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataBasinsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasins(office?: string, unit?: string, _options?: Configuration): Observable<Basin> {
        return this.getCwmsDataBasinsWithHttpInfo(office, unit, _options).pipe(map((apiResponse: HttpInfo<Basin>) => apiResponse.data));
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId 
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId: string, office?: string, unit?: string, _options?: Configuration): Observable<HttpInfo<Basin>> {
        const requestContextPromise = this.requestFactory.getCwmsDataBasinsWithBasinId(basinId, office, unit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataBasinsWithBasinIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId 
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithBasinId(basinId: string, office?: string, unit?: string, _options?: Configuration): Observable<Basin> {
        return this.getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId, office, unit, _options).pipe(map((apiResponse: HttpInfo<Basin>) => apiResponse.data));
    }

}

import { BlobApiRequestFactory, BlobApiResponseProcessor} from "../apis/BlobApi";
export class ObservableBlobApi {
    private requestFactory: BlobApiRequestFactory;
    private responseProcessor: BlobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlobApiRequestFactory,
        responseProcessor?: BlobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlobApiResponseProcessor();
    }

    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    public getCwmsDataBlobsWithHttpInfo(office?: string, page?: string, pageSize?: number, like?: string, _options?: Configuration): Observable<HttpInfo<Blobs>> {
        const requestContextPromise = this.requestFactory.getCwmsDataBlobs(office, page, pageSize, like, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataBlobsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    public getCwmsDataBlobs(office?: string, page?: string, pageSize?: number, like?: string, _options?: Configuration): Observable<Blobs> {
        return this.getCwmsDataBlobsWithHttpInfo(office, page, pageSize, like, _options).pipe(map((apiResponse: HttpInfo<Blobs>) => apiResponse.data));
    }

    /**
     * Get cwmsData blobs with blobId
     * @param blobId 
     * @param office Specifies the owning office.
     */
    public getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId: string, office?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataBlobsWithBlobId(blobId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataBlobsWithBlobIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData blobs with blobId
     * @param blobId 
     * @param office Specifies the owning office.
     */
    public getCwmsDataBlobsWithBlobId(blobId: string, office?: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataBlobsWithHttpInfo(blob: Blob, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataBlobs(blob, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataBlobsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataBlobs(blob: Blob, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataBlobsWithHttpInfo(blob, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";
export class ObservableCatalogApi {
    private requestFactory: CatalogApiRequestFactory;
    private responseProcessor: CatalogApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogApiRequestFactory,
        responseProcessor?: CatalogApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CatalogApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CatalogApiResponseProcessor();
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
    public getCwmsDataCatalogWithDatasetWithHttpInfo(dataset: CatalogableEndpoint, page?: string, pageSize?: number, unitSystem?: UnitSystem, office?: string, like?: string, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, locationCategoryLike?: string, locationGroupLike?: string, boundingOfficeLike?: string, _options?: Configuration): Observable<HttpInfo<Catalog>> {
        const requestContextPromise = this.requestFactory.getCwmsDataCatalogWithDataset(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataCatalogWithDatasetWithHttpInfo(rsp)));
            }));
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
    public getCwmsDataCatalogWithDataset(dataset: CatalogableEndpoint, page?: string, pageSize?: number, unitSystem?: UnitSystem, office?: string, like?: string, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, locationCategoryLike?: string, locationGroupLike?: string, boundingOfficeLike?: string, _options?: Configuration): Observable<Catalog> {
        return this.getCwmsDataCatalogWithDatasetWithHttpInfo(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options).pipe(map((apiResponse: HttpInfo<Catalog>) => apiResponse.data));
    }

}

import { ClobApiRequestFactory, ClobApiResponseProcessor} from "../apis/ClobApi";
export class ObservableClobApi {
    private requestFactory: ClobApiRequestFactory;
    private responseProcessor: ClobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClobApiRequestFactory,
        responseProcessor?: ClobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClobApiResponseProcessor();
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    public deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, office: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataClobsWithClobId(clobId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataClobsWithClobIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    public deleteCwmsDataClobsWithClobId(clobId: string, office: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    public getCwmsDataClobsWithHttpInfo(office?: string, page?: string, pageSize?: number, includeValues?: boolean, like?: string, _options?: Configuration): Observable<HttpInfo<Clobs>> {
        const requestContextPromise = this.requestFactory.getCwmsDataClobs(office, page, pageSize, includeValues, like, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataClobsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    public getCwmsDataClobs(office?: string, page?: string, pageSize?: number, includeValues?: boolean, like?: string, _options?: Configuration): Observable<Clobs> {
        return this.getCwmsDataClobsWithHttpInfo(office, page, pageSize, includeValues, like, _options).pipe(map((apiResponse: HttpInfo<Clobs>) => apiResponse.data));
    }

    /**
     * Get cwmsData clobs with clobId
     * @param clobId 
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    public getCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, office?: string, clobId2?: string, _options?: Configuration): Observable<HttpInfo<Clob>> {
        const requestContextPromise = this.requestFactory.getCwmsDataClobsWithClobId(clobId, office, clobId2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataClobsWithClobIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData clobs with clobId
     * @param clobId 
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    public getCwmsDataClobsWithClobId(clobId: string, office?: string, clobId2?: string, _options?: Configuration): Observable<Clob> {
        return this.getCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, clobId2, _options).pipe(map((apiResponse: HttpInfo<Clob>) => apiResponse.data));
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob 
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    public patchCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, clob: Clob, ignoreNulls?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataClobsWithClobId(clobId, clob, ignoreNulls, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataClobsWithClobIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob 
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    public patchCwmsDataClobsWithClobId(clobId: string, clob: Clob, ignoreNulls?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, ignoreNulls, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataClobsWithHttpInfo(clob: Clob, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataClobs(clob, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataClobsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataClobs(clob: Clob, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataClobsWithHttpInfo(clob, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CountiesApiRequestFactory, CountiesApiResponseProcessor} from "../apis/CountiesApi";
export class ObservableCountiesApi {
    private requestFactory: CountiesApiRequestFactory;
    private responseProcessor: CountiesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountiesApiRequestFactory,
        responseProcessor?: CountiesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountiesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountiesApiResponseProcessor();
    }

    /**
     * Get cwmsData counties
     */
    public getCwmsDataCountiesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<County>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataCounties(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataCountiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData counties
     */
    public getCwmsDataCounties(_options?: Configuration): Observable<Array<County>> {
        return this.getCwmsDataCountiesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<County>>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Get cwmsData
     */
    public getCwmsDataWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsData(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData
     */
    public getCwmsData(_options?: Configuration): Observable<void> {
        return this.getCwmsDataWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId 
     */
    public getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLevelsWithLevelIdTimeseries(levelId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId 
     */
    public getCwmsDataLevelsWithLevelIdTimeseries(levelId: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId 
     */
    public getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesRecentWithGroupId(groupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId 
     */
    public getCwmsDataTimeseriesRecentWithGroupId(groupId: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LevelsApiRequestFactory, LevelsApiResponseProcessor} from "../apis/LevelsApi";
export class ObservableLevelsApi {
    private requestFactory: LevelsApiRequestFactory;
    private responseProcessor: LevelsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LevelsApiRequestFactory,
        responseProcessor?: LevelsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LevelsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LevelsApiResponseProcessor();
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
    public deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, cascadeDelete?: boolean, office?: string, effectiveDate?: string, timezone?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, effectiveDate, timezone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(rsp)));
            }));
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
    public deleteCwmsDataLevelsWithLevelId(levelId: string, cascadeDelete?: boolean, office?: string, effectiveDate?: string, timezone?: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, cascadeDelete, office, effectiveDate, timezone, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId: string, office: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId: string, office: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

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
    public getCwmsDataLevelsWithHttpInfo(levelIdMask?: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLevels(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLevelsWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataLevels(levelIdMask?: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<any> {
        return this.getCwmsDataLevelsWithHttpInfo(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param levelId Specifies the requested location level.
     * @param office Specifies the office of the Location Level to be returned
     * @param effectiveDate Specifies the effective date of Location Level to be returned
     * @param timezone Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param unit Desired unit for the values retrieved.
     */
    public getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, office: string, effectiveDate: string, timezone?: string, unit?: string, _options?: Configuration): Observable<HttpInfo<LocationLevel>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, timezone, unit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLevelsWithLevelIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param levelId Specifies the requested location level.
     * @param office Specifies the office of the Location Level to be returned
     * @param effectiveDate Specifies the effective date of Location Level to be returned
     * @param timezone Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param unit Desired unit for the values retrieved.
     */
    public getCwmsDataLevelsWithLevelId(levelId: string, office: string, effectiveDate: string, timezone?: string, unit?: string, _options?: Configuration): Observable<LocationLevel> {
        return this.getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, office, effectiveDate, timezone, unit, _options).pipe(map((apiResponse: HttpInfo<LocationLevel>) => apiResponse.data));
    }

    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    public getCwmsDataSpecifiedLevelsWithHttpInfo(office?: string, templateIdMask?: string, _options?: Configuration): Observable<HttpInfo<SpecifiedLevel>> {
        const requestContextPromise = this.requestFactory.getCwmsDataSpecifiedLevels(office, templateIdMask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataSpecifiedLevelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    public getCwmsDataSpecifiedLevels(office?: string, templateIdMask?: string, _options?: Configuration): Observable<SpecifiedLevel> {
        return this.getCwmsDataSpecifiedLevelsWithHttpInfo(office, templateIdMask, _options).pipe(map((apiResponse: HttpInfo<SpecifiedLevel>) => apiResponse.data));
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel 
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    public patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, locationLevel: LocationLevel, effectiveDate?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataLevelsWithLevelId(levelId, locationLevel, effectiveDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataLevelsWithLevelIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel 
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    public patchCwmsDataLevelsWithLevelId(levelId: string, locationLevel: LocationLevel, effectiveDate?: string, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, locationLevel, effectiveDate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId 
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId: string, specifiedLevelId2: string, office: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId 
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId: string, specifiedLevelId2: string, office: string, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, specifiedLevelId2, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel 
     */
    public postCwmsDataLevelsWithHttpInfo(locationLevel: LocationLevel, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataLevels(locationLevel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataLevelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel 
     */
    public postCwmsDataLevels(locationLevel: LocationLevel, _options?: Configuration): Observable<void> {
        return this.postCwmsDataLevelsWithHttpInfo(locationLevel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel: SpecifiedLevel, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataSpecifiedLevels(specifiedLevel, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataSpecifiedLevelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataSpecifiedLevels(specifiedLevel: SpecifiedLevel, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LocationCategoriesApiRequestFactory, LocationCategoriesApiResponseProcessor} from "../apis/LocationCategoriesApi";
export class ObservableLocationCategoriesApi {
    private requestFactory: LocationCategoriesApiRequestFactory;
    private responseProcessor: LocationCategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationCategoriesApiRequestFactory,
        responseProcessor?: LocationCategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationCategoriesApiResponseProcessor();
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    public deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    public deleteCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    public getCwmsDataLocationCategoryWithHttpInfo(office?: string, _options?: Configuration): Observable<HttpInfo<Array<LocationCategory>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocationCategory(office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    public getCwmsDataLocationCategory(office?: string, _options?: Configuration): Observable<Array<LocationCategory>> {
        return this.getCwmsDataLocationCategoryWithHttpInfo(office, _options).pipe(map((apiResponse: HttpInfo<Array<LocationCategory>>) => apiResponse.data));
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    public getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, _options?: Configuration): Observable<HttpInfo<LocationCategory>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocationCategoryWithCategoryId(categoryId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    public getCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Observable<LocationCategory> {
        return this.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options).pipe(map((apiResponse: HttpInfo<LocationCategory>) => apiResponse.data));
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory 
     */
    public postCwmsDataLocationCategoryWithHttpInfo(locationCategory: LocationCategory, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataLocationCategory(locationCategory, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataLocationCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory 
     */
    public postCwmsDataLocationCategory(locationCategory: LocationCategory, _options?: Configuration): Observable<void> {
        return this.postCwmsDataLocationCategoryWithHttpInfo(locationCategory, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LocationGroupsApiRequestFactory, LocationGroupsApiResponseProcessor} from "../apis/LocationGroupsApi";
export class ObservableLocationGroupsApi {
    private requestFactory: LocationGroupsApiRequestFactory;
    private responseProcessor: LocationGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationGroupsApiRequestFactory,
        responseProcessor?: LocationGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationGroupsApiResponseProcessor();
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    public deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, cascadeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    public deleteCwmsDataLocationGroupWithGroupId(groupId: string, categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, cascadeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    public getCwmsDataLocationGroupWithHttpInfo(office?: string, includeAssigned?: boolean, locationCategoryLike?: string, _options?: Configuration): Observable<HttpInfo<Array<LocationGroup>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocationGroup(office, includeAssigned, locationCategoryLike, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    public getCwmsDataLocationGroup(office?: string, includeAssigned?: boolean, locationCategoryLike?: string, _options?: Configuration): Observable<Array<LocationGroup>> {
        return this.getCwmsDataLocationGroupWithHttpInfo(office, includeAssigned, locationCategoryLike, _options).pipe(map((apiResponse: HttpInfo<Array<LocationGroup>>) => apiResponse.data));
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    public getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, office: string, categoryId: string, _options?: Configuration): Observable<HttpInfo<LocationGroup>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    public getCwmsDataLocationGroupWithGroupId(groupId: string, office: string, categoryId: string, _options?: Configuration): Observable<LocationGroup> {
        return this.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options).pipe(map((apiResponse: HttpInfo<LocationGroup>) => apiResponse.data));
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup 
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    public patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, office: string, locationGroup: LocationGroup, replaceAssignedLocs?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, replaceAssignedLocs, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup 
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    public patchCwmsDataLocationGroupWithGroupId(groupId: string, office: string, locationGroup: LocationGroup, replaceAssignedLocs?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, locationGroup, replaceAssignedLocs, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup 
     */
    public postCwmsDataLocationGroupWithHttpInfo(locationGroup: LocationGroup, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataLocationGroup(locationGroup, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataLocationGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup 
     */
    public postCwmsDataLocationGroup(locationGroup: LocationGroup, _options?: Configuration): Observable<void> {
        return this.postCwmsDataLocationGroupWithHttpInfo(locationGroup, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";
export class ObservableLocationsApi {
    private requestFactory: LocationsApiRequestFactory;
    private responseProcessor: LocationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationsApiResponseProcessor();
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    public deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, office?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataLocationsWithLocationId(locationId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    public deleteCwmsDataLocationsWithLocationId(locationId: string, office?: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param names Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     */
    public getCwmsDataLocationsWithHttpInfo(names?: string, office?: string, unit?: string, datum?: string, format?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocations(names, office, unit, datum, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param names Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     */
    public getCwmsDataLocations(names?: string, office?: string, unit?: string, datum?: string, format?: string, _options?: Configuration): Observable<any> {
        return this.getCwmsDataLocationsWithHttpInfo(names, office, unit, datum, format, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    public getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, office: string, unit?: string, _options?: Configuration): Observable<HttpInfo<Location>> {
        const requestContextPromise = this.requestFactory.getCwmsDataLocationsWithLocationId(locationId, office, unit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataLocationsWithLocationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    public getCwmsDataLocationsWithLocationId(locationId: string, office: string, unit?: string, _options?: Configuration): Observable<Location> {
        return this.getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, unit, _options).pipe(map((apiResponse: HttpInfo<Location>) => apiResponse.data));
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId 
     * @param location 
     */
    public patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, location: Location, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataLocationsWithLocationId(locationId, location, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataLocationsWithLocationIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId 
     * @param location 
     */
    public patchCwmsDataLocationsWithLocationId(locationId: string, location: Location, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location 
     */
    public postCwmsDataLocationsWithHttpInfo(location: Location, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataLocations(location, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location 
     */
    public postCwmsDataLocations(location: Location, _options?: Configuration): Observable<void> {
        return this.postCwmsDataLocationsWithHttpInfo(location, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OfficesApiRequestFactory, OfficesApiResponseProcessor} from "../apis/OfficesApi";
export class ObservableOfficesApi {
    private requestFactory: OfficesApiRequestFactory;
    private responseProcessor: OfficesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OfficesApiRequestFactory,
        responseProcessor?: OfficesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OfficesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OfficesApiResponseProcessor();
    }

    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    public getCwmsDataOfficesWithHttpInfo(format?: string, hasData?: boolean, _options?: Configuration): Observable<HttpInfo<OfficeFormatV1>> {
        const requestContextPromise = this.requestFactory.getCwmsDataOffices(format, hasData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataOfficesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    public getCwmsDataOffices(format?: string, hasData?: boolean, _options?: Configuration): Observable<OfficeFormatV1> {
        return this.getCwmsDataOfficesWithHttpInfo(format, hasData, _options).pipe(map((apiResponse: HttpInfo<OfficeFormatV1>) => apiResponse.data));
    }

    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataOfficesWithOfficeWithHttpInfo(office: string, format?: string, _options?: Configuration): Observable<HttpInfo<OfficeFormatV1>> {
        const requestContextPromise = this.requestFactory.getCwmsDataOfficesWithOffice(office, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataOfficesWithOfficeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataOfficesWithOffice(office: string, format?: string, _options?: Configuration): Observable<OfficeFormatV1> {
        return this.getCwmsDataOfficesWithOfficeWithHttpInfo(office, format, _options).pipe(map((apiResponse: HttpInfo<OfficeFormatV1>) => apiResponse.data));
    }

}

import { ParametersApiRequestFactory, ParametersApiResponseProcessor} from "../apis/ParametersApi";
export class ObservableParametersApi {
    private requestFactory: ParametersApiRequestFactory;
    private responseProcessor: ParametersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ParametersApiRequestFactory,
        responseProcessor?: ParametersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ParametersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ParametersApiResponseProcessor();
    }

    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataParametersWithHttpInfo(format?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataParameters(format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataParametersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataParameters(format?: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataParametersWithHttpInfo(format, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PoolsApiRequestFactory, PoolsApiResponseProcessor} from "../apis/PoolsApi";
export class ObservablePoolsApi {
    private requestFactory: PoolsApiRequestFactory;
    private responseProcessor: PoolsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PoolsApiRequestFactory,
        responseProcessor?: PoolsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PoolsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PoolsApiResponseProcessor();
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
    public getCwmsDataPoolsWithHttpInfo(office?: string, idMask?: string, nameMask?: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Pools>> {
        const requestContextPromise = this.requestFactory.getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataPoolsWithHttpInfo(rsp)));
            }));
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
    public getCwmsDataPools(office?: string, idMask?: string, nameMask?: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<Pools> {
        return this.getCwmsDataPoolsWithHttpInfo(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Pools>) => apiResponse.data));
    }

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
    public getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId: string, office: string, projectId: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, _options?: Configuration): Observable<HttpInfo<Pool>> {
        const requestContextPromise = this.requestFactory.getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataPoolsWithPoolIdWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataPoolsWithPoolId(poolId: string, office: string, projectId: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, _options?: Configuration): Observable<Pool> {
        return this.getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options).pipe(map((apiResponse: HttpInfo<Pool>) => apiResponse.data));
    }

}

import { RatingsApiRequestFactory, RatingsApiResponseProcessor} from "../apis/RatingsApi";
export class ObservableRatingsApi {
    private requestFactory: RatingsApiRequestFactory;
    private responseProcessor: RatingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RatingsApiRequestFactory,
        responseProcessor?: RatingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RatingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RatingsApiResponseProcessor();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsSpecWithRatingId(ratingId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, method, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsTemplateWithTemplateId(templateId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, method, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted. 
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    public deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, office: string, begin: string, end: string, timezone?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted. 
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    public deleteCwmsDataRatingsWithRatingId(ratingId: string, office: string, begin: string, end: string, timezone?: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

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
    public getCwmsDataRatingsWithHttpInfo(name?: string, office?: string, unit?: string, datum?: string, at?: string, end?: string, timezone?: string, format?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatings(name, office, unit, datum, at, end, timezone, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataRatings(name?: string, office?: string, unit?: string, datum?: string, at?: string, end?: string, timezone?: string, format?: string, _options?: Configuration): Observable<any> {
        return this.getCwmsDataRatingsWithHttpInfo(name, office, unit, datum, at, end, timezone, format, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

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
    public getCwmsDataRatingsMetadataWithHttpInfo(office?: string, ratingIdMask?: string, start?: string, end?: string, timezone?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<RatingMetadataList>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsMetadata(office, ratingIdMask, start, end, timezone, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsMetadataWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataRatingsMetadata(office?: string, ratingIdMask?: string, start?: string, end?: string, timezone?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<RatingMetadataList> {
        return this.getCwmsDataRatingsMetadataWithHttpInfo(office, ratingIdMask, start, end, timezone, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<RatingMetadataList>) => apiResponse.data));
    }

    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsSpecWithHttpInfo(office?: string, ratingIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<RatingSpecs>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsSpec(office, ratingIdMask, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsSpecWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsSpec(office?: string, ratingIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<RatingSpecs> {
        return this.getCwmsDataRatingsSpecWithHttpInfo(office, ratingIdMask, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<RatingSpecs>) => apiResponse.data));
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId: string, office: string, _options?: Configuration): Observable<HttpInfo<RatingSpec>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsSpecWithRatingId(ratingId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsSpecWithRatingId(ratingId: string, office: string, _options?: Configuration): Observable<RatingSpec> {
        return this.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, _options).pipe(map((apiResponse: HttpInfo<RatingSpec>) => apiResponse.data));
    }

    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsTemplateWithHttpInfo(office?: string, templateIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<RatingTemplates>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsTemplate(office, templateIdMask, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsTemplate(office?: string, templateIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<RatingTemplates> {
        return this.getCwmsDataRatingsTemplateWithHttpInfo(office, templateIdMask, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<RatingTemplates>) => apiResponse.data));
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId: string, office: string, _options?: Configuration): Observable<HttpInfo<Array<RatingTemplate>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsTemplateWithTemplateId(templateId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsTemplateWithTemplateId(templateId: string, office: string, _options?: Configuration): Observable<Array<RatingTemplate>> {
        return this.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, _options).pipe(map((apiResponse: HttpInfo<Array<RatingTemplate>>) => apiResponse.data));
    }

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
    public getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, office: string, begin?: string, end?: string, timezone?: string, method?: DatabaseLoadMethod, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.getCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, method, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataRatingsWithRatingIdWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataRatingsWithRatingId(ratingId: string, office: string, begin?: string, end?: string, timezone?: string, method?: DatabaseLoadMethod, _options?: Configuration): Observable<any> {
        return this.getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, method, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId 
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, body: any, storeTemplate?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataRatingsWithRatingId(ratingId, body, storeTemplate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataRatingsWithRatingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId 
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public patchCwmsDataRatingsWithRatingId(ratingId: string, body: any, storeTemplate?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, body, storeTemplate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public postCwmsDataRatingsWithHttpInfo(body: any, storeTemplate?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataRatings(body, storeTemplate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataRatingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public postCwmsDataRatings(body: any, storeTemplate?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataRatingsWithHttpInfo(body, storeTemplate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsSpecWithHttpInfo(ratingSpec: RatingSpec, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataRatingsSpec(ratingSpec, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataRatingsSpecWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsSpec(ratingSpec: RatingSpec, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataRatingsSpecWithHttpInfo(ratingSpec, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate: RatingTemplate, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataRatingsTemplate(ratingTemplate, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataRatingsTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsTemplate(ratingTemplate: RatingTemplate, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi";
export class ObservableStatesApi {
    private requestFactory: StatesApiRequestFactory;
    private responseProcessor: StatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatesApiRequestFactory,
        responseProcessor?: StatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatesApiResponseProcessor();
    }

    /**
     * Get cwmsData states
     */
    public getCwmsDataStatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<State>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataStates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataStatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData states
     */
    public getCwmsDataStates(_options?: Configuration): Observable<Array<State>> {
        return this.getCwmsDataStatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<State>>) => apiResponse.data));
    }

}

import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";
export class ObservableTimeSeriesApi {
    private requestFactory: TimeSeriesApiRequestFactory;
    private responseProcessor: TimeSeriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesApiRequestFactory,
        responseProcessor?: TimeSeriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesApiResponseProcessor();
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
    public deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries: string, office: string, begin: string, end: string, timezone?: string, versionDate?: string, startTimeInclusive?: boolean, endTimeInclusive?: boolean, maxVersion?: boolean, overrideProtection?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(rsp)));
            }));
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
    public deleteCwmsDataTimeseriesWithTimeseries(timeseries: string, office: string, begin: string, end: string, timezone?: string, versionDate?: string, startTimeInclusive?: boolean, endTimeInclusive?: boolean, maxVersion?: boolean, overrideProtection?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

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
    public getCwmsDataTimeseriesWithHttpInfo(name: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<TimeSeries>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesWithHttpInfo(rsp)));
            }));
    }

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
    public getCwmsDataTimeseries(name: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<TimeSeries> {
        return this.getCwmsDataTimeseriesWithHttpInfo(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<TimeSeries>) => apiResponse.data));
    }

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
    public patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries: string, timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(rsp)));
            }));
    }

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
    public patchCwmsDataTimeseriesWithTimeseries(timeseries: string, timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

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
    public postCwmsDataTimeseriesWithHttpInfo(timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataTimeseries(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataTimeseriesWithHttpInfo(rsp)));
            }));
    }

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
    public postCwmsDataTimeseries(timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataTimeseriesWithHttpInfo(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TimeSeriesCategoriesApiRequestFactory, TimeSeriesCategoriesApiResponseProcessor} from "../apis/TimeSeriesCategoriesApi";
export class ObservableTimeSeriesCategoriesApi {
    private requestFactory: TimeSeriesCategoriesApiRequestFactory;
    private responseProcessor: TimeSeriesCategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesCategoriesApiRequestFactory,
        responseProcessor?: TimeSeriesCategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesCategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesCategoriesApiResponseProcessor();
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    public getCwmsDataTimeseriesCategoryWithHttpInfo(office?: string, _options?: Configuration): Observable<HttpInfo<Array<TimeSeriesCategory>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesCategory(office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    public getCwmsDataTimeseriesCategory(office?: string, _options?: Configuration): Observable<Array<TimeSeriesCategory>> {
        return this.getCwmsDataTimeseriesCategoryWithHttpInfo(office, _options).pipe(map((apiResponse: HttpInfo<Array<TimeSeriesCategory>>) => apiResponse.data));
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, _options?: Configuration): Observable<HttpInfo<TimeSeriesCategory>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Observable<TimeSeriesCategory> {
        return this.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesCategory>) => apiResponse.data));
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory: TimeSeriesCategory, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataTimeseriesCategory(timeSeriesCategory, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataTimeseriesCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesCategory(timeSeriesCategory: TimeSeriesCategory, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TimeSeriesIdentifierApiRequestFactory, TimeSeriesIdentifierApiResponseProcessor} from "../apis/TimeSeriesIdentifierApi";
export class ObservableTimeSeriesIdentifierApi {
    private requestFactory: TimeSeriesIdentifierApiRequestFactory;
    private responseProcessor: TimeSeriesIdentifierApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesIdentifierApiRequestFactory,
        responseProcessor?: TimeSeriesIdentifierApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSeriesIdentifierApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSeriesIdentifierApiResponseProcessor();
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, method: DeleteMethod, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office?: string, timeseriesIdRegex?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<HttpInfo<TimeSeriesIdentifierDescriptors>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesIdentifierDescriptor(office, timeseriesIdRegex, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    public getCwmsDataTimeseriesIdentifierDescriptor(office?: string, timeseriesIdRegex?: string, page?: string, pageSize?: number, _options?: Configuration): Observable<TimeSeriesIdentifierDescriptors> {
        return this.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office, timeseriesIdRegex, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesIdentifierDescriptors>) => apiResponse.data));
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, office: string, _options?: Configuration): Observable<HttpInfo<TimeSeriesIdentifierDescriptor>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, _options?: Configuration): Observable<TimeSeriesIdentifierDescriptor> {
        return this.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesIdentifierDescriptor>) => apiResponse.data));
    }

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
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, timeseriesId2: string, office: string, intervalOffset?: number, snapForward?: number, snapBackward?: number, active?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(rsp)));
            }));
    }

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
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, timeseriesId2: string, office: string, intervalOffset?: number, snapForward?: number, snapBackward?: number, active?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TimeZonesApiRequestFactory, TimeZonesApiResponseProcessor} from "../apis/TimeZonesApi";
export class ObservableTimeZonesApi {
    private requestFactory: TimeZonesApiRequestFactory;
    private responseProcessor: TimeZonesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeZonesApiRequestFactory,
        responseProcessor?: TimeZonesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeZonesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeZonesApiResponseProcessor();
    }

    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataTimezonesWithHttpInfo(format?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimezones(format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimezonesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataTimezones(format?: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataTimezonesWithHttpInfo(format, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TimeseriesGroupsApiRequestFactory, TimeseriesGroupsApiResponseProcessor} from "../apis/TimeseriesGroupsApi";
export class ObservableTimeseriesGroupsApi {
    private requestFactory: TimeseriesGroupsApiRequestFactory;
    private responseProcessor: TimeseriesGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeseriesGroupsApiRequestFactory,
        responseProcessor?: TimeseriesGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeseriesGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeseriesGroupsApiResponseProcessor();
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    public deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, categoryId: string, office: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    public deleteCwmsDataTimeseriesGroupWithGroupId(groupId: string, categoryId: string, office: string, _options?: Configuration): Observable<void> {
        return this.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    public getCwmsDataTimeseriesGroupWithHttpInfo(office?: string, includeAssigned?: boolean, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, _options?: Configuration): Observable<HttpInfo<Array<TimeSeriesGroup>>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesGroup(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    public getCwmsDataTimeseriesGroup(office?: string, includeAssigned?: boolean, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, _options?: Configuration): Observable<Array<TimeSeriesGroup>> {
        return this.getCwmsDataTimeseriesGroupWithHttpInfo(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options).pipe(map((apiResponse: HttpInfo<Array<TimeSeriesGroup>>) => apiResponse.data));
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, office: string, categoryId: string, _options?: Configuration): Observable<HttpInfo<TimeSeriesGroup>> {
        const requestContextPromise = this.requestFactory.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, categoryId: string, _options?: Configuration): Observable<TimeSeriesGroup> {
        return this.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options).pipe(map((apiResponse: HttpInfo<TimeSeriesGroup>) => apiResponse.data));
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup 
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    public patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, office: string, timeSeriesGroup: TimeSeriesGroup, replaceAssignedTs?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup 
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    public patchCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, timeSeriesGroup: TimeSeriesGroup, replaceAssignedTs?: boolean, _options?: Configuration): Observable<void> {
        return this.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, timeSeriesGroup, replaceAssignedTs, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup: TimeSeriesGroup, failIfExists?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postCwmsDataTimeseriesGroup(timeSeriesGroup, failIfExists, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCwmsDataTimeseriesGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesGroup(timeSeriesGroup: TimeSeriesGroup, failIfExists?: boolean, _options?: Configuration): Observable<void> {
        return this.postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup, failIfExists, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UnitsApiRequestFactory, UnitsApiResponseProcessor} from "../apis/UnitsApi";
export class ObservableUnitsApi {
    private requestFactory: UnitsApiRequestFactory;
    private responseProcessor: UnitsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UnitsApiRequestFactory,
        responseProcessor?: UnitsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UnitsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UnitsApiResponseProcessor();
    }

    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataUnitsWithHttpInfo(format?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCwmsDataUnits(format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCwmsDataUnitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataUnits(format?: string, _options?: Configuration): Observable<void> {
        return this.getCwmsDataUnitsWithHttpInfo(format, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
