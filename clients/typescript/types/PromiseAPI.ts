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
    public getCwmsData(_options?: Configuration): Promise<void> {
        const result = this.api.getCwmsData(_options);
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
     */
    public getCwmsDataOffices(format?: string, _options?: Configuration): Promise<OfficeFormatV1> {
        const result = this.api.getCwmsDataOffices(format, _options);
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
    public getCwmsDataParameters(format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataParameters(format, _options);
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
     * @param timeseries 
     * @param office Specifies the owning office of the timeseries to be deleted.
     */
    public deleteCwmsDataTimeseriesWithTimeseries(timeseries: string, office: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, _options);
        return result.toPromise();
    }

    /**
     * Get cwmsData timeseries
     * @param name Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param office Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param begin Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;.
     * @param end Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;.
     * @param timezone Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
     * @param format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response.
     * @param cursor Deprecated. Use &#39;page&#39; instead.
     * @param pageSize How many entries per page returned. Default 500.
     * @param pageSize2 Deprecated. Please use page-size instead.
     */
    public getCwmsDataTimeseries(name: string, office?: string, unit?: string, datum?: string, begin?: string, end?: string, timezone?: string, format?: string, page?: string, cursor?: string, pageSize?: number, pageSize2?: number, _options?: Configuration): Promise<TimeSeries> {
        const result = this.api.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, cursor, pageSize, pageSize2, _options);
        return result.toPromise();
    }

    /**
     * Update a TimeSeries with provided values
     * Patch cwmsData timeseries with timeseries
     * @param timeseries Full CWMS Timeseries name
     * @param timeSeries 
     */
    public patchCwmsDataTimeseriesWithTimeseries(timeseries: string, timeSeries: TimeSeries, _options?: Configuration): Promise<void> {
        const result = this.api.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, _options);
        return result.toPromise();
    }

    /**
     * Create new TimeSeries, will store any data provided
     * Post cwmsData timeseries
     * @param timeSeries 
     */
    public postCwmsDataTimeseries(timeSeries: TimeSeries, _options?: Configuration): Promise<void> {
        const result = this.api.postCwmsDataTimeseries(timeSeries, _options);
        return result.toPromise();
    }


}



import { ObservableTimeSeriesCategoriesBetaApi } from './ObservableAPI';

import { TimeSeriesCategoriesBetaApiRequestFactory, TimeSeriesCategoriesBetaApiResponseProcessor} from "../apis/TimeSeriesCategoriesBetaApi";
export class PromiseTimeSeriesCategoriesBetaApi {
    private api: ObservableTimeSeriesCategoriesBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSeriesCategoriesBetaApiRequestFactory,
        responseProcessor?: TimeSeriesCategoriesBetaApiResponseProcessor
    ) {
        this.api = new ObservableTimeSeriesCategoriesBetaApi(configuration, requestFactory, responseProcessor);
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
    public getCwmsDataTimeseriesCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Promise<TimeSeriesCategory> {
        const result = this.api.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, _options);
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


}



import { ObservableTimeseriesGroupsBetaApi } from './ObservableAPI';

import { TimeseriesGroupsBetaApiRequestFactory, TimeseriesGroupsBetaApiResponseProcessor} from "../apis/TimeseriesGroupsBetaApi";
export class PromiseTimeseriesGroupsBetaApi {
    private api: ObservableTimeseriesGroupsBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeseriesGroupsBetaApiRequestFactory,
        responseProcessor?: TimeseriesGroupsBetaApiResponseProcessor
    ) {
        this.api = new ObservableTimeseriesGroupsBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     */
    public getCwmsDataTimeseriesGroup(office?: string, _options?: Configuration): Promise<Array<TimeSeriesGroup>> {
        const result = this.api.getCwmsDataTimeseriesGroup(office, _options);
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
    public getCwmsDataUnits(format?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getCwmsDataUnits(format, _options);
        return result.toPromise();
    }


}



