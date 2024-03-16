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

import { ObservableAuthorizationApi } from "./ObservableAPI";
import { AuthorizationApiRequestFactory, AuthorizationApiResponseProcessor} from "../apis/AuthorizationApi";

export interface AuthorizationApiDeleteCwmsDataAuthKeysWithKeyNameRequest {
    /**
     * 
     * @type string
     * @memberof AuthorizationApideleteCwmsDataAuthKeysWithKeyName
     */
    keyName: string
    /**
     * 
     * @type ApiKey
     * @memberof AuthorizationApideleteCwmsDataAuthKeysWithKeyName
     */
    apiKey?: ApiKey
}

export interface AuthorizationApiGetCwmsDataAuthKeysRequest {
}

export interface AuthorizationApiGetCwmsDataAuthKeysWithKeyNameRequest {
    /**
     * Name of the specific key to get more information for. NOTE: Case-sensitive.
     * @type string
     * @memberof AuthorizationApigetCwmsDataAuthKeysWithKeyName
     */
    keyName: string
}

export interface AuthorizationApiPostCwmsDataAuthKeysRequest {
    /**
     * 
     * @type ApiKey
     * @memberof AuthorizationApipostCwmsDataAuthKeys
     */
    apiKey?: ApiKey
}

export class ObjectAuthorizationApi {
    private api: ObservableAuthorizationApi

