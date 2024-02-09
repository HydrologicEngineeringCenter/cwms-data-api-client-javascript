import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AssignedTimeSeries } from '../models/AssignedTimeSeries';
import { CsvV1Office } from '../models/CsvV1Office';
import { Office } from '../models/Office';
import { OfficeCSV } from '../models/OfficeCSV';
import { OfficeFormatV1 } from '../models/OfficeFormatV1';
import { OfficeTabulation } from '../models/OfficeTabulation';
import { OfficesFMT } from '../models/OfficesFMT';
import { Offset } from '../models/Offset';
import { RadarError } from '../models/RadarError';
import { TabV1Office } from '../models/TabV1Office';
import { TimeSeries } from '../models/TimeSeries';
import { TimeSeriesCategory } from '../models/TimeSeriesCategory';
import { TimeSeriesColumn } from '../models/TimeSeriesColumn';
import { TimeSeriesExtents } from '../models/TimeSeriesExtents';
import { TimeSeriesGroup } from '../models/TimeSeriesGroup';
import { TimeSeriesInterval } from '../models/TimeSeriesInterval';
import { TimeSeriesIntervalUnitsInner } from '../models/TimeSeriesIntervalUnitsInner';
import { TimeSeriesIntervalUnitsInnerDuration } from '../models/TimeSeriesIntervalUnitsInnerDuration';
import { TimeSeriesRecord } from '../models/TimeSeriesRecord';
import { TimeSeriesValuesInnerInner } from '../models/TimeSeriesValuesInnerInner';
import { UnitSystem } from '../models/UnitSystem';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetCwmsDataRequest {
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
    public getCwmsData(param: DefaultApiGetCwmsDataRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsData( options).toPromise();
    }

    /**
     * Get cwmsData timeseries recent with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesRecentWithGroupId(param: DefaultApiGetCwmsDataTimeseriesRecentWithGroupIdRequest, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataTimeseriesRecentWithGroupId(param.groupId,  options).toPromise();
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
    public getCwmsDataOffices(param: OfficesApiGetCwmsDataOfficesRequest = {}, options?: Configuration): Promise<OfficeFormatV1> {
        return this.api.getCwmsDataOffices(param.format,  options).toPromise();
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
    public getCwmsDataParameters(param: ParametersApiGetCwmsDataParametersRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataParameters(param.format,  options).toPromise();
    }

}

import { ObservableTimeSeriesApi } from "./ObservableAPI";
import { TimeSeriesApiRequestFactory, TimeSeriesApiResponseProcessor} from "../apis/TimeSeriesApi";

export interface TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest {
    /**
     * 
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    timeseries: string
    /**
     * Specifies the owning office of the timeseries to be deleted.
     * @type string
     * @memberof TimeSeriesApideleteCwmsDataTimeseriesWithTimeseries
     */
    office: string
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
     * Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    begin?: string
    /**
     * Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;.
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
     * This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    page?: string
    /**
     * Deprecated. Use &#39;page&#39; instead.
     * @type string
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    cursor?: string
    /**
     * How many entries per page returned. Default 500.
     * @type number
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    pageSize?: number
    /**
     * Deprecated. Please use page-size instead.
     * @type number
     * @memberof TimeSeriesApigetCwmsDataTimeseries
     */
    pageSize2?: number
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
}

export interface TimeSeriesApiPostCwmsDataTimeseriesRequest {
    /**
     * 
     * @type TimeSeries
     * @memberof TimeSeriesApipostCwmsDataTimeseries
     */
    timeSeries: TimeSeries
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
    public deleteCwmsDataTimeseriesWithTimeseries(param: TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCwmsDataTimeseriesWithTimeseries(param.timeseries, param.office,  options).toPromise();
    }

