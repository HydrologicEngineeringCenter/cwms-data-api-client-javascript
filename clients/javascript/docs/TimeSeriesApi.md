# CwmsDataApi.TimeSeriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#deleteCwmsDataTimeseriesWithTimeseries) | **DELETE** /cwms-data/timeseries/{timeseries} | Delete cwmsData timeseries with timeseries
[**getCwmsDataTimeseries**](TimeSeriesApi.md#getCwmsDataTimeseries) | **GET** /cwms-data/timeseries | Get cwmsData timeseries
[**patchCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#patchCwmsDataTimeseriesWithTimeseries) | **PATCH** /cwms-data/timeseries/{timeseries} | Patch cwmsData timeseries with timeseries
[**postCwmsDataTimeseries**](TimeSeriesApi.md#postCwmsDataTimeseries) | **POST** /cwms-data/timeseries | Post cwmsData timeseries



## deleteCwmsDataTimeseriesWithTimeseries

> deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, opts)

Delete cwmsData timeseries with timeseries

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.TimeSeriesApi();
let timeseries = "timeseries_example"; // String | The timeseries-id of the timeseries values to be deleted. 
let office = "office_example"; // String | Specifies the office of the timeseries to be deleted.
let begin = "begin_example"; // String | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
let end = "end_example"; // String | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
let opts = {
  'timezone': "timezone_example", // String | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
  'versionDate': "versionDate_example", // String | The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version.
  'startTimeInclusive': true, // Boolean | A flag specifying whether any data at the start time should be deleted ('True') or only data <b><em>after</em></b> the start time ('False').  Default value is True
  'endTimeInclusive': true, // Boolean | A flag ('True'/'False') specifying whether any data at the end time should be deleted ('True') or only data <b><em>before</em></b> the end time ('False'). Default value is False
  'maxVersion': true, // Boolean | A flag ('True'/'False') specifying whether to use the earliest ('False') or latest ('True') version date for each time if p_version_date is NULL.  Default is 'True'
  'overrideProtection': true // Boolean | A flag ('True'/'False') specifying whether to delete protected data. Default is False
};
apiInstance.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office, begin, end, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseries** | **String**| The timeseries-id of the timeseries values to be deleted.  | 
 **office** | **String**| Specifies the office of the timeseries to be deleted. | 
 **begin** | **String**| The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | 
 **end** | **String**| The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | 
 **timezone** | **String**| This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. | [optional] 
 **versionDate** | **String**| The version date/time of the time series in the specified or default time zone. If NULL, the earliest or latest version date will be used depending on p_max_version. | [optional] 
 **startTimeInclusive** | **Boolean**| A flag specifying whether any data at the start time should be deleted (&#39;True&#39;) or only data &lt;b&gt;&lt;em&gt;after&lt;/em&gt;&lt;/b&gt; the start time (&#39;False&#39;).  Default value is True | [optional] 
 **endTimeInclusive** | **Boolean**| A flag (&#39;True&#39;/&#39;False&#39;) specifying whether any data at the end time should be deleted (&#39;True&#39;) or only data &lt;b&gt;&lt;em&gt;before&lt;/em&gt;&lt;/b&gt; the end time (&#39;False&#39;). Default value is False | [optional] 
 **maxVersion** | **Boolean**| A flag (&#39;True&#39;/&#39;False&#39;) specifying whether to use the earliest (&#39;False&#39;) or latest (&#39;True&#39;) version date for each time if p_version_date is NULL.  Default is &#39;True&#39; | [optional] 
 **overrideProtection** | **Boolean**| A flag (&#39;True&#39;/&#39;False&#39;) specifying whether to delete protected data. Default is False | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseries

> TimeSeries getCwmsDataTimeseries(name, opts)

Get cwmsData timeseries

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.TimeSeriesApi();
let name = "name_example"; // String | Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
let opts = {
  'office': "office_example", // String | Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
  'unit': "unit_example", // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
  'datum': "datum_example", // String | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
  'begin': "begin_example", // String | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
  'end': "end_example", // String | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
  'format': "format_example", // String | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 500.
};
apiInstance.getCwmsDataTimeseries(name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names. | 
 **office** | **String**| Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] 
 **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] 
 **begin** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] 
 **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] 
 **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. | [optional] 
 **format** | **String**| Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 500. | [optional] 

### Return type

[**TimeSeries**](TimeSeries.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml;version=2, application/xml, 


## patchCwmsDataTimeseriesWithTimeseries

> patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, opts)

Patch cwmsData timeseries with timeseries

Update a TimeSeries with provided values

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.TimeSeriesApi();
let timeseries = "timeseries_example"; // String | Full CWMS Timeseries name
let timeSeries = new CwmsDataApi.TimeSeries(); // TimeSeries | 
let opts = {
  'versionDate': "versionDate_example", // String | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., 'format', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
  'timezone': "timezone_example", // String | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
  'createAsLrts': true, // Boolean | 
  'storeRule': new CwmsDataApi.StoreRule(), // StoreRule | The business rule to use when merging the incoming with existing data
  'overrideProtection': true // Boolean | A flag to ignore the protected data quality when storing data.  \"'true' or 'false'\"
};
apiInstance.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseries** | **String**| Full CWMS Timeseries name | 
 **timeSeries** | [**TimeSeries**](TimeSeries.md)|  | 
 **versionDate** | **String**| Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;format&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] 
 **timezone** | **String**| Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. | [optional] 
 **createAsLrts** | **Boolean**|  | [optional] 
 **storeRule** | [**StoreRule**](.md)| The business rule to use when merging the incoming with existing data | [optional] 
 **overrideProtection** | **Boolean**| A flag to ignore the protected data quality when storing data.  \&quot;&#39;true&#39; or &#39;false&#39;\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json


## postCwmsDataTimeseries

> postCwmsDataTimeseries(timeSeries, opts)

Post cwmsData timeseries

Create new TimeSeries, will store any data provided

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.TimeSeriesApi();
let timeSeries = new CwmsDataApi.TimeSeries(); // TimeSeries | 
let opts = {
  'versionDate': "versionDate_example", // String | Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., 'format', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
  'timezone': "timezone_example", // String | Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone.
  'createAsLrts': true, // Boolean | Flag indicating if timeseries should be created as Local Regular Time Series. 'True' or 'False', default is 'False'
  'storeRule': new CwmsDataApi.StoreRule(), // StoreRule | The business rule to use when merging the incoming with existing data
  'overrideProtection': true // Boolean | A flag to ignore the protected data quality when storing data. 'True' or 'False'
};
apiInstance.postCwmsDataTimeseries(timeSeries, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeries** | [**TimeSeries**](TimeSeries.md)|  | 
 **versionDate** | **String**| Specifies the version date for the timeseries to create. If this field is not specified, a null version date will be used.  The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;format&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] 
 **timezone** | **String**| Specifies the time zone of the version-date field (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.  Ignored if version-date was specified with offset and timezone. | [optional] 
 **createAsLrts** | **Boolean**| Flag indicating if timeseries should be created as Local Regular Time Series. &#39;True&#39; or &#39;False&#39;, default is &#39;False&#39; | [optional] 
 **storeRule** | [**StoreRule**](.md)| The business rule to use when merging the incoming with existing data | [optional] 
 **overrideProtection** | **Boolean**| A flag to ignore the protected data quality when storing data. &#39;True&#39; or &#39;False&#39; | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json

