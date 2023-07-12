# TimeseriesGroupsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroupWithGroupId) | **GET** /cwms-data/timeseries/group/{group-id} | Get cwmsData timeseries group with groupId |


<a name="getCwmsDataTimeseriesGroupWithGroupId"></a>
# **getCwmsDataTimeseriesGroupWithGroupId**
> TimeSeriesGroup getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId)

Get cwmsData timeseries group with groupId

Retrieves requested timeseries group

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeseriesGroupsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeseriesGroupsApi apiInstance = new TimeseriesGroupsApi(defaultClient);
    String groupId = "groupId_example"; // String | Specifies the timeseries group whose data is to be included in the response
    String office = "office_example"; // String | Specifies the owning office of the timeseries group whose data is to be included in the response.
    String categoryId = "categoryId_example"; // String | Specifies the category containing the timeseries group whose data is to be included in the response.
    try {
      TimeSeriesGroup result = apiInstance.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeseriesGroupsApi#getCwmsDataTimeseriesGroupWithGroupId");
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
| **groupId** | **String**| Specifies the timeseries group whose data is to be included in the response | |
| **office** | **String**| Specifies the owning office of the timeseries group whose data is to be included in the response. | |
| **categoryId** | **String**| Specifies the category containing the timeseries group whose data is to be included in the response. | |

### Return type

[**TimeSeriesGroup**](TimeSeriesGroup.md)

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
| **200** | OK |  -  |

