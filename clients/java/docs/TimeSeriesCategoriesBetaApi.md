# TimeSeriesCategoriesBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataTimeseriesCategory**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategory) | **GET** /cwms-data/timeseries/category | Get cwmsData timeseries category |
| [**getCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategoryWithCategoryId) | **GET** /cwms-data/timeseries/category/{category-id} | Get cwmsData timeseries category with categoryId |


<a name="getCwmsDataTimeseriesCategory"></a>
# **getCwmsDataTimeseriesCategory**
> List&lt;TimeSeriesCategory&gt; getCwmsDataTimeseriesCategory(office)

Get cwmsData timeseries category

Returns CWMS timeseries category Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesCategoriesBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesCategoriesBetaApi apiInstance = new TimeSeriesCategoriesBetaApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
    try {
      List<TimeSeriesCategory> result = apiInstance.getCwmsDataTimeseriesCategory(office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesCategoriesBetaApi#getCwmsDataTimeseriesCategory");
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
| **office** | **String**| Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. | [optional] |

### Return type

[**List&lt;TimeSeriesCategory&gt;**](TimeSeriesCategory.md)

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
| **404** | Based on the combination of inputs provided the categories were not found. |  -  |
| **200** | OK |  -  |
| **501** | request format is not implemented |  -  |

<a name="getCwmsDataTimeseriesCategoryWithCategoryId"></a>
# **getCwmsDataTimeseriesCategoryWithCategoryId**
> TimeSeriesCategory getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office)

Get cwmsData timeseries category with categoryId

Retrieves requested timeseries category

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TimeSeriesCategoriesBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    TimeSeriesCategoriesBetaApi apiInstance = new TimeSeriesCategoriesBetaApi(defaultClient);
    String categoryId = "categoryId_example"; // String | Specifies the Category whose data is to be included in the response.
    String office = "office_example"; // String | Specifies the owning office of the timeseries category whose data is to be included in the response.
    try {
      TimeSeriesCategory result = apiInstance.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TimeSeriesCategoriesBetaApi#getCwmsDataTimeseriesCategoryWithCategoryId");
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
| **categoryId** | **String**| Specifies the Category whose data is to be included in the response. | |
| **office** | **String**| Specifies the owning office of the timeseries category whose data is to be included in the response. | |

### Return type

[**TimeSeriesCategory**](TimeSeriesCategory.md)

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
| **404** | Based on the combination of inputs provided the timeseries category was not found. |  -  |
| **200** | OK |  -  |
| **501** | request format is not implemented |  -  |

