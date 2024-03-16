import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableAuthorizationApi } from './ObservableAPI';

import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";
export class PromiseAuthorizationApi {
    private api: ObservableAuthorizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthorizationApiRequestFactory,
        responseProcessor?: AuthorizationApiResponseProcessor
    ) {
        this.api = new ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName 
     * @param apiKey 
     */
    public deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName: string, apiKey?: ApiKey, _options?: Configuration): Promise<HttpInfo<ApiKey>> {
        const result = this.api.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, apiKey, _options);
        return result.toPromise();
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param keyName 
     * @param apiKey 
     */
    public deleteCwmsDataAuthKeysWithKeyName(keyName: string, apiKey?: ApiKey, _options?: Configuration): Promise<ApiKey> {
        const result = this.api.deleteCwmsDataAuthKeysWithKeyName(keyName, apiKey, _options);
        return result.toPromise();
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    public getCwmsDataAuthKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ApiKey>>> {
        const result = this.api.getCwmsDataAuthKeysWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     */
    public getCwmsDataAuthKeys(_options?: Configuration): Promise<Array<ApiKey>> {
        const result = this.api.getCwmsDataAuthKeys(_options);
        return result.toPromise();
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    public getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName: string, _options?: Configuration): Promise<HttpInfo<ApiKey>> {
        const result = this.api.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, _options);
        return result.toPromise();
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     */
    public getCwmsDataAuthKeysWithKeyName(keyName: string, _options?: Configuration): Promise<ApiKey> {
        const result = this.api.getCwmsDataAuthKeysWithKeyName(keyName, _options);
        return result.toPromise();
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey 
     */
    public postCwmsDataAuthKeysWithHttpInfo(apiKey?: ApiKey, _options?: Configuration): Promise<HttpInfo<ApiKey>> {
        const result = this.api.postCwmsDataAuthKeysWithHttpInfo(apiKey, _options);
        return result.toPromise();
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param apiKey 
     */
    public postCwmsDataAuthKeys(apiKey?: ApiKey, _options?: Configuration): Promise<ApiKey> {
        const result = this.api.postCwmsDataAuthKeys(apiKey, _options);
        return result.toPromise();
    }


}



import { ObservableBasinsApi } from './ObservableAPI';

import { BasinsApiRequestFactory, BasinsApiResponseProcessor} from "../apis/BasinsApi";
export class PromiseBasinsApi {
    private api: ObservableBasinsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasinsApiRequestFactory,
        responseProcessor?: BasinsApiResponseProcessor
    ) {
        this.api = new ObservableBasinsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithHttpInfo(office?: string, unit?: string, _options?: Configuration): Promise<HttpInfo<Basin>> {
        const result = this.api.getCwmsDataBasinsWithHttpInfo(office, unit, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasins(office?: string, unit?: string, _options?: Configuration): Promise<Basin> {
        const result = this.api.getCwmsDataBasins(office, unit, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId 
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId: string, office?: string, unit?: string, _options?: Configuration): Promise<HttpInfo<Basin>> {
        const result = this.api.getCwmsDataBasinsWithBasinIdWithHttpInfo(basinId, office, unit, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param basinId 
     * @param office Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     */
    public getCwmsDataBasinsWithBasinId(basinId: string, office?: string, unit?: string, _options?: Configuration): Promise<Basin> {
        const result = this.api.getCwmsDataBasinsWithBasinId(basinId, office, unit, _options);
        return result.toPromise();
    }


}



import { ObservableBlobApi } from './ObservableAPI';

import { BlobApiRequestFactory, BlobApiResponseProcessor} from "../apis/BlobApi";
export class PromiseBlobApi {
    private api: ObservableBlobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlobApiRequestFactory,
        responseProcessor?: BlobApiResponseProcessor
    ) {
        this.api = new ObservableBlobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    public getCwmsDataBlobsWithHttpInfo(office?: string, page?: string, pageSize?: number, like?: string, _options?: Configuration): Promise<HttpInfo<Blobs>> {
        const result = this.api.getCwmsDataBlobsWithHttpInfo(office, page, pageSize, like, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    public getCwmsDataBlobs(office?: string, page?: string, pageSize?: number, like?: string, _options?: Configuration): Promise<Blobs> {
        const result = this.api.getCwmsDataBlobs(office, page, pageSize, like, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData blobs with blobId
     * @param blobId 
     * @param office Specifies the owning office.
     */
    public getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId: string, office?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataBlobsWithBlobIdWithHttpInfo(blobId, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData blobs with blobId
     * @param blobId 
     * @param office Specifies the owning office.
     */
    public getCwmsDataBlobsWithBlobId(blobId: string, office?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataBlobsWithBlobId(blobId, office, _options);
        return result.toPromise();
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataBlobsWithHttpInfo(blob: Blob, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataBlobsWithHttpInfo(blob, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param blob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataBlobs(blob: Blob, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataBlobs(blob, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableCatalogApi } from './ObservableAPI';

import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";
export class PromiseCatalogApi {
    private api: ObservableCatalogApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogApiRequestFactory,
        responseProcessor?: CatalogApiResponseProcessor
    ) {
        this.api = new ObservableCatalogApi(configuration, requestFactory, responseProcessor);
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
    public getCwmsDataCatalogWithDatasetWithHttpInfo(dataset: CatalogableEndpoint, page?: string, pageSize?: number, unitSystem?: UnitSystem, office?: string, like?: string, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, locationCategoryLike?: string, locationGroupLike?: string, boundingOfficeLike?: string, _options?: Configuration): Promise<HttpInfo<Catalog>> {
        const result = this.api.getCwmsDataCatalogWithDatasetWithHttpInfo(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);
        return result.toPromise();
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
    public getCwmsDataCatalogWithDataset(dataset: CatalogableEndpoint, page?: string, pageSize?: number, unitSystem?: UnitSystem, office?: string, like?: string, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, locationCategoryLike?: string, locationGroupLike?: string, boundingOfficeLike?: string, _options?: Configuration): Promise<Catalog> {
        const result = this.api.getCwmsDataCatalogWithDataset(dataset, page, pageSize, unitSystem, office, like, timeseriesCategoryLike, timeseriesGroupLike, locationCategoryLike, locationGroupLike, boundingOfficeLike, _options);
        return result.toPromise();
    }


}



import { ObservableClobApi } from './ObservableAPI';

import { ClobApiRequestFactory, ClobApiResponseProcessor} from "../apis/ClobApi";
export class PromiseClobApi {
    private api: ObservableClobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClobApiRequestFactory,
        responseProcessor?: ClobApiResponseProcessor
    ) {
        this.api = new ObservableClobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    public deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, office: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, _options);
        return result.toPromise();
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    public deleteCwmsDataClobsWithClobId(clobId: string, office: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataClobsWithClobId(clobId, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    public getCwmsDataClobsWithHttpInfo(office?: string, page?: string, pageSize?: number, includeValues?: boolean, like?: string, _options?: Configuration): Promise<HttpInfo<Clobs>> {
        const result = this.api.getCwmsDataClobsWithHttpInfo(office, page, pageSize, includeValues, like, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    public getCwmsDataClobs(office?: string, page?: string, pageSize?: number, includeValues?: boolean, like?: string, _options?: Configuration): Promise<Clobs> {
        const result = this.api.getCwmsDataClobs(office, page, pageSize, includeValues, like, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData clobs with clobId
     * @param clobId 
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    public getCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, office?: string, clobId2?: string, _options?: Configuration): Promise<HttpInfo<Clob>> {
        const result = this.api.getCwmsDataClobsWithClobIdWithHttpInfo(clobId, office, clobId2, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData clobs with clobId
     * @param clobId 
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    public getCwmsDataClobsWithClobId(clobId: string, office?: string, clobId2?: string, _options?: Configuration): Promise<Clob> {
        const result = this.api.getCwmsDataClobsWithClobId(clobId, office, clobId2, _options);
        return result.toPromise();
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob 
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    public patchCwmsDataClobsWithClobIdWithHttpInfo(clobId: string, clob: Clob, ignoreNulls?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, ignoreNulls, _options);
        return result.toPromise();
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob 
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    public patchCwmsDataClobsWithClobId(clobId: string, clob: Clob, ignoreNulls?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataClobsWithClobId(clobId, clob, ignoreNulls, _options);
        return result.toPromise();
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataClobsWithHttpInfo(clob: Clob, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataClobsWithHttpInfo(clob, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param clob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataClobs(clob: Clob, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataClobs(clob, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableCountiesApi } from './ObservableAPI';

import { CountiesApiRequestFactory, CountiesApiResponseProcessor} from "../apis/CountiesApi";
export class PromiseCountiesApi {
    private api: ObservableCountiesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountiesApiRequestFactory,
        responseProcessor?: CountiesApiResponseProcessor
    ) {
        this.api = new ObservableCountiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData counties
     */
    public getCwmsDataCountiesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<County>>> {
        const result = this.api.getCwmsDataCountiesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get cwmsData counties
     */
    public getCwmsDataCounties(_options?: Configuration): Promise<Array<County>> {
        const result = this.api.getCwmsDataCounties(_options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData
     */
    public getCwmsDataWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get cwmsData
     */
    public getCwmsData(_options?: Configuration): Promise<void> {
        const result = this.api.getCwmsData(_options);
        return result.toPromise();
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId 
     */
    public getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(levelId, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param levelId 
     */
    public getCwmsDataLevelsWithLevelIdTimeseries(levelId: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataLevelsWithLevelIdTimeseries(levelId, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId 
     */
    public getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param groupId 
     */
    public getCwmsDataTimeseriesRecentWithGroupId(groupId: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataTimeseriesRecentWithGroupId(groupId, _options);
        return result.toPromise();
    }


}



import { ObservableLevelsApi } from './ObservableAPI';

import { LevelsApiRequestFactory, LevelsApiResponseProcessor} from "../apis/LevelsApi";
export class PromiseLevelsApi {
    private api: ObservableLevelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LevelsApiRequestFactory,
        responseProcessor?: LevelsApiResponseProcessor
    ) {
        this.api = new ObservableLevelsApi(configuration, requestFactory, responseProcessor);
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
    public deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, cascadeDelete?: boolean, office?: string, effectiveDate?: string, timezone?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, cascadeDelete, office, effectiveDate, timezone, _options);
        return result.toPromise();
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
    public deleteCwmsDataLevelsWithLevelId(levelId: string, cascadeDelete?: boolean, office?: string, effectiveDate?: string, timezone?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, effectiveDate, timezone, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId: string, office: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, office, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId The specified level id to be deleted
     * @param office Specifies the owning office of the timeseries identifier to be deleted
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId: string, office: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office, _options);
        return result.toPromise();
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
    public getCwmsDataLevelsWithHttpInfo(levelIdMask?: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.getCwmsDataLevelsWithHttpInfo(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataLevels(levelIdMask?: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<any> {
        const result = this.api.getCwmsDataLevels(levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, office: string, effectiveDate: string, timezone?: string, unit?: string, _options?: Configuration): Promise<HttpInfo<LocationLevel>> {
        const result = this.api.getCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, office, effectiveDate, timezone, unit, _options);
        return result.toPromise();
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
    public getCwmsDataLevelsWithLevelId(levelId: string, office: string, effectiveDate: string, timezone?: string, unit?: string, _options?: Configuration): Promise<LocationLevel> {
        const result = this.api.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, timezone, unit, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    public getCwmsDataSpecifiedLevelsWithHttpInfo(office?: string, templateIdMask?: string, _options?: Configuration): Promise<HttpInfo<SpecifiedLevel>> {
        const result = this.api.getCwmsDataSpecifiedLevelsWithHttpInfo(office, templateIdMask, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData specifiedLevels
     * @param office Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     */
    public getCwmsDataSpecifiedLevels(office?: string, templateIdMask?: string, _options?: Configuration): Promise<SpecifiedLevel> {
        const result = this.api.getCwmsDataSpecifiedLevels(office, templateIdMask, _options);
        return result.toPromise();
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel 
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    public patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId: string, locationLevel: LocationLevel, effectiveDate?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataLevelsWithLevelIdWithHttpInfo(levelId, locationLevel, effectiveDate, _options);
        return result.toPromise();
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param levelId Specifies the location level id of the Location Level to be updated
     * @param locationLevel 
     * @param effectiveDate Specifies the effective date of Location Level that will be updated
     */
    public patchCwmsDataLevelsWithLevelId(levelId: string, locationLevel: LocationLevel, effectiveDate?: string, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataLevelsWithLevelId(levelId, locationLevel, effectiveDate, _options);
        return result.toPromise();
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId 
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId: string, specifiedLevelId2: string, office: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(specifiedLevelId, specifiedLevelId2, office, _options);
        return result.toPromise();
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param specifiedLevelId 
     * @param specifiedLevelId2 The new specified level id.
     * @param office Specifies the owning office of the specified level to be renamed
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId: string, specifiedLevelId2: string, office: string, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office, _options);
        return result.toPromise();
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel 
     */
    public postCwmsDataLevelsWithHttpInfo(locationLevel: LocationLevel, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataLevelsWithHttpInfo(locationLevel, _options);
        return result.toPromise();
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param locationLevel 
     */
    public postCwmsDataLevels(locationLevel: LocationLevel, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataLevels(locationLevel, _options);
        return result.toPromise();
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel: SpecifiedLevel, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataSpecifiedLevelsWithHttpInfo(specifiedLevel, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param specifiedLevel 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataSpecifiedLevels(specifiedLevel: SpecifiedLevel, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataSpecifiedLevels(specifiedLevel, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableLocationCategoriesApi } from './ObservableAPI';

import { LocationCategoriesApiRequestFactory, LocationCategoriesApiResponseProcessor} from "../apis/LocationCategoriesApi";
export class PromiseLocationCategoriesApi {
    private api: ObservableLocationCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationCategoriesApiRequestFactory,
        responseProcessor?: LocationCategoriesApiResponseProcessor
    ) {
        this.api = new ObservableLocationCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    public deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    public deleteCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    public getCwmsDataLocationCategoryWithHttpInfo(office?: string, _options?: Configuration): Promise<HttpInfo<Array<LocationCategory>>> {
        const result = this.api.getCwmsDataLocationCategoryWithHttpInfo(office, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    public getCwmsDataLocationCategory(office?: string, _options?: Configuration): Promise<Array<LocationCategory>> {
        const result = this.api.getCwmsDataLocationCategory(office, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    public getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, _options?: Configuration): Promise<HttpInfo<LocationCategory>> {
        const result = this.api.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    public getCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Promise<LocationCategory> {
        const result = this.api.getCwmsDataLocationCategoryWithCategoryId(categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory 
     */
    public postCwmsDataLocationCategoryWithHttpInfo(locationCategory: LocationCategory, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataLocationCategoryWithHttpInfo(locationCategory, _options);
        return result.toPromise();
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory 
     */
    public postCwmsDataLocationCategory(locationCategory: LocationCategory, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataLocationCategory(locationCategory, _options);
        return result.toPromise();
    }


}



import { ObservableLocationGroupsApi } from './ObservableAPI';

import { LocationGroupsApiRequestFactory, LocationGroupsApiResponseProcessor} from "../apis/LocationGroupsApi";
export class PromiseLocationGroupsApi {
    private api: ObservableLocationGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationGroupsApiRequestFactory,
        responseProcessor?: LocationGroupsApiResponseProcessor
    ) {
        this.api = new ObservableLocationGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    public deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param groupId The location group to be deleted
     * @param categoryId Specifies the location category of the location group to be deleted
     * @param office Specifies the owning office of the location group to be deleted
     * @param cascadeDelete Specifies whether to specifies whether to unassign any location assignments. Default: false
     */
    public deleteCwmsDataLocationGroupWithGroupId(groupId: string, categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    public getCwmsDataLocationGroupWithHttpInfo(office?: string, includeAssigned?: boolean, locationCategoryLike?: string, _options?: Configuration): Promise<HttpInfo<Array<LocationGroup>>> {
        const result = this.api.getCwmsDataLocationGroupWithHttpInfo(office, includeAssigned, locationCategoryLike, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param office Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned locations in the returned location groups. (default: false)
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     */
    public getCwmsDataLocationGroup(office?: string, includeAssigned?: boolean, locationCategoryLike?: string, _options?: Configuration): Promise<Array<LocationGroup>> {
        const result = this.api.getCwmsDataLocationGroup(office, includeAssigned, locationCategoryLike, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    public getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, office: string, categoryId: string, _options?: Configuration): Promise<HttpInfo<LocationGroup>> {
        const result = this.api.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param groupId Specifies the location_group whose data is to be included in the response
     * @param office Specifies the owning office of the location group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the location group whose data is to be included in the response.
     */
    public getCwmsDataLocationGroupWithGroupId(groupId: string, office: string, categoryId: string, _options?: Configuration): Promise<LocationGroup> {
        const result = this.api.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup 
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    public patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId: string, office: string, locationGroup: LocationGroup, replaceAssignedLocs?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(groupId, office, locationGroup, replaceAssignedLocs, _options);
        return result.toPromise();
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the location group to be updated
     * @param locationGroup 
     * @param replaceAssignedLocs Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     */
    public patchCwmsDataLocationGroupWithGroupId(groupId: string, office: string, locationGroup: LocationGroup, replaceAssignedLocs?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, replaceAssignedLocs, _options);
        return result.toPromise();
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup 
     */
    public postCwmsDataLocationGroupWithHttpInfo(locationGroup: LocationGroup, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataLocationGroupWithHttpInfo(locationGroup, _options);
        return result.toPromise();
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param locationGroup 
     */
    public postCwmsDataLocationGroup(locationGroup: LocationGroup, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataLocationGroup(locationGroup, _options);
        return result.toPromise();
    }


}



import { ObservableLocationsApi } from './ObservableAPI';

import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";
export class PromiseLocationsApi {
    private api: ObservableLocationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationsApiRequestFactory,
        responseProcessor?: LocationsApiResponseProcessor
    ) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    public deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, office?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, _options);
        return result.toPromise();
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     */
    public deleteCwmsDataLocationsWithLocationId(locationId: string, office?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataLocationsWithLocationId(locationId, office, _options);
        return result.toPromise();
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
    public getCwmsDataLocationsWithHttpInfo(names?: string, office?: string, unit?: string, datum?: string, format?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.getCwmsDataLocationsWithHttpInfo(names, office, unit, datum, format, _options);
        return result.toPromise();
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
    public getCwmsDataLocations(names?: string, office?: string, unit?: string, datum?: string, format?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getCwmsDataLocations(names, office, unit, datum, format, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    public getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, office: string, unit?: string, _options?: Configuration): Promise<HttpInfo<Location>> {
        const result = this.api.getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, unit, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param locationId 
     * @param office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     */
    public getCwmsDataLocationsWithLocationId(locationId: string, office: string, unit?: string, _options?: Configuration): Promise<Location> {
        const result = this.api.getCwmsDataLocationsWithLocationId(locationId, office, unit, _options);
        return result.toPromise();
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId 
     * @param location 
     */
    public patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId: string, location: Location, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location, _options);
        return result.toPromise();
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param locationId 
     * @param location 
     */
    public patchCwmsDataLocationsWithLocationId(locationId: string, location: Location, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataLocationsWithLocationId(locationId, location, _options);
        return result.toPromise();
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location 
     */
    public postCwmsDataLocationsWithHttpInfo(location: Location, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataLocationsWithHttpInfo(location, _options);
        return result.toPromise();
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param location 
     */
    public postCwmsDataLocations(location: Location, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataLocations(location, _options);
        return result.toPromise();
    }


}



import { ObservableOfficesApi } from './ObservableAPI';

import { OfficesApiRequestFactory, OfficesApiResponseProcessor} from "../apis/OfficesApi";
export class PromiseOfficesApi {
    private api: ObservableOfficesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OfficesApiRequestFactory,
        responseProcessor?: OfficesApiResponseProcessor
    ) {
        this.api = new ObservableOfficesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    public getCwmsDataOfficesWithHttpInfo(format?: string, hasData?: boolean, _options?: Configuration): Promise<HttpInfo<OfficeFormatV1>> {
        const result = this.api.getCwmsDataOfficesWithHttpInfo(format, hasData, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData offices
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param hasData A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     */
    public getCwmsDataOffices(format?: string, hasData?: boolean, _options?: Configuration): Promise<OfficeFormatV1> {
        const result = this.api.getCwmsDataOffices(format, hasData, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataOfficesWithOfficeWithHttpInfo(office: string, format?: string, _options?: Configuration): Promise<HttpInfo<OfficeFormatV1>> {
        const result = this.api.getCwmsDataOfficesWithOfficeWithHttpInfo(office, format, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData offices with office
     * @param office The 3 letter office ID you want more information for
     * @param format (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataOfficesWithOffice(office: string, format?: string, _options?: Configuration): Promise<OfficeFormatV1> {
        const result = this.api.getCwmsDataOfficesWithOffice(office, format, _options);
        return result.toPromise();
    }


}



import { ObservableParametersApi } from './ObservableAPI';

import { ParametersApiRequestFactory, ParametersApiResponseProcessor} from "../apis/ParametersApi";
export class PromiseParametersApi {
    private api: ObservableParametersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ParametersApiRequestFactory,
        responseProcessor?: ParametersApiResponseProcessor
    ) {
        this.api = new ObservableParametersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataParametersWithHttpInfo(format?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataParametersWithHttpInfo(format, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData parameters
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataParameters(format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataParameters(format, _options);
        return result.toPromise();
    }


}



import { ObservablePoolsApi } from './ObservableAPI';

import { PoolsApiRequestFactory, PoolsApiResponseProcessor} from "../apis/PoolsApi";
export class PromisePoolsApi {
    private api: ObservablePoolsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PoolsApiRequestFactory,
        responseProcessor?: PoolsApiResponseProcessor
    ) {
        this.api = new ObservablePoolsApi(configuration, requestFactory, responseProcessor);
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
    public getCwmsDataPoolsWithHttpInfo(office?: string, idMask?: string, nameMask?: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Pools>> {
        const result = this.api.getCwmsDataPoolsWithHttpInfo(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataPools(office?: string, idMask?: string, nameMask?: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<Pools> {
        const result = this.api.getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId: string, office: string, projectId: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, _options?: Configuration): Promise<HttpInfo<Pool>> {
        const result = this.api.getCwmsDataPoolsWithPoolIdWithHttpInfo(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);
        return result.toPromise();
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
    public getCwmsDataPoolsWithPoolId(poolId: string, office: string, projectId: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, _options?: Configuration): Promise<Pool> {
        const result = this.api.getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit, _options);
        return result.toPromise();
    }


}



import { ObservableRatingsApi } from './ObservableAPI';

import { RatingsApiRequestFactory, RatingsApiResponseProcessor} from "../apis/RatingsApi";
export class PromiseRatingsApi {
    private api: ObservableRatingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RatingsApiRequestFactory,
        responseProcessor?: RatingsApiResponseProcessor
    ) {
        this.api = new ObservableRatingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param ratingId The rating-spec-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsSpecWithRatingId(ratingId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param templateId The rating-template-id of the ratings data to be deleted.
     * @param office Specifies the owning office of the ratings to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataRatingsTemplateWithTemplateId(templateId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted. 
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    public deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, office: string, begin: string, end: string, timezone?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, _options);
        return result.toPromise();
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param ratingId The rating-id of the effective dates to be deleted. 
     * @param office Specifies the office of the ratings to be deleted.
     * @param begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @param timezone This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     */
    public deleteCwmsDataRatingsWithRatingId(ratingId: string, office: string, begin: string, end: string, timezone?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, _options);
        return result.toPromise();
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
    public getCwmsDataRatingsWithHttpInfo(name?: string, office?: string, unit?: string, datum?: string, at?: string, end?: string, timezone?: string, format?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.getCwmsDataRatingsWithHttpInfo(name, office, unit, datum, at, end, timezone, format, _options);
        return result.toPromise();
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
    public getCwmsDataRatings(name?: string, office?: string, unit?: string, datum?: string, at?: string, end?: string, timezone?: string, format?: string, _options?: Configuration): Promise<any> {
        const result = this.api.getCwmsDataRatings(name, office, unit, datum, at, end, timezone, format, _options);
        return result.toPromise();
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
    public getCwmsDataRatingsMetadataWithHttpInfo(office?: string, ratingIdMask?: string, start?: string, end?: string, timezone?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<RatingMetadataList>> {
        const result = this.api.getCwmsDataRatingsMetadataWithHttpInfo(office, ratingIdMask, start, end, timezone, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataRatingsMetadata(office?: string, ratingIdMask?: string, start?: string, end?: string, timezone?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<RatingMetadataList> {
        const result = this.api.getCwmsDataRatingsMetadata(office, ratingIdMask, start, end, timezone, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsSpecWithHttpInfo(office?: string, ratingIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<RatingSpecs>> {
        const result = this.api.getCwmsDataRatingsSpecWithHttpInfo(office, ratingIdMask, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings spec
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param ratingIdMask Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsSpec(office?: string, ratingIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<RatingSpecs> {
        const result = this.api.getCwmsDataRatingsSpec(office, ratingIdMask, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId: string, office: string, _options?: Configuration): Promise<HttpInfo<RatingSpec>> {
        const result = this.api.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(ratingId, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsSpecWithRatingId(ratingId: string, office: string, _options?: Configuration): Promise<RatingSpec> {
        const result = this.api.getCwmsDataRatingsSpecWithRatingId(ratingId, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsTemplateWithHttpInfo(office?: string, templateIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<RatingTemplates>> {
        const result = this.api.getCwmsDataRatingsTemplateWithHttpInfo(office, templateIdMask, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings template
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param templateIdMask RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 100.
     */
    public getCwmsDataRatingsTemplate(office?: string, templateIdMask?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<RatingTemplates> {
        const result = this.api.getCwmsDataRatingsTemplate(office, templateIdMask, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId: string, office: string, _options?: Configuration): Promise<HttpInfo<Array<RatingTemplate>>> {
        const result = this.api.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(templateId, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param templateId Specifies the template whose data is to be included in the response
     * @param office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     */
    public getCwmsDataRatingsTemplateWithTemplateId(templateId: string, office: string, _options?: Configuration): Promise<Array<RatingTemplate>> {
        const result = this.api.getCwmsDataRatingsTemplateWithTemplateId(templateId, office, _options);
        return result.toPromise();
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
    public getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, office: string, begin?: string, end?: string, timezone?: string, method?: DatabaseLoadMethod, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.getCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, office, begin, end, timezone, method, _options);
        return result.toPromise();
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
    public getCwmsDataRatingsWithRatingId(ratingId: string, office: string, begin?: string, end?: string, timezone?: string, method?: DatabaseLoadMethod, _options?: Configuration): Promise<any> {
        const result = this.api.getCwmsDataRatingsWithRatingId(ratingId, office, begin, end, timezone, method, _options);
        return result.toPromise();
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId 
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId: string, body: any, storeTemplate?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataRatingsWithRatingIdWithHttpInfo(ratingId, body, storeTemplate, _options);
        return result.toPromise();
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param ratingId 
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public patchCwmsDataRatingsWithRatingId(ratingId: string, body: any, storeTemplate?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataRatingsWithRatingId(ratingId, body, storeTemplate, _options);
        return result.toPromise();
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public postCwmsDataRatingsWithHttpInfo(body: any, storeTemplate?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataRatingsWithHttpInfo(body, storeTemplate, _options);
        return result.toPromise();
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param body 
     * @param storeTemplate Also store updates to the rating template. Default: true
     */
    public postCwmsDataRatings(body: any, storeTemplate?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataRatings(body, storeTemplate, _options);
        return result.toPromise();
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsSpecWithHttpInfo(ratingSpec: RatingSpec, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataRatingsSpecWithHttpInfo(ratingSpec, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param ratingSpec 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsSpec(ratingSpec: RatingSpec, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataRatingsSpec(ratingSpec, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate: RatingTemplate, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataRatingsTemplateWithHttpInfo(ratingTemplate, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param ratingTemplate 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataRatingsTemplate(ratingTemplate: RatingTemplate, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataRatingsTemplate(ratingTemplate, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableStatesApi } from './ObservableAPI';

import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi";
export class PromiseStatesApi {
    private api: ObservableStatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatesApiRequestFactory,
        responseProcessor?: StatesApiResponseProcessor
    ) {
        this.api = new ObservableStatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData states
     */
    public getCwmsDataStatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<State>>> {
        const result = this.api.getCwmsDataStatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get cwmsData states
     */
    public getCwmsDataStates(_options?: Configuration): Promise<Array<State>> {
        const result = this.api.getCwmsDataStates(_options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesApi } from './ObservableAPI';

import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";
export class PromiseTimeSeriesApi {
    private api: ObservableTimeSeriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesApiRequestFactory,
        responseProcessor?: TimeSeriesApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor);
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
    public deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries: string, office: string, begin: string, end: string, timezone?: string, versionDate?: string, startTimeInclusive?: boolean, endTimeInclusive?: boolean, maxVersion?: boolean, overrideProtection?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);
        return result.toPromise();
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
    public deleteCwmsDataTimeseriesWithTimeseries(timeseries: string, office: string, begin: string, end: string, timezone?: string, versionDate?: string, startTimeInclusive?: boolean, endTimeInclusive?: boolean, maxVersion?: boolean, overrideProtection?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, timezone, versionDate, startTimeInclusive, endTimeInclusive, maxVersion, overrideProtection, _options);
        return result.toPromise();
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
    public getCwmsDataTimeseriesWithHttpInfo(name: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        const result = this.api.getCwmsDataTimeseriesWithHttpInfo(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    public getCwmsDataTimeseries(name: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, pageSize, _options);
        return result.toPromise();
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
    public patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries: string, timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    public patchCwmsDataTimeseriesWithTimeseries(timeseries: string, timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    public postCwmsDataTimeseriesWithHttpInfo(timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataTimeseriesWithHttpInfo(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
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
    public postCwmsDataTimeseries(timeSeries: TimeSeries, versionDate?: string, timezone?: string, createAsLrts?: boolean, storeRule?: StoreRule, overrideProtection?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataTimeseries(timeSeries, versionDate, timezone, createAsLrts, storeRule, overrideProtection, _options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesCategoriesApi } from './ObservableAPI';

import { TimeSeriesCategoriesApiRequestFactory, TimeSeriesCategoriesApiResponseProcessor} from "../apis/TimeSeriesCategoriesApi";
export class PromiseTimeSeriesCategoriesApi {
    private api: ObservableTimeSeriesCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesCategoriesApiRequestFactory,
        responseProcessor?: TimeSeriesCategoriesApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param categoryId The time series category to be deleted
     * @param office Specifies the owning office of the time series category to be deleted
     * @param cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, cascadeDelete, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    public getCwmsDataTimeseriesCategoryWithHttpInfo(office?: string, _options?: Configuration): Promise<HttpInfo<Array<TimeSeriesCategory>>> {
        const result = this.api.getCwmsDataTimeseriesCategoryWithHttpInfo(office, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     */
    public getCwmsDataTimeseriesCategory(office?: string, _options?: Configuration): Promise<Array<TimeSeriesCategory>> {
        const result = this.api.getCwmsDataTimeseriesCategory(office, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId: string, office: string, _options?: Configuration): Promise<HttpInfo<TimeSeriesCategory>> {
        const result = this.api.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Promise<TimeSeriesCategory> {
        const result = this.api.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory: TimeSeriesCategory, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param timeSeriesCategory 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesCategory(timeSeriesCategory: TimeSeriesCategory, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataTimeseriesCategory(timeSeriesCategory, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesIdentifierApi } from './ObservableAPI';

import { TimeSeriesIdentifierApiRequestFactory, TimeSeriesIdentifierApiResponseProcessor} from "../apis/TimeSeriesIdentifierApi";
export class PromiseTimeSeriesIdentifierApi {
    private api: ObservableTimeSeriesIdentifierApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesIdentifierApiRequestFactory,
        responseProcessor?: TimeSeriesIdentifierApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesIdentifierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office?: string, timeseriesIdRegex?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<HttpInfo<TimeSeriesIdentifierDescriptors>> {
        const result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(office, timeseriesIdRegex, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    public getCwmsDataTimeseriesIdentifierDescriptor(office?: string, timeseriesIdRegex?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<TimeSeriesIdentifierDescriptors> {
        const result = this.api.getCwmsDataTimeseriesIdentifierDescriptor(office, timeseriesIdRegex, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, office: string, _options?: Configuration): Promise<HttpInfo<TimeSeriesIdentifierDescriptor>> {
        const result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, _options?: Configuration): Promise<TimeSeriesIdentifierDescriptor> {
        const result = this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, _options);
        return result.toPromise();
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
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId: string, timeseriesId2: string, office: string, intervalOffset?: number, snapForward?: number, snapBackward?: number, active?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);
        return result.toPromise();
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
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, timeseriesId2: string, office: string, intervalOffset?: number, snapForward?: number, snapBackward?: number, active?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, intervalOffset, snapForward, snapBackward, active, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableTimeZonesApi } from './ObservableAPI';

import { TimeZonesApiRequestFactory, TimeZonesApiResponseProcessor} from "../apis/TimeZonesApi";
export class PromiseTimeZonesApi {
    private api: ObservableTimeZonesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeZonesApiRequestFactory,
        responseProcessor?: TimeZonesApiResponseProcessor
    ) {
        this.api = new ObservableTimeZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataTimezonesWithHttpInfo(format?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataTimezonesWithHttpInfo(format, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData timezones
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataTimezones(format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataTimezones(format, _options);
        return result.toPromise();
    }


}



import { ObservableTimeseriesGroupsApi } from './ObservableAPI';

import { TimeseriesGroupsApiRequestFactory, TimeseriesGroupsApiResponseProcessor} from "../apis/TimeseriesGroupsApi";
export class PromiseTimeseriesGroupsApi {
    private api: ObservableTimeseriesGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeseriesGroupsApiRequestFactory,
        responseProcessor?: TimeseriesGroupsApiResponseProcessor
    ) {
        this.api = new ObservableTimeseriesGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    public deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, categoryId: string, office: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    public deleteCwmsDataTimeseriesGroupWithGroupId(groupId: string, categoryId: string, office: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    public getCwmsDataTimeseriesGroupWithHttpInfo(office?: string, includeAssigned?: boolean, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, _options?: Configuration): Promise<HttpInfo<Array<TimeSeriesGroup>>> {
        const result = this.api.getCwmsDataTimeseriesGroupWithHttpInfo(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);
        return result.toPromise();
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    public getCwmsDataTimeseriesGroup(office?: string, includeAssigned?: boolean, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, _options?: Configuration): Promise<Array<TimeSeriesGroup>> {
        const result = this.api.getCwmsDataTimeseriesGroup(office, includeAssigned, timeseriesCategoryLike, timeseriesGroupLike, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, office: string, categoryId: string, _options?: Configuration): Promise<HttpInfo<TimeSeriesGroup>> {
        const result = this.api.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    public getCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, categoryId: string, _options?: Configuration): Promise<TimeSeriesGroup> {
        const result = this.api.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup 
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    public patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId: string, office: string, timeSeriesGroup: TimeSeriesGroup, replaceAssignedTs?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);
        return result.toPromise();
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup 
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    public patchCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, timeSeriesGroup: TimeSeriesGroup, replaceAssignedTs?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, replaceAssignedTs, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup: TimeSeriesGroup, failIfExists?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postCwmsDataTimeseriesGroupWithHttpInfo(timeSeriesGroup, failIfExists, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public postCwmsDataTimeseriesGroup(timeSeriesGroup: TimeSeriesGroup, failIfExists?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataTimeseriesGroup(timeSeriesGroup, failIfExists, _options);
        return result.toPromise();
    }


}



import { ObservableUnitsApi } from './ObservableAPI';

import { UnitsApiRequestFactory, UnitsApiResponseProcessor} from "../apis/UnitsApi";
export class PromiseUnitsApi {
    private api: ObservableUnitsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UnitsApiRequestFactory,
        responseProcessor?: UnitsApiResponseProcessor
    ) {
        this.api = new ObservableUnitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataUnitsWithHttpInfo(format?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getCwmsDataUnitsWithHttpInfo(format, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData units
     * @param format Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     */
    public getCwmsDataUnits(format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataUnits(format, _options);
        return result.toPromise();
    }


}



