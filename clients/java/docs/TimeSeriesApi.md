# TimeSeriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#deleteCwmsDataTimeseriesWithTimeseries) | **DELETE** /cwms-data/timeseries/{timeseries} | Delete cwmsData timeseries with timeseries |
| [**getCwmsDataTimeseries**](TimeSeriesApi.md#getCwmsDataTimeseries) | **GET** /cwms-data/timeseries | Get cwmsData timeseries |
| [**patchCwmsDataTimeseriesWithTimeseries**](TimeSeriesApi.md#patchCwmsDataTimeseriesWithTimeseries) | **PATCH** /cwms-data/timeseries/{timeseries} | Patch cwmsData timeseries with timeseries |
| [**postCwmsDataTimeseries**](TimeSeriesApi.md#postCwmsDataTimeseries) | **POST** /cwms-data/timeseries | Post cwmsData timeseries |


<a name="deleteCwmsDataTimeseriesWithTimeseries"></a>
# **deleteCwmsDataTimeseriesWithTimeseries**
> deleteCwmsDataTimeseriesWithTimeseries(timeseries, office)

Delete cwmsData timeseries with timeseries

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesApi apiInstance = new TimeSeriesApi(defaultClient);
    String timeseries = "timeseries_example"; // String | 
    String office = "office_example"; // String | Specifies the owning office of the timeseries to be deleted.
    try {
      apiInstance.deleteCwmsDataTimeseriesWithTimeseries(timeseries, office);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesApi#deleteCwmsDataTimeseriesWithTimeseries");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **timeseries** | **String**|  | |
| **office** | **String**| Specifies the owning office of the timeseries to be deleted. | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

<a name="getCwmsDataTimeseries"></a>
# **getCwmsDataTimeseries**
> TimeSeries getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, cursor, pageSize, pageSize2)

Get cwmsData timeseries

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesApi apiInstance = new TimeSeriesApi(defaultClient);
    String name = "name_example"; // String | Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names.
    String office = "office_example"; // String | Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
    String unit = "unit_example"; // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
    String datum = "datum_example"; // String | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
    String begin = "begin_example"; // String | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
    String end = "end_example"; // String | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
    String timezone = "timezone_example"; // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone.
    String format = "format_example"; // String | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default)
    String page = "page_example"; // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
    String cursor = "cursor_example"; // String | Deprecated. Use 'page' instead.
    Integer pageSize = 56; // Integer | How many entries per page returned. Default 500.
    Integer pageSize2 = 56; // Integer | Deprecated. Please use page-size instead.
    try {
      TimeSeries result = apiInstance.getCwmsDataTimeseries(name, office, unit, datum, begin, end, timezone, format, page, cursor, pageSize, pageSize2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesApi#getCwmsDataTimeseries");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| Specifies the name(s) of the time series whose data is to be included in the response. A case insensitive comparison is used to match names. | |
| **office** | **String**| Specifies the owning office of the time series(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | [optional] |
| **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   (default) Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] |
| **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] |
| **begin** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] |
| **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time. The format for this field is ISO 8601 extended, with optional timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | [optional] |
| **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.  Ignored if begin was specified with offset and timezone. | [optional] |
| **format** | **String**| Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) | [optional] |
| **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] |
| **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] |
| **pageSize** | **Integer**| How many entries per page returned. Default 500. | [optional] |
| **pageSize2** | **Integer**| Deprecated. Please use page-size instead. | [optional] |

### Return type

[**TimeSeries**](TimeSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Invalid parameter combination |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | The provided combination of parameters did not find a timeseries. |  -  |
| **200** | A list of elements of the data set you&#39;ve selected. |  -  |
| **501** | Requested format is not implemented |  -  |

<a name="patchCwmsDataTimeseriesWithTimeseries"></a>
# **patchCwmsDataTimeseriesWithTimeseries**
> patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries)

Patch cwmsData timeseries with timeseries

Update a TimeSeries with provided values

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesApi apiInstance = new TimeSeriesApi(defaultClient);
    String timeseries = "timeseries_example"; // String | Full CWMS Timeseries name
    TimeSeries timeSeries = new TimeSeries(); // TimeSeries | 
    try {
      apiInstance.patchCwmsDataTimeseriesWithTimeseries(timeseries, timeSeries);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesApi#patchCwmsDataTimeseriesWithTimeseries");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **timeseries** | **String**| Full CWMS Timeseries name | |
| **timeSeries** | [**TimeSeries**](TimeSeries.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

<a name="postCwmsDataTimeseries"></a>
# **postCwmsDataTimeseries**
> postCwmsDataTimeseries(timeSeries)

Post cwmsData timeseries

Create new TimeSeries, will store any data provided

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesApi apiInstance = new TimeSeriesApi(defaultClient);
    TimeSeries timeSeries = new TimeSeries(); // TimeSeries | 
    try {
      apiInstance.postCwmsDataTimeseries(timeSeries);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesApi#postCwmsDataTimeseries");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **timeSeries** | [**TimeSeries**](TimeSeries.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

