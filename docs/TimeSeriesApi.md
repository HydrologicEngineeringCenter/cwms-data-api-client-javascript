# cwmsjs.TimeSeriesApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#deleteCwmsDataTimeseriesWithTimeseries) | **DELETE** /cwms-data/timeseries/{timeseries} | Delete cwmsData timeseries with timeseries
[**getCwmsDataTimeseries**](TimeSeriesApi.md#getCwmsDataTimeseries) | **GET** /cwms-data/timeseries | Get cwmsData timeseries
[**patchCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#patchCwmsDataTimeseriesWithTimeseries) | **PATCH** /cwms-data/timeseries/{timeseries} | Patch cwmsData timeseries with timeseries
[**postCwmsDataTimeseries**](TimeSeriesApi.md#postCwmsDataTimeseries) | **POST** /cwms-data/timeseries | Post cwmsData timeseries


# **deleteCwmsDataTimeseriesWithTimeseries**
> deleteCwmsDataTimeseriesWithTimeseries()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesApi(configuration);

let body:cwmsjs.TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest = {
  // string | The timeseries-id of the timeseries values to be deleted. 
  timeseries: "timeseries_example",
  // string | Specifies the office of the timeseries to be deleted.
  office: "office_example",
  // string | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'.
  begin: "begin_example",
  // string | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'.
  end: "end_example",
  // string | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. (optional)
  timezone: "timezone_example",
  // string | The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version. (optional)
  versionDate: "version-date_example",
  // boolean | A flag specifying whether any data at the start time should be deleted (\'True\') or only data <b><em>after</em></b> the start time (\'False\').  Default value is True (optional)
  startTimeInclusive: true,
  // boolean | A flag (\'True\'/\'False\') specifying whether any data at the end time should be deleted (\'True\') or only data <b><em>before</em></b> the end time (\'False\'). Default value is False (optional)
  endTimeInclusive: true,
  // boolean | A flag (\'True\'/\'False\') specifying whether to use the earliest (\'False\') or latest (\'True\') version date for each time if p_version_date is NULL.  Default is \'True\' (optional)
  maxVersion: true,
  // boolean | A flag (\'True\'/\'False\') specifying whether to delete protected data. Default is False (optional)
  overrideProtection: true,
};

apiInstance.deleteCwmsDataTimeseriesWithTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseries** | [**string**] | The timeseries-id of the timeseries values to be deleted.  | defaults to undefined
 **office** | [**string**] | Specifies the office of the timeseries to be deleted. | defaults to undefined
 **begin** | [**string**] | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | defaults to undefined
 **end** | [**string**] | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | defaults to undefined
 **timezone** | [**string**] | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. | (optional) defaults to undefined
 **versionDate** | [**string**] | The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version. | (optional) defaults to undefined
 **startTimeInclusive** | [**boolean**] | A flag specifying whether any data at the start time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;after&lt;/em&gt;&lt;/b&gt; the start time (\&#39;False\&#39;).  Default value is True | (optional) defaults to undefined
 **endTimeInclusive** | [**boolean**] | A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether any data at the end time should be deleted (\&#39;True\&#39;) or only data &lt;b&gt;&lt;em&gt;before&lt;/em&gt;&lt;/b&gt; the end time (\&#39;False\&#39;). Default value is False | (optional) defaults to undefined
 **maxVersion** | [**boolean**] | A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to use the earliest (\&#39;False\&#39;) or latest (\&#39;True\&#39;) version date for each time if p_version_date is NULL.  Default is \&#39;True\&#39; | (optional) defaults to undefined
 **overrideProtection** | [**boolean**] | A flag (\&#39;True\&#39;/\&#39;False\&#39;) specifying whether to delete protected data. Default is False | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataTimeseries**
> TimeSeries getCwmsDataTimeseries()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesApi(configuration);

let body:cwmsjs.TimeSeriesApiGetCwmsDataTimeseriesRequest = {
  // string | Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
  name: "name_example",
  // string | Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
  // string | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. (optional)
  datum: "datum_example",
  // string | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'. (optional)
  begin: "begin_example",
  // string | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'. (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. (optional)
  timezone: "timezone_example",
  // string | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) (optional)
  format: "format_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 500. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | (optional) defaults to undefined
 **datum** | [**string**] | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | (optional) defaults to undefined
 **begin** | [**string**] | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. | (optional) defaults to undefined
 **format** | [**string**] | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 500. | (optional) defaults to undefined


### Return type

**TimeSeries**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml;version=2, application/xml, 


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Invalid parameter combination |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | The provided combination of parameters did not find a timeseries. |  -  |
**200** | A list of elements of the data set you\&#39;ve selected. |  -  |
**501** | Requested format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataTimeseriesWithTimeseries**
> patchCwmsDataTimeseriesWithTimeseries(timeSeries)

Update a TimeSeries with provided values

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesApi(configuration);

let body:cwmsjs.TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest = {
  // string | Full CWMS Timeseries name
  timeseries: "timeseries_example",
  // TimeSeries
  timeSeries: {
    name: "name_example",
    officeId: "officeId_example",
    units: "units_example",
    values: [123,54.3,0],
    verticalDatumInfo: {
      office: "office_example",
      unit: "unit_example",
      location: "location_example",
      nativeDatum: "nativeDatum_example",
      elevation: 3.14,
      offsets: [
        {
          estimate: true,
          toDatum: "toDatum_example",
          value: 3.14,
        },
      ],
    },
  },
  // string | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \'format\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'. (optional)
  versionDate: "version-date_example",
  // string | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. (optional)
  timezone: "timezone_example",
  // boolean |  (optional)
  createAsLrts: true,
  // StoreRule | The business rule to use when merging the incoming with existing data <table  border=\"1\" summary=\"\"> <tr><td colspan=2>Store Rules</td></tr> <tr>     <td>Delete Insert</td>     <td>All existing data in the time window will be deleted and then replaced with the new dataset.</td> </tr> <tr>     <td>Replace All</td>     <td>         <ul>             <li>When the new dataset\'s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.</li>         <li>When the new dataset\'s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.</li>             <li>When there\'s an existing \"data/time - data value pair\" without a corresponding date/time value pair, no change will happen to the existing date/time value pair.</li>         </ul>     </td> </tr> <tr>     <td>Replace With Non Missing</td>     <td>         <ul>             <li>New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.</li>             <li>If date/time-value pair does exist, then only non-missing value will replace the existing data value*.</li>         </ul>     </td> <tr>     <td>Replace Missing Values Only</td>     <td>         <ul>             <li>New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.</li>             <li>If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.</li>         </ul>     </td> <tr>     <td>Do Not Replace</td>     <td>         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     </td> </tr> </table> (optional)
  storeRule: "REPLACE ALL",
  // boolean | A flag to ignore the protected data quality when storing data.  \"\'true\' or \'false\'\" (optional)
  overrideProtection: true,
};

apiInstance.patchCwmsDataTimeseriesWithTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | **TimeSeries**|  |
 **timeseries** | [**string**] | Full CWMS Timeseries name | defaults to undefined
 **versionDate** | [**string**] | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. | (optional) defaults to undefined
 **createAsLrts** | [**boolean**] |  | (optional) defaults to undefined
 **storeRule** | **StoreRule** | The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; | (optional) defaults to undefined
 **overrideProtection** | [**boolean**] | A flag to ignore the protected data quality when storing data.  \&quot;\&#39;true\&#39; or \&#39;false\&#39;\&quot; | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataTimeseries**
> postCwmsDataTimeseries(timeSeries)

Used to create and save time-series data. Data to be stored must have time stamps in UTC represented as epoch milliseconds 

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesApi(configuration);

let body:cwmsjs.TimeSeriesApiPostCwmsDataTimeseriesRequest = {
  // TimeSeries
  timeSeries: {
    name: "name_example",
    officeId: "officeId_example",
    units: "units_example",
    values: [123,54.3,0],
    verticalDatumInfo: {
      office: "office_example",
      unit: "unit_example",
      location: "location_example",
      nativeDatum: "nativeDatum_example",
      elevation: 3.14,
      offsets: [
        {
          estimate: true,
          toDatum: "toDatum_example",
          value: 3.14,
        },
      ],
    },
  },
  // string | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \'format\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'. (optional)
  versionDate: "version-date_example",
  // string | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. (optional)
  timezone: "timezone_example",
  // boolean | Flag indicating if timeseries should be created as Local Regular Time Series. \'True\' or \'False\', default is \'False\' (optional)
  createAsLrts: true,
  // StoreRule | The business rule to use when merging the incoming with existing data <table  border=\"1\" summary=\"\"> <tr><td colspan=2>Store Rules</td></tr> <tr>     <td>Delete Insert</td>     <td>All existing data in the time window will be deleted and then replaced with the new dataset.</td> </tr> <tr>     <td>Replace All</td>     <td>         <ul>             <li>When the new dataset\'s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.</li>         <li>When the new dataset\'s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.</li>             <li>When there\'s an existing \"data/time - data value pair\" without a corresponding date/time value pair, no change will happen to the existing date/time value pair.</li>         </ul>     </td> </tr> <tr>     <td>Replace With Non Missing</td>     <td>         <ul>             <li>New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.</li>             <li>If date/time-value pair does exist, then only non-missing value will replace the existing data value*.</li>         </ul>     </td> <tr>     <td>Replace Missing Values Only</td>     <td>         <ul>             <li>New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.</li>             <li>If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.</li>         </ul>     </td> <tr>     <td>Do Not Replace</td>     <td>         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     </td> </tr> </table> (optional)
  storeRule: "REPLACE ALL",
  // boolean | A flag to ignore the protected data quality when storing data. \'True\' or \'False\' (optional)
  overrideProtection: true,
};

apiInstance.postCwmsDataTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | **TimeSeries**|  |
 **versionDate** | [**string**] | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., \&#39;format\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. | (optional) defaults to undefined
 **createAsLrts** | [**boolean**] | Flag indicating if timeseries should be created as Local Regular Time Series. \&#39;True\&#39; or \&#39;False\&#39;, default is \&#39;False\&#39; | (optional) defaults to undefined
 **storeRule** | **StoreRule** | The business rule to use when merging the incoming with existing data &lt;table  border&#x3D;\&quot;1\&quot; summary&#x3D;\&quot;\&quot;&gt; &lt;tr&gt;&lt;td colspan&#x3D;2&gt;Store Rules&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Delete Insert&lt;/td&gt;     &lt;td&gt;All existing data in the time window will be deleted and then replaced with the new dataset.&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace All&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;When the new dataset\&#39;s date/time exactly matches the date/time of an existing data value, the new data value will replace the existing data.&lt;/li&gt;         &lt;li&gt;When the new dataset\&#39;s data/time does not match an existing data/time (i.e., a new data/time - data value pair) then an insert to the database will occur.&lt;/li&gt;             &lt;li&gt;When there\&#39;s an existing \&quot;data/time - data value pair\&quot; without a corresponding date/time value pair, no change will happen to the existing date/time value pair.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;     &lt;td&gt;Replace With Non Missing&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only non-missing value will replace the existing data value*.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Replace Missing Values Only&lt;/td&gt;     &lt;td&gt;         &lt;ul&gt;             &lt;li&gt;New data is always inserted, i.e., an existing date/time-value pair does not already exist for the record.&lt;/li&gt;             &lt;li&gt;If date/time-value pair does exist, then only replace an existing data/time-value pair whose missing flag was set.&lt;/li&gt;         &lt;/ul&gt;     &lt;/td&gt; &lt;tr&gt;     &lt;td&gt;Do Not Replace&lt;/td&gt;     &lt;td&gt;         Only inserts new data values if an existing date/time-value pair does not already exist.         Note: an existing date/time-value pair whose missing value quality bit is set will NOT be overwritten.     &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; | (optional) defaults to undefined
 **overrideProtection** | [**boolean**] | A flag to ignore the protected data quality when storing data. \&#39;True\&#39; or \&#39;False\&#39; | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

