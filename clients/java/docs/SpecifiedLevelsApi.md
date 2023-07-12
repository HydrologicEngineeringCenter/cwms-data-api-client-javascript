# SpecifiedLevelsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataSpecifiedLevels**](SpecifiedLevelsApi.md#getCwmsDataSpecifiedLevels) | **GET** /cwms-data/specified-levels | Get cwmsData specifiedLevels |


<a name="getCwmsDataSpecifiedLevels"></a>
# **getCwmsDataSpecifiedLevels**
> SpecifiedLevel getCwmsDataSpecifiedLevels(office, templateIdMask)

Get cwmsData specifiedLevels

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SpecifiedLevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    SpecifiedLevelsApi apiInstance = new SpecifiedLevelsApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
    String templateIdMask = "templateIdMask_example"; // String | Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
    try {
      SpecifiedLevel result = apiInstance.getCwmsDataSpecifiedLevels(office, templateIdMask);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SpecifiedLevelsApi#getCwmsDataSpecifiedLevels");
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
| **office** | **String**| Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] |
| **templateIdMask** | **String**| Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned. | [optional] |

### Return type

[**SpecifiedLevel**](SpecifiedLevel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | OK |  -  |