    /**
     * Get cwmsData timeseries
     * @param param the request object
     */
    public getCwmsDataTimeseries(param: TimeSeriesApiGetCwmsDataTimeseriesRequest, options?: Configuration): Promise<TimeSeries> {
        return this.api.getCwmsDataTimeseries(param.name, param.office, param.unit, param.datum, param.begin, param.end, param.timezone, param.format, param.page, param.cursor, param.pageSize, param.pageSize2,  options).toPromise();
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param param the request object
     */
    public patchCwmsDataTimeseriesWithTimeseries(param: TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.patchCwmsDataTimeseriesWithTimeseries(param.timeseries, param.timeSeries,  options).toPromise();
    }

    /**
     * Create new TimeSeries, will store any data provided
     * Post cwmsData timeseries
     * @param param the request object
     */
    public postCwmsDataTimeseries(param: TimeSeriesApiPostCwmsDataTimeseriesRequest, options?: Configuration): Promise<void> {
        return this.api.postCwmsDataTimeseries(param.timeSeries,  options).toPromise();
    }

}

import { ObservableTimeSeriesCategoriesBetaApi } from "./ObservableAPI";
import { TimeSeriesCategoriesBetaApiRequestFactory, TimeSeriesCategoriesBetaApiResponseProcessor} from "../apis/TimeSeriesCategoriesBetaApi";

export interface TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryRequest {
    /**
     * Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     * @type string
     * @memberof TimeSeriesCategoriesBetaApigetCwmsDataTimeseriesCategory
     */
    office?: string
}

export interface TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest {
    /**
     * Specifies the Category whose data is to be included in the response.
     * @type string
     * @memberof TimeSeriesCategoriesBetaApigetCwmsDataTimeseriesCategoryWithCategoryId
     */
    categoryId: string
    /**
     * Specifies the owning office of the timeseries category whose data is to be included in the response.
     * @type string
     * @memberof TimeSeriesCategoriesBetaApigetCwmsDataTimeseriesCategoryWithCategoryId
     */
    office: string
}

export class ObjectTimeSeriesCategoriesBetaApi {
    private api: ObservableTimeSeriesCategoriesBetaApi

    public constructor(configuration: Configuration, requestFactory?: TimeSeriesCategoriesBetaApiRequestFactory, responseProcessor?: TimeSeriesCategoriesBetaApiResponseProcessor) {
        this.api = new ObservableTimeSeriesCategoriesBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns CWMS timeseries category Data
     * Get cwmsData timeseries category
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategory(param: TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryRequest = {}, options?: Configuration): Promise<Array<TimeSeriesCategory>> {
        return this.api.getCwmsDataTimeseriesCategory(param.office,  options).toPromise();
    }

    /**
     * Retrieves requested timeseries category
     * Get cwmsData timeseries category with categoryId
     * @param param the request object
     */
    public getCwmsDataTimeseriesCategoryWithCategoryId(param: TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest, options?: Configuration): Promise<TimeSeriesCategory> {
        return this.api.getCwmsDataTimeseriesCategoryWithCategoryId(param.categoryId, param.office,  options).toPromise();
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
    public getCwmsDataTimezones(param: TimeZonesApiGetCwmsDataTimezonesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataTimezones(param.format,  options).toPromise();
    }

}

import { ObservableTimeseriesGroupsApi } from "./ObservableAPI";
import { TimeseriesGroupsApiRequestFactory, TimeseriesGroupsApiResponseProcessor} from "../apis/TimeseriesGroupsApi";

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

export class ObjectTimeseriesGroupsApi {
    private api: ObservableTimeseriesGroupsApi

    public constructor(configuration: Configuration, requestFactory?: TimeseriesGroupsApiRequestFactory, responseProcessor?: TimeseriesGroupsApiResponseProcessor) {
        this.api = new ObservableTimeseriesGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroupWithGroupId(param: TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest, options?: Configuration): Promise<TimeSeriesGroup> {
        return this.api.getCwmsDataTimeseriesGroupWithGroupId(param.groupId, param.office, param.categoryId,  options).toPromise();
    }

}

import { ObservableTimeseriesGroupsBetaApi } from "./ObservableAPI";
import { TimeseriesGroupsBetaApiRequestFactory, TimeseriesGroupsBetaApiResponseProcessor} from "../apis/TimeseriesGroupsBetaApi";

export interface TimeseriesGroupsBetaApiGetCwmsDataTimeseriesGroupRequest {
    /**
     * Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @type string
     * @memberof TimeseriesGroupsBetaApigetCwmsDataTimeseriesGroup
     */
    office?: string
}

export class ObjectTimeseriesGroupsBetaApi {
    private api: ObservableTimeseriesGroupsBetaApi

    public constructor(configuration: Configuration, requestFactory?: TimeseriesGroupsBetaApiRequestFactory, responseProcessor?: TimeseriesGroupsBetaApiResponseProcessor) {
        this.api = new ObservableTimeseriesGroupsBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param param the request object
     */
    public getCwmsDataTimeseriesGroup(param: TimeseriesGroupsBetaApiGetCwmsDataTimeseriesGroupRequest = {}, options?: Configuration): Promise<Array<TimeSeriesGroup>> {
        return this.api.getCwmsDataTimeseriesGroup(param.office,  options).toPromise();
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
    public getCwmsDataUnits(param: UnitsApiGetCwmsDataUnitsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCwmsDataUnits(param.format,  options).toPromise();
    }

}
