# TimeseriesGroupsBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataTimeseriesGroup**](TimeseriesGroupsBetaApi.md#getCwmsDataTimeseriesGroup) | **GET** /cwms-data/timeseries/group | Get cwmsData timeseries group |


<a name="getCwmsDataTimeseriesGroup"></a>
# **getCwmsDataTimeseriesGroup**
> List&lt;TimeSeriesGroup&gt; getCwmsDataTimeseriesGroup(office)

Get cwmsData timeseries group

Returns CWMS Timeseries Groups Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeseriesGroupsBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeseriesGroupsBetaApi apiInstance = new TimeseriesGroupsBetaApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
    try {
      List<TimeSeriesGroup> result = apiInstance.getCwmsDataTimeseriesGroup(office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeseriesGroupsBetaApi#getCwmsDataTimeseriesGroup");
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
| **office** | **String**| Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. | [optional] |

### Return type

[**List&lt;TimeSeriesGroup&gt;**](TimeSeriesGroup.md)

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
| **404** | Based on the combination of inputs provided the timeseries group(s) were not found. |  -  |
| **200** | OK |  -  |
| **501** | request format is not implemented |  -  |