    public constructor(configuration: Configuration, requestFactory?: AuthorizationApiRequestFactory, responseProcessor?: AuthorizationApiResponseProcessor) {
        this.api = new ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param param the request object
     */
    public deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(param: AuthorizationApiDeleteCwmsDataAuthKeysWithKeyNameRequest, options?: Configuration): Promise<HttpInfo<ApiKey>> {
        return this.api.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(param.keyName, param.apiKey,  options).toPromise();
    }

    /**
     * Delete API key for a user
     * Delete cwmsData auth keys with keyName
     * @param param the request object
     */
    public deleteCwmsDataAuthKeysWithKeyName(param: AuthorizationApiDeleteCwmsDataAuthKeysWithKeyNameRequest, options?: Configuration): Promise<ApiKey> {
        return this.api.deleteCwmsDataAuthKeysWithKeyName(param.keyName, param.apiKey,  options).toPromise();
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     * @param param the request object
     */
    public getCwmsDataAuthKeysWithHttpInfo(param: AuthorizationApiGetCwmsDataAuthKeysRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ApiKey>>> {
        return this.api.getCwmsDataAuthKeysWithHttpInfo( options).toPromise();
    }

    /**
     * View all keys for the current user
     * Get cwmsData auth keys
     * @param param the request object
     */
    public getCwmsDataAuthKeys(param: AuthorizationApiGetCwmsDataAuthKeysRequest = {}, options?: Configuration): Promise<Array<ApiKey>> {
        return this.api.getCwmsDataAuthKeys( options).toPromise();
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param param the request object
     */
    public getCwmsDataAuthKeysWithKeyNameWithHttpInfo(param: AuthorizationApiGetCwmsDataAuthKeysWithKeyNameRequest, options?: Configuration): Promise<HttpInfo<ApiKey>> {
        return this.api.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(param.keyName,  options).toPromise();
    }

    /**
     * View specific key
     * Get cwmsData auth keys with keyName
     * @param param the request object
     */
    public getCwmsDataAuthKeysWithKeyName(param: AuthorizationApiGetCwmsDataAuthKeysWithKeyNameRequest, options?: Configuration): Promise<ApiKey> {
        return this.api.getCwmsDataAuthKeysWithKeyName(param.keyName,  options).toPromise();
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param param the request object
     */
    public postCwmsDataAuthKeysWithHttpInfo(param: AuthorizationApiPostCwmsDataAuthKeysRequest = {}, options?: Configuration): Promise<HttpInfo<ApiKey>> {
        return this.api.postCwmsDataAuthKeysWithHttpInfo(param.apiKey,  options).toPromise();
    }

    /**
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * Post cwmsData auth keys
     * @param param the request object
     */
    public postCwmsDataAuthKeys(param: AuthorizationApiPostCwmsDataAuthKeysRequest = {}, options?: Configuration): Promise<ApiKey> {
        return this.api.postCwmsDataAuthKeys(param.apiKey,  options).toPromise();
    }

}

import { ObservableBasinsApi } from "./ObservableAPI";
import { BasinsApiRequestFactory, BasinsApiResponseProcessor} from "../apis/BasinsApi";

export interface BasinsApiGetCwmsDataBasinsRequest {
    /**
     * Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @type string
     * @memberof BasinsApigetCwmsDataBasins
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     * @type string
     * @memberof BasinsApigetCwmsDataBasins
     */
    unit?: string
}

export interface BasinsApiGetCwmsDataBasinsWithBasinIdRequest {
    /**
     * 
     * @type string
     * @memberof BasinsApigetCwmsDataBasinsWithBasinId
     */
    basinId: string
    /**
     * Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
     * @type string
     * @memberof BasinsApigetCwmsDataBasinsWithBasinId
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
     * @type string
     * @memberof BasinsApigetCwmsDataBasinsWithBasinId
     */
    unit?: string
}

export class ObjectBasinsApi {
    private api: ObservableBasinsApi

    public constructor(configuration: Configuration, requestFactory?: BasinsApiRequestFactory, responseProcessor?: BasinsApiResponseProcessor) {
        this.api = new ObservableBasinsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param param the request object
     */
    public getCwmsDataBasinsWithHttpInfo(param: BasinsApiGetCwmsDataBasinsRequest = {}, options?: Configuration): Promise<HttpInfo<Basin>> {
        return this.api.getCwmsDataBasinsWithHttpInfo(param.office, param.unit,  options).toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins
     * @param param the request object
     */
    public getCwmsDataBasins(param: BasinsApiGetCwmsDataBasinsRequest = {}, options?: Configuration): Promise<Basin> {
        return this.api.getCwmsDataBasins(param.office, param.unit,  options).toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param param the request object
     */
    public getCwmsDataBasinsWithBasinIdWithHttpInfo(param: BasinsApiGetCwmsDataBasinsWithBasinIdRequest, options?: Configuration): Promise<HttpInfo<Basin>> {
        return this.api.getCwmsDataBasinsWithBasinIdWithHttpInfo(param.basinId, param.office, param.unit,  options).toPromise();
    }

    /**
     * Returns CWMS Basin Data
     * Get cwmsData basins with basinId
     * @param param the request object
     */
    public getCwmsDataBasinsWithBasinId(param: BasinsApiGetCwmsDataBasinsWithBasinIdRequest, options?: Configuration): Promise<Basin> {
        return this.api.getCwmsDataBasinsWithBasinId(param.basinId, param.office, param.unit,  options).toPromise();
    }

}

import { ObservableBlobApi } from "./ObservableAPI";
import { BlobApiRequestFactory, BlobApiResponseProcessor} from "../apis/BlobApi";

export interface BlobApiGetCwmsDataBlobsRequest {
    /**
     * Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @type string
     * @memberof BlobApigetCwmsDataBlobs
     */
    office?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof BlobApigetCwmsDataBlobs
     */
    page?: string
    /**
     * How many entries per page returned. Default 20.
     * @type number
     * @memberof BlobApigetCwmsDataBlobs
     */
    pageSize?: number
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     * @type string
     * @memberof BlobApigetCwmsDataBlobs
     */
    like?: string
}

export interface BlobApiGetCwmsDataBlobsWithBlobIdRequest {
    /**
     * 
     * @type string
     * @memberof BlobApigetCwmsDataBlobsWithBlobId
     */
    blobId: string
    /**
     * Specifies the owning office.
     * @type string
     * @memberof BlobApigetCwmsDataBlobsWithBlobId
     */
    office?: string
}

export interface BlobApiPostCwmsDataBlobsRequest {
    /**
     * 
     * @type Blob
     * @memberof BlobApipostCwmsDataBlobs
     */
    blob: Blob
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof BlobApipostCwmsDataBlobs
     */
    failIfExists?: boolean
}

export class ObjectBlobApi {
    private api: ObservableBlobApi

    public constructor(configuration: Configuration, requestFactory?: BlobApiRequestFactory, responseProcessor?: BlobApiResponseProcessor) {
        this.api = new ObservableBlobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData blobs
     * @param param the request object
     */
    public getCwmsDataBlobsWithHttpInfo(param: BlobApiGetCwmsDataBlobsRequest = {}, options?: Configuration): Promise<HttpInfo<Blobs>> {
        return this.api.getCwmsDataBlobsWithHttpInfo(param.office, param.page, param.pageSize, param.like,  options).toPromise();
    }

    /**
     * Get cwmsData blobs
     * @param param the request object
     */
    public getCwmsDataBlobs(param: BlobApiGetCwmsDataBlobsRequest = {}, options?: Configuration): Promise<Blobs> {
        return this.api.getCwmsDataBlobs(param.office, param.page, param.pageSize, param.like,  options).toPromise();
    }

    /**
     * Get cwmsData blobs with blobId
     * @param param the request object
     */
    public getCwmsDataBlobsWithBlobIdWithHttpInfo(param: BlobApiGetCwmsDataBlobsWithBlobIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataBlobsWithBlobIdWithHttpInfo(param.blobId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData blobs with blobId
     * @param param the request object
     */
    public getCwmsDataBlobsWithBlobId(param: BlobApiGetCwmsDataBlobsWithBlobIdRequest, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataBlobsWithBlobId(param.blobId, param.office,  options).toPromise();
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param param the request object
     */
    public postCwmsDataBlobsWithHttpInfo(param: BlobApiPostCwmsDataBlobsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataBlobsWithHttpInfo(param.blob, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new Blob
     * Post cwmsData blobs
     * @param param the request object
     */
    public postCwmsDataBlobs(param: BlobApiPostCwmsDataBlobsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataBlobs(param.blob, param.failIfExists,  options).toPromise();
    }

}

import { ObservableCatalogApi } from "./ObservableAPI";
import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";

export interface CatalogApiGetCwmsDataCatalogWithDatasetRequest {
    /**
     * A list of what data? E.g. Timeseries, Locations, Ratings, etc
     * @type CatalogableEndpoint
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    dataset: CatalogableEndpoint
    /**
     * This end point can return a lot of data, this identifies where in the request you are.
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    page?: string
    /**
     * How many entires per page returned. Default 500.
     * @type number
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    pageSize?: number
    /**
     * Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
     * @type UnitSystem
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    unitSystem?: UnitSystem
    /**
     * 3-4 letter office name representing the district you want to isolate data to.
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    office?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    like?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    timeseriesCategoryLike?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    timeseriesGroupLike?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    locationCategoryLike?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    locationGroupLike?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
     * @type string
     * @memberof CatalogApigetCwmsDataCatalogWithDataset
     */
    boundingOfficeLike?: string
}

export class ObjectCatalogApi {
    private api: ObservableCatalogApi

    public constructor(configuration: Configuration, requestFactory?: CatalogApiRequestFactory, responseProcessor?: CatalogApiResponseProcessor) {
        this.api = new ObservableCatalogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData catalog with dataset
     * @param param the request object
     */
    public getCwmsDataCatalogWithDatasetWithHttpInfo(param: CatalogApiGetCwmsDataCatalogWithDatasetRequest, options?: Configuration): Promise<HttpInfo<Catalog>> {
        return this.api.getCwmsDataCatalogWithDatasetWithHttpInfo(param.dataset, param.page, param.pageSize, param.unitSystem, param.office, param.like, param.timeseriesCategoryLike, param.timeseriesGroupLike, param.locationCategoryLike, param.locationGroupLike, param.boundingOfficeLike,  options).toPromise();
    }

    /**
     * Get cwmsData catalog with dataset
     * @param param the request object
     */
    public getCwmsDataCatalogWithDataset(param: CatalogApiGetCwmsDataCatalogWithDatasetRequest, options?: Configuration): Promise<Catalog> {
        return this.api.getCwmsDataCatalogWithDataset(param.dataset, param.page, param.pageSize, param.unitSystem, param.office, param.like, param.timeseriesCategoryLike, param.timeseriesGroupLike, param.locationCategoryLike, param.locationGroupLike, param.boundingOfficeLike,  options).toPromise();
    }

}

import { ObservableClobApi } from "./ObservableAPI";
import { ClobApiRequestFactory, ClobApiResponseProcessor} from "../apis/ClobApi";

export interface ClobApiDeleteCwmsDataClobsWithClobIdRequest {
    /**
     * Specifies the id of the clob to be deleted
     * @type string
     * @memberof ClobApideleteCwmsDataClobsWithClobId
     */
    clobId: string
    /**
     * Specifies the office of the clob.
     * @type string
     * @memberof ClobApideleteCwmsDataClobsWithClobId
     */
    office: string
}

export interface ClobApiGetCwmsDataClobsRequest {
    /**
     * Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @type string
     * @memberof ClobApigetCwmsDataClobs
     */
    office?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof ClobApigetCwmsDataClobs
     */
    page?: string
    /**
     * How many entries per page returned. Default 20.
     * @type number
     * @memberof ClobApigetCwmsDataClobs
     */
    pageSize?: number
    /**
     * Do you want the value associated with this particular clob (default: false)
     * @type boolean
     * @memberof ClobApigetCwmsDataClobs
     */
    includeValues?: boolean
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     * @type string
     * @memberof ClobApigetCwmsDataClobs
     */
    like?: string
}

export interface ClobApiGetCwmsDataClobsWithClobIdRequest {
    /**
     * 
     * @type string
     * @memberof ClobApigetCwmsDataClobsWithClobId
     */
    clobId: string
    /**
     * Specifies the owning office.
     * @type string
     * @memberof ClobApigetCwmsDataClobsWithClobId
     */
    office?: string
    /**
     * If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     * @type string
     * @memberof ClobApigetCwmsDataClobsWithClobId
     */
    clobId2?: string
}

export interface ClobApiPatchCwmsDataClobsWithClobIdRequest {
    /**
     * Specifies the id of the clob to be updated
     * @type string
     * @memberof ClobApipatchCwmsDataClobsWithClobId
     */
    clobId: string
    /**
     * 
     * @type Clob
     * @memberof ClobApipatchCwmsDataClobsWithClobId
     */
    clob: Clob
    /**
     * If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     * @type boolean
     * @memberof ClobApipatchCwmsDataClobsWithClobId
     */
    ignoreNulls?: boolean
}

export interface ClobApiPostCwmsDataClobsRequest {
    /**
     * 
     * @type Clob
     * @memberof ClobApipostCwmsDataClobs
     */
    clob: Clob
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof ClobApipostCwmsDataClobs
     */
    failIfExists?: boolean
}

export class ObjectClobApi {
    private api: ObservableClobApi

    public constructor(configuration: Configuration, requestFactory?: ClobApiRequestFactory, responseProcessor?: ClobApiResponseProcessor) {
        this.api = new ObservableClobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param param the request object
     */
    public deleteCwmsDataClobsWithClobIdWithHttpInfo(param: ClobApiDeleteCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataClobsWithClobIdWithHttpInfo(param.clobId, param.office,  options).toPromise();
    }

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param param the request object
     */
    public deleteCwmsDataClobsWithClobId(param: ClobApiDeleteCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataClobsWithClobId(param.clobId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData clobs
     * @param param the request object
     */
    public getCwmsDataClobsWithHttpInfo(param: ClobApiGetCwmsDataClobsRequest = {}, options?: Configuration): Promise<HttpInfo<Clobs>> {
        return this.api.getCwmsDataClobsWithHttpInfo(param.office, param.page, param.pageSize, param.includeValues, param.like,  options).toPromise();
    }

    /**
     * Get cwmsData clobs
     * @param param the request object
     */
    public getCwmsDataClobs(param: ClobApiGetCwmsDataClobsRequest = {}, options?: Configuration): Promise<Clobs> {
        return this.api.getCwmsDataClobs(param.office, param.page, param.pageSize, param.includeValues, param.like,  options).toPromise();
    }

    /**
     * Get cwmsData clobs with clobId
     * @param param the request object
     */
    public getCwmsDataClobsWithClobIdWithHttpInfo(param: ClobApiGetCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<HttpInfo<Clob>> {
        return this.api.getCwmsDataClobsWithClobIdWithHttpInfo(param.clobId, param.office, param.clobId2,  options).toPromise();
    }

    /**
     * Get cwmsData clobs with clobId
     * @param param the request object
     */
    public getCwmsDataClobsWithClobId(param: ClobApiGetCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<Clob> {
        return this.api.getCwmsDataClobsWithClobId(param.clobId, param.office, param.clobId2,  options).toPromise();
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param param the request object
     */
    public patchCwmsDataClobsWithClobIdWithHttpInfo(param: ClobApiPatchCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataClobsWithClobIdWithHttpInfo(param.clobId, param.clob, param.ignoreNulls,  options).toPromise();
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param param the request object
     */
    public patchCwmsDataClobsWithClobId(param: ClobApiPatchCwmsDataClobsWithClobIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataClobsWithClobId(param.clobId, param.clob, param.ignoreNulls,  options).toPromise();
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param param the request object
     */
    public postCwmsDataClobsWithHttpInfo(param: ClobApiPostCwmsDataClobsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataClobsWithHttpInfo(param.clob, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new Clob
     * Post cwmsData clobs
     * @param param the request object
     */
    public postCwmsDataClobs(param: ClobApiPostCwmsDataClobsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataClobs(param.clob, param.failIfExists,  options).toPromise();
    }

}

import { ObservableCountiesApi } from "./ObservableAPI";
import { CountiesApiRequestFactory, CountiesApiResponseProcessor} from "../apis/CountiesApi";

export interface CountiesApiGetCwmsDataCountiesRequest {
}

export class ObjectCountiesApi {
    private api: ObservableCountiesApi

    public constructor(configuration: Configuration, requestFactory?: CountiesApiRequestFactory, responseProcessor?: CountiesApiResponseProcessor) {
        this.api = new ObservableCountiesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData counties
     * @param param the request object
     */
    public getCwmsDataCountiesWithHttpInfo(param: CountiesApiGetCwmsDataCountiesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<County>>> {
        return this.api.getCwmsDataCountiesWithHttpInfo( options).toPromise();
    }

    /**
     * Get cwmsData counties
     * @param param the request object
     */
    public getCwmsDataCounties(param: CountiesApiGetCwmsDataCountiesRequest = {}, options?: Configuration): Promise<Array<County>> {
        return this.api.getCwmsDataCounties( options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetCwmsDataRequest {
}

export interface DefaultApiGetCwmsDataLevelsWithLevelIdTimeseriesRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetCwmsDataLevelsWithLevelIdTimeseries
     */
    levelId: string
}

export interface DefaultApiGetCwmsDataTimeseriesRecentWithGroupIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetCwmsDataTimeseriesRecentWithGroupId
     */
    groupId: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData
     * @param param the request object
     */
    public getCwmsDataWithHttpInfo(param: DefaultApiGetCwmsDataRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataWithHttpInfo( options).toPromise();
    }

    /**
     * Get cwmsData
     * @param param the request object
     */
    public getCwmsData(param: DefaultApiGetCwmsDataRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsData( options).toPromise();
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param param the request object
     */
    public getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(param: DefaultApiGetCwmsDataLevelsWithLevelIdTimeseriesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataLevelsWithLevelIdTimeseriesWithHttpInfo(param.levelId,  options).toPromise();
    }

    /**
     * Get cwmsData levels with levelId timeseries
     * @param param the request object
     */
    public getCwmsDataLevelsWithLevelIdTimeseries(param: DefaultApiGetCwmsDataLevelsWithLevelIdTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataLevelsWithLevelIdTimeseries(param.levelId,  options).toPromise();
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(param: DefaultApiGetCwmsDataTimeseriesRecentWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataTimeseriesRecentWithGroupIdWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesRecentWithGroupId(param: DefaultApiGetCwmsDataTimeseriesRecentWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataTimeseriesRecentWithGroupId(param.groupId,  options).toPromise();
    }

}

import { ObservableLevelsApi } from "./ObservableAPI";
import { LevelsApiRequestFactory, LevelsApiResponseProcessor} from "../apis/LevelsApi";

export interface LevelsApiDeleteCwmsDataLevelsWithLevelIdRequest {
    /**
     * Specifies the location level id of the Location Level to be deleted
     * @type string
     * @memberof LevelsApideleteCwmsDataLevelsWithLevelId
     */
    levelId: string
    /**
     * 
     * @type boolean
     * @memberof LevelsApideleteCwmsDataLevelsWithLevelId
     */
    cascadeDelete?: boolean
    /**
     * Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
     * @type string
     * @memberof LevelsApideleteCwmsDataLevelsWithLevelId
     */
    office?: string
    /**
     * Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
     * @type string
     * @memberof LevelsApideleteCwmsDataLevelsWithLevelId
     */
    effectiveDate?: string
    /**
     * Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof LevelsApideleteCwmsDataLevelsWithLevelId
     */
    timezone?: string
}

export interface LevelsApiDeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    /**
     * The specified level id to be deleted
     * @type string
     * @memberof LevelsApideleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId
     */
    specifiedLevelId: string
    /**
     * Specifies the owning office of the timeseries identifier to be deleted
     * @type string
     * @memberof LevelsApideleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId
     */
    office: string
}

export interface LevelsApiGetCwmsDataLevelsRequest {
    /**
     * Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    levelIdMask?: string
    /**
     * Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    unit?: string
    /**
     * Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    datum?: string
    /**
     * Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    begin?: string
    /**
     * Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    end?: string
    /**
     * Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    timezone?: string
    /**
     * Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)  
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    format?: string
    /**
     * This identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof LevelsApigetCwmsDataLevels
     */
    page?: string
    /**
     * How many entries per page returned. Default 100.
     * @type number
     * @memberof LevelsApigetCwmsDataLevels
     */
    pageSize?: number
}

export interface LevelsApiGetCwmsDataLevelsWithLevelIdRequest {
    /**
     * Specifies the requested location level.
     * @type string
     * @memberof LevelsApigetCwmsDataLevelsWithLevelId
     */
    levelId: string
    /**
     * Specifies the office of the Location Level to be returned
     * @type string
     * @memberof LevelsApigetCwmsDataLevelsWithLevelId
     */
    office: string
    /**
     * Specifies the effective date of Location Level to be returned
     * @type string
     * @memberof LevelsApigetCwmsDataLevelsWithLevelId
     */
    effectiveDate: string
    /**
     * Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof LevelsApigetCwmsDataLevelsWithLevelId
     */
    timezone?: string
    /**
     * Desired unit for the values retrieved.
     * @type string
     * @memberof LevelsApigetCwmsDataLevelsWithLevelId
     */
    unit?: string
}

export interface LevelsApiGetCwmsDataSpecifiedLevelsRequest {
    /**
     * Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof LevelsApigetCwmsDataSpecifiedLevels
     */
    office?: string
    /**
     * Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
     * @type string
     * @memberof LevelsApigetCwmsDataSpecifiedLevels
     */
    templateIdMask?: string
}

export interface LevelsApiPatchCwmsDataLevelsWithLevelIdRequest {
    /**
     * Specifies the location level id of the Location Level to be updated
     * @type string
     * @memberof LevelsApipatchCwmsDataLevelsWithLevelId
     */
    levelId: string
    /**
     * 
     * @type LocationLevel
     * @memberof LevelsApipatchCwmsDataLevelsWithLevelId
     */
    locationLevel: LocationLevel
    /**
     * Specifies the effective date of Location Level that will be updated
     * @type string
     * @memberof LevelsApipatchCwmsDataLevelsWithLevelId
     */
    effectiveDate?: string
}

export interface LevelsApiPatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    /**
     * 
     * @type string
     * @memberof LevelsApipatchCwmsDataSpecifiedLevelsWithSpecifiedLevelId
     */
    specifiedLevelId: string
    /**
     * The new specified level id.
     * @type string
     * @memberof LevelsApipatchCwmsDataSpecifiedLevelsWithSpecifiedLevelId
     */
    specifiedLevelId2: string
    /**
     * Specifies the owning office of the specified level to be renamed
     * @type string
     * @memberof LevelsApipatchCwmsDataSpecifiedLevelsWithSpecifiedLevelId
     */
    office: string
}

export interface LevelsApiPostCwmsDataLevelsRequest {
    /**
     * 
     * @type LocationLevel
     * @memberof LevelsApipostCwmsDataLevels
     */
    locationLevel: LocationLevel
}

export interface LevelsApiPostCwmsDataSpecifiedLevelsRequest {
    /**
     * 
     * @type SpecifiedLevel
     * @memberof LevelsApipostCwmsDataSpecifiedLevels
     */
    specifiedLevel: SpecifiedLevel
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof LevelsApipostCwmsDataSpecifiedLevels
     */
    failIfExists?: boolean
}

export class ObjectLevelsApi {
    private api: ObservableLevelsApi

    public constructor(configuration: Configuration, requestFactory?: LevelsApiRequestFactory, responseProcessor?: LevelsApiResponseProcessor) {
        this.api = new ObservableLevelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     * @param param the request object
     */
    public deleteCwmsDataLevelsWithLevelIdWithHttpInfo(param: LevelsApiDeleteCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataLevelsWithLevelIdWithHttpInfo(param.levelId, param.cascadeDelete, param.office, param.effectiveDate, param.timezone,  options).toPromise();
    }

    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     * @param param the request object
     */
    public deleteCwmsDataLevelsWithLevelId(param: LevelsApiDeleteCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataLevelsWithLevelId(param.levelId, param.cascadeDelete, param.office, param.effectiveDate, param.timezone,  options).toPromise();
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param param the request object
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(param: LevelsApiDeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(param.specifiedLevelId, param.office,  options).toPromise();
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     * @param param the request object
     */
    public deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(param: LevelsApiDeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(param.specifiedLevelId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData levels
     * @param param the request object
     */
    public getCwmsDataLevelsWithHttpInfo(param: LevelsApiGetCwmsDataLevelsRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.getCwmsDataLevelsWithHttpInfo(param.levelIdMask, param.office, param.unit, param.datum, param.begin, param.end, param.timezone, param.format, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData levels
     * @param param the request object
     */
    public getCwmsDataLevels(param: LevelsApiGetCwmsDataLevelsRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getCwmsDataLevels(param.levelIdMask, param.office, param.unit, param.datum, param.begin, param.end, param.timezone, param.format, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param param the request object
     */
    public getCwmsDataLevelsWithLevelIdWithHttpInfo(param: LevelsApiGetCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<HttpInfo<LocationLevel>> {
        return this.api.getCwmsDataLevelsWithLevelIdWithHttpInfo(param.levelId, param.office, param.effectiveDate, param.timezone, param.unit,  options).toPromise();
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     * @param param the request object
     */
    public getCwmsDataLevelsWithLevelId(param: LevelsApiGetCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<LocationLevel> {
        return this.api.getCwmsDataLevelsWithLevelId(param.levelId, param.office, param.effectiveDate, param.timezone, param.unit,  options).toPromise();
    }

    /**
     * Get cwmsData specifiedLevels
     * @param param the request object
     */
    public getCwmsDataSpecifiedLevelsWithHttpInfo(param: LevelsApiGetCwmsDataSpecifiedLevelsRequest = {}, options?: Configuration): Promise<HttpInfo<SpecifiedLevel>> {
        return this.api.getCwmsDataSpecifiedLevelsWithHttpInfo(param.office, param.templateIdMask,  options).toPromise();
    }

    /**
     * Get cwmsData specifiedLevels
     * @param param the request object
     */
    public getCwmsDataSpecifiedLevels(param: LevelsApiGetCwmsDataSpecifiedLevelsRequest = {}, options?: Configuration): Promise<SpecifiedLevel> {
        return this.api.getCwmsDataSpecifiedLevels(param.office, param.templateIdMask,  options).toPromise();
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param param the request object
     */
    public patchCwmsDataLevelsWithLevelIdWithHttpInfo(param: LevelsApiPatchCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataLevelsWithLevelIdWithHttpInfo(param.levelId, param.locationLevel, param.effectiveDate,  options).toPromise();
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     * @param param the request object
     */
    public patchCwmsDataLevelsWithLevelId(param: LevelsApiPatchCwmsDataLevelsWithLevelIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataLevelsWithLevelId(param.levelId, param.locationLevel, param.effectiveDate,  options).toPromise();
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param param the request object
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(param: LevelsApiPatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdWithHttpInfo(param.specifiedLevelId, param.specifiedLevelId2, param.office,  options).toPromise();
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     * @param param the request object
     */
    public patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(param: LevelsApiPatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(param.specifiedLevelId, param.specifiedLevelId2, param.office,  options).toPromise();
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param param the request object
     */
    public postCwmsDataLevelsWithHttpInfo(param: LevelsApiPostCwmsDataLevelsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataLevelsWithHttpInfo(param.locationLevel,  options).toPromise();
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     * @param param the request object
     */
    public postCwmsDataLevels(param: LevelsApiPostCwmsDataLevelsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataLevels(param.locationLevel,  options).toPromise();
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param param the request object
     */
    public postCwmsDataSpecifiedLevelsWithHttpInfo(param: LevelsApiPostCwmsDataSpecifiedLevelsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataSpecifiedLevelsWithHttpInfo(param.specifiedLevel, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     * @param param the request object
     */
    public postCwmsDataSpecifiedLevels(param: LevelsApiPostCwmsDataSpecifiedLevelsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataSpecifiedLevels(param.specifiedLevel, param.failIfExists,  options).toPromise();
    }

}

import { ObservableLocationCategoriesApi } from "./ObservableAPI";
import { LocationCategoriesApiRequestFactory, LocationCategoriesApiResponseProcessor} from "../apis/LocationCategoriesApi";

export interface LocationCategoriesApiDeleteCwmsDataLocationCategoryWithCategoryIdRequest {
    /**
     * The location category to be deleted
     * @type string
     * @memberof LocationCategoriesApideleteCwmsDataLocationCategoryWithCategoryId
     */
    categoryId: string
    /**
     * Specifies the owning office of the location category to be deleted
     * @type string
     * @memberof LocationCategoriesApideleteCwmsDataLocationCategoryWithCategoryId
     */
    office: string
    /**
     * Specifies whether to delete any location groups in this location category. Default: false
     * @type boolean
     * @memberof LocationCategoriesApideleteCwmsDataLocationCategoryWithCategoryId
     */
    cascadeDelete?: boolean
}

export interface LocationCategoriesApiGetCwmsDataLocationCategoryRequest {
    /**
     * Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     * @type string
     * @memberof LocationCategoriesApigetCwmsDataLocationCategory
     */
    office?: string
}

export interface LocationCategoriesApiGetCwmsDataLocationCategoryWithCategoryIdRequest {
    /**
     * Specifies the Category whose data is to be included in the response.
     * @type string
     * @memberof LocationCategoriesApigetCwmsDataLocationCategoryWithCategoryId
     */
    categoryId: string
    /**
     * Specifies the owning office of the Location Category whose data is to be included in the response.
     * @type string
     * @memberof LocationCategoriesApigetCwmsDataLocationCategoryWithCategoryId
     */
    office: string
}

export interface LocationCategoriesApiPostCwmsDataLocationCategoryRequest {
    /**
     * 
     * @type LocationCategory
     * @memberof LocationCategoriesApipostCwmsDataLocationCategory
     */
    locationCategory: LocationCategory
}

export class ObjectLocationCategoriesApi {
    private api: ObservableLocationCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: LocationCategoriesApiRequestFactory, responseProcessor?: LocationCategoriesApiResponseProcessor) {
        this.api = new ObservableLocationCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param param the request object
     */
    public deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(param: LocationCategoriesApiDeleteCwmsDataLocationCategoryWithCategoryIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param param the request object
     */
    public deleteCwmsDataLocationCategoryWithCategoryId(param: LocationCategoriesApiDeleteCwmsDataLocationCategoryWithCategoryIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataLocationCategoryWithCategoryId(param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param param the request object
     */
    public getCwmsDataLocationCategoryWithHttpInfo(param: LocationCategoriesApiGetCwmsDataLocationCategoryRequest = {}, options?: Configuration): Promise<HttpInfo<Array<LocationCategory>>> {
        return this.api.getCwmsDataLocationCategoryWithHttpInfo(param.office,  options).toPromise();
    }

    /**
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param param the request object
     */
    public getCwmsDataLocationCategory(param: LocationCategoriesApiGetCwmsDataLocationCategoryRequest = {}, options?: Configuration): Promise<Array<LocationCategory>> {
        return this.api.getCwmsDataLocationCategory(param.office,  options).toPromise();
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param param the request object
     */
    public getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(param: LocationCategoriesApiGetCwmsDataLocationCategoryWithCategoryIdRequest, options?: Configuration): Promise<HttpInfo<LocationCategory>> {
        return this.api.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param param the request object
     */
    public getCwmsDataLocationCategoryWithCategoryId(param: LocationCategoriesApiGetCwmsDataLocationCategoryWithCategoryIdRequest, options?: Configuration): Promise<LocationCategory> {
        return this.api.getCwmsDataLocationCategoryWithCategoryId(param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param param the request object
     */
    public postCwmsDataLocationCategoryWithHttpInfo(param: LocationCategoriesApiPostCwmsDataLocationCategoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataLocationCategoryWithHttpInfo(param.locationCategory,  options).toPromise();
    }

    /**
     * Create new LocationCategory
     * Post cwmsData location category
     * @param param the request object
     */
    public postCwmsDataLocationCategory(param: LocationCategoriesApiPostCwmsDataLocationCategoryRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataLocationCategory(param.locationCategory,  options).toPromise();
    }

}

import { ObservableLocationGroupsApi } from "./ObservableAPI";
import { LocationGroupsApiRequestFactory, LocationGroupsApiResponseProcessor} from "../apis/LocationGroupsApi";

export interface LocationGroupsApiDeleteCwmsDataLocationGroupWithGroupIdRequest {
    /**
     * The location group to be deleted
     * @type string
     * @memberof LocationGroupsApideleteCwmsDataLocationGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the location category of the location group to be deleted
     * @type string
     * @memberof LocationGroupsApideleteCwmsDataLocationGroupWithGroupId
     */
    categoryId: string
    /**
     * Specifies the owning office of the location group to be deleted
     * @type string
     * @memberof LocationGroupsApideleteCwmsDataLocationGroupWithGroupId
     */
    office: string
    /**
     * Specifies whether to specifies whether to unassign any location assignments. Default: false
     * @type boolean
     * @memberof LocationGroupsApideleteCwmsDataLocationGroupWithGroupId
     */
    cascadeDelete?: boolean
}

export interface LocationGroupsApiGetCwmsDataLocationGroupRequest {
    /**
     * Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
     * @type string
     * @memberof LocationGroupsApigetCwmsDataLocationGroup
     */
    office?: string
    /**
     * Include the assigned locations in the returned location groups. (default: false)
     * @type boolean
     * @memberof LocationGroupsApigetCwmsDataLocationGroup
     */
    includeAssigned?: boolean
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     * @type string
     * @memberof LocationGroupsApigetCwmsDataLocationGroup
     */
    locationCategoryLike?: string
}

export interface LocationGroupsApiGetCwmsDataLocationGroupWithGroupIdRequest {
    /**
     * Specifies the location_group whose data is to be included in the response
     * @type string
     * @memberof LocationGroupsApigetCwmsDataLocationGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the owning office of the location group whose data is to be included in the response.
     * @type string
     * @memberof LocationGroupsApigetCwmsDataLocationGroupWithGroupId
     */
    office: string
    /**
     * Specifies the category containing the location group whose data is to be included in the response.
     * @type string
     * @memberof LocationGroupsApigetCwmsDataLocationGroupWithGroupId
     */
    categoryId: string
}

export interface LocationGroupsApiPatchCwmsDataLocationGroupWithGroupIdRequest {
    /**
     * 
     * @type string
     * @memberof LocationGroupsApipatchCwmsDataLocationGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the owning office of the location group to be updated
     * @type string
     * @memberof LocationGroupsApipatchCwmsDataLocationGroupWithGroupId
     */
    office: string
    /**
     * 
     * @type LocationGroup
     * @memberof LocationGroupsApipatchCwmsDataLocationGroupWithGroupId
     */
    locationGroup: LocationGroup
    /**
     * Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
     * @type boolean
     * @memberof LocationGroupsApipatchCwmsDataLocationGroupWithGroupId
     */
    replaceAssignedLocs?: boolean
}

export interface LocationGroupsApiPostCwmsDataLocationGroupRequest {
    /**
     * 
     * @type LocationGroup
     * @memberof LocationGroupsApipostCwmsDataLocationGroup
     */
    locationGroup: LocationGroup
}

export class ObjectLocationGroupsApi {
    private api: ObservableLocationGroupsApi

    public constructor(configuration: Configuration, requestFactory?: LocationGroupsApiRequestFactory, responseProcessor?: LocationGroupsApiResponseProcessor) {
        this.api = new ObservableLocationGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param param the request object
     */
    public deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(param: LocationGroupsApiDeleteCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataLocationGroupWithGroupIdWithHttpInfo(param.groupId, param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Deletes requested location group
     * Delete cwmsData location group with groupId
     * @param param the request object
     */
    public deleteCwmsDataLocationGroupWithGroupId(param: LocationGroupsApiDeleteCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataLocationGroupWithGroupId(param.groupId, param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param param the request object
     */
    public getCwmsDataLocationGroupWithHttpInfo(param: LocationGroupsApiGetCwmsDataLocationGroupRequest = {}, options?: Configuration): Promise<HttpInfo<Array<LocationGroup>>> {
        return this.api.getCwmsDataLocationGroupWithHttpInfo(param.office, param.includeAssigned, param.locationCategoryLike,  options).toPromise();
    }

    /**
     * Returns CWMS Location Groups Data
     * Get cwmsData location group
     * @param param the request object
     */
    public getCwmsDataLocationGroup(param: LocationGroupsApiGetCwmsDataLocationGroupRequest = {}, options?: Configuration): Promise<Array<LocationGroup>> {
        return this.api.getCwmsDataLocationGroup(param.office, param.includeAssigned, param.locationCategoryLike,  options).toPromise();
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param param the request object
     */
    public getCwmsDataLocationGroupWithGroupIdWithHttpInfo(param: LocationGroupsApiGetCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<LocationGroup>> {
        return this.api.getCwmsDataLocationGroupWithGroupIdWithHttpInfo(param.groupId, param.office, param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves requested Location Group
     * Get cwmsData location group with groupId
     * @param param the request object
     */
    public getCwmsDataLocationGroupWithGroupId(param: LocationGroupsApiGetCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<LocationGroup> {
        return this.api.getCwmsDataLocationGroupWithGroupId(param.groupId, param.office, param.categoryId,  options).toPromise();
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param param the request object
     */
    public patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(param: LocationGroupsApiPatchCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataLocationGroupWithGroupIdWithHttpInfo(param.groupId, param.office, param.locationGroup, param.replaceAssignedLocs,  options).toPromise();
    }

    /**
     * Update existing LocationGroup
     * Patch cwmsData location group with groupId
     * @param param the request object
     */
    public patchCwmsDataLocationGroupWithGroupId(param: LocationGroupsApiPatchCwmsDataLocationGroupWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataLocationGroupWithGroupId(param.groupId, param.office, param.locationGroup, param.replaceAssignedLocs,  options).toPromise();
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param param the request object
     */
    public postCwmsDataLocationGroupWithHttpInfo(param: LocationGroupsApiPostCwmsDataLocationGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataLocationGroupWithHttpInfo(param.locationGroup,  options).toPromise();
    }

    /**
     * Create new LocationGroup
     * Post cwmsData location group
     * @param param the request object
     */
    public postCwmsDataLocationGroup(param: LocationGroupsApiPostCwmsDataLocationGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataLocationGroup(param.locationGroup,  options).toPromise();
    }

}

import { ObservableLocationsApi } from "./ObservableAPI";
import { LocationsApiRequestFactory, LocationsApiResponseProcessor} from "../apis/LocationsApi";

export interface LocationsApiDeleteCwmsDataLocationsWithLocationIdRequest {
    /**
     * 
     * @type string
     * @memberof LocationsApideleteCwmsDataLocationsWithLocationId
     */
    locationId: string
    /**
     * Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     * @type string
     * @memberof LocationsApideleteCwmsDataLocationsWithLocationId
     */
    office?: string
}

export interface LocationsApiGetCwmsDataLocationsRequest {
    /**
     * Specifies the name(s) of the location(s) whose data is to be included in the response
     * @type string
     * @memberof LocationsApigetCwmsDataLocations
     */
    names?: string
    /**
     * Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @type string
     * @memberof LocationsApigetCwmsDataLocations
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @type string
     * @memberof LocationsApigetCwmsDataLocations
     */
    unit?: string
    /**
     * Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @type string
     * @memberof LocationsApigetCwmsDataLocations
     */
    datum?: string
    /**
     * Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     * @type string
     * @memberof LocationsApigetCwmsDataLocations
     */
    format?: string
}

export interface LocationsApiGetCwmsDataLocationsWithLocationIdRequest {
    /**
     * 
     * @type string
     * @memberof LocationsApigetCwmsDataLocationsWithLocationId
     */
    locationId: string
    /**
     * Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @type string
     * @memberof LocationsApigetCwmsDataLocationsWithLocationId
     */
    office: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @type string
     * @memberof LocationsApigetCwmsDataLocationsWithLocationId
     */
    unit?: string
}

export interface LocationsApiPatchCwmsDataLocationsWithLocationIdRequest {
    /**
     * 
     * @type string
     * @memberof LocationsApipatchCwmsDataLocationsWithLocationId
     */
    locationId: string
    /**
     * 
     * @type Location
     * @memberof LocationsApipatchCwmsDataLocationsWithLocationId
     */
    location: Location
}

export interface LocationsApiPostCwmsDataLocationsRequest {
    /**
     * 
     * @type Location
     * @memberof LocationsApipostCwmsDataLocations
     */
    location: Location
}

export class ObjectLocationsApi {
    private api: ObservableLocationsApi

    public constructor(configuration: Configuration, requestFactory?: LocationsApiRequestFactory, responseProcessor?: LocationsApiResponseProcessor) {
        this.api = new ObservableLocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param param the request object
     */
    public deleteCwmsDataLocationsWithLocationIdWithHttpInfo(param: LocationsApiDeleteCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(param.locationId, param.office,  options).toPromise();
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     * @param param the request object
     */
    public deleteCwmsDataLocationsWithLocationId(param: LocationsApiDeleteCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataLocationsWithLocationId(param.locationId, param.office,  options).toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param param the request object
     */
    public getCwmsDataLocationsWithHttpInfo(param: LocationsApiGetCwmsDataLocationsRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.getCwmsDataLocationsWithHttpInfo(param.names, param.office, param.unit, param.datum, param.format,  options).toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations
     * @param param the request object
     */
    public getCwmsDataLocations(param: LocationsApiGetCwmsDataLocationsRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getCwmsDataLocations(param.names, param.office, param.unit, param.datum, param.format,  options).toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param param the request object
     */
    public getCwmsDataLocationsWithLocationIdWithHttpInfo(param: LocationsApiGetCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<HttpInfo<Location>> {
        return this.api.getCwmsDataLocationsWithLocationIdWithHttpInfo(param.locationId, param.office, param.unit,  options).toPromise();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     * @param param the request object
     */
    public getCwmsDataLocationsWithLocationId(param: LocationsApiGetCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<Location> {
        return this.api.getCwmsDataLocationsWithLocationId(param.locationId, param.office, param.unit,  options).toPromise();
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param param the request object
     */
    public patchCwmsDataLocationsWithLocationIdWithHttpInfo(param: LocationsApiPatchCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataLocationsWithLocationIdWithHttpInfo(param.locationId, param.location,  options).toPromise();
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     * @param param the request object
     */
    public patchCwmsDataLocationsWithLocationId(param: LocationsApiPatchCwmsDataLocationsWithLocationIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataLocationsWithLocationId(param.locationId, param.location,  options).toPromise();
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param param the request object
     */
    public postCwmsDataLocationsWithHttpInfo(param: LocationsApiPostCwmsDataLocationsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataLocationsWithHttpInfo(param.location,  options).toPromise();
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     * @param param the request object
     */
    public postCwmsDataLocations(param: LocationsApiPostCwmsDataLocationsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataLocations(param.location,  options).toPromise();
    }

}

import { ObservableOfficesApi } from "./ObservableAPI";
import { OfficesApiRequestFactory, OfficesApiResponseProcessor} from "../apis/OfficesApi";

export interface OfficesApiGetCwmsDataOfficesRequest {
    /**
     * (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @type string
     * @memberof OfficesApigetCwmsDataOffices
     */
    format?: string
    /**
     * A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt;
     * @type boolean
     * @memberof OfficesApigetCwmsDataOffices
     */
    hasData?: boolean
}

export interface OfficesApiGetCwmsDataOfficesWithOfficeRequest {
    /**
     * The 3 letter office ID you want more information for
     * @type string
     * @memberof OfficesApigetCwmsDataOfficesWithOffice
     */
    office: string
    /**
     * (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @type string
     * @memberof OfficesApigetCwmsDataOfficesWithOffice
     */
    format?: string
}

export class ObjectOfficesApi {
    private api: ObservableOfficesApi

    public constructor(configuration: Configuration, requestFactory?: OfficesApiRequestFactory, responseProcessor?: OfficesApiResponseProcessor) {
        this.api = new ObservableOfficesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData offices
     * @param param the request object
     */
    public getCwmsDataOfficesWithHttpInfo(param: OfficesApiGetCwmsDataOfficesRequest = {}, options?: Configuration): Promise<HttpInfo<OfficeFormatV1>> {
        return this.api.getCwmsDataOfficesWithHttpInfo(param.format, param.hasData,  options).toPromise();
    }

    /**
     * Get cwmsData offices
     * @param param the request object
     */
    public getCwmsDataOffices(param: OfficesApiGetCwmsDataOfficesRequest = {}, options?: Configuration): Promise<OfficeFormatV1> {
        return this.api.getCwmsDataOffices(param.format, param.hasData,  options).toPromise();
    }

    /**
     * Get cwmsData offices with office
     * @param param the request object
     */
    public getCwmsDataOfficesWithOfficeWithHttpInfo(param: OfficesApiGetCwmsDataOfficesWithOfficeRequest, options?: Configuration): Promise<HttpInfo<OfficeFormatV1>> {
        return this.api.getCwmsDataOfficesWithOfficeWithHttpInfo(param.office, param.format,  options).toPromise();
    }

    /**
     * Get cwmsData offices with office
     * @param param the request object
     */
    public getCwmsDataOfficesWithOffice(param: OfficesApiGetCwmsDataOfficesWithOfficeRequest, options?: Configuration): Promise<OfficeFormatV1> {
        return this.api.getCwmsDataOfficesWithOffice(param.office, param.format,  options).toPromise();
    }

}

import { ObservableParametersApi } from "./ObservableAPI";
import { ParametersApiRequestFactory, ParametersApiResponseProcessor} from "../apis/ParametersApi";

export interface ParametersApiGetCwmsDataParametersRequest {
    /**
     * Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @type string
     * @memberof ParametersApigetCwmsDataParameters
     */
    format?: string
}

export class ObjectParametersApi {
    private api: ObservableParametersApi

    public constructor(configuration: Configuration, requestFactory?: ParametersApiRequestFactory, responseProcessor?: ParametersApiResponseProcessor) {
        this.api = new ObservableParametersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData parameters
     * @param param the request object
     */
    public getCwmsDataParametersWithHttpInfo(param: ParametersApiGetCwmsDataParametersRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataParametersWithHttpInfo(param.format,  options).toPromise();
    }

    /**
     * Get cwmsData parameters
     * @param param the request object
     */
    public getCwmsDataParameters(param: ParametersApiGetCwmsDataParametersRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataParameters(param.format,  options).toPromise();
    }

}

import { ObservablePoolsApi } from "./ObservableAPI";
import { PoolsApiRequestFactory, PoolsApiResponseProcessor} from "../apis/PoolsApi";

export interface PoolsApiGetCwmsDataPoolsRequest {
    /**
     * Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    office?: string
    /**
     * Project Id mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    idMask?: string
    /**
     * Name mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    nameMask?: string
    /**
     * Bottom level mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    bottomMask?: string
    /**
     * Top level mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    topMask?: string
    /**
     * Specifies if the results should include explicit Pools. Default value:false
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    includeExplicit?: string
    /**
     * Specifies if the results should include implicit Pools. Default value:true
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    includeImplicit?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof PoolsApigetCwmsDataPools
     */
    page?: string
    /**
     * How many entries per page returned. Default 100.
     * @type number
     * @memberof PoolsApigetCwmsDataPools
     */
    pageSize?: number
}

export interface PoolsApiGetCwmsDataPoolsWithPoolIdRequest {
    /**
     * Specifies the pool whose data is to be included in the response.
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    poolId: string
    /**
     * Specifies the owning office of the Pool whose data is to be included in the response.
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    office: string
    /**
     * Specifies the project-id of the Pool whose data is to be included in the response.
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    projectId: string
    /**
     * Bottom level mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    bottomMask?: string
    /**
     * Top level mask. Default value:*
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    topMask?: string
    /**
     * Specifies if the results should include explicit Pools. Default value:false
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    includeExplicit?: string
    /**
     * Specifies if the results should include implicit Pools. Default value:true
     * @type string
     * @memberof PoolsApigetCwmsDataPoolsWithPoolId
     */
    includeImplicit?: string
}

export class ObjectPoolsApi {
    private api: ObservablePoolsApi

    public constructor(configuration: Configuration, requestFactory?: PoolsApiRequestFactory, responseProcessor?: PoolsApiResponseProcessor) {
        this.api = new ObservablePoolsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns Pools Data
     * Get cwmsData pools
     * @param param the request object
     */
    public getCwmsDataPoolsWithHttpInfo(param: PoolsApiGetCwmsDataPoolsRequest = {}, options?: Configuration): Promise<HttpInfo<Pools>> {
        return this.api.getCwmsDataPoolsWithHttpInfo(param.office, param.idMask, param.nameMask, param.bottomMask, param.topMask, param.includeExplicit, param.includeImplicit, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns Pools Data
     * Get cwmsData pools
     * @param param the request object
     */
    public getCwmsDataPools(param: PoolsApiGetCwmsDataPoolsRequest = {}, options?: Configuration): Promise<Pools> {
        return this.api.getCwmsDataPools(param.office, param.idMask, param.nameMask, param.bottomMask, param.topMask, param.includeExplicit, param.includeImplicit, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     * @param param the request object
     */
    public getCwmsDataPoolsWithPoolIdWithHttpInfo(param: PoolsApiGetCwmsDataPoolsWithPoolIdRequest, options?: Configuration): Promise<HttpInfo<Pool>> {
        return this.api.getCwmsDataPoolsWithPoolIdWithHttpInfo(param.poolId, param.office, param.projectId, param.bottomMask, param.topMask, param.includeExplicit, param.includeImplicit,  options).toPromise();
    }

    /**
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     * @param param the request object
     */
    public getCwmsDataPoolsWithPoolId(param: PoolsApiGetCwmsDataPoolsWithPoolIdRequest, options?: Configuration): Promise<Pool> {
        return this.api.getCwmsDataPoolsWithPoolId(param.poolId, param.office, param.projectId, param.bottomMask, param.topMask, param.includeExplicit, param.includeImplicit,  options).toPromise();
    }

}

import { ObservableRatingsApi } from "./ObservableAPI";
import { RatingsApiRequestFactory, RatingsApiResponseProcessor} from "../apis/RatingsApi";

export interface RatingsApiDeleteCwmsDataRatingsSpecWithRatingIdRequest {
    /**
     * The rating-spec-id of the ratings data to be deleted.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsSpecWithRatingId
     */
    ratingId: string
    /**
     * Specifies the owning office of the ratings to be deleted.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsSpecWithRatingId
     */
    office: string
    /**
     * Specifies the delete method used.
     * @type DeleteMethod
     * @memberof RatingsApideleteCwmsDataRatingsSpecWithRatingId
     */
    method: DeleteMethod
}

export interface RatingsApiDeleteCwmsDataRatingsTemplateWithTemplateIdRequest {
    /**
     * The rating-template-id of the ratings data to be deleted.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsTemplateWithTemplateId
     */
    templateId: string
    /**
     * Specifies the owning office of the ratings to be deleted.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsTemplateWithTemplateId
     */
    office: string
    /**
     * Specifies the delete method used.
     * @type DeleteMethod
     * @memberof RatingsApideleteCwmsDataRatingsTemplateWithTemplateId
     */
    method: DeleteMethod
}

export interface RatingsApiDeleteCwmsDataRatingsWithRatingIdRequest {
    /**
     * The rating-id of the effective dates to be deleted. 
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsWithRatingId
     */
    ratingId: string
    /**
     * Specifies the office of the ratings to be deleted.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsWithRatingId
     */
    office: string
    /**
     * The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsWithRatingId
     */
    begin: string
    /**
     * The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsWithRatingId
     */
    end: string
    /**
     * This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @type string
     * @memberof RatingsApideleteCwmsDataRatingsWithRatingId
     */
    timezone?: string
}

export interface RatingsApiGetCwmsDataRatingsRequest {
    /**
     * Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    name?: string
    /**
     * Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    unit?: string
    /**
     * Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    datum?: string
    /**
     * Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    at?: string
    /**
     * Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    end?: string
    /**
     * Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    timezone?: string
    /**
     * Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default)
     * @type string
     * @memberof RatingsApigetCwmsDataRatings
     */
    format?: string
}

export interface RatingsApiGetCwmsDataRatingsMetadataRequest {
    /**
     * Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    office?: string
    /**
     * RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    ratingIdMask?: string
    /**
     * Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    start?: string
    /**
     * Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    end?: string
    /**
     * Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    timezone?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    page?: string
    /**
     * How many entries per page returned. Default 50.
     * @type number
     * @memberof RatingsApigetCwmsDataRatingsMetadata
     */
    pageSize?: number
}

export interface RatingsApiGetCwmsDataRatingsSpecRequest {
    /**
     * Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsSpec
     */
    office?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsSpec
     */
    ratingIdMask?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsSpec
     */
    page?: string
    /**
     * How many entries per page returned. Default 100.
     * @type number
     * @memberof RatingsApigetCwmsDataRatingsSpec
     */
    pageSize?: number
}

export interface RatingsApiGetCwmsDataRatingsSpecWithRatingIdRequest {
    /**
     * Specifies the rating-id of the Rating Spec to be included in the response
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsSpecWithRatingId
     */
    ratingId: string
    /**
     * Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsSpecWithRatingId
     */
    office: string
}

export interface RatingsApiGetCwmsDataRatingsTemplateRequest {
    /**
     * Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsTemplate
     */
    office?: string
    /**
     * RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsTemplate
     */
    templateIdMask?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsTemplate
     */
    page?: string
    /**
     * How many entries per page returned. Default 100.
     * @type number
     * @memberof RatingsApigetCwmsDataRatingsTemplate
     */
    pageSize?: number
}

export interface RatingsApiGetCwmsDataRatingsTemplateWithTemplateIdRequest {
    /**
     * Specifies the template whose data is to be included in the response
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsTemplateWithTemplateId
     */
    templateId: string
    /**
     * Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsTemplateWithTemplateId
     */
    office: string
}

export interface RatingsApiGetCwmsDataRatingsWithRatingIdRequest {
    /**
     * The rating-id of the effective dates to be retrieve. 
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    ratingId: string
    /**
     * Specifies the owning office of the ratingset to be included in the response.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    office: string
    /**
     * Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    begin?: string
    /**
     * Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    end?: string
    /**
     * Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @type string
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    timezone?: string
    /**
     * Specifies the retrieval method used.  If no method is provided EAGER will be used.
     * @type DatabaseLoadMethod
     * @memberof RatingsApigetCwmsDataRatingsWithRatingId
     */
    method?: DatabaseLoadMethod
}

export interface RatingsApiPatchCwmsDataRatingsWithRatingIdRequest {
    /**
     * 
     * @type string
     * @memberof RatingsApipatchCwmsDataRatingsWithRatingId
     */
    ratingId: string
    /**
     * 
     * @type any
     * @memberof RatingsApipatchCwmsDataRatingsWithRatingId
     */
    body: any
    /**
     * Also store updates to the rating template. Default: true
     * @type boolean
     * @memberof RatingsApipatchCwmsDataRatingsWithRatingId
     */
    storeTemplate?: boolean
}

export interface RatingsApiPostCwmsDataRatingsRequest {
    /**
     * 
     * @type any
     * @memberof RatingsApipostCwmsDataRatings
     */
    body: any
    /**
     * Also store updates to the rating template. Default: true
     * @type boolean
     * @memberof RatingsApipostCwmsDataRatings
     */
    storeTemplate?: boolean
}

export interface RatingsApiPostCwmsDataRatingsSpecRequest {
    /**
     * 
     * @type RatingSpec
     * @memberof RatingsApipostCwmsDataRatingsSpec
     */
    ratingSpec: RatingSpec
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof RatingsApipostCwmsDataRatingsSpec
     */
    failIfExists?: boolean
}

export interface RatingsApiPostCwmsDataRatingsTemplateRequest {
    /**
     * 
     * @type RatingTemplate
     * @memberof RatingsApipostCwmsDataRatingsTemplate
     */
    ratingTemplate: RatingTemplate
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof RatingsApipostCwmsDataRatingsTemplate
     */
    failIfExists?: boolean
}

export class ObjectRatingsApi {
    private api: ObservableRatingsApi

    public constructor(configuration: Configuration, requestFactory?: RatingsApiRequestFactory, responseProcessor?: RatingsApiResponseProcessor) {
        this.api = new ObservableRatingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param param the request object
     */
    public deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(param: RatingsApiDeleteCwmsDataRatingsSpecWithRatingIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataRatingsSpecWithRatingIdWithHttpInfo(param.ratingId, param.office, param.method,  options).toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     * @param param the request object
     */
    public deleteCwmsDataRatingsSpecWithRatingId(param: RatingsApiDeleteCwmsDataRatingsSpecWithRatingIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataRatingsSpecWithRatingId(param.ratingId, param.office, param.method,  options).toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param param the request object
     */
    public deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(param: RatingsApiDeleteCwmsDataRatingsTemplateWithTemplateIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(param.templateId, param.office, param.method,  options).toPromise();
    }

    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     * @param param the request object
     */
    public deleteCwmsDataRatingsTemplateWithTemplateId(param: RatingsApiDeleteCwmsDataRatingsTemplateWithTemplateIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataRatingsTemplateWithTemplateId(param.templateId, param.office, param.method,  options).toPromise();
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param param the request object
     */
    public deleteCwmsDataRatingsWithRatingIdWithHttpInfo(param: RatingsApiDeleteCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataRatingsWithRatingIdWithHttpInfo(param.ratingId, param.office, param.begin, param.end, param.timezone,  options).toPromise();
    }

    /**
     * Delete cwmsData ratings with ratingId
     * @param param the request object
     */
    public deleteCwmsDataRatingsWithRatingId(param: RatingsApiDeleteCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataRatingsWithRatingId(param.ratingId, param.office, param.begin, param.end, param.timezone,  options).toPromise();
    }

    /**
     * Get cwmsData ratings
     * @param param the request object
     */
    public getCwmsDataRatingsWithHttpInfo(param: RatingsApiGetCwmsDataRatingsRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.getCwmsDataRatingsWithHttpInfo(param.name, param.office, param.unit, param.datum, param.at, param.end, param.timezone, param.format,  options).toPromise();
    }

    /**
     * Get cwmsData ratings
     * @param param the request object
     */
    public getCwmsDataRatings(param: RatingsApiGetCwmsDataRatingsRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getCwmsDataRatings(param.name, param.office, param.unit, param.datum, param.at, param.end, param.timezone, param.format,  options).toPromise();
    }

    /**
     * Get cwmsData ratings metadata
     * @param param the request object
     */
    public getCwmsDataRatingsMetadataWithHttpInfo(param: RatingsApiGetCwmsDataRatingsMetadataRequest = {}, options?: Configuration): Promise<HttpInfo<RatingMetadataList>> {
        return this.api.getCwmsDataRatingsMetadataWithHttpInfo(param.office, param.ratingIdMask, param.start, param.end, param.timezone, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings metadata
     * @param param the request object
     */
    public getCwmsDataRatingsMetadata(param: RatingsApiGetCwmsDataRatingsMetadataRequest = {}, options?: Configuration): Promise<RatingMetadataList> {
        return this.api.getCwmsDataRatingsMetadata(param.office, param.ratingIdMask, param.start, param.end, param.timezone, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings spec
     * @param param the request object
     */
    public getCwmsDataRatingsSpecWithHttpInfo(param: RatingsApiGetCwmsDataRatingsSpecRequest = {}, options?: Configuration): Promise<HttpInfo<RatingSpecs>> {
        return this.api.getCwmsDataRatingsSpecWithHttpInfo(param.office, param.ratingIdMask, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings spec
     * @param param the request object
     */
    public getCwmsDataRatingsSpec(param: RatingsApiGetCwmsDataRatingsSpecRequest = {}, options?: Configuration): Promise<RatingSpecs> {
        return this.api.getCwmsDataRatingsSpec(param.office, param.ratingIdMask, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param param the request object
     */
    public getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(param: RatingsApiGetCwmsDataRatingsSpecWithRatingIdRequest, options?: Configuration): Promise<HttpInfo<RatingSpec>> {
        return this.api.getCwmsDataRatingsSpecWithRatingIdWithHttpInfo(param.ratingId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData ratings spec with ratingId
     * @param param the request object
     */
    public getCwmsDataRatingsSpecWithRatingId(param: RatingsApiGetCwmsDataRatingsSpecWithRatingIdRequest, options?: Configuration): Promise<RatingSpec> {
        return this.api.getCwmsDataRatingsSpecWithRatingId(param.ratingId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData ratings template
     * @param param the request object
     */
    public getCwmsDataRatingsTemplateWithHttpInfo(param: RatingsApiGetCwmsDataRatingsTemplateRequest = {}, options?: Configuration): Promise<HttpInfo<RatingTemplates>> {
        return this.api.getCwmsDataRatingsTemplateWithHttpInfo(param.office, param.templateIdMask, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings template
     * @param param the request object
     */
    public getCwmsDataRatingsTemplate(param: RatingsApiGetCwmsDataRatingsTemplateRequest = {}, options?: Configuration): Promise<RatingTemplates> {
        return this.api.getCwmsDataRatingsTemplate(param.office, param.templateIdMask, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param param the request object
     */
    public getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(param: RatingsApiGetCwmsDataRatingsTemplateWithTemplateIdRequest, options?: Configuration): Promise<HttpInfo<Array<RatingTemplate>>> {
        return this.api.getCwmsDataRatingsTemplateWithTemplateIdWithHttpInfo(param.templateId, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData ratings template with templateId
     * @param param the request object
     */
    public getCwmsDataRatingsTemplateWithTemplateId(param: RatingsApiGetCwmsDataRatingsTemplateWithTemplateIdRequest, options?: Configuration): Promise<Array<RatingTemplate>> {
        return this.api.getCwmsDataRatingsTemplateWithTemplateId(param.templateId, param.office,  options).toPromise();
    }

    /**
     * Returns CWMS Rating Data
     * Get cwmsData ratings with ratingId
     * @param param the request object
     */
    public getCwmsDataRatingsWithRatingIdWithHttpInfo(param: RatingsApiGetCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.getCwmsDataRatingsWithRatingIdWithHttpInfo(param.ratingId, param.office, param.begin, param.end, param.timezone, param.method,  options).toPromise();
    }

    /**
     * Returns CWMS Rating Data
     * Get cwmsData ratings with ratingId
     * @param param the request object
     */
    public getCwmsDataRatingsWithRatingId(param: RatingsApiGetCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<any> {
        return this.api.getCwmsDataRatingsWithRatingId(param.ratingId, param.office, param.begin, param.end, param.timezone, param.method,  options).toPromise();
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param param the request object
     */
    public patchCwmsDataRatingsWithRatingIdWithHttpInfo(param: RatingsApiPatchCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataRatingsWithRatingIdWithHttpInfo(param.ratingId, param.body, param.storeTemplate,  options).toPromise();
    }

    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     * @param param the request object
     */
    public patchCwmsDataRatingsWithRatingId(param: RatingsApiPatchCwmsDataRatingsWithRatingIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataRatingsWithRatingId(param.ratingId, param.body, param.storeTemplate,  options).toPromise();
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param param the request object
     */
    public postCwmsDataRatingsWithHttpInfo(param: RatingsApiPostCwmsDataRatingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataRatingsWithHttpInfo(param.body, param.storeTemplate,  options).toPromise();
    }

    /**
     * Create new RatingSet
     * Post cwmsData ratings
     * @param param the request object
     */
    public postCwmsDataRatings(param: RatingsApiPostCwmsDataRatingsRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataRatings(param.body, param.storeTemplate,  options).toPromise();
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param param the request object
     */
    public postCwmsDataRatingsSpecWithHttpInfo(param: RatingsApiPostCwmsDataRatingsSpecRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataRatingsSpecWithHttpInfo(param.ratingSpec, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     * @param param the request object
     */
    public postCwmsDataRatingsSpec(param: RatingsApiPostCwmsDataRatingsSpecRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataRatingsSpec(param.ratingSpec, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param param the request object
     */
    public postCwmsDataRatingsTemplateWithHttpInfo(param: RatingsApiPostCwmsDataRatingsTemplateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataRatingsTemplateWithHttpInfo(param.ratingTemplate, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     * @param param the request object
     */
    public postCwmsDataRatingsTemplate(param: RatingsApiPostCwmsDataRatingsTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataRatingsTemplate(param.ratingTemplate, param.failIfExists,  options).toPromise();
    }

}

import { ObservableStatesApi } from "./ObservableAPI";
import { StatesApiRequestFactory, StatesApiResponseProcessor} from "../apis/StatesApi";

export interface StatesApiGetCwmsDataStatesRequest {
}

export class ObjectStatesApi {
    private api: ObservableStatesApi

    public constructor(configuration: Configuration, requestFactory?: StatesApiRequestFactory, responseProcessor?: StatesApiResponseProcessor) {
        this.api = new ObservableStatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData states
     * @param param the request object
     */
    public getCwmsDataStatesWithHttpInfo(param: StatesApiGetCwmsDataStatesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<State>>> {
        return this.api.getCwmsDataStatesWithHttpInfo( options).toPromise();
    }

    /**
     * Get cwmsData states
     * @param param the request object
     */
    public getCwmsDataStates(param: StatesApiGetCwmsDataStatesRequest = {}, options?: Configuration): Promise<Array<State>> {
        return this.api.getCwmsDataStates( options).toPromise();
    }

}

import { ObservableTimeSeriesApi } from "./ObservableAPI";
import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";

export interface TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest {
    /**
     * The timeseries-id of the timeseries values to be deleted. 
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    timeseries: string
    /**
     * Specifies the office of the timeseries to be deleted.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    office: string
    /**
     * The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    begin: string
    /**
     * The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    end: string
    /**
     * This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    timezone?: string
    /**
     * The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    versionDate?: string
    /**
     * A flag specifying whether any data at the start time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;after&lt;/em&gt;&lt;/b&gt; the start time (\&#39;False\&#39;).  Default value is True
     * @type boolean
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    startTimeInclusive?: boolean
    /**
     * A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether any data at the end time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;before&lt;/em&gt;&lt;/b&gt; the end time (\&#39;False\&#39;). Default value is False
     * @type boolean
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    endTimeInclusive?: boolean
    /**
     * A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to use the earliest (\&#39;False\&#39;) or latest (\&#39;True\&#39;) version date for each time if p_version_date is NULL.  Default is \&#39;True\&#39;
     * @type boolean
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    maxVersion?: boolean
    /**
     * A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to delete protected data. Default is False
     * @type boolean
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    overrideProtection?: boolean
}

export interface TimeSeriesApiGetCwmsDataTimeseriesRequest {
    /**
     * Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    name: string
    /**
     * Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    office?: string
    /**
     * Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    unit?: string
    /**
     * Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    datum?: string
    /**
     * Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    begin?: string
    /**
     * Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    end?: string
    /**
     * Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    timezone?: string
    /**
     * Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    format?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    page?: string
    /**
     * How many entries per page returned. Default 500.
     * @type number
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    pageSize?: number
}

export interface TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest {
    /**
     * Full CWMS Timeseries name
     * @type string
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    timeseries: string
    /**
     * 
     * @type TimeSeries
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    timeSeries: TimeSeries
    /**
     * Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    versionDate?: string
    /**
     * Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @type string
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    timezone?: string
    /**
     * 
     * @type boolean
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    createAsLrts?: boolean
    /**
     * The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @type StoreRule
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    storeRule?: StoreRule
    /**
     * A flag to ignore the protected data quality when storing data.  \&quot;\&#39;true\&#39; or \&#39;false\&#39;\&quot;
     * @type boolean
     * @memberof TimeSeriesApipatchCwmsDataTimeseriesWithTimeseries
     */
    overrideProtection?: boolean
}

export interface TimeSeriesApiPostCwmsDataTimeseriesRequest {
    /**
     * 
     * @type TimeSeries
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    timeSeries: TimeSeries
    /**
     * Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;.
     * @type string
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    versionDate?: string
    /**
     * Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
     * @type string
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    timezone?: string
    /**
     * Flag indicating if timeseries should be created as Local Regular Time Series. \&#39;True\&#39; or \&#39;False\&#39;, default is \&#39;False\&#39;
     * @type boolean
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    createAsLrts?: boolean
    /**
     * The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
     * @type StoreRule
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    storeRule?: StoreRule
    /**
     * A flag to ignore the protected data quality when storing data. \&#39;True\&#39; or \&#39;False\&#39;
     * @type boolean
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    overrideProtection?: boolean
}

export class ObjectTimeSeriesApi {
    private api: ObservableTimeSeriesApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesApiRequestFactory, responseProcessor?: TimeSeriesApiResponseProcessor) {
        this.api = new ObservableTimeSeriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete cwmsData timeseries with timeseries
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(param: TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataTimeseriesWithTimeseriesWithHttpInfo(param.timeseries, param.office, param.begin, param.end, param.timezone, param.versionDate, param.startTimeInclusive, param.endTimeInclusive, param.maxVersion, param.overrideProtection,  options).toPromise();
    }

    /**
     * Delete cwmsData timeseries with timeseries
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesWithTimeseries(param: TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataTimeseriesWithTimeseries(param.timeseries, param.office, param.begin, param.end, param.timezone, param.versionDate, param.startTimeInclusive, param.endTimeInclusive, param.maxVersion, param.overrideProtection,  options).toPromise();
    }

    /**
     * Get cwmsData timeseries
     * @param param the request object
     */
    public getCwmsDataTimeseriesWithHttpInfo(param: TimeSeriesApiGetCwmsDataTimeseriesRequest, options?: Configuration): Promise<HttpInfo<TimeSeries>> {
        return this.api.getCwmsDataTimeseriesWithHttpInfo(param.name, param.office, param.unit, param.datum, param.begin, param.end, param.timezone, param.format, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get cwmsData timeseries
     * @param param the request object
     */
    public getCwmsDataTimeseries(param: TimeSeriesApiGetCwmsDataTimeseriesRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.getCwmsDataTimeseries(param.name, param.office, param.unit, param.datum, param.begin, param.end, param.timezone, param.format, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param param the request object
     */
    public patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(param: TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataTimeseriesWithTimeseriesWithHttpInfo(param.timeseries, param.timeSeries, param.versionDate, param.timezone, param.createAsLrts, param.storeRule, param.overrideProtection,  options).toPromise();
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param param the request object
     */
    public patchCwmsDataTimeseriesWithTimeseries(param: TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataTimeseriesWithTimeseries(param.timeseries, param.timeSeries, param.versionDate, param.timezone, param.createAsLrts, param.storeRule, param.overrideProtection,  options).toPromise();
    }

    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds 
     * Post cwmsData timeseries
     * @param param the request object
     */
    public postCwmsDataTimeseriesWithHttpInfo(param: TimeSeriesApiPostCwmsDataTimeseriesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataTimeseriesWithHttpInfo(param.timeSeries, param.versionDate, param.timezone, param.createAsLrts, param.storeRule, param.overrideProtection,  options).toPromise();
    }

    /**
     * Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds 
     * Post cwmsData timeseries
     * @param param the request object
     */
    public postCwmsDataTimeseries(param: TimeSeriesApiPostCwmsDataTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataTimeseries(param.timeSeries, param.versionDate, param.timezone, param.createAsLrts, param.storeRule, param.overrideProtection,  options).toPromise();
    }

}

import { ObservableTimeSeriesCategoriesApi } from "./ObservableAPI";
import { TimeSeriesCategoriesApiRequestFactory, TimeSeriesCategoriesApiResponseProcessor} from "../apis/TimeSeriesCategoriesApi";

export interface TimeSeriesCategoriesApiDeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest {
    /**
     * The time series category to be deleted
     * @type string
     * @memberof TimeSeriesCategoriesApideleteCwmsDataTimeseriesCategoryWithCategoryId
     */
    categoryId: string
    /**
     * Specifies the owning office of the time series category to be deleted
     * @type string
     * @memberof TimeSeriesCategoriesApideleteCwmsDataTimeseriesCategoryWithCategoryId
     */
    office: string
    /**
     * Specifies whether to delete any time series groups in this time series category. Default: false
     * @type boolean
     * @memberof TimeSeriesCategoriesApideleteCwmsDataTimeseriesCategoryWithCategoryId
     */
    cascadeDelete?: boolean
}

export interface TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryRequest {
    /**
     * Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     * @type string
     * @memberof TimeSeriesCategoriesApigetCwmsDataTimeseriesCategory
     */
    office?: string
}

export interface TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest {
    /**
     * Specifies the Category whose data is to be included in the response.
     * @type string
     * @memberof TimeSeriesCategoriesApigetCwmsDataTimeseriesCategoryWithCategoryId
     */
    categoryId: string
    /**
     * Specifies the owning office of the timeseries category whose data is to be included in the response.
     * @type string
     * @memberof TimeSeriesCategoriesApigetCwmsDataTimeseriesCategoryWithCategoryId
     */
    office: string
}

export interface TimeSeriesCategoriesApiPostCwmsDataTimeseriesCategoryRequest {
    /**
     * 
     * @type TimeSeriesCategory
     * @memberof TimeSeriesCategoriesApipostCwmsDataTimeseriesCategory
     */
    timeSeriesCategory: TimeSeriesCategory
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof TimeSeriesCategoriesApipostCwmsDataTimeseriesCategory
     */
    failIfExists?: boolean
}

export class ObjectTimeSeriesCategoriesApi {
    private api: ObservableTimeSeriesCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesCategoriesApiRequestFactory, responseProcessor?: TimeSeriesCategoriesApiResponseProcessor) {
        this.api = new ObservableTimeSeriesCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(param: TimeSeriesCategoriesApiDeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Deletes requested time series category
     * Delete cwmsData timeseries category with categoryId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesCategoryWithCategoryId(param: TimeSeriesCategoriesApiDeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataTimeseriesCategoryWithCategoryId(param.categoryId, param.office, param.cascadeDelete,  options).toPromise();
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategoryWithHttpInfo(param: TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TimeSeriesCategory>>> {
        return this.api.getCwmsDataTimeseriesCategoryWithHttpInfo(param.office,  options).toPromise();
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategory(param: TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryRequest = {}, options?: Configuration): Promise<Array<TimeSeriesCategory>> {
        return this.api.getCwmsDataTimeseriesCategory(param.office,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(param: TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest, options?: Configuration): Promise<HttpInfo<TimeSeriesCategory>> {
        return this.api.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategoryWithCategoryId(param: TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest, options?: Configuration): Promise<TimeSeriesCategory> {
        return this.api.getCwmsDataTimeseriesCategoryWithCategoryId(param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param param the request object
     */
    public postCwmsDataTimeseriesCategoryWithHttpInfo(param: TimeSeriesCategoriesApiPostCwmsDataTimeseriesCategoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataTimeseriesCategoryWithHttpInfo(param.timeSeriesCategory, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new TimeSeriesCategory
     * Post cwmsData timeseries category
     * @param param the request object
     */
    public postCwmsDataTimeseriesCategory(param: TimeSeriesCategoriesApiPostCwmsDataTimeseriesCategoryRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataTimeseriesCategory(param.timeSeriesCategory, param.failIfExists,  options).toPromise();
    }

}

import { ObservableTimeSeriesIdentifierApi } from "./ObservableAPI";
import { TimeSeriesIdentifierApiRequestFactory, TimeSeriesIdentifierApiResponseProcessor} from "../apis/TimeSeriesIdentifierApi";

export interface TimeSeriesIdentifierApiDeleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest {
    /**
     * The timeseries-id of the timeseries to be deleted. 
     * @type string
     * @memberof TimeSeriesIdentifierApideleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    timeseriesId: string
    /**
     * Specifies the owning office of the timeseries to be deleted.
     * @type string
     * @memberof TimeSeriesIdentifierApideleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    office: string
    /**
     * Specifies the delete method used.
     * @type DeleteMethod
     * @memberof TimeSeriesIdentifierApideleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    method: DeleteMethod
}

export interface TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorRequest {
    /**
     * Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @type string
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptor
     */
    office?: string
    /**
     * A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @type string
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptor
     */
    timeseriesIdRegex?: string
    /**
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @type string
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptor
     */
    page?: string
    /**
     * How many entries per page returned. Default 500.
     * @type number
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptor
     */
    pageSize?: number
}

export interface TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest {
    /**
     * Specifies the identifier of the timeseries to be included in the response.
     * @type string
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    timeseriesId: string
    /**
     * Specifies the owning office of the timeseries identifier to be included in the response.
     * @type string
     * @memberof TimeSeriesIdentifierApigetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    office: string
}

export interface TimeSeriesIdentifierApiPatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest {
    /**
     * 
     * @type string
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    timeseriesId: string
    /**
     * A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @type string
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    timeseriesId2: string
    /**
     * Specifies the owning office of the timeseries identifier to be updated
     * @type string
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    office: string
    /**
     * The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @type number
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    intervalOffset?: number
    /**
     * The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @type number
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    snapForward?: number
    /**
     * The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @type number
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    snapBackward?: number
    /**
     * \&#39;True\&#39; or \&#39;true\&#39; if the time series is active
     * @type boolean
     * @memberof TimeSeriesIdentifierApipatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     */
    active?: boolean
}

export interface TimeSeriesIdentifierApiPostCwmsDataTimeseriesIdentifierDescriptorRequest {
    /**
     * 
     * @type TimeSeriesIdentifierDescriptor
     * @memberof TimeSeriesIdentifierApipostCwmsDataTimeseriesIdentifierDescriptor
     */
    timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof TimeSeriesIdentifierApipostCwmsDataTimeseriesIdentifierDescriptor
     */
    failIfExists?: boolean
}

export class ObjectTimeSeriesIdentifierApi {
    private api: ObservableTimeSeriesIdentifierApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesIdentifierApiRequestFactory, responseProcessor?: TimeSeriesIdentifierApiResponseProcessor) {
        this.api = new ObservableTimeSeriesIdentifierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param: TimeSeriesIdentifierApiDeleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param.timeseriesId, param.office, param.method,  options).toPromise();
    }

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param: TimeSeriesIdentifierApiDeleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param.timeseriesId, param.office, param.method,  options).toPromise();
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param param the request object
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(param: TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorRequest = {}, options?: Configuration): Promise<HttpInfo<TimeSeriesIdentifierDescriptors>> {
        return this.api.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(param.office, param.timeseriesIdRegex, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param param the request object
     */
    public getCwmsDataTimeseriesIdentifierDescriptor(param: TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorRequest = {}, options?: Configuration): Promise<TimeSeriesIdentifierDescriptors> {
        return this.api.getCwmsDataTimeseriesIdentifierDescriptor(param.office, param.timeseriesIdRegex, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param: TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<HttpInfo<TimeSeriesIdentifierDescriptor>> {
        return this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param.timeseriesId, param.office,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param: TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<TimeSeriesIdentifierDescriptor> {
        return this.api.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param.timeseriesId, param.office,  options).toPromise();
    }

    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param: TimeSeriesIdentifierApiPatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(param.timeseriesId, param.timeseriesId2, param.office, param.intervalOffset, param.snapForward, param.snapBackward, param.active,  options).toPromise();
    }

    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param param the request object
     */
    public patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param: TimeSeriesIdentifierApiPatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(param.timeseriesId, param.timeseriesId2, param.office, param.intervalOffset, param.snapForward, param.snapBackward, param.active,  options).toPromise();
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param param the request object
     */
    public postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(param: TimeSeriesIdentifierApiPostCwmsDataTimeseriesIdentifierDescriptorRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(param.timeSeriesIdentifierDescriptor, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param param the request object
     */
    public postCwmsDataTimeseriesIdentifierDescriptor(param: TimeSeriesIdentifierApiPostCwmsDataTimeseriesIdentifierDescriptorRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataTimeseriesIdentifierDescriptor(param.timeSeriesIdentifierDescriptor, param.failIfExists,  options).toPromise();
    }

}

import { ObservableTimeZonesApi } from "./ObservableAPI";
import { TimeZonesApiRequestFactory, TimeZonesApiResponseProcessor} from "../apis/TimeZonesApi";

export interface TimeZonesApiGetCwmsDataTimezonesRequest {
    /**
     * Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @type string
     * @memberof TimeZonesApigetCwmsDataTimezones
     */
    format?: string
}

export class ObjectTimeZonesApi {
    private api: ObservableTimeZonesApi

    public constructor(configuration: Configuration, requestFactory?: TimeZonesApiRequestFactory, responseProcessor?: TimeZonesApiResponseProcessor) {
        this.api = new ObservableTimeZonesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData timezones
     * @param param the request object
     */
    public getCwmsDataTimezonesWithHttpInfo(param: TimeZonesApiGetCwmsDataTimezonesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataTimezonesWithHttpInfo(param.format,  options).toPromise();
    }

    /**
     * Get cwmsData timezones
     * @param param the request object
     */
    public getCwmsDataTimezones(param: TimeZonesApiGetCwmsDataTimezonesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataTimezones(param.format,  options).toPromise();
    }

}

import { ObservableTimeseriesGroupsApi } from "./ObservableAPI";
import { TimeseriesGroupsApiRequestFactory, TimeseriesGroupsApiResponseProcessor} from "../apis/TimeseriesGroupsApi";

export interface TimeseriesGroupsApiDeleteCwmsDataTimeseriesGroupWithGroupIdRequest {
    /**
     * The time series group to be deleted
     * @type string
     * @memberof TimeseriesGroupsApideleteCwmsDataTimeseriesGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the time series category of the time series group to be deleted
     * @type string
     * @memberof TimeseriesGroupsApideleteCwmsDataTimeseriesGroupWithGroupId
     */
    categoryId: string
    /**
     * Specifies the owning office of the time series group to be deleted
     * @type string
     * @memberof TimeseriesGroupsApideleteCwmsDataTimeseriesGroupWithGroupId
     */
    office: string
}

export interface TimeseriesGroupsApiGetCwmsDataTimeseriesGroupRequest {
    /**
     * Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroup
     */
    office?: string
    /**
     * Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @type boolean
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroup
     */
    includeAssigned?: boolean
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroup
     */
    timeseriesCategoryLike?: string
    /**
     * Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroup
     */
    timeseriesGroupLike?: string
}

export interface TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest {
    /**
     * Specifies the timeseries group whose data is to be included in the response
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroupWithGroupId
     */
    office: string
    /**
     * Specifies the category containing the timeseries group whose data is to be included in the response.
     * @type string
     * @memberof TimeseriesGroupsApigetCwmsDataTimeseriesGroupWithGroupId
     */
    categoryId: string
}

export interface TimeseriesGroupsApiPatchCwmsDataTimeseriesGroupWithGroupIdRequest {
    /**
     * 
     * @type string
     * @memberof TimeseriesGroupsApipatchCwmsDataTimeseriesGroupWithGroupId
     */
    groupId: string
    /**
     * Specifies the owning office of the time series group to be updated
     * @type string
     * @memberof TimeseriesGroupsApipatchCwmsDataTimeseriesGroupWithGroupId
     */
    office: string
    /**
     * 
     * @type TimeSeriesGroup
     * @memberof TimeseriesGroupsApipatchCwmsDataTimeseriesGroupWithGroupId
     */
    timeSeriesGroup: TimeSeriesGroup
    /**
     * Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     * @type boolean
     * @memberof TimeseriesGroupsApipatchCwmsDataTimeseriesGroupWithGroupId
     */
    replaceAssignedTs?: boolean
}

export interface TimeseriesGroupsApiPostCwmsDataTimeseriesGroupRequest {
    /**
     * 
     * @type TimeSeriesGroup
     * @memberof TimeseriesGroupsApipostCwmsDataTimeseriesGroup
     */
    timeSeriesGroup: TimeSeriesGroup
    /**
     * Create will fail if provided ID already exists. Default: true
     * @type boolean
     * @memberof TimeseriesGroupsApipostCwmsDataTimeseriesGroup
     */
    failIfExists?: boolean
}

export class ObjectTimeseriesGroupsApi {
    private api: ObservableTimeseriesGroupsApi

    public constructor(configuration: Configuration, requestFactory?: TimeseriesGroupsApiRequestFactory, responseProcessor?: TimeseriesGroupsApiResponseProcessor) {
        this.api = new ObservableTimeseriesGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param: TimeseriesGroupsApiDeleteCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param.groupId, param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param param the request object
     */
    public deleteCwmsDataTimeseriesGroupWithGroupId(param: TimeseriesGroupsApiDeleteCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataTimeseriesGroupWithGroupId(param.groupId, param.categoryId, param.office,  options).toPromise();
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroupWithHttpInfo(param: TimeseriesGroupsApiGetCwmsDataTimeseriesGroupRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TimeSeriesGroup>>> {
        return this.api.getCwmsDataTimeseriesGroupWithHttpInfo(param.office, param.includeAssigned, param.timeseriesCategoryLike, param.timeseriesGroupLike,  options).toPromise();
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroup(param: TimeseriesGroupsApiGetCwmsDataTimeseriesGroupRequest = {}, options?: Configuration): Promise<Array<TimeSeriesGroup>> {
        return this.api.getCwmsDataTimeseriesGroup(param.office, param.includeAssigned, param.timeseriesCategoryLike, param.timeseriesGroupLike,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param: TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<TimeSeriesGroup>> {
        return this.api.getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param.groupId, param.office, param.categoryId,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroupWithGroupId(param: TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<TimeSeriesGroup> {
        return this.api.getCwmsDataTimeseriesGroupWithGroupId(param.groupId, param.office, param.categoryId,  options).toPromise();
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param param the request object
     */
    public patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param: TimeseriesGroupsApiPatchCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(param.groupId, param.office, param.timeSeriesGroup, param.replaceAssignedTs,  options).toPromise();
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param param the request object
     */
    public patchCwmsDataTimeseriesGroupWithGroupId(param: TimeseriesGroupsApiPatchCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataTimeseriesGroupWithGroupId(param.groupId, param.office, param.timeSeriesGroup, param.replaceAssignedTs,  options).toPromise();
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param param the request object
     */
    public postCwmsDataTimeseriesGroupWithHttpInfo(param: TimeseriesGroupsApiPostCwmsDataTimeseriesGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postCwmsDataTimeseriesGroupWithHttpInfo(param.timeSeriesGroup, param.failIfExists,  options).toPromise();
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param param the request object
     */
    public postCwmsDataTimeseriesGroup(param: TimeseriesGroupsApiPostCwmsDataTimeseriesGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataTimeseriesGroup(param.timeSeriesGroup, param.failIfExists,  options).toPromise();
    }

}

import { ObservableUnitsApi } from "./ObservableAPI";
import { UnitsApiRequestFactory, UnitsApiResponseProcessor} from "../apis/UnitsApi";

export interface UnitsApiGetCwmsDataUnitsRequest {
    /**
     * Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @type string
     * @memberof UnitsApigetCwmsDataUnits
     */
    format?: string
}

export class ObjectUnitsApi {
    private api: ObservableUnitsApi

    public constructor(configuration: Configuration, requestFactory?: UnitsApiRequestFactory, responseProcessor?: UnitsApiResponseProcessor) {
        this.api = new ObservableUnitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get cwmsData units
     * @param param the request object
     */
    public getCwmsDataUnitsWithHttpInfo(param: UnitsApiGetCwmsDataUnitsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCwmsDataUnitsWithHttpInfo(param.format,  options).toPromise();
    }

    /**
     * Get cwmsData units
     * @param param the request object
     */
    public getCwmsDataUnits(param: UnitsApiGetCwmsDataUnitsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataUnits(param.format,  options).toPromise();
    }

}
