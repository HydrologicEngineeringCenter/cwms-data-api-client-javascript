# LocationCategoriesBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataLocationCategory**](LocationCategoriesBetaApi.md#getCwmsDataLocationCategory) | **GET** /cwms-data/location/category | Get cwmsData location category |
| [**getCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesBetaApi.md#getCwmsDataLocationCategoryWithCategoryId) | **GET** /cwms-data/location/category/{category-id} | Get cwmsData location category with categoryId |


<a name="getCwmsDataLocationCategory"></a>
# **getCwmsDataLocationCategory**
> List&lt;LocationCategory&gt; getCwmsDataLocationCategory(office)

Get cwmsData location category

Returns CWMS Location Category Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LocationCategoriesBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LocationCategoriesBetaApi apiInstance = new LocationCategoriesBetaApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
    try {
      List<LocationCategory> result = apiInstance.getCwmsDataLocationCategory(office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LocationCategoriesBetaApi#getCwmsDataLocationCategory");
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
| **office** | **String**| Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned. | [optional] |

### Return type

[**List&lt;LocationCategory&gt;**](LocationCategory.md)

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

<a name="getCwmsDataLocationCategoryWithCategoryId"></a>
# **getCwmsDataLocationCategoryWithCategoryId**
> LocationCategory getCwmsDataLocationCategoryWithCategoryId(categoryId, office)

Get cwmsData location category with categoryId

Retrieves requested Location Category

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LocationCategoriesBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LocationCategoriesBetaApi apiInstance = new LocationCategoriesBetaApi(defaultClient);
    String categoryId = "categoryId_example"; // String | Specifies the Category whose data is to be included in the response.
    String office = "office_example"; // String | Specifies the owning office of the Location Category whose data is to be included in the response.
    try {
      LocationCategory result = apiInstance.getCwmsDataLocationCategoryWithCategoryId(categoryId, office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LocationCategoriesBetaApi#getCwmsDataLocationCategoryWithCategoryId");
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
| **office** | **String**| Specifies the owning office of the Location Category whose data is to be included in the response. | |

### Return type

[**LocationCategory**](LocationCategory.md)

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

