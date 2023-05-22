# .TimeSeriesApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiDeleteCwmsDataTimeseriesWithTimeseriesRequest = {
  // string
  timeseries: "timeseries_example",
  // string | Specifies the owning office of the timeseries to be deleted.
  office: "office_example",
};

apiInstance.deleteCwmsDataTimeseriesWithTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseries** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries to be deleted. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiGetCwmsDataTimeseriesRequest = {
  // string | Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
  name: "name_example",
  // string | Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
  // string | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. (optional)
  datum: "datum_example",
  // string | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'. (optional)
  begin: "begin_example",
  // string | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'. (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. (optional)
  timezone: "timezone_example",
  // string | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) (optional)
  format: "format_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response. (optional)
  page: "page_example",
  // string | Deprecated. Use 'page' instead. (optional)
  cursor: "cursor_example",
  // number | How many entries per page returned. Default 500. (optional)
  pageSize: 1,
  // number | Deprecated. Please use page-size instead. (optional)
  pageSize2: 1,
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
 **begin** | [**string**] | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. | (optional) defaults to undefined
 **format** | [**string**] | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | (optional) defaults to undefined
 **cursor** | [**string**] | Deprecated. Use &#39;page&#39; instead. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 500. | (optional) defaults to undefined
 **pageSize2** | [**number**] | Deprecated. Please use page-size instead. | (optional) defaults to undefined


### Return type

**TimeSeries**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Invalid parameter combination |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | The provided combination of parameters did not find a timeseries. |  -  |
**200** | A list of elements of the data set you&#39;ve selected. |  -  |
**501** | Requested format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataTimeseriesWithTimeseries**
> patchCwmsDataTimeseriesWithTimeseries(timeSeries)

Update a TimeSeries with provided values

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiPatchCwmsDataTimeseriesWithTimeseriesRequest = {
  // string | Full CWMS Timeseries name
  timeseries: "timeseries_example",
  // TimeSeries
  timeSeries: {
    name: "name_example",
    officeId: "officeId_example",
    units: "units_example",
    values: [123,54.3,0],
  },
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


### Return type

void (empty response body)

### Authorization

No authorization required

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

Create new TimeSeries, will store any data provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesApi(configuration);

let body:.TimeSeriesApiPostCwmsDataTimeseriesRequest = {
  // TimeSeries
  timeSeries: {
    name: "name_example",
    officeId: "officeId_example",
    units: "units_example",
    values: [123,54.3,0],
  },
};

apiInstance.postCwmsDataTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | **TimeSeries**|  |


### Return type

void (empty response body)

### Authorization

No authorization required

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


